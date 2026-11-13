import { createFileRoute } from "@tanstack/react-router";
import { LEGACY_LOCAL_IMAGES } from "@/components/secret-islands/image-map";

/**
 * New English SEO names for two owner photos that still live under their previous
 * /public/images filenames until a full git mv is deployed. When the new static
 * file exists, Vercel serves it and this handler is not reached. When only the
 * previous file is in the deployment, we serve it at the new URL with 200.
 */
const LOCAL_RENAME_SOURCES: Record<string, string> = {
  "private-speedboat-krabi.webp": "ao-nang-boat-tour-krabi-secret-islands-privates-speedboat.webp",
  "private-speedboat-krabi-900.webp": "ao-nang-boat-tour-krabi-secret-islands-privates-speedboat-900.webp",
  "private-speedboat-krabi.jpg": "ao-nang-boat-tour-krabi-secret-islands-privates-speedboat.jpg",
  "koh-hong-island-private-tour.webp": "ao-nang-boat-tour-koh-hong-krabi-luftaufnahme-strand-lagune.webp",
  "koh-hong-island-private-tour-720.webp": "ao-nang-boat-tour-koh-hong-krabi-luftaufnahme-strand-lagune-720.webp",
};

function contentTypeFor(name: string): string {
  if (name.endsWith(".jpg") || name.endsWith(".jpeg")) return "image/jpeg";
  if (name.endsWith(".png")) return "image/png";
  return "image/webp";
}

/**
 * /images/<old-name> – only reached when no static file exists (Vercel serves /public first).
 * Renamed photos answer with a permanent redirect to the new file. Canonical new names that
 * are not yet on disk are served from the previous filename (same-origin fetch).
 */
export const Route = createFileRoute("/images/$file")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const source = LOCAL_RENAME_SOURCES[params.file];
        if (source) {
          const url = new URL(`/images/${source}`, request.url);
          const res = await fetch(url);
          if (!res.ok || !res.body) return new Response("Not found", { status: 404 });
          return new Response(res.body, {
            headers: {
              "content-type": res.headers.get("content-type") ?? contentTypeFor(params.file),
              "cache-control": "public, max-age=31536000, s-maxage=31536000, immutable",
            },
          });
        }
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
