import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { BookingModal } from "./booking";
import { AuroraBackground, ScrollProgress } from "./fx";
import { Lightbox, TourModal } from "./modals";
import { Faq, FinalCta, Footer, LongtailFaq, Reviews } from "./sections-bottom";
import { DroneFeature, FishingSection, Gallery, Tours } from "./sections-mid";
import { BottomBar, Comparison, Header, Hero } from "./sections-top";
import { LANGS, REVIEWS_VERIFIED, type Lang } from "./content";

const LANDING_LANGS: Lang[] = LANGS.map((l) => l.id);
import { LangBoundary, LangSuggestBanner, useHtmlLang } from "./lang";

/** `urlLang` = validated `?lang=` search param (undefined = German default URL). */
export function SecretIslandsPage({ urlLang }: { urlLang?: Lang }) {
  return (
    <LangBoundary urlLang={urlLang}>
      <MotionConfig reducedMotion="user">
        <PageBody />
      </MotionConfig>
    </LangBoundary>
  );
}

function PageBody(): ReactNode {
  useHtmlLang();

  return (
    <div className="relative isolate min-h-dvh overflow-x-clip pb-24 font-jakarta text-white antialiased [scroll-behavior:smooth]">
      <AuroraBackground />
      <ScrollProgress />
      <Header />
      <LangSuggestBanner available={LANDING_LANGS} />
      <main>
        <Hero />
        <Comparison />
        <Tours />
        <FishingSection />
        <DroneFeature />
        <Gallery />
        {REVIEWS_VERIFIED ? <Reviews /> : null}
        <LongtailFaq />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <BottomBar />
      <BookingModal />
      <TourModal />
      <Lightbox />
    </div>
  );
}
