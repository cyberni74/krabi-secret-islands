import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/** Whether the visitor holds a valid admin session, and whether ADMIN_PASSWORD is set at all. */
export const getAdminState = createServerFn({ method: "GET" }).handler(async () => {
  const { adminConfigured, isAdmin } = await import("./admin-session.server");
  return { configured: adminConfigured(), admin: isAdmin() };
});

export const adminLogin = createServerFn({ method: "POST" })
  .validator((input: unknown) => z.object({ password: z.string().min(1).max(200) }).parse(input))
  .handler(async ({ data }) => {
    const { loginAdmin } = await import("./admin-session.server");
    // Small fixed delay slows down password guessing.
    await new Promise((r) => setTimeout(r, 400));
    return { ok: loginAdmin(data.password) };
  });

export const adminLogout = createServerFn({ method: "POST" }).handler(async () => {
  const { logoutAdmin } = await import("./admin-session.server");
  logoutAdmin();
  return { ok: true };
});
