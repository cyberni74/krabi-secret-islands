import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const str = (max: number) => z.string().max(max);

const draftSchema = z.object({
  mode: z.enum(["preset", "custom"]),
  tourId: str(80).nullable(),
  duration: str(20),
  islands: z.array(str(40)).max(12),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullable(),
  slot: str(20).nullable(),
  guests: z.number().int().min(1).max(5),
  kids: z.number().int().min(0).max(5),
  food: z.array(str(40)).max(20),
  drinks: z.array(str(40)).max(20),
  extras: z.array(str(40)).max(20),
  name: z.string().trim().min(2).max(120),
  email: str(200),
  phone: str(60),
  hotel: str(200),
  wishes: str(2000),
  occasion: str(40).nullable(),
});

const submissionSchema = z.object({
  ref: z.string().regex(/^KSI-\d{6}-[A-Z0-9]{4}$/),
  lang: z.enum(["de", "en", "zh", "ko", "ja"]),
  channel: z.enum(["wa", "mail"]),
  draft: draftSchema,
  /** Honeypot – real users never fill it. */
  website: z.string().max(0).optional(),
});

export type BookingSubmission = z.infer<typeof submissionSchema>;

/** Public: stores a booking request (and e-mails the operator). Never throws to the client. */
export const submitBookingRequest = createServerFn({ method: "POST" })
  .validator((input: unknown) => submissionSchema.parse(input))
  .handler(async ({ data }) => {
    if (!data.draft.email.trim() && !data.draft.phone.trim()) return { ok: false as const, error: "contact-missing" };
    const { storeBookingRequest } = await import("./booking-requests.server");
    try {
      return await storeBookingRequest(data);
    } catch (err) {
      console.error("[booking] store failed", err);
      return { ok: false as const, error: "store-failed" };
    }
  });

const STATUSES = ["new", "contacted", "confirmed", "declined", "done"] as const;
export type BookingStatus = (typeof STATUSES)[number];

/** Admin only: list stored booking requests. */
export const listBookingRequests = createServerFn({ method: "GET" })
  .handler(async () => {
    const { requireAdminSession } = await import("./admin-session.server");
    requireAdminSession();
    const { listBookingRows } = await import("./booking-requests.server");
    return listBookingRows();
  });

/** Admin only: change status / internal note of a request. */
export const updateBookingRequest = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z.object({ id: z.string().max(64), status: z.enum(STATUSES), note: z.string().max(2000).nullable() }).parse(input),
  )
  .handler(async ({ data }) => {
    const { requireAdminSession } = await import("./admin-session.server");
    requireAdminSession();
    const { updateBookingRow } = await import("./booking-requests.server");
    await updateBookingRow(data.id, data.status, data.note);
    return { ok: true };
  });

/** Public: records a WhatsApp question sent from a site button, before WhatsApp opens. */
export const recordWhatsAppInquiry = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z
      .object({
        text: z.string().trim().min(1).max(1000),
        lang: z.enum(["de", "en", "zh", "ko", "ja"]),
        source: z.string().trim().min(1).max(80),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { storeWhatsAppInquiry } = await import("./booking-requests.server");
    try {
      return await storeWhatsAppInquiry(data);
    } catch (err) {
      console.error("[booking] whatsapp store failed", err);
      return { ok: false as const, error: "store-failed" };
    }
  });

/** Admin only: enter a request that came in outside the site, e.g. on WhatsApp. */
export const createManualRequest = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z
      .object({
        name: z.string().trim().min(2).max(120),
        phone: z.string().trim().max(60).nullable(),
        email: z.string().trim().max(200).nullable(),
        lang: z.enum(["de", "en", "zh", "ko", "ja"]),
        tour_title: z.string().trim().min(1).max(200),
        tour_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullable(),
        guests: z.number().int().min(0).max(50),
        total_thb: z.number().int().min(0).max(10_000_000),
        message: z.string().max(4000),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { requireAdminSession } = await import("./admin-session.server");
    requireAdminSession();
    const { storeManualRequest } = await import("./booking-requests.server");
    return storeManualRequest(data);
  });
