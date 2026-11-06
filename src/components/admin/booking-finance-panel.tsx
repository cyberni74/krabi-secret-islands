import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { btn } from "@/components/secret-islands/fx";
import { addBookingPayment, applyCostTemplateToBooking, removeBookingPayment, setBookingCosts } from "@/lib/server/booking-finance";
import { bookingFinance, COST_CATEGORIES, PAYMENT_KINDS, PAYMENT_METHODS, type CostCategory, type CostItem, type Payment, type PaymentKind, type PaymentMethod } from "@/lib/server/finance";

const thb = (n: number) => `฿${n.toLocaleString("de-DE")}`;
const KIND_LABEL: Record<PaymentKind, string> = { deposit: "Anzahlung", balance: "Restzahlung", refund: "Erstattung" };
const METHOD_LABEL: Record<PaymentMethod, string> = { bank: "Überweisung", card: "Karte", cash: "Bar", other: "Sonstiges" };
const CATEGORY_LABEL: Record<CostCategory, string> = {
  crew: "Crew",
  fuel: "Treibstoff",
  food: "Verpflegung",
  park_fees: "Parkgebühren",
  drone: "Drohne",
  insurance: "Versicherung",
  equipment: "Ausrüstung / Wartung",
  commission: "Provision",
  other: "Sonstiges",
};

const input = "min-h-11 rounded-2xl bg-white/5 px-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-si-cyan";

type PanelRow = { id: string; status: string; tour_title: string; total_thb: number; payments?: Payment[] | null; costs?: CostItem[] | null };

