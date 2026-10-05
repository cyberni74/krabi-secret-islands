import { MessageCircle, ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTx } from "../secret-islands/store";

/**
 * Compact trust block (visible text only – deliberately NO AggregateRating/Review markup, no quotes or names).
 * Bilingual via ternaries (zh/ko/ja show English) so no dictionary keys are needed.
 */
export function TrustBlock({ className }: { className?: string }) {
  const { lang } = useTx();
  const de = lang === "de";
  const points = [
    { icon: Users, text: de ? "Privates Boot nur für eure Gruppe, max. 5 Gäste" : "Private boat just for your group, max. 5 guests" },
    { icon: ShieldCheck, text: de ? "Erfahrene lokale Crew aus Krabi" : "Experienced local crew from Krabi" },
    { icon: MessageCircle, text: de ? "Direkter Kontakt per WhatsApp vor und nach der Buchung" : "Direct WhatsApp contact before and after booking" },
  ];
  return (
    <section aria-label={de ? "Vertrauen" : "Trust"} className={cn("rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6", className)}>
      <p className="text-base font-extrabold text-white sm:text-lg">
        {de ? "4,8 von 5 – aus 43 Gäste-Feedbacks per WhatsApp und Mail" : "4.8 out of 5 – from 43 guest messages via WhatsApp and email"}
      </p>
      <ul className="mt-4 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
        {points.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-2.5">
            <Icon className="mt-0.5 size-4 shrink-0 text-si-cyan" aria-hidden />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
