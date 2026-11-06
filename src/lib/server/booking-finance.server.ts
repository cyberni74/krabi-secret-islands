/**
 * Server-only finance storage: cost templates (Vercel Blob, one JSON file) and payment/cost writes on booking rows.
 * Falls back to memory without BLOB_READ_WRITE_TOKEN, like the booking storage.
 */
import { randomUUID } from "node:crypto";
import { get, put } from "@vercel/blob";
import { mutateBookingRow } from "./booking-requests.server";
import type { CostItem, CostTemplate, Payment } from "./finance";

const TEMPLATES_PATH = "settings/cost-templates.json";
const memTemplates = ((globalThis as { __ksiCostTpl?: CostTemplate[] }).__ksiCostTpl ??= []);

export async function loadCostTemplates(): Promise<CostTemplate[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return memTemplates;
  const res = await get(TEMPLATES_PATH, { access: "private", useCache: false }).catch(() => null);
  if (!res || res.statusCode !== 200) return [];
  return JSON.parse(await new Response(res.stream).text()) as CostTemplate[];
}

export async function saveCostTemplates(templates: CostTemplate[]) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    memTemplates.splice(0, memTemplates.length, ...templates);
    return;
  }
  await put(TEMPLATES_PATH, JSON.stringify(templates), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 60,
  });
}

export function newId() {
  return randomUUID();
}

export async function addPaymentToRow(id: string, payment: Omit<Payment, "id">) {
  return mutateBookingRow(id, (row) => ({ ...row, payments: [...(row.payments ?? []), { ...payment, id: newId() }] }));
}

export async function removePaymentFromRow(id: string, paymentId: string) {
  return mutateBookingRow(id, (row) => ({ ...row, payments: (row.payments ?? []).filter((p) => p.id !== paymentId) }));
}

export async function setCostsOnRow(id: string, costs: CostItem[]) {
  return mutateBookingRow(id, (row) => ({ ...row, costs }));
}
