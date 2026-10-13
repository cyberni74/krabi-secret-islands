import { createFileRoute } from "@tanstack/react-router";
import { LEGACY_LOCAL_IMAGES } from "@/components/secret-islands/image-map";

/**
 * /images/<old-name> – only reached when no static file exists (Vercel serves /public first).
 * Renamed photos answer with a permanent redirect to the new "krabi-boat-tour-…" file.
 */
export const Route = createFileRoute("/images/$file")({
  server: {
    handlers: {
      GET: ({ params }) => {
        const next = LEGACY_LOCAL_IMAGES[params.file];
        if (!next) return new Response("Not found", { status: 404 });
        return new Response(null, {
          status: 301,
          headers: { location: `/images/${next}`, "cache-control": "public, max-age=86400" },
        });
      },
    },
  },
});
