/**
 * Krabi Insider Guide – article index.
 * Article bodies live in ./data-*.ts (split for maintainability); this file merges them,
 * adds reading time / anchor ids and exports the keyword map used for SEO planning.
 */
import { ISLAND_ARTICLES_A } from "./data-islands-a";
import { ISLAND_ARTICLES_B } from "./data-islands-b";
import { INSIDER_ARTICLES_A } from "./data-insider-a";
import { INSIDER_ARTICLES_B } from "./data-insider-b";
import { PILLAR_ARTICLES } from "./data-pillar";
import { SNORKEL_RELAX } from "./data-snorkel-relax";
import { EXTRA_SECTIONS } from "./data-extra";
import { EXTRA_SECTIONS_2 } from "./data-extra2";
import CONTENT_DATES from "@/generated/content-dates.json";
import { MOVIE_ARTICLES } from "./data-movies";
import { NEW_ARTICLES_D } from "./data-new-d";
import { NEW_ARTICLES_C } from "./data-new-c";
import { NEW_ARTICLES_B } from "./data-new-b";
import { NEW_ARTICLES_A } from "./data-new-a";
import type { Bi, GuideArticle, GuideArticleInput, GuideCategory, GuideImage, GuideSection } from "./types";

export type { Bi, GuideArticle, GuideCategory, GuideImage, GuideSection } from "./types";

export const GUIDE_UPDATED = "2026-10-05";
export { SITE_URL } from "../secret-islands/seo";
export { CATEGORY_LABEL, FEATURED_SLUG, GUIDE_CATEGORIES, type GuideCard, type GuideNavItem } from "./guide-meta";

/* ───────────────────────── Keyword map ─────────────────────────
 * Research basis: SERP review (DE + EN) of Krabi island / tour queries, Oct 2026.
 * No volume data available in this environment → priority = judgement of commercial value × intent fit.
 * intent: info = informational, comm = commercial investigation, trans = transactional (booking).
 */
