import { recordWhatsAppInquiry } from "@/lib/server/booking-requests";
import type { Lang } from "./content";

/** Stores a WhatsApp question before the chat opens. Fire and forget: a failed save never blocks WhatsApp. */
export function trackWhatsAppInquiry(text: string, lang: Lang, source: string) {
  void recordWhatsAppInquiry({ data: { text, lang, source } }).catch(() => undefined);
}
