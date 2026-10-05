import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { GuideArticlePage } from "@/components/krabi-guide/guide-article";
import { GuideShell } from "@/components/krabi-guide/guide-ui";
import { btn } from "@/components/secret-islands/fx";
import { validateLangSearch } from "@/components/secret-islands/lang-context";
import { getGuideArticle } from "@/lib/server/guide-data";
import { BRAND_HEAD_LINKS, GUIDE_PATH, ROBOTS_LARGE_IMAGES, absUrl, langLinks, pageUrl, socialMeta } from "@/components/secret-islands/seo";

export const Route = createFileRoute("/krabi-guide/$slug")({
  // Guide texts exist in German + English: `?lang=en` is the English URL; zh/ko/ja show the English text and canonicalise to it.
  validateSearch: validateLangSearch,
  loaderDeps: ({ search }) => ({ lang: search.lang && search.lang !== "de" ? ("en" as const) : ("de" as const) }),
  // The article (text, FAQ, related cards, JSON-LD) comes from a server function: it is rendered into the SSR HTML and ships as
  // loader data of THIS article only – the article data module itself is never part of a client chunk.
  loader: async ({ params, deps }) => {
    const data = await getGuideArticle({ data: { slug: params.slug, lang: deps.lang } });
    if (!data) throw notFound();
    return data;
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
    const path = `${GUIDE_PATH}/${loaderData.article.slug}`;
    const { title, description, image, updated, jsonLd } = loaderData.head;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "theme-color", content: "#0a192f" },
        ROBOTS_LARGE_IMAGES,
        ...socialMeta({ title, description, url: pageUrl(path, lang), image, imageAlt: title, type: "article", lang, authorUrl: absUrl("/ueber-uns") }),
        { property: "article:modified_time", content: updated },
        { "script:ld+json": jsonLd },
      ],
      links: [...langLinks(path, lang, ["de", "en"]), ...BRAND_HEAD_LINKS],
    };
  },
  component: ArticleRoute,
  notFoundComponent: ArticleNotFound,
});

function ArticleRoute() {
  const data = Route.useLoaderData();
  return <GuideArticlePage data={data} />;
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
