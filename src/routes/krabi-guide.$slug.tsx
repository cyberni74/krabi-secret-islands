import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { getArticle } from "@/components/krabi-guide/articles";
import { GuideArticlePage } from "@/components/krabi-guide/guide-article";
import { GuideShell } from "@/components/krabi-guide/guide-ui";
import { btn } from "@/components/secret-islands/fx";
import { validateLangSearch } from "@/components/secret-islands/lang-context";
import { BRAND_HEAD_LINKS, GUIDE_PATH, ROBOTS_LARGE_IMAGES, absUrl, guideArticleJsonLd, langLinks, pageUrl, socialMeta } from "@/components/secret-islands/seo";

export const Route = createFileRoute("/krabi-guide/$slug")({
  // Guide texts exist in German + English: `?lang=en` is the English URL; zh/ko/ja show the English text and canonicalise to it.
  validateSearch: validateLangSearch,
  loaderDeps: ({ search }) => ({ lang: search.lang && search.lang !== "de" ? ("en" as const) : ("de" as const) }),
  // The article data (≈500 KB of text) is loaded with a dynamic import: it stays out of the entry bundle (every page) and is
  // only fetched on guide pages. Only what <head> needs crosses the wire; the article text itself is bundled with the page chunk.
  loader: async ({ params, deps }) => {
    const { CATEGORY_LABEL, getArticle, readyGuideImages } = await import("@/components/krabi-guide/articles");
    const a = getArticle(params.slug);
    if (!a) throw notFound();
    const lang = deps.lang;
    return {
      slug: a.slug,
      title: a.title[lang],
      description: a.metaDescription[lang],
      image: a.image,
      updated: a.updated,
      jsonLd: guideArticleJsonLd(lang, { ...a, gallery: readyGuideImages(a).map((i) => i.src) }, CATEGORY_LABEL[a.category][lang]),
    };
  },
  head: ({ loaderData, match }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artikel nicht gefunden – Krabi Insider Guide" },
          { name: "robots", content: "noindex" },
          { name: "theme-color", content: "#0a192f" },
        ],
        links: BRAND_HEAD_LINKS,
      };
    }
    const lang = match.search.lang && match.search.lang !== "de" ? "en" : "de";
    const path = `${GUIDE_PATH}/${loaderData.slug}`;
    const { title, description } = loaderData;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "theme-color", content: "#0a192f" },
        ROBOTS_LARGE_IMAGES,
        ...socialMeta({ title, description, url: pageUrl(path, lang), image: loaderData.image, imageAlt: title, type: "article", lang, authorUrl: absUrl("/ueber-uns") }),
        { property: "article:modified_time", content: loaderData.updated },
        { "script:ld+json": loaderData.jsonLd },
      ],
      links: [...langLinks(path, lang, ["de", "en"]), ...BRAND_HEAD_LINKS],
    };
  },
  component: ArticleRoute,
  notFoundComponent: ArticleNotFound,
});

function ArticleRoute() {
  const { slug } = Route.useLoaderData();
  const article = getArticle(slug)!;
  return <GuideArticlePage article={article} />;
}

function ArticleNotFound() {
  return (
    <GuideShell>
      <section className="mx-auto max-w-2xl px-4 pb-10 pt-32 text-center">
        <h1 className="text-3xl font-extrabold">Artikel nicht gefunden</h1>
        <p className="mt-3 text-slate-300">
          Dieser Artikel existiert nicht (mehr). Im Insider Guide finden Sie alle Artikel zu Krabis Inseln. / This
          article doesn’t exist – browse all articles in the Insider Guide.
        </p>
        <Link to="/krabi-guide" className={`${btn.primary} mt-6`}>
          Krabi Insider Guide
        </Link>
      </section>
    </GuideShell>
  );
}
