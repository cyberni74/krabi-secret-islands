// One-off astronomical calculation (NOAA solar position algorithm) of sunrise/sunset/civil dusk for Ao Nang, Krabi.
// Run: node scripts/gen-sunset.mjs  -> writes src/generated/sunset-times.json (1st and 15th of each month, UTC+7).
import { writeFileSync } from "node:fs";

const LAT = 8.03, LON = 98.82, TZ = 7, YEAR = 2026;
const rad = (d) => (d * Math.PI) / 180, deg = (r) => (r * 180) / Math.PI;

function julianDay(y, m, d) {
  if (m <= 2) { y -= 1; m += 12; }
  const A = Math.floor(y / 100), B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
}

/** Minutes after local midnight when the sun's centre reaches `zenith` degrees (morning = sunrise side, evening = sunset side). */
function solarEvent(y, m, d, zenith, evening) {
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

const hhmm = (min) => {
  const r = Math.round(min);
  return `${String(Math.floor(r / 60)).padStart(2, "0")}:${String(r % 60).padStart(2, "0")}`;
};

const out = { location: "Ao Nang, Krabi (8.03°N, 98.82°E)", timezone: "UTC+7", year: YEAR, method: "NOAA solar position algorithm, sunset at zenith 90.833°, civil dusk at 96°", rows: [] };
for (let m = 1; m <= 12; m++) {
  for (const d of [1, 15]) {
    out.rows.push({
      date: `${YEAR}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
      month: m,
      day: d,
      sunrise: hhmm(solarEvent(YEAR, m, d, 90.833, false)),
      sunset: hhmm(solarEvent(YEAR, m, d, 90.833, true)),
      civilDusk: hhmm(solarEvent(YEAR, m, d, 96, true)),
    });
  }
}
writeFileSync("src/generated/sunset-times.json", JSON.stringify(out, null, 2) + "\n");
console.log(out.rows.map((r) => `${r.date} rise ${r.sunrise} set ${r.sunset} dusk ${r.civilDusk}`).join("\n"));
