import { createFileRoute } from "@tanstack/react-router";
import { localizedPath, normalizeLocale } from "@/components/secret-islands/locale";

/** Old URLs from the time the site lived under /secret-islands: one hop to the current path, including the language prefix. */
export const Route = createFileRoute("/secret-islands/$")({
  server: {
    handlers: {
      GET: ({ request, params }) => {
        const url = new URL(request.url);
        const rest = params._splat ?? "";
        const bare = rest.startsWith("anfragen") ? "/anfragen" : "/";
        const paramsOut = new URLSearchParams(url.search);
        const lang = normalizeLocale(paramsOut.get("lang"), bare);
        paramsOut.delete("lang");
        const path = bare === "/anfragen" ? bare : localizedPath(bare, lang);
        const qs = paramsOut.toString();
        return new Response(null, {
          status: 301,
          headers: { location: qs ? `${path}?${qs}` : path, "cache-control": "public, max-age=3600" },
        });
      },
    },
  },
});
