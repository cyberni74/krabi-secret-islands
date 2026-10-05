import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { GuideShell } from "@/components/krabi-guide/guide-ui";
import { TourLandingPage } from "@/components/krabi-guide/tour-page";
import { btn } from "@/components/secret-islands/fx";
import { validateLangSearch } from "@/components/secret-islands/lang-context";
import { getTourArticleCards } from "@/lib/server/guide-data";
import { getTourPage } from "@/components/secret-islands/tour-pages";
import { tourHead, tourPageLang } from "@/components/secret-islands/tour-seo";

export const Route = createFileRoute("/touren/$slug")({
  // Tour pages exist in German + English: `?lang=en` is the English URL; zh/ko/ja show the English text and canonicalise to it.
  validateSearch: validateLangSearch,
  // Unknown slug → 404 (not a crash). The tour copy is bundled; only the ≤4 matching guide cards come from the server.
  loader: async ({ params }) => {
    const found = getTourPage(params.slug);
    if (!found) throw notFound();
    const articles = await getTourArticleCards({ data: { tourId: found.tour.id } });
    return { slug: params.slug, articles };
  },
  head: ({ loaderData, match }) => tourHead(loaderData?.slug ?? "", tourPageLang(match.search)),
  component: TourRoute,
  notFoundComponent: TourNotFound,
});

function TourRoute() {
  const { slug, articles } = Route.useLoaderData();
  return <TourLandingPage slug={slug} articles={articles} />;
}

function TourNotFound() {
  return (
    <GuideShell>
      <section className="mx-auto max-w-2xl px-4 pb-10 pt-32 text-center">
        <h1 className="text-3xl font-extrabold">Tour nicht gefunden</h1>
        <p className="mt-3 text-slate-300">
          Diese Tour gibt es nicht (mehr). Alle privaten Touren finden Sie in der Übersicht. / This tour doesn’t exist – browse all private tours in the overview.
        </p>
        <Link to="/touren" className={`${btn.primary} mt-6`}>
          Alle Touren / All tours
        </Link>
      </section>
    </GuideShell>
  );
}
