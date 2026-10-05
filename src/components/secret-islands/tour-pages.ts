/**
 * Content layer of the tour landing pages (/touren/<slug>).
 *
 * Unique copy per tour (SEO title, meta description, H1, intro, audience, FAQ) lives in ./tour-pages-a.ts and ./tour-pages-b.ts.
 * Everything else on a page – price, duration, start times, stops/itinerary, inclusions, the "price" FAQ – is derived from TOURS
 * (content.ts), so a price or inclusion change in one place updates the landing page, the schema.org Offer and the FAQ together.
 * No fact may be added here that is not in TOURS, the Insider Guide or the fixed boat facts (BOAT_FACTS).
 */
import { SLOTS, TOURS, type L, type Tour } from "./content";
import { TOUR_PAGES_A } from "./tour-pages-a";
import { TOUR_PAGES_B } from "./tour-pages-b";
import { TOUR_SLUGS, TOURS_PATH, tourIdForSlug } from "./tour-slugs";

export { TOUR_SLUGS, TOURS_PATH, tourIdForSlug };
export type TourLang = "de" | "en";

export type TourPageContent = {
  /** SEO <title> without brand (≤ 60 characters; the brand is appended by tour-seo.ts only if it still fits). */
  title: L;
  /** Meta description, 140–158 characters. */
  description: L;
  h1: L;
  /** 140–220 words, paragraphs separated by a blank line. */
  intro: L;
  /** "Who is it for" – 2–3 sentences. */
  audience: L;
  /** Tour-specific questions (the price/inclusions question is added by tourFaq()). */
  faq: { q: L; a: L }[];
  /** Tour ids of the three related tours. */
  related: string[];
};

export const TOUR_PAGES: Record<string, TourPageContent> = { ...TOUR_PAGES_A, ...TOUR_PAGES_B };

export function getTourPage(slug: string): { tour: Tour; page: TourPageContent; slug: string } | undefined {
  const id = tourIdForSlug(slug);
  const tour = id ? TOURS.find((t) => t.id === id) : undefined;
  const page = id ? TOUR_PAGES[id] : undefined;
  return tour && page ? { tour, page, slug } : undefined;
}

export const tourPath = (tourId: string) => `${TOURS_PATH}/${TOUR_SLUGS[tourId]}`;

/** Fixed boat facts shown on every tour page (same wording as the booking flow / FAQ on the landing page). */
export const BOAT_FACTS = {
  title: { de: "Ihr Boot", en: "Your boat" } as L,
  items: [
    { de: "Weißes Hardtop-Kabinenboot mit zwei Motoren à 300 PS", en: "White hardtop cabin boat with twin 300 hp engines" },
    { de: "Sitzbank und bequeme Bootssessel, Heck-Cockpit", en: "Bench seat and comfortable boat chairs, rear cockpit" },
    { de: "Schatten durch das Hardtop der Kabine", en: "Shade from the cabin hardtop" },
    { de: "Maximal 5 Gäste: privat, ohne fremde Gruppe", en: "Maximum 5 guests: private, no other groups" },
  ] as L[],
};

/* ───────── Derived pieces ───────── */

/** Stops that are stored as German free text in TOURS; everything else is a place name used as is. */
const STOP_EN: Record<string, string> = {
  "Dunkle Bucht bei Koh Poda": "Dark bay near Koh Poda",
  "Dunkle Bucht · Plankton": "Dark bay · plankton",
  Mangroven: "Mangroves",
  "Koh Phi Phi Außenriffe": "Koh Phi Phi outer reefs",
  "Trolling-Route": "Trolling route",
  "Koh Dam Riff": "Koh Dam reef",
  "Privater Strand": "Private beach",
};

export function stopName(stop: string, lang: TourLang): string {
  return lang === "en" ? STOP_EN[stop] ?? stop : stop;
}

export function formatTime(time: string, lang: TourLang): string {
  if (lang === "de") return `${time} Uhr`;
  const [h, m] = time.split(":").map(Number);
  return `${h % 12 === 0 ? 12 : h % 12}:${String(m).padStart(2, "0")} ${h >= 12 ? "pm" : "am"}`;
}

/** Start times offered for the tour: the tour-specific departure, otherwise the generic slot time. */
export function tourStarts(tour: Tour): { label: L; time: string }[] {
  return tour.slots.map((id) => {
    const slot = SLOTS.find((s) => s.id === id)!;
    return { label: slot.label, time: tour.departures?.[id] ?? slot.time };
  });
}

export function formatHours(hours: number, lang: TourLang): string {
  const n = lang === "de" ? String(hours).replace(".", ",") : String(hours);
  return lang === "de" ? `${n} Std.` : `${n} hrs`;
}

/** Plain-text price for running text: "18.500 THB" (de) / "THB 18,500" (en). */
export function priceText(price: number, lang: TourLang): string {
  const grouped = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, lang === "de" ? "." : ",");
  return lang === "de" ? `${grouped} THB` : `THB ${grouped}`;
}

export const MAX_GUESTS = 5;

/** Tour-specific FAQ + one data-derived question about price and inclusions (answer built only from TOURS). */
export function tourFaq(tour: Tour, page: TourPageContent, lang: TourLang): { q: string; a: string }[] {
  const items = page.faq.map((f) => ({ q: f.q[lang], a: f.a[lang] }));
  const included = tour.includes.map((i) => i[lang]).join(lang === "de" ? "; " : "; ");
  const park =
    lang === "de"
      ? "Details zu eventuellen Nationalparkgebühren erhalten Sie bei der Buchung."
      : "Details on any national park fees are provided when you book.";
  const q = lang === "de" ? "Was kostet die Tour und was ist enthalten?" : "How much does the tour cost and what is included?";
  const a =
    lang === "de"
      ? `Die Tour kostet ab ${priceText(tour.price, lang)} pro Boot für bis zu ${MAX_GUESTS} Gäste, nicht pro Person. Enthalten sind: ${included}. ${park}`
      : `The tour costs from ${priceText(tour.price, lang)} per boat for up to ${MAX_GUESTS} guests, not per person. Included: ${included}. ${park}`;
  return [...items, { q, a }];
}

/** Short audience labels for schema.org `touristType`, derived from the tour's categories. */
const TOURIST_TYPE: Record<string, L> = {
  classic: { de: "Inselhopping-Interessierte", en: "Island-hopping travellers" },
  secret: { de: "Entdecker abseits der Massen", en: "Explorers off the beaten path" },
  sunset: { de: "Paare und Sonnenuntergangs-Fans", en: "Couples and sunset lovers" },
  fishing: { de: "Angler und Angel-Einsteiger", en: "Anglers and fishing beginners" },
  family: { de: "Familien mit Kindern", en: "Families with children" },
};
export function touristTypes(tour: Tour, lang: TourLang): string[] {
  return tour.categories.map((c) => TOURIST_TYPE[c][lang]);
}
