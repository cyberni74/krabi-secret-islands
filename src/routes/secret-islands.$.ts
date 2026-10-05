import { createFileRoute } from "@tanstack/react-router";

/** Old URLs from the time the site lived under /secret-islands: permanent redirect to the new paths. */
export const Route = createFileRoute("/secret-islands/$")({
  server: {
    handlers: {
      GET: ({ request, params }) => {
        const url = new URL(request.url);
        const rest = params._splat ?? "";
        const target = rest.startsWith("anfragen") ? "/anfragen" : "/";
        return new Response(null, { status: 301, headers: { location: `${target}${url.search}` } });
      },
    },
  },
});
