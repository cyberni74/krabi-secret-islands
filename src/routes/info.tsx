import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/krabi-guide/info-page";
import { validateLangSearch } from "@/components/secret-islands/lang-context";
import { infoHead, tourPageLang } from "@/components/secret-islands/tour-seo";

export const Route = createFileRoute("/info")({
  // German + English like the tour pages: `?lang=en` is the English URL; zh/ko/ja show English and canonicalise to it.
  validateSearch: validateLangSearch,
  head: ({ match }) => infoHead(tourPageLang(match.search)),
  component: InfoPage,
});
