import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { COST_CATEGORIES, PAYMENT_KINDS, PAYMENT_METHODS } from "./finance";

const money = z.number().int().min(0).max(10_000_000);
const day = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const range = z.object({ from: day.nullable().optional(), to: day.nullable().optional() });

const costItem = z.object({
  id: z.string().max(64),
  category: z.enum(COST_CATEGORIES),
  label: z.string().trim().min(1).max(120),
  amount_thb: money,
});

const templateItem = z.object({
  category: z.enum(COST_CATEGORIES),
  label: z.string().trim().min(1).max(120),
  amount_thb: money,
  per: z.enum(["boat", "guest"]),
});

async function admin() {
  const { requireAdminSession } = await import("./admin-session.server");
  requireAdminSession();
}

/** Admin only: revenue, received, outstanding, costs and margin for a date range (tour date). */
export const getFinanceSummary = createServerFn({ method: "GET" })
  .validator((input: unknown) => range.parse(input ?? {}))
  .handler(async ({ data }) => {
    await admin();
    const { listBookingRows } = await import("./booking-requests.server");
    const { summarizeFinance } = await import("./finance");
    return summarizeFinance(await listBookingRows(), data);
  });

/** Admin only: CSV of bookings in a date range, for the accountant. */
export const getFinanceCsv = createServerFn({ method: "GET" })
  .validator((input: unknown) => range.parse(input ?? {}))
  .handler(async ({ data }) => {
    await admin();
    const { listBookingRows } = await import("./booking-requests.server");
    const { financeCsv } = await import("./finance");
    return financeCsv(await listBookingRows(), data);
  });

/** Admin only: record a deposit, balance payment or refund. */
export const addBookingPayment = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z
      .object({
        id: z.string().max(64),
        kind: z.enum(PAYMENT_KINDS),
        amount_thb: money.refine((n) => n > 0, "amount must be positive"),
        date: day,
        method: z.enum(PAYMENT_METHODS),
        note: z.string().max(500).nullable(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    await admin();
    const { addPaymentToRow } = await import("./booking-finance.server");
    const { id, ...payment } = data;
    return { ok: await addPaymentToRow(id, payment) };
  });

/** Admin only: remove a wrongly recorded payment. */
export const removeBookingPayment = createServerFn({ method: "POST" })
  .validator((input: unknown) => z.object({ id: z.string().max(64), paymentId: z.string().max(64) }).parse(input))
  .handler(async ({ data }) => {
    await admin();
    const { removePaymentFromRow } = await import("./booking-finance.server");
    return { ok: await removePaymentFromRow(data.id, data.paymentId) };
  });

/** Admin only: replace the cost items of one booking. */
export const setBookingCosts = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z.object({ id: z.string().max(64), costs: z.array(costItem).max(50) }).parse(input),
  )
  .handler(async ({ data }) => {
    await admin();
    const { setCostsOnRow } = await import("./booking-finance.server");
    return { ok: await setCostsOnRow(data.id, data.costs) };
  });

/** Admin only: cost templates per tour (default costs for new bookings of that tour). */
export const getCostTemplates = createServerFn({ method: "GET" }).handler(async () => {
  await admin();
  const { loadCostTemplates } = await import("./booking-finance.server");
  return loadCostTemplates();
});

export const setCostTemplates = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z
      .object({
        templates: z.array(z.object({ tour_title: z.string().trim().min(1).max(160), items: z.array(templateItem).max(50) })).max(100),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    await admin();
    const { saveCostTemplates } = await import("./booking-finance.server");
    await saveCostTemplates(data.templates);
    return { ok: true };
  });

/** Admin only: the costs a booking would get from its tour template (not saved until setBookingCosts). */
export const previewBookingCosts = createServerFn({ method: "GET" })
  .validator((input: unknown) => z.object({ tour_title: z.string().max(160), guests: z.number().int().min(1).max(5) }).parse(input))
  .handler(async ({ data }) => {
    await admin();
    const { loadCostTemplates } = await import("./booking-finance.server");
    const { calculateCosts } = await import("./finance");
    const tpl = (await loadCostTemplates()).find((t) => t.tour_title === data.tour_title);
    return tpl ? calculateCosts(tpl, data.guests) : [];
  });
