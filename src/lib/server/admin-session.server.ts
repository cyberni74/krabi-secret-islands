/**
 * Admin session for the booking inbox (/anfragen): one shared password from the env var
 * ADMIN_PASSWORD, kept in an HMAC-signed, httpOnly cookie. No user accounts, no auth tables.
 */
import { createHmac, timingSafeEqual } from "node:crypto";
import { deleteCookie, getCookie, setCookie } from "@tanstack/react-start/server";

const COOKIE = "ksi_admin";
const MAX_AGE_S = 60 * 60 * 24 * 30;

function secret(): string | null {
  const s = process.env.ADMIN_SESSION_SECRET?.trim() || process.env.ADMIN_PASSWORD?.trim();
  return s ? s : null;
}

function sign(payload: string, key: string) {
  return createHmac("sha256", key).update(payload).digest("base64url");
}

function safeEqual(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function adminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD?.trim());
}

export function isAdmin(): boolean {
  const key = secret();
  const raw = getCookie(COOKIE);
  if (!key || !raw) return false;
  const [exp, mac] = raw.split(".");
  if (!exp || !mac || !/^\d+$/.test(exp) || Number(exp) < Date.now()) return false;
  return safeEqual(mac, sign(exp, key));
}

export function requireAdminSession() {
  if (!isAdmin()) throw new Error("unauthorized");
}

export function loginAdmin(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD?.trim();
  const key = secret();
  if (!expected || !key || !safeEqual(password, expected)) return false;
  const exp = String(Date.now() + MAX_AGE_S * 1000);
  setCookie(COOKIE, `${exp}.${sign(exp, key)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_S,
  });
  return true;
}

export function logoutAdmin() {
  deleteCookie(COOKIE, { path: "/" });
}