export type KeywordIntent = "info" | "comm" | "trans";
export const KEYWORD_MAP: {
  slug: string;
  primary: { de: string; en: string };
  secondary: string[];
  intent: KeywordIntent[];
  note: string;
}[] = [
  { slug: "krabi-movie-locations-james-bond-the-beach", primary: { de: "Filme gedreht in Krabi", en: "movies filmed in Krabi" }, secondary: ["Drehorte Krabi", "James Bond Island Film", "The Beach Drehort", "Phang Nga Bay movie locations"], intent: ["info"], note: "Insider – film & TV locations, links to Phang Nga and Phi Phi tours." },
  { slug: "private-boat-charter-krabi-cost", primary: { de: "Private Bootstour Krabi Kosten", en: "private boat tour Krabi cost" }, secondary: ["Krabi Boot privat mieten Preis", "Bootscharter Ao Nang", "private Speedbootcharter Krabi pro Boot", "4 Islands privat Krabi Kosten", "Krabi Inselhopping privat lohnt sich"], intent: ["comm", "trans"], note: "New (Oct 2026) – see docs/keyword-brief.md." },
  { slug: "krabi-honeymoon-proposal-private-boat", primary: { de: "Flitterwochen Krabi Bootstour", en: "Krabi honeymoon private boat" }, secondary: ["Heiratsantrag Krabi Boot", "romantische Bootstour Krabi", "Krabi Sunset Dinner privat", "Krabi Paare Tipps", "Krabi leuchtendes Plankton romantisch"], intent: ["comm", "trans"], note: "New (Oct 2026) – see docs/keyword-brief.md." },
  { slug: "krabi-sunset-boat-tour-private", primary: { de: "Sunset Tour Krabi privat", en: "Krabi sunset boat tour private" }, secondary: ["Sonnenuntergang Krabi Boot", "Sunset Cruise Krabi", "Ao Nang Sonnenuntergang Boot", "Krabi Sunset Dinner Boot", "Sonnenuntergang Railay Phra Nang"], intent: ["comm", "trans"], note: "New (Oct 2026) – see docs/keyword-brief.md." },
  { slug: "longtail-vs-speedboat-krabi", primary: { de: "Longtail oder Speedboot Krabi", en: "longtail vs speedboat Krabi" }, secondary: ["Longtail Boot Krabi Erfahrung", "Speedboot Krabi privat", "Krabi Bootstour Longtail Speedboat Unterschied", "Longtail Boot Krabi laut nass", "schnellstes Boot Krabi Inseln"], intent: ["comm"], note: "New (Oct 2026) – see docs/keyword-brief.md." },
  { slug: "krabi-national-park-fees-islands", primary: { de: "Nationalpark Gebühren Krabi", en: "Krabi national park fees" }, secondary: ["Hong Island Eintritt", "Phi Phi Eintritt Nationalpark", "Nationalpark-Gebühr Phang Nga Bucht", "Eintritt Inseln Krabi Ausländer", "Nationalparkgebühr Bootstour inklusive"], intent: ["info"], note: "New (Oct 2026) – see docs/keyword-brief.md." },
  { slug: "maya-bay-open-closed-dates", primary: { de: "Ist Maya Bay offen", en: "is Maya Bay open" }, secondary: ["Maya Bay Schließzeit", "Maya Bay Wiedereröffnung 1. Oktober", "Maya Bay Regeln Schwimmen", "Maya Bay Eintritt", "Maya Bay von Krabi aus"], intent: ["info"], note: "New (Oct 2026) – see docs/keyword-brief.md." },
  { slug: "krabi-boat-tours-rainy-season", primary: { de: "Krabi Bootstour Regenzeit", en: "Krabi boat tour rainy season" }, secondary: ["Krabi Monsun Bootstour", "Inselhopping Krabi Nebensaison", "Bootstour abgesagt Krabi Wetter", "Nationalpark Sperrung Krabi Mai Oktober", "Krabi boat tours monsoon"], intent: ["info", "comm"], note: "New (Oct 2026) – see docs/keyword-brief.md." },
  { slug: "krabi-itinerary-3-5-7-days", primary: { de: "Krabi Reiseplan 5 Tage", en: "Krabi itinerary 5 days" }, secondary: ["Krabi 3 Tage Route", "Krabi 7 Tage Reiseplan", "Krabi wie viele Tage", "Krabi Rundreise Ao Nang Railay Inseln", "Krabi 3 days itinerary"], intent: ["info"], note: "New (Oct 2026) – see docs/keyword-brief.md." },
  { slug: "krabi-boat-seasickness-tips", primary: { de: "Seekrank Bootstour Krabi", en: "seasick Krabi boat tour" }, secondary: ["Seekrankheit Speedboot Thailand", "Seekrank Phi Phi Tour", "was hilft gegen Seekrankheit Bootstour", "bester Sitzplatz Speedboot", "Seekrankheit Kinder Bootstour"], intent: ["info"], note: "New (Oct 2026) – see docs/keyword-brief.md." },
  { slug: "ao-nang-vs-railay-where-to-stay", primary: { de: "Ao Nang oder Railay", en: "Ao Nang vs Railay" }, secondary: ["Krabi wo übernachten", "Railay Beach Unterkunft", "Ao Nang Hotels Lage", "Krabi Unterkunft für Inselhopping", "Railay nur per Boot erreichbar"], intent: ["info"], note: "New (Oct 2026) – see docs/keyword-brief.md." },
  { slug: "phi-phi-don-vs-phi-phi-leh", primary: { de: "Phi Phi Don oder Leh", en: "Phi Phi Don vs Phi Phi Leh" }, secondary: ["Phi Phi Unterschied Don Leh", "Phi Phi Tagesausflug ab Krabi", "Ton Sai Bay Loh Dalum", "Pileh Lagoon Viking Cave", "Phi Phi Übernachten oder Tagestour"], intent: ["info"], note: "New (Oct 2026) – see docs/keyword-brief.md." },
  { slug: "krabi-islands-insider-guide", primary: { de: "Krabi Inseln", en: "Krabi islands" }, secondary: ["Inseln bei Krabi", "best islands Krabi", "Krabi Geheimtipps", "Ao Nang Inseln", "Schnorcheln Krabi"], intent: ["info", "comm"], note: "Pillar/hub – links to every island page." },
  { slug: "best-time-to-visit-krabi", primary: { de: "Krabi beste Reisezeit", en: "best time to visit Krabi" }, secondary: ["Krabi Regenzeit", "Krabi Monsun", "Krabi Wetter", "Krabi weather by month", "Maya Bay closure"], intent: ["info"], note: "Pillar – seasonal planning; feeds tour bookings by month." },
  { slug: "krabi-island-hopping-planner", primary: { de: "Krabi Insel-Hopping", en: "Krabi island hopping" }, secondary: ["Krabi private boat tour", "Speedboat Krabi", "Longtail Boot Krabi", "Ao Nang Bootstour"], intent: ["comm", "trans"], note: "Pillar – closest to booking intent (boat choice)." },
  { slug: "koh-poda-guide", primary: { de: "Koh Poda", en: "Koh Poda" }, secondary: ["Poda Island", "Koh Poda Schnorcheln", "Poda Island sunset"], intent: ["info"], note: "Island page." },
  { slug: "chicken-island-tup-sandbar", primary: { de: "Tup Sandbank Ebbe", en: "Tup Island sandbar" }, secondary: ["Chicken Island Krabi", "Koh Tup", "Thale Waek", "Krabi snorkeling"], intent: ["info"], note: "Island page – tide-driven query." },
  { slug: "railay-phra-nang-cave", primary: { de: "Railay Phra Nang Cave", en: "Phra Nang Cave Beach" }, secondary: ["Railay Beach Krabi", "Phra Nang Lagoon", "Railay Viewpoint"], intent: ["info"], note: "Island page." },
  { slug: "hong-island-krabi", primary: { de: "Hong Island Krabi", en: "Hong Island Krabi" }, secondary: ["Koh Hong Krabi", "Hong Lagune", "Hong Island Viewpoint", "Hong Island Tour"], intent: ["info", "comm"], note: "Island page – disambiguate from Koh Hong (Phang Nga)." },
  { slug: "koh-lao-lading-koh-pakbia", primary: { de: "Koh Lao Lading", en: "Koh Lao Lading" }, secondary: ["Koh Pakbia", "Hong Archipel", "Pakbia snorkeling"], intent: ["info"], note: "Island page – long tail." },
  { slug: "koh-roi-hidden-lagoon", primary: { de: "Koh Roi", en: "Koh Roi lagoon" }, secondary: ["Koh Roi Lagune", "secret lagoon Krabi", "Phang Nga Bucht Geheimtipp"], intent: ["info", "comm"], note: "Island page – core USP destination." },
  { slug: "koh-kudu-koh-nok", primary: { de: "Koh Kudu", en: "Koh Kudu" }, secondary: ["Koh Kudu Yai", "Koh Nok", "ruhige Inseln Krabi"], intent: ["info", "comm"], note: "Island page – core USP destination." },
  { slug: "phi-phi-maya-bay-early-morning", primary: { de: "Phi Phi früh morgens", en: "Phi Phi early morning" }, secondary: ["Maya Bay Regeln", "Phi Phi Tour ab Krabi", "Pileh Lagoon", "Bamboo Island"], intent: ["info", "comm"], note: "Island page – timing angle." },
  { slug: "koh-rok-koh-haa", primary: { de: "Koh Rok Schnorcheln", en: "Koh Rok snorkeling" }, secondary: ["Koh Haa", "Koh Rok Nai", "Mu Ko Lanta Nationalpark"], intent: ["info", "comm"], note: "Island page – seasonal." },
  { slug: "james-bond-island-phang-nga-bay", primary: { de: "James Bond Island ab Krabi", en: "James Bond Island tour from Krabi" }, secondary: ["Phang Nga Bay", "Khao Phing Kan", "Koh Panyee", "Koh Tapu"], intent: ["comm", "trans"], note: "Island page." },
  { slug: "avoid-crowds-krabi-timing", primary: { de: "Krabi ohne Touristenmassen", en: "Krabi avoid crowds" }, secondary: ["beste Uhrzeit Inseltour Krabi", "Krabi quiet islands", "Krabi Geheimtipps"], intent: ["info"], note: "Insider – supports private-boat USP." },
  { slug: "krabi-tides-guide", primary: { de: "Krabi Gezeiten", en: "Krabi tide table" }, secondary: ["Ebbe und Flut Krabi", "Springtide Krabi", "Tup Sandbank Ebbe"], intent: ["info"], note: "Insider." },
  { slug: "krabi-bioluminescent-plankton-night-boat-tour", primary: { de: "leuchtendes Plankton Krabi", en: "Krabi bioluminescent plankton" }, secondary: ["Biolumineszenz Krabi", "Krabi night boat tour", "Plankton Tour Ao Nang"], intent: ["info", "trans"], note: "Insider – private speedboat only (no kayak). Tours: plankton-night, sunset-glow-combo." },
  { slug: "krabi-fishing-guide", primary: { de: "Angeln Krabi", en: "Krabi fishing trip" }, secondary: ["Krabi Angeltour", "deep sea fishing Krabi", "squid fishing Krabi", "catch and cook Krabi"], intent: ["comm", "trans"], note: "Insider – links all 4 fishing tours." },
  { slug: "krabi-with-kids", primary: { de: "Krabi mit Kindern", en: "Krabi with kids" }, secondary: ["Krabi Familienurlaub", "family boat tour Krabi", "Ao Nang mit Kindern"], intent: ["info", "comm"], note: "Insider." },
  { slug: "boat-day-packing-list-etiquette", primary: { de: "Packliste Bootstour Thailand", en: "what to bring boat trip Krabi" }, secondary: ["riffschonende Sonnencreme Thailand", "Nationalpark Regeln Krabi"], intent: ["info"], note: "Insider." },
  { slug: "krabi-photo-drone-spots", primary: { de: "Krabi Fotospots", en: "Krabi photo spots" }, secondary: ["Krabi drone spots", "Drohne Thailand Regeln", "Instagram Spots Krabi"], intent: ["info", "comm"], note: "Insider – drone package upsell." },
  { slug: "secret-beaches-lagoons-krabi", primary: { de: "Krabi Geheimtipps Strände", en: "secret beaches Krabi" }, secondary: ["hidden lagoon Krabi", "Krabi Lagunen", "Krabi hidden gems"], intent: ["info", "comm"], note: "Insider – real places only." },
  { slug: "best-snorkeling-spots-krabi", primary: { de: "Schnorcheln Krabi", en: "Krabi snorkeling" }, secondary: ["beste Schnorchelspots Krabi", "best snorkeling Krabi", "Koh Rok snorkeling"], intent: ["info", "comm"], note: "Insider – owner priority (snorkel/swim/relax)." },
];

