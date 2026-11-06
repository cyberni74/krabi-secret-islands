/**
 * Pure finance logic for booking requests: payments, costs, cost templates, summaries, CSV.
 * No I/O and no imports, so it runs in Node and can be checked without the app.
 * Amounts are whole THB. Rows without `payments` / `costs` (older requests) count as empty.
 */

export const PAYMENT_KINDS = ["deposit", "balance", "refund"] as const;
export type PaymentKind = (typeof PAYMENT_KINDS)[number];

export const PAYMENT_METHODS = ["bank", "card", "cash", "other"] as const;
export type PaymentMethod = (typeof PAYMENT_METHODS)[number];

export const COST_CATEGORIES = ["crew", "fuel", "food", "park_fees", "drone", "insurance", "equipment", "commission", "other"] as const;
export type CostCategory = (typeof COST_CATEGORIES)[number];

export type Payment = {
  id: string;
  kind: PaymentKind;
  amount_thb: number;
  date: string;
  method: PaymentMethod;
  note: string | null;
};

export type CostItem = {
  id: string;
  category: CostCategory;
  label: string;
  amount_thb: number;
};

/** Cost template per tour: amounts per boat, or per guest (multiplied by the number of guests). */
export type CostTemplateItem = {
  category: CostCategory;
  label: string;
  amount_thb: number;
  per: "boat" | "guest";
};

export type CostTemplate = {
  tour_title: string;
  items: CostTemplateItem[];
};

/** The fields of a booking row that finance needs. */
export type FinanceRow = {
  id: string;
  ref: string;
  status: string;
  tour_title: string;
  tour_date: string | null;
  guests: number;
  total_thb: number;
  payments?: Payment[] | null;
  costs?: CostItem[] | null;
};

const sum = (xs: { amount_thb: number }[]) => xs.reduce((s, x) => s + x.amount_thb, 0);

/** Statuses that count as realised revenue. "new" and "contacted" are pipeline only; "declined" counts as nothing. */
const REALISED = new Set(["confirmed", "done"]);

export function bookingFinance(row: FinanceRow) {
  const payments = row.payments ?? [];
  const costs = row.costs ?? [];
  const revenue = row.status === "declined" ? 0 : row.total_thb;
  const received = sum(payments.filter((p) => p.kind !== "refund")) - sum(payments.filter((p) => p.kind === "refund"));
  const cost = sum(costs);
  const margin = revenue - cost;
  return {
    revenue,
    received,
    outstanding: Math.max(0, revenue - received),
    overpaid: Math.max(0, received - revenue),
    cost,
    margin,
    marginPct: revenue > 0 ? Math.round((margin / revenue) * 1000) / 10 : null,
  };
}

/** Costs of a booking from its template: boat items once, guest items times the number of guests. */
export function calculateCosts(template: CostTemplate, guests: number): CostItem[] {
  return template.items.map((item, i) => ({
    id: `tpl-${i}`,
    category: item.category,
    label: item.label,
    amount_thb: item.per === "guest" ? item.amount_thb * guests : item.amount_thb,
  }));
}

export type FinanceFilter = { from?: string | null; to?: string | null };

function inRange(row: FinanceRow, f: FinanceFilter) {
  if (!f.from && !f.to) return true;
  if (!row.tour_date) return false;
  if (f.from && row.tour_date < f.from) return false;
  if (f.to && row.tour_date > f.to) return false;
  return true;
}

export function summarizeFinance(rows: FinanceRow[], filter: FinanceFilter = {}) {
  const picked = rows.filter((r) => inRange(r, filter));
  const totals = { bookings: picked.length, realised: 0, pipeline: 0, received: 0, outstanding: 0, cost: 0, margin: 0 };
  const byMonth = new Map<string, { month: string; bookings: number; revenue: number; received: number; cost: number; margin: number }>();
  const byTour = new Map<string, { tour_title: string; bookings: number; guests: number; revenue: number; cost: number; margin: number }>();

  for (const r of picked) {
    const f = bookingFinance(r);
    const isRealised = REALISED.has(r.status);
    if (isRealised) totals.realised += f.revenue;
    else if (r.status !== "declined") totals.pipeline += f.revenue;
    totals.received += f.received;
    totals.outstanding += f.outstanding;
    totals.cost += f.cost;
    totals.margin += f.margin;

    // Month and tour breakdowns only count realised bookings, so the numbers are not inflated by open requests.
    if (!isRealised || !r.tour_date) continue;
    const month = r.tour_date.slice(0, 7);
    const m = byMonth.get(month) ?? { month, bookings: 0, revenue: 0, received: 0, cost: 0, margin: 0 };
    m.bookings += 1;
    m.revenue += f.revenue;
    m.received += f.received;
    m.cost += f.cost;
    m.margin += f.margin;
    byMonth.set(month, m);

    const t = byTour.get(r.tour_title) ?? { tour_title: r.tour_title, bookings: 0, guests: 0, revenue: 0, cost: 0, margin: 0 };
    t.bookings += 1;
    t.guests += r.guests;
    t.revenue += f.revenue;
    t.cost += f.cost;
    t.margin += f.margin;
    byTour.set(r.tour_title, t);
  }

  return {
    from: filter.from ?? null,
    to: filter.to ?? null,
    totals: { ...totals, marginPct: totals.realised > 0 ? Math.round((totals.margin / totals.realised) * 1000) / 10 : null },
    byMonth: [...byMonth.values()].sort((a, b) => a.month.localeCompare(b.month)),
    byTour: [...byTour.values()].sort((a, b) => b.revenue - a.revenue),
  };
}

/** CSV for the accountant: one line per booking in the filter range. Semicolon separated, German decimal-free integers. */
export function financeCsv(rows: FinanceRow[], filter: FinanceFilter = {}): string {
  const header = ["Ref", "Status", "Tour", "Tourdatum", "Gäste", "Umsatz THB", "Eingang THB", "Offen THB", "Kosten THB", "Marge THB"];
  const lines = rows
    .filter((r) => inRange(r, filter))
    .sort((a, b) => (a.tour_date ?? "").localeCompare(b.tour_date ?? ""))
    .map((r) => {
      const f = bookingFinance(r);
      return [r.ref, r.status, r.tour_title, r.tour_date ?? "", r.guests, f.revenue, f.received, f.outstanding, f.cost, f.margin].map(csvCell).join(";");
    });
  return [header.join(";"), ...lines].join("\n");
}

function csvCell(v: string | number): string {
  const s = String(v);
  return /[;"\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
