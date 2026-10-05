/**
 * Entrance-fee note – shown ONLY in the booking area (never on public pages) – and the official
 * seasonal closure of Koh Rok & Koh Haa. German + English; other languages fall back to English.
 */
import type { L } from "./content";

export const ENTRANCE_FEE_NOTE: L = {
  de: "Hinweis: Einige Inseln bzw. Nationalparks verlangen eine Eintrittsgebühr. Diese ist nicht im Tourpreis enthalten und wird vor Ort direkt am Eingang bei den Rangern bezahlt.",
  en: "Please note: Some islands and national parks charge an entrance fee. This is not included in the tour price and is paid on site directly to the rangers at the entrance.",
};

/** Koh Rok & Koh Haa: official DNP closure 16 May – 15 Nov. */
const CLOSED: Record<string, { from: string; to: string; hint: L }> = {
  "koh-rok-safari": {
    from: "05-16",
    to: "11-15",
    hint: {
      de: "Koh Rok & Koh Haa sind vom 16. Mai bis 15. November gesperrt (Saisonsperre Nationalpark) – nur in der Saison 16. Nov bis 15. Mai buchbar.",
      en: "Koh Rok & Koh Haa are closed from 16 May to 15 November (national park seasonal closure) – bookable only in season, 16 Nov to 15 May.",
    },
  },
};

/** True when the tour cannot run on that date (ISO yyyy-mm-dd) because of an official closure. */
export function tourClosedOn(tourId: string | null | undefined, iso: string): boolean {
  const c = tourId ? CLOSED[tourId] : undefined;
  if (!c) return false;
  const d = iso.slice(5, 10);
  return d >= c.from && d <= c.to;
}

export function seasonHintFor(tourId: string | null | undefined): L | null {
  return (tourId && CLOSED[tourId]?.hint) || null;
}

/** First bookable ISO date on/after `iso` (skips the closure window). */
export function nextOpenDate(tourId: string | null | undefined, iso: string): string {
  const c = tourId ? CLOSED[tourId] : undefined;
  if (!c || !tourClosedOn(tourId, iso)) return iso;
  return `${iso.slice(0, 4)}-11-16`;
}
