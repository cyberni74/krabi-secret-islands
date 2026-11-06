import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { btn } from "@/components/secret-islands/fx";
import { getFinanceCsv, getFinanceSummary } from "@/lib/server/booking-finance";

const thb = (n: number) => `฿${n.toLocaleString("de-DE")}`;
const input = "min-h-11 rounded-2xl bg-white/5 px-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-si-cyan";

/** Admin: revenue, received, outstanding, costs and margin for a tour-date range, with CSV export. */
export function FinanceOverview() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const range = { from: from || null, to: to || null };
  const sum = useQuery({ queryKey: ["finance-summary", range], queryFn: () => getFinanceSummary({ data: range }), retry: false });
  const t = sum.data?.totals;

  const exportCsv = async () => {
    const csv = await getFinanceCsv({ data: range });
    const url = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `finanzen${from ? `-${from}` : ""}${to ? `-bis-${to}` : ""}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const tiles: [string, number | string, boolean?][] = t
    ? [
        ["Umsatz (bestätigt/erledigt)", thb(t.realised), true],
        ["Pipeline (neu/kontaktiert)", thb(t.pipeline)],
        ["Eingegangen", thb(t.received)],
        ["Offen", thb(t.outstanding)],
        ["Kosten", thb(t.cost)],
        ["Marge", t.marginPct === null ? "–" : `${thb(t.margin)} (${t.marginPct} %)`, true],
      ]
    : [];

  return (
    <div className="space-y-6">
      <div className="si-glass flex flex-wrap items-end gap-3 rounded-3xl p-4">
        <label className="flex flex-col gap-1 text-xs font-bold text-slate-300">
          Tour von
          <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className={input} />
        </label>
        <label className="flex flex-col gap-1 text-xs font-bold text-slate-300">
          Tour bis
          <input type="date" value={to} onChange={(e) => setTo(e.target.value)} className={input} />
        </label>
        <button type="button" onClick={() => { setFrom(""); setTo(""); }} className={cn(btn.glass, "min-h-11 px-4 text-sm")}>Alle</button>
        <button type="button" onClick={() => void exportCsv()} className={cn(btn.primary, "min-h-11 px-4 text-sm")}>CSV exportieren</button>
      </div>

      {sum.isLoading ? <p className="text-slate-300">Lade …</p> : null}
      {sum.isError ? <p className="text-rose-300">Finanzen konnten nicht geladen werden.</p> : null}

      {t ? (
        <>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {tiles.map(([label, value, accent]) => (
              <div key={label} className="si-glass rounded-2xl p-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{label}</p>
                <p className={cn("mt-1 text-xl font-extrabold", accent ? "text-cyan-300" : "text-white")}>{value}</p>
              </div>
            ))}
          </div>

          <div className="si-glass overflow-x-auto rounded-3xl p-4">
            <h2 className="text-lg font-extrabold">Pro Monat</h2>
            <table className="mt-3 w-full min-w-[560px] text-left text-sm">
              <thead className="text-xs uppercase tracking-[0.12em] text-slate-400">
                <tr><th className="py-2">Monat</th><th>Buchungen</th><th>Umsatz</th><th>Eingegangen</th><th>Kosten</th><th>Marge</th></tr>
              </thead>
              <tbody>
                {sum.data!.byMonth.map((m) => (
                  <tr key={m.month} className="border-t border-white/10">
                    <td className="py-2">{m.month}</td><td>{m.bookings}</td><td>{thb(m.revenue)}</td><td>{thb(m.received)}</td><td>{thb(m.cost)}</td><td className="font-semibold">{thb(m.margin)}</td>
                  </tr>
                ))}
                {sum.data!.byMonth.length === 0 ? <tr><td colSpan={6} className="py-3 text-slate-400">Noch keine bestätigten Buchungen mit Tourdatum.</td></tr> : null}
              </tbody>
            </table>
          </div>

          <div className="si-glass overflow-x-auto rounded-3xl p-4">
            <h2 className="text-lg font-extrabold">Pro Tour</h2>
            <table className="mt-3 w-full min-w-[560px] text-left text-sm">
              <thead className="text-xs uppercase tracking-[0.12em] text-slate-400">
                <tr><th className="py-2">Tour</th><th>Buchungen</th><th>Gäste</th><th>Umsatz</th><th>Kosten</th><th>Marge</th></tr>
              </thead>
              <tbody>
                {sum.data!.byTour.map((r) => (
                  <tr key={r.tour_title} className="border-t border-white/10">
                    <td className="py-2">{r.tour_title}</td><td>{r.bookings}</td><td>{r.guests}</td><td>{thb(r.revenue)}</td><td>{thb(r.cost)}</td><td className="font-semibold">{thb(r.margin)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : null}
    </div>
  );
}
