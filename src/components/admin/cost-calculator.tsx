import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { btn } from "@/components/secret-islands/fx";
import { getCostTemplates, setCostTemplates } from "@/lib/server/booking-finance";
import { ownCosts, ownCostsToTemplate, type OwnCostInput } from "@/lib/server/finance";

const EMPTY: OwnCostInput = {
  guests: 2,
  hours: 0,
  fuel_price_thb_per_l: 0,
  fuel_l_per_hour: 0,
  crew: [{ label: "Kapitän", daily_wage_thb: 0 }],
  food_thb_per_guest: 0,
  park_fees_thb_per_guest: 0,
  drone_pilot_thb: 0,
  maintenance_thb_per_hour: 0,
  insurance_thb_per_tour: 0,
  revenue_thb: 0,
  commission_pct: 0,
};

const thb = (n: number) => `฿${n.toLocaleString("de-DE")}`;

/** Admin: enter raw costs, get our own costs and the profit. Can be saved as the cost template of a tour. */
export function CostCalculator() {
  const qc = useQueryClient();
  const [tour, setTour] = useState("");
  const [input, setInput] = useState<OwnCostInput>(EMPTY);
  const tpl = useQuery({ queryKey: ["cost-templates"], queryFn: () => getCostTemplates(), retry: false });
  const result = ownCosts(input);

  const num = (key: keyof OwnCostInput) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput((s) => ({ ...s, [key]: Math.max(0, Number(e.target.value) || 0) }));
  const setCrew = (i: number, patch: Partial<OwnCostInput["crew"][number]>) =>
    setInput((s) => ({ ...s, crew: s.crew.map((c, j) => (j === i ? { ...c, ...patch } : c)) }));

  const save = useMutation({
    mutationFn: () => {
      const others = (tpl.data ?? []).filter((t) => t.tour_title !== tour.trim());
      const next = [...others, ownCostsToTemplate(tour.trim(), result.lines, input.guests)];
      return setCostTemplates({ data: { templates: next } });
    },
    onSuccess: () => void qc.invalidateQueries({ queryKey: ["cost-templates"] }),
  });

  const field = (label: string, key: keyof OwnCostInput, step = "1") => (
    <label className="flex flex-col gap-1 text-xs font-bold text-slate-300">
      {label}
      <input
        type="number"
        min={0}
        step={step}
        value={input[key] as number}
        onChange={num(key)}
        className="min-h-11 rounded-2xl bg-white/5 px-3 text-sm font-normal text-white outline-none ring-1 ring-white/10 focus:ring-si-cyan"
      />
    </label>
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <div className="si-glass rounded-3xl p-5">
        <h2 className="text-lg font-extrabold">Rohdaten</h2>
        <label className="mt-4 flex flex-col gap-1 text-xs font-bold text-slate-300">
          Tour (für die Vorlage)
          <input
            list="cost-tours"
            value={tour}
            onChange={(e) => setTour(e.target.value)}
            className="min-h-11 rounded-2xl bg-white/5 px-3 text-sm font-normal text-white outline-none ring-1 ring-white/10 focus:ring-si-cyan"
          />
          <datalist id="cost-tours">
            {(tpl.data ?? []).map((t) => (
              <option key={t.tour_title} value={t.tour_title} />
            ))}
          </datalist>
        </label>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {field("Gäste", "guests")}
          {field("Dauer (Std.)", "hours", "0.5")}
          {field("Benzinpreis (THB/L)", "fuel_price_thb_per_l", "0.1")}
          {field("Verbrauch (L/Std.)", "fuel_l_per_hour", "0.5")}
          {field("Verpflegung (THB/Gast)", "food_thb_per_guest")}
          {field("Parkgebühren (THB/Gast)", "park_fees_thb_per_guest")}
          {field("Drohnenpilot (THB/Tour)", "drone_pilot_thb")}
          {field("Wartung (THB/Std.)", "maintenance_thb_per_hour")}
          {field("Versicherung (THB/Tour)", "insurance_thb_per_tour")}
          {field("Provision (%)", "commission_pct", "0.5")}
          {field("Preis / Umsatz (THB)", "revenue_thb")}
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Crew (Tageslohn)</p>
        <div className="mt-2 space-y-2">
          {input.crew.map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                value={c.label}
                onChange={(e) => setCrew(i, { label: e.target.value })}
                aria-label="Funktion"
                className="min-h-11 min-w-0 flex-1 rounded-2xl bg-white/5 px-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-si-cyan"
              />
              <input
                type="number"
                min={0}
                value={c.daily_wage_thb}
                onChange={(e) => setCrew(i, { daily_wage_thb: Math.max(0, Number(e.target.value) || 0) })}
                aria-label="Tageslohn THB"
                className="min-h-11 w-28 rounded-2xl bg-white/5 px-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-si-cyan"
              />
              <button
                type="button"
                disabled={input.crew.length === 1}
                onClick={() => setInput((s) => ({ ...s, crew: s.crew.filter((_, j) => j !== i) }))}
                className={cn(btn.glass, "min-h-11 px-3 text-sm")}
              >
                −
              </button>
            </div>
          ))}
          <button type="button" onClick={() => setInput((s) => ({ ...s, crew: [...s.crew, { label: "", daily_wage_thb: 0 }] }))} className={cn(btn.glass, "min-h-11 px-4 text-sm")}>
            + Crew-Mitglied
          </button>
        </div>
      </div>

      <div className="si-glass rounded-3xl p-5">
        <h2 className="text-lg font-extrabold">Ergebnis</h2>
        <ul className="mt-4 divide-y divide-white/10 text-sm">
          {result.lines.map((l) => (
            <li key={l.id} className="flex justify-between py-2">
              <span className="text-slate-300">{l.label}</span>
              <span className="font-semibold">{thb(l.amount_thb)}</span>
            </li>
          ))}
          {result.lines.length === 0 ? <li className="py-2 text-slate-400">Noch keine Kosten eingegeben.</li> : null}
        </ul>
        <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
          <div className="flex justify-between"><span>Eigene Kosten</span><span className="font-bold">{thb(result.total)}</span></div>
          <div className="flex justify-between"><span>Preis / Umsatz</span><span className="font-bold">{thb(result.revenue)}</span></div>
          <div className="flex justify-between text-base"><span className="font-extrabold">Gewinn</span><span className={cn("font-extrabold", result.profit < 0 ? "text-rose-300" : "text-emerald-300")}>{thb(result.profit)}</span></div>
          <div className="flex justify-between"><span>Marge</span><span>{result.marginPct === null ? "–" : `${result.marginPct} %`}</span></div>
          <div className="flex justify-between"><span>Gewinn pro Gast</span><span>{result.profitPerGuest === null ? "–" : thb(result.profitPerGuest)}</span></div>
        </div>
        <button
          type="button"
          disabled={!tour.trim() || save.isPending || result.lines.length === 0}
          onClick={() => save.mutate()}
          className={cn(btn.primary, "mt-6 w-full")}
        >
          {save.isPending ? "Speichere …" : "Als Kostenvorlage für diese Tour speichern"}
        </button>
        {save.isSuccess ? <p className="mt-2 text-sm text-emerald-300">Vorlage gespeichert.</p> : null}
        {save.isError ? <p className="mt-2 text-sm text-rose-300">Speichern fehlgeschlagen.</p> : null}
        <p className="mt-3 text-xs text-slate-400">Die Provision fließt nicht in die Vorlage ein, sie hängt vom Preis ab.</p>
      </div>
    </div>
  );
}
