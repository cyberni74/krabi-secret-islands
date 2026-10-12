import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/** Rating in half-star steps. */
const ratingSchema = z
  .number()
  .min(0.5)
  .max(5)
  .refine((n) => Math.round(n * 2) === n * 2, "half steps only");

export type PublicReview = { id: string; name: string; rating: number; text: string; date: string };
export type PublicReviews = { count: number; average: number; items: PublicReview[] };

/** Public: approved reviews + summary (average rounded to 1 decimal). */
export const getPublicReviews = createServerFn({ method: "GET" }).handler(async (): Promise<PublicReviews> => {
  const { approvedReviews } = await import("./guest-reviews.server");
  try {
    const rows = await approvedReviews();
    const count = rows.length;
    const average = count ? Math.round((rows.reduce((s, r) => s + r.rating, 0) / count) * 10) / 10 : 0;
    return {
      count,
      average,
      items: rows.slice(0, 20).map((r) => ({ id: r.id, name: r.name, rating: r.rating, text: r.text, date: r.created_at.slice(0, 10) })),
    };
  } catch (err) {
    console.error("[reviews] read failed", err);
    return { count: 0, average: 0, items: [] };
  }
});

/** Public, no sign-up: stores a review as "pending" (published after the operator approves it). */
export const submitGuestReview = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z
      .object({
        name: z.string().trim().min(2).max(60),
        rating: ratingSchema,
        text: z.string().trim().max(800),
        lang: z.enum(["de", "en", "zh", "ko", "ja"]),
        /** Honeypot – real users never fill it. */
        website: z.string().max(0).optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { addReview } = await import("./guest-reviews.server");
    try {
      return await addReview({ name: data.name, rating: data.rating, text: data.text, lang: data.lang });
    } catch (err) {
      console.error("[reviews] store failed", err);
      return { ok: false as const, error: "store-failed" };
    }
  });

/** Admin only: every review incl. pending. */
export const adminListGuestReviews = createServerFn({ method: "GET" }).handler(async () => {
  const { requireAdminSession } = await import("./admin-session.server");
  requireAdminSession();
  const { allReviews } = await import("./guest-reviews.server");
  return allReviews();
});

/** Admin only: approve / reject / delete. */
export const adminSetReviewStatus = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z.object({ id: z.string().uuid(), status: z.enum(["pending", "approved", "rejected", "delete"]) }).parse(input),
  )
  .handler(async ({ data }) => {
    const { requireAdminSession } = await import("./admin-session.server");
    requireAdminSession();
    const { setReviewStatus } = await import("./guest-reviews.server");
    await setReviewStatus(data.id, data.status);
    return { ok: true };
  });
