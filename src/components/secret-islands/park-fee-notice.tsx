import { Info as InfoIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Draft } from "./booking-model";
import { ENTRANCE_FEE_NOTE, seasonHintFor } from "./park-fees";
import { useTx } from "./store";

/** One general entrance-fee note – booking area only. */
export function ParkFeeNotice({ className }: { draft?: Draft; className?: string }) {
  const { t } = useTx();
  return (
    <aside className={cn("flex items-start gap-2 rounded-2xl border border-amber-300/25 bg-amber-300/[0.07] p-3.5 text-xs leading-relaxed text-slate-300", className)}>
      <InfoIcon className="mt-0.5 size-3.5 shrink-0 text-amber-200" aria-hidden />
      <p>{t(ENTRANCE_FEE_NOTE)}</p>
    </aside>
  );
}

/** Seasonal closure hint (Koh Rok & Koh Haa). */
export function SeasonNotice({ draft, className }: { draft: Draft; className?: string }) {
  const { t } = useTx();
  const hint = seasonHintFor(draft.mode === "preset" ? draft.tourId : null);
  if (!hint) return null;
  return (
    <p className={cn("rounded-2xl border border-si-cyan/25 bg-si-cyan/[0.07] p-3.5 text-xs leading-relaxed text-slate-200", className)} role="note">
      {t(hint)}
    </p>
  );
}
