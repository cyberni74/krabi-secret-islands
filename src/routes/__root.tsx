import { createRootRoute, HeadContent, Link, Outlet, Scripts, useRouterState } from "@tanstack/react-router";
import { GuideNavContext } from "@/components/krabi-guide/guide-nav-context";
import { QueryProvider } from "@/components/query-provider";
import { getGuideNav } from "@/lib/server/guide-data";
import appCss from "../styles.css?url";
import fontLatin from "@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2?url";

const HTML_LANG: Record<string, string> = { de: "de", en: "en", zh: "zh-Hans", ko: "ko", ja: "ja" };

export const Route = createRootRoute({
  // Article list for the footers (slug/category/short title only, ≈5 KB): fetched once per SSR request and never refetched on client navigation.
  loader: () => getGuideNav(),
  staleTime: Infinity,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0a192f" },
    ],
    links: [
      { rel: "preload", href: fontLatin, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/icons/icon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],

  }),
  component: Root,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center font-jakarta">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">404</p>
      <h1 className="text-3xl font-extrabold">Diese Seite gibt es nicht.</h1>
      <Link to="/" className="rounded-full bg-si-cyan px-6 py-3 font-bold text-si-navy">
        Zur Startseite
      </Link>
    </main>
  );
}

function Root() {
  const guideNav = Route.useLoaderData();
  const langParam = useRouterState({ select: (s) => String((s.location.search as { lang?: string }).lang ?? "de") });
  return (
    <html lang={HTML_LANG[langParam] ?? "de"} className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryProvider>
          <GuideNavContext.Provider value={guideNav}>
            <Outlet />
          </GuideNavContext.Provider>
        </QueryProvider>
        <Scripts />
      </body>
    </html>
  );
}
