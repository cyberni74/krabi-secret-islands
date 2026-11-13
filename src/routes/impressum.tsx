import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/krabi-guide/legal-page";
import { validateDetailLangSearch } from "@/components/secret-islands/lang-context";
import { legalHead } from "@/components/secret-islands/tour-seo";

export const Route = createFileRoute("/impressum")({
  validateSearch: validateDetailLangSearch,
  head: ({ match }) => legalHead("imprint", match.search.lang && match.search.lang !== "de" ? "en" : "de"),
  component: ImpressumRoute,
});

function ImpressumRoute() {
  return <LegalPage kind="imprint" />;
}
