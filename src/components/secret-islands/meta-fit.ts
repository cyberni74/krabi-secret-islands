/**
 * Document titles land in 55–60 characters and descriptions in 150–155 when the
 * source is close enough to trim or extend with a neutral closer. Visible headings
 * stay as written; only the `<title>` / meta description passed through here change.
 */

const TITLE_SUFFIXES = [" | Krabi Secret Islands", " | Krabi Insider Guide", " | Krabi Boat Guide", " | Insider Guide", " | Krabi Guide", " | Krabi"];

export function documentTitle(base: string): string {
  const clean = base.replace(/\s+/g, " ").trim();
  if (clean.length >= 55 && clean.length <= 60) return clean;
  if (clean.length > 60) {
    const cut = clean.slice(0, 60);
    const space = cut.lastIndexOf(" ");
    const trimmed = (space >= 50 ? cut.slice(0, space) : cut).replace(/[\s|:–—,-]+$/g, "").trim();
    return trimmed.length >= 40 ? trimmed : cut.trim();
  }
  let best = clean;
  for (const suffix of TITLE_SUFFIXES) {
    const label = suffix.slice(3).toLowerCase();
    if (clean.toLowerCase().includes(label)) continue;
    const next = `${clean}${suffix}`;
    if (next.length >= 55 && next.length <= 60) return next;
    if (next.length < 55 && next.length > best.length) best = next;
  }
  return best;
}

export function documentDescription(base: string): string {
  const clean = base.replace(/\s+/g, " ").trim();
  if (clean.length >= 150 && clean.length <= 155) return clean;
  if (clean.length > 155) {
    const cut = clean.slice(0, 155);
    const space = cut.lastIndexOf(" ");
    const trimmed = (space >= 140 ? cut.slice(0, space) : cut).replace(/[\s,;:–—-]+$/g, "").trim();
    return trimmed.length >= 140 ? trimmed : cut.trim();
  }
  return clean;
}
