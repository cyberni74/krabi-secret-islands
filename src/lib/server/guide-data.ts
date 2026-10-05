import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { HUB_META, type GuideCard, type GuideNavItem, type JsonLd } from "@/components/krabi-guide/guide-meta";

/**
 * Guide article data – server only. The data module is imported INSIDE the handlers, so it is never part of any client
 * chunk: the browser only ever receives the JSON these functions return (as route loader data / SSR hydration payload).
 */
const langSchema = z.enum(["de", "en"]);

type Art = import("@/components/krabi-guide/types").GuideArticle;

function toCard(a: Art): GuideCard {
  return {
    slug: a.slug,
    category: a.category,
    short: a.short,
    title: a.title,
    metaDescription: a.metaDescription,
    image: a.image,
    readingMinutes: a.readingMinutes,
    updated: a.updated,
    tourIds: a.tourIds,
    primaryKeyword: a.primaryKeyword,
    keywords: a.keywords,
  };
}

/** All articles, minimal (footers on every page). */
export const getGuideNav = createServerFn({ method: "GET" }).handler(async (): Promise<GuideNavItem[]> => {
  const { ARTICLES } = await import("@/components/krabi-guide/articles");
  return ARTICLES.map((a) => ({ slug: a.slug, category: a.category, short: a.short, title: a.title }));
});

/** All articles as cards (hub). */
export const getGuideCards = createServerFn({ method: "GET" }).handler(async (): Promise<GuideCard[]> => {
  const { ARTICLES } = await import("@/components/krabi-guide/articles");
  return ARTICLES.map(toCard);
});

/** One full article + related cards + gallery + head data. `null` for an unknown slug (the route throws notFound). */
export const getGuideArticle = createServerFn({ method: "GET" })
  .validator((input: unknown) => z.object({ slug: z.string().min(1).max(120), lang: langSchema }).parse(input))
  .handler(async ({ data }) => {
    const { CATEGORY_LABEL, getArticle, readyGuideImages, relatedArticles } = await import("@/components/krabi-guide/articles");
    const { guideArticleJsonLd } = await import("@/components/secret-islands/seo");
    const a = getArticle(data.slug);
    if (!a) return null;
    const gallery = readyGuideImages(a).map((i) => i.src);
    return {
      article: a,
      related: relatedArticles(a).map(toCard),
      gallery,
      head: {
        title: a.title[data.lang],
        description: a.metaDescription[data.lang],
        image: a.image,
        updated: a.updated,
        jsonLd: guideArticleJsonLd(data.lang, { ...a, gallery }, CATEGORY_LABEL[a.category][data.lang]) as unknown as JsonLd,
      },
    };
  });

/** Up to 4 articles that point to a tour (lead tour first). */
export const getTourArticleCards = createServerFn({ method: "GET" })
  .validator((input: unknown) => z.object({ tourId: z.string().min(1).max(80) }).parse(input))
  .handler(async ({ data }): Promise<GuideCard[]> => {
    const { ARTICLES } = await import("@/components/krabi-guide/articles");
    return ARTICLES.filter((a) => a.tourIds.includes(data.tourId))
      .sort((a, b) => a.tourIds.indexOf(data.tourId) - b.tourIds.indexOf(data.tourId))
      .slice(0, 4)
      .map(toCard);
  });

/** JSON-LD for the hub head. */
export const getGuideHubJsonLd = createServerFn({ method: "GET" })
  .validator((input: unknown) => z.object({ lang: langSchema }).parse(input))
  .handler(async ({ data }): Promise<JsonLd> => {
    const { ARTICLES } = await import("@/components/krabi-guide/articles");
    const { guideHubJsonLd } = await import("@/components/secret-islands/seo");
    return guideHubJsonLd(data.lang, { title: HUB_META.title[data.lang], description: HUB_META.description[data.lang] }, ARTICLES) as unknown as JsonLd;
  });
