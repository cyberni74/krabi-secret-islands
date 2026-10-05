/**
 * Light guide metadata – NO import of the article data (articles.ts / data-*.ts), so it is safe in the client bundle.
 * The article texts only ever reach the browser as route loader data (see src/lib/server/guide-data.ts).
 */
import type { Bi, GuideCategory } from "./types";

export type { Bi, GuideCategory } from "./types";

export const GUIDE_CATEGORIES: { id: "all" | GuideCategory; label: Bi }[] = [
  { id: "all", label: { de: "Alle", en: "All" } },
  { id: "pillar", label: { de: "Grundlagen", en: "Essentials" } },
  { id: "island", label: { de: "Inseln", en: "Islands" } },
  { id: "insider", label: { de: "Insider-Wissen", en: "Insider know-how" } },
];

export const CATEGORY_LABEL: Record<GuideCategory, Bi> = {
  pillar: { de: "Grundlagen", en: "Essentials" },
  island: { de: "Insel-Guide", en: "Island guide" },
  insider: { de: "Insider-Wissen", en: "Insider know-how" },
};

export const FEATURED_SLUG = "krabi-islands-insider-guide";

/** Minimal data for navigation / footers (all articles, every page). */
export type GuideNavItem = { slug: string; category: GuideCategory; short: Bi; title: Bi };

/** Card data (hub, related articles, tour pages). */
export type GuideCard = {
  slug: string;
  category: GuideCategory;
  short: Bi;
  title: Bi;
  metaDescription: Bi;
  image: string;
  readingMinutes: number;
  updated: string;
  tourIds: string[];
  primaryKeyword: string;
  keywords: string[];
};

export const HUB_META = {
  title: {
    de: "Krabi Insider Guide – Inseln, Geheimtipps & Reisewissen",
    en: "Krabi Insider Guide – Islands, Hidden Gems & Travel Tips",
  },
  description: {
    de: "Krabi Insider Guide: alle Inseln von Koh Poda bis Koh Roi, beste Reisezeit, Gezeiten, Schnorchelspots, Lagunen und Timing-Tipps lokaler Kapitäne aus Ao Nang.",
    en: "Krabi Insider Guide: every island from Koh Poda to Koh Roi, best time to visit, tides, snorkel spots, lagoons and timing tips from local captains in Ao Nang.",
  },
} satisfies Record<"title" | "description", Bi>;

/** Plain JSON value (serializable loader data, e.g. JSON-LD). */
export type JsonLd = string | number | boolean | null | JsonLd[] | { [k: string]: JsonLd };