/* ───────────────────────── Merge + derive ───────────────────────── */
export function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function words(s: string) {
  return s.split(/\s+/).filter(Boolean).length;
}

/** Word count of one language version (intro + sections + faq). */
export function wordCount(a: GuideArticleInput, lang: "de" | "en") {
  let n = words(a.intro[lang]);
  for (const s of a.sections) {
    n += words(s.h2[lang]);
    for (const p of s.body[lang]) n += words(p);
    if (s.tip) n += words(s.tip[lang]);
    for (const li of s.list?.[lang] ?? []) n += words(li);
  }
  for (const f of a.faq) n += words(f.q[lang]) + words(f.a[lang]);
  return n;
}

function finalize(a: GuideArticleInput): GuideArticle {
  const extra: GuideSection[] = [...(EXTRA_SECTIONS[a.slug] ?? []),
    ...(EXTRA_SECTIONS_2[a.slug] ?? []),
    ...(SNORKEL_RELAX[a.slug] ? [SNORKEL_RELAX[a.slug]] : [])];
  const sections: GuideSection[] = extra.length ? [...a.sections.slice(0, -1), ...extra, ...a.sections.slice(-1)] : a.sections;
  const withSections = { ...a, sections };
  return {
    ...withSections,
    sections: sections.map((s) => ({ ...s, id: s.id ?? slugify(s.h2.en) })),
    readingMinutes: Math.max(3, Math.round(wordCount(withSections, "de") / 200)),
    updated: (CONTENT_DATES.slugs as Record<string, string>)[a.slug] ?? GUIDE_UPDATED,
  };
}

