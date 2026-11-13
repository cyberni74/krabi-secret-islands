import { cn } from "@/lib/utils";
import { BRAND } from "./content";

/** Visible profile links. Same URLs as the LocalBusiness `sameAs` list. */
export function SocialProfiles({ className }: { className?: string }) {
  const links = [
    { href: BRAND.instagram, label: "Instagram" },
    { href: BRAND.facebook, label: "Facebook" },
  ];
  return (
    <div className={cn("flex flex-wrap gap-2 text-xs font-bold", className)}>
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="rounded-full px-3 py-2 ring-1 ring-white/15 transition hover:text-white">
          {link.label}
        </a>
      ))}
    </div>
  );
}
