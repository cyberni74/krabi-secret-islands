import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig(({ command, isPreview }) => ({
  server: { host: "0.0.0.0", port: 8080, strictPort: true },
  preview: { host: "127.0.0.1", port: 8081, strictPort: true },
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    // Vercel output only for production builds / preview.
    ...(command === "build" || isPreview
      ? [
          nitro({
            preset: "vercel",
            // Auto-registers server/middleware/* (308 trailing-slash redirect + edge cache headers).
            serverDir: "./server",
            vercel: {
              config: {
                // Vercel Image Optimization: /_vercel/image?url=…&w=…&q=75 (AVIF/WebP, cached for a year).
                images: {
                  sizes: [480, 800, 1200, 1600],
                  qualities: [75],
                  formats: ["image/avif", "image/webp"],
                  minimumCacheTTL: 31536000,
                  domains: [],
                  remotePatterns: [],
                },
              },
            },
            routeRules: {
              "/**": {
                headers: {
                  "x-content-type-options": "nosniff",
                  "referrer-policy": "strict-origin-when-cross-origin",
                  "x-frame-options": "SAMEORIGIN",
                  "permissions-policy": "camera=(), microphone=(), geolocation=(), payment=()",
                },
              },
              "/images/**": { headers: { "cache-control": "public, max-age=604800, stale-while-revalidate=86400" } },
              "/anfragen": { headers: { "x-robots-tag": "noindex, nofollow", "cache-control": "no-store" } },
            },
          }),
        ]
      : []),
    viteReact(),
  ],
}));
