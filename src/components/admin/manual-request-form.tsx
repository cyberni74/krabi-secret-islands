import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { btn } from "@/components/secret-islands/fx";
import { createManualRequest } from "@/lib/server/booking-requests";

const input = "min-h-11 w-full rounded-2xl bg-white/5 px-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-si-cyan";
const empty = { name: "", phone: "", email: "", lang: "en" as const, tour_title: "", tour_date: "", guests: "2", total: "", message: "" };

/** Admin: enter a request that came in outside the site (e.g. WhatsApp on the phone). */
export function ManualRequestForm() {
  const qc = useQueryClient();
  const [f, setF] = useState(empty);
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const save = useMutation({
    mutationFn: () =>
      createManualRequest({
        data: {
          name: f.name.trim(),
          phone: f.phone.trim() || null,
          email: f.email.trim() || null,
          lang: f.lang,
          tour_title: f.tour_title.trim() || "Manuell erfasst",
          tour_date: f.tour_date || null,
          guests: Math.max(0, Number(f.guests) || 0),
          total_thb: Math.max(0, Math.round(Number(f.total) || 0)),
          message: f.message.trim(),
        },
      }),
    onSuccess: () => {
      setF(empty);
      void qc.invalidateQueries({ queryKey: ["booking-requests"] });
    },
  });
  const valid = f.name.trim().length >= 2 && (f.phone.trim() || f.email.trim());

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valid) save.mutate();
      }}
      className="si-glass max-w-2xl space-y-3 rounded-3xl p-5"
    >
      <h2 className="text-lg font-extrabold">Anfrage manuell erfassen</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <input value={f.name} onChange={set("name")} placeholder="Name *" aria-label="Name" className={input} />
        <input value={f.phone} onChange={set("phone")} placeholder="WhatsApp / Telefon" aria-label="Telefon" className={input} />
        <input value={f.email} onChange={set("email")} placeholder="E-Mail" aria-label="E-Mail" className={input} />
        <select value={f.lang} onChange={set("lang")} aria-label="Sprache" className={input}>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="zh">中文</option>
          <option value="ko">한국어</option>
          <option value="ja">日本語</option>
        </select>
        <input value={f.tour_title} onChange={set("tour_title")} placeholder="Tour" aria-label="Tour" className={input} />
        <input type="date" value={f.tour_date} onChange={set("tour_date")} aria-label="Tourdatum" className={input} />
        <input type="number" min={0} max={50} value={f.guests} onChange={set("guests")} aria-label="Gäste" className={input} />
        <input type="number" min={0} value={f.total} onChange={set("total")} placeholder="Betrag THB" aria-label="Betrag" className={input} />
      </div>
      <textarea value={f.message} onChange={set("message")} rows={4} placeholder="Nachricht / Notizen" aria-label="Nachricht" className={cn(input, "py-2")} />
      <button type="submit" disabled={!valid || save.isPending} className={cn(btn.primary, "min-h-11 w-full text-sm")}>
        {save.isPending ? "Speichere …" : "Anfrage speichern"}
      </button>
      {!valid ? <p className="text-xs text-slate-400">Name und Telefon oder E-Mail sind Pflicht.</p> : null}
      {save.isSuccess ? <p className="text-sm text-emerald-300">Gespeichert.</p> : null}
      {save.isError ? <p className="text-sm text-rose-300">Speichern fehlgeschlagen.</p> : null}
    </form>
  );
}
