/**
 * Guest reviews (no sign-up): storage in Vercel Blob (one JSON file per review, same store as the booking requests),
 * in-memory fallback for local dev. New reviews are "pending" until the operator approves them in /anfragen.
 */
import { createHash, randomUUID } from "node:crypto";
import { get, list, put, del } from "@vercel/blob";
import { getRequest } from "@tanstack/react-start/server";

const PREFIX = "guest-reviews/";
const MAX_PER_IP_PER_DAY = 3;

export type ReviewStatus = "pending" | "approved" | "rejected";
export type GuestReview = {
  id: string;
  created_at: string;
  name: string;
  /** 0.5 … 5 in steps of 0.5 */
  rating: number;
  text: string;
  lang: string;
  status: ReviewStatus;
};

const useBlob = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN);
const mem = ((globalThis as { __ksiReviews?: Map<string, GuestReview> }).__ksiReviews ??= new Map());

async function save(r: GuestReview) {
  if (!useBlob()) {
    mem.set(r.id, r);
    return;
  }
  await put(`${PREFIX}${r.id}.json`, JSON.stringify(r), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 60,
  });
}

async function readOne(pathname: string): Promise<GuestReview | null> {
  const res = await get(pathname, { access: "private", useCache: false });
  if (!res || res.statusCode !== 200) return null;
  return JSON.parse(await new Response(res.stream).text()) as GuestReview;
}

async function all(): Promise<GuestReview[]> {
  if (!useBlob()) return [...mem.values()];
  const rows: GuestReview[] = [];
  let cursor: string | undefined;
  do {
    const page = await list({ prefix: PREFIX, cursor, limit: 500 });
    const got = await Promise.all(page.blobs.map((b: { pathname: string }) => readOne(b.pathname).catch(() => null)));
    for (const r of got) if (r) rows.push(r);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor && rows.length < 2000);
  return rows;
}

// Public list is cached briefly: the landing page renders on every request.
let cache: { at: number; rows: GuestReview[] } | null = null;
const CACHE_MS = 60_000;

export async function approvedReviews(): Promise<GuestReview[]> {
  if (cache && Date.now() - cache.at < CACHE_MS) return cache.rows;
  const rows = (await all())
    .filter((r) => r.status === "approved")
    .sort((a, b) => b.created_at.localeCompare(a.created_at));
  cache = { at: Date.now(), rows };
  return rows;
}

export async function allReviews(): Promise<GuestReview[]> {
  return (await all()).sort((a, b) => b.created_at.localeCompare(a.created_at));
}

const hits: Map<string, number[]> = ((globalThis as { __ksiRevHits?: Map<string, number[]> }).__ksiRevHits ??= new Map());
function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < 86_400_000);
  if (recent.length >= MAX_PER_IP_PER_DAY) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

function ipHash(): string | null {
  try {
    const h = getRequest().headers;
    const ip = (h.get("x-forwarded-for") ?? h.get("x-real-ip") ?? "").split(",")[0]?.trim();
    return ip ? createHash("sha256").update(`ksi-rev:${ip}`).digest("hex").slice(0, 32) : null;
  } catch {
    return null;
  }
}

/** Links in a review are the classic spam signal – rejected outright. */
const hasLink = (s: string) => /https?:|www\.|\.(com|net|org|ru|cn)\b/i.test(s);

export async function addReview(input: { name: string; rating: number; text: string; lang: string }) {
  const ip = ipHash();
  if (ip && rateLimited(ip)) return { ok: false as const, error: "rate-limited" };
  if (hasLink(input.name) || hasLink(input.text)) return { ok: false as const, error: "no-links" };
  const review: GuestReview = {
    id: randomUUID(),
    created_at: new Date().toISOString(),
    name: input.name.trim(),
    rating: input.rating,
    text: input.text.trim(),
    lang: input.lang,
    status: "pending",
  };
  await save(review);
  return { ok: true as const };
}

export async function setReviewStatus(id: string, status: ReviewStatus | "delete") {
  cache = null;
  if (!useBlob()) {
    const r = mem.get(id);
    if (!r) return;
    if (status === "delete") mem.delete(id);
    else mem.set(id, { ...r, status });
    return;
  }
  const path = `${PREFIX}${id}.json`;
  if (status === "delete") {
    await del(path);
    return;
  }
  const r = await readOne(path);
  if (r) await save({ ...r, status });
}
