import { createContext, useContext } from "react";
import type { GuideNavItem } from "./guide-meta";

/** All guide articles (slug, category, short title) – loaded once by the root route, used by the footers. */
export const GuideNavContext = createContext<GuideNavItem[]>([]);

export function useGuideNav(): GuideNavItem[] {
  return useContext(GuideNavContext);
}
