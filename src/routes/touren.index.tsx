import { createFileRoute } from "@tanstack/react-router";
import { ToursHubPage } from "@/components/krabi-guide/tour-page";
import { validateLangSearch } from "@/components/secret-islands/lang-context";
import { tourPageLang, toursHubHead } from "@/components/secret-islands/tour-seo";

export const Route = createFileRoute("/touren/")({
  // Tour pages exist in German + English: `?lang=en` is the English URL; zh/ko/ja show the English text and canonicalise to it.
  validateSearch: validateLangSearch,
  head: ({ match }) => toursHubHead(tourPageLang(match.search)),
  component: ToursHubPage,
});
