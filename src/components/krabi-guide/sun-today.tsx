import { useEffect, useState } from "react";
import { useGuideLang } from "./guide-helpers";

/**
 * Today's sunrise and sunset for Ao Nang (8.03°N, 98.82°E, UTC+7), computed in the browser with the same NOAA
 * algorithm as scripts/gen-sunset.mjs. Rendered only after mount, so the server HTML carries no time that could be stale.
 */
const LAT = 8.03, LON = 98.82, TZ = 7;
const rad = (d: number) => (d * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;

function julianDay(y: number, m: number, d: number) {
  if (m <= 2) { y -= 1; m += 12; }
  const A = Math.floor(y / 100), B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
}

function solarEvent(y: number, m: number, d: number, zenith: number, evening: boolean) {
  const jd = julianDay(y, m, d);
  const T = (jd - 2451545.0) / 36525;
  const L0 = (280.46646 + T * (36000.76983 + T * 0.0003032)) % 360;
  const M = 357.52911 + T * (35999.05029 - 0.0001537 * T);
  const e = 0.016708634 - T * (0.000042037 + 0.0000001267 * T);
  const C = Math.sin(rad(M)) * (1.914602 - T * (0.004817 + 0.000014 * T)) + Math.sin(rad(2 * M)) * (0.019993 - 0.000101 * T) + Math.sin(rad(3 * M)) * 0.000289;
  const trueLong = L0 + C;
  const omega = 125.04 - 1934.136 * T;
  const lambda = trueLong - 0.00569 - 0.00478 * Math.sin(rad(omega));
  const eps0 = 23 + (26 + (21.448 - T * (46.815 + T * (0.00059 - T * 0.001813))) / 60) / 60;
  const eps = eps0 + 0.00256 * Math.cos(rad(omega));
  const decl = deg(Math.asin(Math.sin(rad(eps)) * Math.sin(rad(lambda))));
  const y2 = Math.tan(rad(eps / 2)) ** 2;
  const eqTime = 4 * deg(y2 * Math.sin(2 * rad(L0)) - 2 * e * Math.sin(rad(M)) + 4 * e * y2 * Math.sin(rad(M)) * Math.cos(2 * rad(L0)) - 0.5 * y2 * y2 * Math.sin(4 * rad(L0)) - 1.25 * e * e * Math.sin(2 * rad(M)));
  const ha = deg(Math.acos(Math.cos(rad(zenith)) / (Math.cos(rad(LAT)) * Math.cos(rad(decl))) - Math.tan(rad(LAT)) * Math.tan(rad(decl))));
  const noon = 720 - 4 * LON - eqTime + TZ * 60;
  return evening ? noon + 4 * ha : noon - 4 * ha;
}

const hhmm = (min: number) => {
  const r = Math.round(min);
  return `${String(Math.floor(r / 60)).padStart(2, "0")}:${String(r % 60).padStart(2, "0")}`;
};

function todayInAoNang() {
  const local = new Date(Date.now() + TZ * 3600_000);
  return { y: local.getUTCFullYear(), m: local.getUTCMonth() + 1, d: local.getUTCDate() };
}

export function SunToday() {
  const de = useGuideLang() === "de";
  const [times, setTimes] = useState<{ rise: string; set: string; label: string } | null>(null);
  useEffect(() => {
    const { y, m, d } = todayInAoNang();
    const label = de
      ? `${String(d).padStart(2, "0")}.${String(m).padStart(2, "0")}.${y}`
      : `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    setTimes({ rise: hhmm(solarEvent(y, m, d, 90.833, false)), set: hhmm(solarEvent(y, m, d, 90.833, true)), label });
  }, [de]);
  if (!times) return null;
  return (
    <aside className="si-glass relative mt-6 rounded-2xl p-5" aria-live="polite">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-si-gold">{de ? "Heute in Ao Nang" : "Today in Ao Nang"}</p>
      <p className="mt-1.5 text-lg font-bold text-white">
        {de ? `Sonnenuntergang ca. ${times.set} Uhr` : `Sunset approx. ${times.set}`}
        <span className="ml-2 text-base font-semibold text-slate-300">
          {de ? `· Sonnenaufgang ca. ${times.rise} Uhr` : `· sunrise approx. ${times.rise}`}
        </span>
      </p>
      <p className="mt-1 text-sm text-slate-400">
        {de ? `Stand ${times.label}, Ortszeit Thailand. Die Zeit wird für jeden Besuch neu berechnet.` : `As of ${times.label}, Thailand local time. Recalculated on every visit.`}
      </p>
    </aside>
  );
}
