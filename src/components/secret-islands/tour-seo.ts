/**
 * <head> + JSON-LD for the tour landing pages (/touren and /touren/<slug>). Built on the shared helpers of ./seo.ts (not modified).
 * Rules as in seo.ts: only mark up what is visible on the page, no AggregateRating/Review (REVIEWS_VERIFIED = false),
 * prices only from TOURS (price per boat, max. 5 guests).
 */
import { INFO_META, infoFaq } from "../krabi-guide/info-content";
import { BRAND, TOURS, altFor, type Tour } from "./content";
import { BRAND_HEAD_LINKS, BUSINESS_ID, LANDING_PATH, ROBOTS_LARGE_IMAGES, absUrl, businessNode, langLinks, pageUrl, socialMeta } from "./seo";
import {
  MAX_GUESTS,
  TOURS_PATH,
  getTourPage,
  stopName,
  tourFaq,
  tourPath,
  touristTypes,
  type TourLang,
  type TourPageContent,
} from "./tour-pages";

type Json = Record<string, unknown>;

/** Last content change of the tour pages (sitemap lastmod). Bump when the copy or tour data changes materially. */
export const TOUR_PAGES_UPDATED = "2026-10-05";

const HOME: Record<TourLang, string> = { de: "Startseite", en: "Home" };
const TOURS_LABEL: Record<TourLang, string> = { de: "Touren", en: "Tours" };

/** Page language: German by default, every other `?lang=` shows (and canonicalises to) English – like the Insider Guide. */
export function tourPageLang(search: { lang?: string }): TourLang {
  return search.lang && search.lang !== "de" ? "en" : "de";
}

/** `<title>` ≤ 60 characters; the brand is appended only if it still fits. */
export function seoTitle(base: string): string {
  const withBrand = `${base} | ${BRAND.name}`;
  return withBrand.length <= 60 ? withBrand : base;
}

const crumbs = (lang: TourLang, tour?: { name: string; url: string }) => [
  { name: HOME[lang], url: pageUrl(LANDING_PATH, lang) },
  { name: TOURS_LABEL[lang], url: pageUrl(TOURS_PATH, lang) },
  ...(tour ? [tour] : []),
];

function breadcrumbNode(url: string, items: { name: string; url: string }[]): Json {
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.url })),
  };
}

function faqNode(url: string, items: { q: string; a: string }[]): Json {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function tourJsonLd(tour: Tour, page: TourPageContent, lang: TourLang): Json {
  const path = tourPath(tour.id);
  const url = pageUrl(path, lang);
  const perBoat = lang === "de" ? `Preis pro Boot (bis ${MAX_GUESTS} Gäste), nicht pro Person` : `Price per boat (up to ${MAX_GUESTS} guests), not per person`;
  const name = tour.title[lang];
  return {
    "@context": "https://schema.org",
    "@graph": [
      businessNode(lang),
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: page.title[lang],
        description: page.description[lang],
        inLanguage: lang,
        isPartOf: { "@id": BUSINESS_ID },
        primaryImageOfPage: { "@type": "ImageObject", url: absUrl(tour.image), caption: altFor(tour.image)[lang] },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#trip` },
      },
      {
        "@type": "TouristTrip",
        "@id": `${url}#trip`,
        name,
        description: tour.description[lang],
        url,
        image: absUrl(tour.image),
        inLanguage: lang,
        touristType: touristTypes(tour, lang),
        tripOrigin: { "@type": "Place", name: "Ao Nang, Krabi" },
        itinerary: {
          "@type": "ItemList",
          itemListElement: tour.stops.map((s, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "Place", name: stopName(s, lang) } })),
        },
        provider: { "@id": BUSINESS_ID },
        offers: {
          "@type": "Offer",
          url,
          price: tour.price,
          priceCurrency: "THB",
          availability: "https://schema.org/InStock",
          priceSpecification: { "@type": "PriceSpecification", price: tour.price, priceCurrency: "THB", description: perBoat },
          seller: { "@id": BUSINESS_ID },
        },
      },
      breadcrumbNode(url, crumbs(lang, { name, url })),
      faqNode(url, tourFaq(tour, page, lang)),
    ],
  };
}

