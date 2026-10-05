import { useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { LANGS, type Lang } from "./content";
import { LangOverrideContext, parseLang } from "./lang-context";
import { suggestLang, useLang, useSI } from "./store";

/**
 * Makes the page render in the URL language (`?lang=`; no parameter = German) on the server and during hydration,
 * then hands over to the client store. The page language NEVER depends on the browser language: one URL = one language
 * (stable for Google and faster). A dismissible banner (<LangSuggestBanner>) offers the matching language version.
 */
export function LangBoundary({ urlLang, children }: { urlLang?: Lang; children: ReactNode }) {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const next = urlLang ?? "de";
    if (next !== useSI.getState().lang) useSI.setState({ lang: next });
    setSettled(true);
  }, [urlLang]);

  return <LangOverrideContext.Provider value={settled ? null : (urlLang ?? "de")}>{children}</LangOverrideContext.Provider>;
}

const SUGGEST_TEXT: Record<Lang, { label: string; native: string }> = {
  de: { label: "Auch auf Deutsch verfügbar", native: "Deutsch" },
  en: { label: "Also available in English", native: "English" },
  zh: { label: "提供中文版", native: "中文" },
  ko: { label: "한국어 버전 있음", native: "한국어" },
  ja: { label: "日本語版もあります", native: "日本語" },
};
const SUGGEST_DISMISS_KEY = "ksi-lang-suggest-dismissed";

/** Small dismissible hint with a link to the visitor's language version (only languages that exist for this page). */
export function LangSuggestBanner({ available }: { available: Lang[] }) {
  const current = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [suggested, setSuggested] = useState<Lang | null>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SUGGEST_DISMISS_KEY)) return;
    } catch {
      /* storage unavailable */
    }
    const s = suggestLang();
    if (s && s !== current && available.includes(s)) setSuggested(s);
    else setSuggested(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, available.join(",")]);

  if (!suggested) return null;
  const href = suggested === "de" ? pathname : `${pathname}?lang=${suggested}`;
  const txt = SUGGEST_TEXT[suggested];
  return (
    <div className="pointer-events-none fixed inset-x-0 top-[5.4rem] z-40 flex justify-center px-3" role="region" aria-label={txt.label}>
      <div className="si-glass-strong pointer-events-auto flex max-w-full items-center gap-3 rounded-full py-1.5 pl-4 pr-1.5 text-[13px] text-slate-100 shadow-lg">
        <span className="min-w-0 truncate">{txt.label}</span>
        <a href={href} lang={suggested} className="shrink-0 rounded-full bg-si-cyan px-3 py-1.5 font-bold text-si-navy">
          {txt.native}
        </a>
        <button
          type="button"
          aria-label="×"
          className="grid size-8 shrink-0 place-items-center rounded-full text-slate-300 hover:bg-white/10"
          onClick={() => {
            try {
              sessionStorage.setItem(SUGGEST_DISMISS_KEY, "1");
            } catch {
              /* storage unavailable */
            }
            setSuggested(null);
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

/** Language from the current URL (`?lang=`), undefined for the German default URL. */
export function useUrlLang(): Lang | undefined {
  return useRouterState({ select: (s) => parseLang((s.location.search as Record<string, unknown>).lang) });
}

/** Switch language and keep the URL language-addressable (`?lang=en`, German = no parameter). */
export function useSwitchLang() {
  const router = useRouter();
  const setLang = useSI((s) => s.setLang);
  return (l: Lang) => {
    setLang(l);
    const loc = router.state.location;
    const params = new URLSearchParams(loc.searchStr);
    if (l === "de") params.delete("lang");
    else params.set("lang", l);
    const qs = params.toString();
    const href = `${loc.pathname}${qs ? `?${qs}` : ""}${loc.hash ? `#${loc.hash}` : ""}`;
    if (href !== loc.href) void router.navigate({ href, replace: true, resetScroll: false });
  };
}

/** Keeps <html lang> in sync with the visible language (the SSR <html> tag comes from __root). */
export function useHtmlLang() {
  const lang = useLang();
  useEffect(() => {
    document.documentElement.lang = LANGS.find((l) => l.id === lang)?.html ?? lang;
  }, [lang]);
}
