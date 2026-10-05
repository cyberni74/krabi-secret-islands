import { createFileRoute } from "@tanstack/react-router";
import { GuideHub } from "@/components/krabi-guide/guide-hub";
import { validateLangSearch } from "@/components/secret-islands/lang-context";
import { HUB_META } from "@/components/krabi-guide/guide-meta";
import { getGuideCards, getGuideHubJsonLd } from "@/lib/server/guide-data";
import { BRAND_HEAD_LINKS, DEFAULT_OG_IMAGE, GUIDE_PATH, ROBOTS_LARGE_IMAGES, langLinks, pageUrl, socialMeta } from "@/components/secret-islands/seo";

export const Route = createFileRoute("/krabi-guide/")({
  // Guide texts exist in German + English: `?lang=en` is the English URL; zh/ko/ja show the English text and canonicalise to it.
  validateSearch: validateLangSearch,
  loaderDeps: ({ search }) => ({ lang: search.lang && search.lang !== "de" ? ("en" as const) : ("de" as const) }),
  // Cards + JSON-LD come from server functions: the article data module never reaches the client bundle.
  loader: async ({ deps }) => {
    const [cards, jsonLd] = await Promise.all([getGuideCards(), getGuideHubJsonLd({ data: { lang: deps.lang } })]);
    return { cards, jsonLd };
  },
  head: ({ match, loaderData }) => {
    const lang = match.search.lang && match.search.lang !== "de" ? "en" : "de";
    const title = HUB_META.title[lang];
    const description = HUB_META.description[lang];
    const url = pageUrl(GUIDE_PATH, lang);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "theme-color", content: "#0a192f" },
        ROBOTS_LARGE_IMAGES,
        ...socialMeta({ title, description, url, image: DEFAULT_OG_IMAGE.src, imageSize: DEFAULT_OG_IMAGE, imageAlt: DEFAULT_OG_IMAGE.alt[lang === "de" ? "de" : "en"], type: "website", lang }),
        ...(loaderData ? [{ "script:ld+json": loaderData.jsonLd }] : []),
      ],
      links: [...langLinks(GUIDE_PATH, lang, ["de", "en"]), ...BRAND_HEAD_LINKS],
    };
  },
  component: HubRoute,
});

function HubRoute() {
  const { cards } = Route.useLoaderData();
  return <GuideHub cards={cards} />;
}