export function toursHubJsonLd(lang: TourLang, page: { title: string; description: string }): Json {
  const url = pageUrl(TOURS_PATH, lang);
  return {
    "@context": "https://schema.org",
    "@graph": [
      businessNode(lang),
      {
        "@type": "CollectionPage",
        "@id": url,
        url,
        name: page.title,
        description: page.description,
        inLanguage: lang,
        isPartOf: { "@id": BUSINESS_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#tours` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#tours`,
        numberOfItems: TOURS.length,
        itemListElement: TOURS.map((t, i) => ({ "@type": "ListItem", position: i + 1, url: pageUrl(tourPath(t.id), lang), name: t.title[lang] })),
      },
      breadcrumbNode(url, crumbs(lang)),
    ],
  };
}

export const TOURS_HUB_META = {
  title: {
    de: "Krabi Bootstour privat & Krabi Ausflüge ab Ao Nang",
    en: "Private Boat Tours Krabi from Ao Nang: 15 Tours",
  },
  description: {
    de: "Krabi Bootstour privat und Krabi Ausflüge: alle 15 Speedboot-Touren ab Ao Nang: Hong Island, Phi Phi, James Bond Island, Sunset, Plankton und Angeln. Preis pro Boot, max. 5 Gäste.",
    en: "Private boat tours Krabi from Ao Nang – all 15 speedboat tours: Hong Island, Phi Phi, James Bond Island, sunset, plankton and fishing. Price per boat, max. 5 guests.",
  },
};

/** `head()` result for /touren/<slug>. */
export function tourHead(slug: string, lang: TourLang) {
  const found = getTourPage(slug);
  if (!found) {
    return {
      meta: [{ title: "Tour nicht gefunden | Krabi Secret Islands" }, { name: "robots", content: "noindex" }, { name: "theme-color", content: "#0a192f" }],
      links: BRAND_HEAD_LINKS,
    };
  }
  const { tour, page } = found;
  const path = tourPath(tour.id);
  const title = seoTitle(page.title[lang]);
  const description = page.description[lang];
  const alt = altFor(tour.image)[lang];
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "theme-color", content: "#0a192f" },
      ROBOTS_LARGE_IMAGES,
      ...socialMeta({ title, description, url: pageUrl(path, lang), image: tour.image, type: "website", lang }),
      { property: "og:image:alt", content: alt },
      { name: "twitter:image:alt", content: alt },
      { "script:ld+json": tourJsonLd(tour, page, lang) },
    ],
    links: [...langLinks(path, lang, ["de", "en"]), ...BRAND_HEAD_LINKS],
  };
}

/** `head()` result for /touren. */
export function toursHubHead(lang: TourLang) {
  const title = seoTitle(TOURS_HUB_META.title[lang]);
  const description = TOURS_HUB_META.description[lang];
  const image = TOURS[0].image;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "theme-color", content: "#0a192f" },
      ROBOTS_LARGE_IMAGES,
      ...socialMeta({ title, description, url: pageUrl(TOURS_PATH, lang), image, type: "website", lang }),
      { property: "og:image:alt", content: altFor(image)[lang] },
      { name: "twitter:image:alt", content: altFor(image)[lang] },
      { "script:ld+json": toursHubJsonLd(lang, { title: TOURS_HUB_META.title[lang], description }) },
    ],
    links: [...langLinks(TOURS_PATH, lang, ["de", "en"]), ...BRAND_HEAD_LINKS],
  };
}

/** Guest-info page (/info, DE + EN). */
export const INFO_PATH = "/info";

export function infoJsonLd(lang: TourLang): Json {
  const url = pageUrl(INFO_PATH, lang);
  return {
    "@context": "https://schema.org",
    "@graph": [
      businessNode(lang),
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: INFO_META.title[lang],
        description: INFO_META.description[lang],
        inLanguage: lang,
        isPartOf: { "@id": BUSINESS_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      breadcrumbNode(url, [
        { name: HOME[lang], url: pageUrl(LANDING_PATH, lang) },
        { name: lang === "de" ? "Gäste-Info" : "Guest info", url },
      ]),
      faqNode(url, infoFaq(lang)),
    ],
  };
}

export function infoHead(lang: TourLang) {
  const title = seoTitle(INFO_META.title[lang]);
  const description = INFO_META.description[lang];
  const image = TOURS[0].image;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "theme-color", content: "#0a192f" },
      ROBOTS_LARGE_IMAGES,
      ...socialMeta({ title, description, url: pageUrl(INFO_PATH, lang), image, type: "website", lang }),
      { property: "og:image:alt", content: altFor(image)[lang] },
      { name: "twitter:image:alt", content: altFor(image)[lang] },
      { "script:ld+json": infoJsonLd(lang) },
    ],
    links: [...langLinks(INFO_PATH, lang, ["de", "en"]), ...BRAND_HEAD_LINKS],
  };
}
