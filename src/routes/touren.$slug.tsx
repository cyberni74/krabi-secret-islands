import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { GuideShell } from "@/components/krabi-guide/guide-ui";
import { TourLandingPage } from "@/components/krabi-guide/tour-page";
import { btn } from "@/components/secret-islands/fx";
import { validateLangSearch } from "@/components/secret-islands/lang-context";
import { getTourPage } from "@/components/secret-islands/tour-pages";
import { tourHead, tourPageLang } from "@/components/secret-islands/tour-seo";

export const Route = createFileRoute("/touren/$slug")({
  // Tour pages exist in German + English: `?lang=en` is the English URL; zh/ko/ja show the English text and canonicalise to it.
  validateSearch: validateLangSearch,
  // Unknown slug → 404 (not a crash). Only the slug crosses the wire, the copy is bundled.
  loader: ({ params }) => {
    if (!getTourPage(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData, match }) => tourHead(loaderData?.slug ?? "", tourPageLang(match.search)),
  component: TourRoute,
  notFoundComponent: TourNotFound,
});

function TourRoute() {
  const { slug } = Route.useLoaderData();
  return <TourLandingPage slug={slug} />;
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