/** Admin: payments, costs and margin of one booking request. */
export function BookingFinancePanel({ row }: { row: PanelRow }) {
  const qc = useQueryClient();
  const refresh = () => void qc.invalidateQueries({ queryKey: ["booking-requests"] });
  const fin = bookingFinance({ ...row, guests: 0, tour_date: null, ref: "", payments: row.payments, costs: row.costs });
  const payments = row.payments ?? [];
  const [pay, setPay] = useState({ kind: "deposit" as PaymentKind, amount: "", date: new Date().toISOString().slice(0, 10), method: "bank" as PaymentMethod, note: "" });

  const addPay = useMutation({
    mutationFn: () =>
      addBookingPayment({
        data: { id: row.id, kind: pay.kind, amount_thb: Math.round(Number(pay.amount) || 0), date: pay.date, method: pay.method, note: pay.note.trim() || null },
      }),
    onSuccess: () => {
      setPay((p) => ({ ...p, amount: "", note: "" }));
      refresh();
    },
  });
  const delPay = useMutation({ mutationFn: (paymentId: string) => removeBookingPayment({ data: { id: row.id, paymentId } }), onSuccess: refresh });

  const [costs, setCosts] = useState<CostItem[] | null>(null);
  const shown = costs ?? row.costs ?? [];
  const [newCost, setNewCost] = useState({ category: "other" as CostCategory, label: "", amount: "" });
  const saveCosts = useMutation({
    mutationFn: (list: CostItem[]) => setBookingCosts({ data: { id: row.id, costs: list } }),
    onSuccess: () => {
      setCosts(null);
      refresh();
    },
  });
  const apply = useMutation({ mutationFn: () => applyCostTemplateToBooking({ data: { id: row.id } }), onSuccess: () => { setCosts(null); refresh(); } });

  const addCost = () => {
    const amount = Math.round(Number(newCost.amount) || 0);
    if (!newCost.label.trim() || amount <= 0) return;
    setCosts([...shown, { id: crypto.randomUUID(), category: newCost.category, label: newCost.label.trim(), amount_thb: amount }]);
    setNewCost({ category: "other", label: "", amount: "" });
  };

  return (
    <div className="mt-4 grid gap-4 border-t border-white/10 pt-4 md:grid-cols-2">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Zahlungen</p>
        <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
          <dt className="text-slate-300">Umsatz</dt><dd className="text-right font-semibold">{thb(fin.revenue)}</dd>
          <dt className="text-slate-300">Eingegangen</dt><dd className="text-right">{thb(fin.received)}</dd>
          <dt className="text-slate-300">Offen</dt><dd className={cn("text-right font-semibold", fin.outstanding > 0 && "text-amber-200")}>{thb(fin.outstanding)}</dd>
          {fin.overpaid > 0 ? (<><dt className="text-slate-300">Zu viel bezahlt</dt><dd className="text-right text-rose-300">{thb(fin.overpaid)}</dd></>) : null}
        </dl>
        <ul className="mt-3 space-y-1 text-sm">
          {payments.map((p) => (
            <li key={p.id} className="flex items-center justify-between gap-2 rounded-xl bg-white/5 px-3 py-2">
              <span className="min-w-0 truncate">
                {p.date} · {KIND_LABEL[p.kind]} · {METHOD_LABEL[p.method]}
                {p.note ? ` · ${p.note}` : ""}
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <b className={p.kind === "refund" ? "text-rose-300" : ""}>{p.kind === "refund" ? "−" : ""}{thb(p.amount_thb)}</b>
                <button type="button" onClick={() => delPay.mutate(p.id)} disabled={delPay.isPending} className="text-xs text-slate-400 hover:text-rose-300">
                  entfernen
                </button>
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <select value={pay.kind} onChange={(e) => setPay({ ...pay, kind: e.target.value as PaymentKind })} className={input} aria-label="Art">
            {PAYMENT_KINDS.map((k) => <option key={k} value={k}>{KIND_LABEL[k]}</option>)}
          </select>
          <input type="number" min={1} value={pay.amount} onChange={(e) => setPay({ ...pay, amount: e.target.value })} placeholder="THB" aria-label="Betrag" className={input} />
          <input type="date" value={pay.date} onChange={(e) => setPay({ ...pay, date: e.target.value })} aria-label="Datum" className={input} />
          <select value={pay.method} onChange={(e) => setPay({ ...pay, method: e.target.value as PaymentMethod })} className={input} aria-label="Weg">
            {PAYMENT_METHODS.map((m) => <option key={m} value={m}>{METHOD_LABEL[m]}</option>)}
          </select>
          <input value={pay.note} onChange={(e) => setPay({ ...pay, note: e.target.value })} placeholder="Notiz" aria-label="Notiz" className={cn(input, "col-span-2")} />
        </div>
        <button type="button" disabled={addPay.isPending || !(Number(pay.amount) > 0)} onClick={() => addPay.mutate()} className={cn(btn.primary, "mt-2 min-h-11 w-full text-sm")}>
          Zahlung erfassen
        </button>
        {addPay.isError ? <p className="mt-1 text-xs text-rose-300">Speichern fehlgeschlagen.</p> : null}
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Kosten</p>
        <ul className="mt-2 space-y-1 text-sm">
          {shown.map((c) => (
            <li key={c.id} className="flex items-center justify-between gap-2 rounded-xl bg-white/5 px-3 py-2">
              <span className="min-w-0 truncate">{CATEGORY_LABEL[c.category]} · {c.label}</span>
              <span className="flex shrink-0 items-center gap-2">
                <b>{thb(c.amount_thb)}</b>
                <button type="button" onClick={() => setCosts(shown.filter((x) => x.id !== c.id))} className="text-xs text-slate-400 hover:text-rose-300">
                  entfernen
                </button>
              </span>
            </li>
          ))}
          {shown.length === 0 ? <li className="text-slate-400">Noch keine Kosten.</li> : null}
        </ul>
        <div className="mt-2 flex justify-between text-sm">
          <span className="text-slate-300">Kosten gesamt</span>
          <span className="font-bold">{thb(shown.reduce((s, c) => s + c.amount_thb, 0))}</span>
        </div>
        <div className="mt-1 flex justify-between text-sm">
          <span className="text-slate-300">Marge</span>
          <span className="font-bold">{thb(row.total_thb - shown.reduce((s, c) => s + c.amount_thb, 0))}</span>
        </div>
        <div className="mt-3 grid grid-cols-[1fr_1fr] gap-2">
          <select value={newCost.category} onChange={(e) => setNewCost({ ...newCost, category: e.target.value as CostCategory })} className={input} aria-label="Kategorie">
            {COST_CATEGORIES.map((c) => <option key={c} value={c}>{CATEGORY_LABEL[c]}</option>)}
          </select>
          <input type="number" min={0} value={newCost.amount} onChange={(e) => setNewCost({ ...newCost, amount: e.target.value })} placeholder="THB" aria-label="Kostenbetrag" className={input} />
          <input value={newCost.label} onChange={(e) => setNewCost({ ...newCost, label: e.target.value })} placeholder="Bezeichnung" aria-label="Bezeichnung" className={cn(input, "col-span-2")} />
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <button type="button" onClick={addCost} className={cn(btn.glass, "min-h-11 text-sm")}>+ Position</button>
          <button type="button" onClick={() => apply.mutate()} disabled={apply.isPending} className={cn(btn.glass, "min-h-11 text-sm")}>
            {apply.isPending ? "…" : "Kostenvorlage anwenden"}
          </button>
          {costs !== null ? (
            <button type="button" onClick={() => saveCosts.mutate(shown)} disabled={saveCosts.isPending} className={cn(btn.primary, "col-span-2 min-h-11 text-sm")}>
              {saveCosts.isPending ? "Speichere …" : "Kosten speichern"}
            </button>
          ) : null}
        </div>
        {apply.data && !apply.data.ok ? <p className="mt-1 text-xs text-amber-200">Keine Kostenvorlage für „{row.tour_title}“ gefunden. Erst im Kalkulator speichern.</p> : null}
      </div>
    </div>
  );
}
