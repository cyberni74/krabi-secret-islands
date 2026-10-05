import type { L } from "./content";

/** Public path of the tour landing pages (/touren and /touren/<slug>). */
export const TOURS_PATH = "/touren";

/**
 * SEO slugs of the 15 tour landing pages, keyed by TOURS id (content.ts). German kebab-case, primary keyword first.
 * Kept in its own tiny module so the landing page (sections-mid) can link to the pages without bundling the page copy.
 * Changing a slug later needs a 301 redirect from the old URL.
 */
export const TOUR_SLUGS: Record<string, string> = {
  "4islands-sunset": "4-islands-sunset",
  "plankton-night": "leuchtendes-plankton-krabi",
  "sunset-glow-combo": "sunset-plankton-kombi",
  "hong-lagoons": "hong-island-privat",
  "phang-nga-uncharted": "koh-roi-phang-nga-bucht",
  "phi-phi-early-bird": "phi-phi-frueh",
  "koh-rok-safari": "koh-rok-koh-haa-schnorcheln",
  "james-bond-bay": "james-bond-island-privat",
  "railay-escape": "railay-phra-nang-halbtagestour",
  "sunset-dinner": "sunset-dinner-krabi",
  "family-sandbars": "familien-bootstour-krabi",
  "fishing-reef-half": "riff-angeln-krabi",
  "fishing-deep-sea": "hochseeangeln-krabi",
  "fishing-night-squid": "nacht-tintenfisch-angeln",
  "fishing-catch-cook": "catch-and-cook-sunset-bbq",
};

const ID_BY_SLUG = new Map(Object.entries(TOUR_SLUGS).map(([id, slug]) => [slug, id]));

export function tourIdForSlug(slug: string): string | undefined {
  return ID_BY_SLUG.get(slug);
}

/** Label of the link on the landing-page tour cards. Plain {de,en} object here (not inline in a .tsx) – zh/ko/ja fall back to English. */
export const TOUR_PAGE_LINK: L = { de: "Details & Ablauf", en: "Details & itinerary" };