export const ARTICLES: GuideArticle[] = [
  ...PILLAR_ARTICLES,
  ...ISLAND_ARTICLES_A,
  ...ISLAND_ARTICLES_B,
  ...INSIDER_ARTICLES_A,
  ...INSIDER_ARTICLES_B,
  ...MOVIE_ARTICLES,
  ...NEW_ARTICLES_A,
  ...NEW_ARTICLES_B,
  ...NEW_ARTICLES_C,
  ...NEW_ARTICLES_D,
].map(finalize);

const BY_SLUG = new Map(ARTICLES.map((a) => [a.slug, a]));

export function getArticle(slug: string): GuideArticle | undefined {
  return BY_SLUG.get(slug);
}

export function relatedArticles(a: GuideArticle): GuideArticle[] {
  return a.related.map((s) => BY_SLUG.get(s)).filter((x): x is GuideArticle => !!x);
}

/**
 * Licensed guide photos that are already uploaded to /public/images/guide/.
 * Add a file name here once the file exists; until then that gallery slot is not rendered
 * (no 404s, and no unrelated stand-in picture under a plankton alt text).
 */
export const GUIDE_IMAGES_READY = new Set<string>([
  // "leuchtendes-plankton-krabi-nacht-wasser.webp",
  // Own AI-generated place scenes for the film-locations article (served via /bilder/, see secret-islands/image-map.ts).
  "khao-phing-kan-strand-phang-nga-bucht-drehort.webp",
  "maya-bay-phi-phi-leh-luftaufnahme-kalksteinwaende.webp",
  "koh-panyee-schwimmendes-dorf-phang-nga-bucht.webp",
  "pileh-lagune-phi-phi-leh-smaragdgruenes-wasser.webp",
]);

/** Gallery photos of an article whose files exist. */
export function readyGuideImages(a: { images?: GuideImage[] }): GuideImage[] {
  return (a.images ?? []).filter((img) => GUIDE_IMAGES_READY.has(img.src.split("/").pop() ?? ""));
}

export const ISLAND_ARTICLES = ARTICLES.filter((a) => a.category === "island");
