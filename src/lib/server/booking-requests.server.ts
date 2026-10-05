/**
 * Server-only logic for Krabi Secret Islands booking requests: storage (Vercel Blob, one JSON file per request), rate limit, e-mail notification.
 * Env (set in Vercel, never in a .env file):
 *   BLOB_READ_WRITE_TOKEN – private Vercel Blob store (set automatically when the store is connected; without it requests are kept in memory – local dev only)
 *   RESEND_API_KEY        – Resend API key (optional; without it no e-mail is sent, the request is still stored)
 *   BOOKING_NOTIFY_EMAIL  – where new requests are sent (comma-separated allowed)
 *   BOOKING_FROM_EMAIL    – verified sender, e.g. "Krabi Secret Islands <anfragen@krabi-secret-islands.com>"
 */
import { createHash, randomUUID } from "node:crypto";
import { get, list, put } from "@vercel/blob";
import { getRequest } from "@tanstack/react-start/server";
import { buildMessage, currentTour, durationOf, priceBreakdown, routeNames, type Draft } from "@/components/secret-islands/booking-model";
import { translate } from "@/components/secret-islands/store";
import type { Lang } from "@/components/secret-islands/content";
import type { BookingSubmission } from "./booking-requests";

const MAX_PER_IP_PER_HOUR = 8;
const PREFIX = "booking-requests/";

export type BookingRow = {
  id: string;
  ref: string;
  status: string;
  created_at: string;
  lang: string;
  channel: string;
  tour_title: string;
  tour_date: string | null;
  slot: string | null;
  guests: number;
  kids: number;
  total_thb: number;
  name: string;
  email: string | null;
  phone: string | null;
  hotel: string | null;
  occasion: string | null;
  wishes: string | null;
  message: string;
  admin_note: string | null;
};

// ---- storage: Vercel Blob (private) with an in-memory fallback for local dev -------------------------------
const useBlob = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN);
const mem = ((globalThis as { __ksiMem?: Map<string, BookingRow> }).__ksiMem ??= new Map());

async function saveRow(row: BookingRow, allowOverwrite: boolean): Promise<boolean> {
  if (!useBlob()) {
    if (!allowOverwrite && mem.has(row.ref)) return false;
    mem.set(row.ref, row);
    return true;
  }
  try {
    await put(`${PREFIX}${row.ref}.json`, JSON.stringify(row), {
      access: "private",
      contentType: "application/json",
      addRandomSuffix: false,
      allowOverwrite,
      cacheControlMaxAge: 60,
    });
    return true;
  } catch (err) {
    // allowOverwrite=false: an existing blob with the same ref means a duplicate submit.
    if (!allowOverwrite && /already exists/i.test(String((err as Error)?.message))) return false;
    throw err;
  }
}

async function readRow(pathname: string): Promise<BookingRow | null> {
  const res = await get(pathname, { access: "private", useCache: false });
  if (!res || res.statusCode !== 200) return null;
  return JSON.parse(await new Response(res.stream).text()) as BookingRow;
}

async function allRows(): Promise<BookingRow[]> {
  if (!useBlob()) return [...mem.values()];
  const rows: BookingRow[] = [];
  let cursor: string | undefined;
  do {
    const page = await list({ prefix: PREFIX, cursor, limit: 500 });
    const got = await Promise.all(page.blobs.map((b: { pathname: string }) => readRow(b.pathname).catch(() => null)));
    for (const r of got) if (r) rows.push(r);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor && rows.length < 1000);
  return rows;
}

// Per-instance rate limit (serverless: best effort; the honeypot and server-side validation do the rest).
const hits: Map<string, number[]> = ((globalThis as { __ksiHits?: Map<string, number[]> }).__ksiHits ??= new Map());
function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < 3_600_000);
  if (recent.length >= MAX_PER_IP_PER_HOUR) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

function clientIpHash(): string | null {
  try {
    const h = getRequest().headers;
    const ip = (h.get("x-forwarded-for") ?? h.get("x-real-ip") ?? "").split(",")[0]?.trim();
    if (!ip) return null;
    // Salted hash – we never store raw IP addresses.
    return createHash("sha256").update(`ksi:${ip}`).digest("hex").slice(0, 32);
  } catch {
    return null;
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

async function notifyByEmail(ref: string, subject: string, text: string, replyTo: string | null) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_NOTIFY_EMAIL;
  const from = process.env.BOOKING_FROM_EMAIL ?? "Krabi Secret Islands <onboarding@resend.dev>";
  if (!key || !to) return { sent: false as const, reason: "not-configured" };
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", "Idempotency-Key": `booking-${ref}` },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      subject,
      text,
      html: `<pre style="font:14px/1.5 system-ui,sans-serif;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  if (!res.ok) {
    console.error("[booking] Resend error", res.status, await res.text().catch(() => ""));
    return { sent: false as const, reason: `resend-${res.status}` };
  }
  return { sent: true as const };
}

export async function storeBookingRequest(input: BookingSubmission) {
  const ipHash = clientIpHash();
  if (ipHash && rateLimited(ipHash)) return { ok: false as const, error: "rate-limited" };

  const draft = input.draft as Draft;
  const lang = input.lang as Lang;
  // Recompute on the server – never trust a client-side total.
  const price = priceBreakdown(draft);
  const tour = currentTour(draft);
  const tourTitle =
    draft.mode === "preset"
      ? tour
        ? translate(tour.title, "de")
        : "?"
      : `Eigene Tour (${translate(durationOf(draft.duration).label, "de")}): ${routeNames(draft).join(", ")}`;
  const opT = (l: { de: string; en: string }) => l.de;
  const message = `Anfrage-Nr. ${input.ref}\n\n${buildMessage(draft, lang, opT).replace(/\*/g, "")}`;

  const row: BookingRow = {
    id: randomUUID(),
    ref: input.ref,
    status: "new",
    created_at: new Date().toISOString(),
    lang,
    channel: input.channel,
    tour_title: tourTitle,
    tour_date: draft.date,
    slot: draft.slot,
    guests: draft.guests,
    kids: draft.kids,
    total_thb: price.total,
    name: draft.name.trim(),
    email: draft.email.trim() || null,
    phone: draft.phone.trim() || null,
    hotel: draft.hotel.trim() || null,
    occasion: draft.occasion,
    wishes: draft.wishes.trim() || null,
    message,
    admin_note: null,
  };
  if (!(await saveRow(row, false))) return { ok: true as const, ref: input.ref, duplicate: true };

  const mail = await notifyByEmail(
    input.ref,
    `Neue Anfrage ${input.ref}: ${tourTitle} · ${draft.date ?? "–"} · ${draft.guests} Pers. · ฿${price.total.toLocaleString("de-DE")}`,
    message,
    draft.email.trim() || null,
  ).catch((err) => {
    console.error("[booking] e-mail failed", err);
    return { sent: false as const, reason: "exception" };
  });
  return { ok: true as const, ref: input.ref, emailed: mail.sent };
}

export async function listBookingRows(): Promise<BookingRow[]> {
  return (await allRows()).sort((a, b) => b.created_at.localeCompare(a.created_at)).slice(0, 500);
}

export async function updateBookingRow(id: string, status: string, note: string | null) {
  const row = (await allRows()).find((r) => r.id === id);
  if (!row) return;
  await saveRow({ ...row, status, admin_note: note }, true);
}
