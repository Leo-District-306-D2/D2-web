import type { SocialLink, Stat } from "@/lib/types";

export const site = {
  name: "LEO District 306 D2",
  shortName: "306 D2",
  tagline: "A leading youth service organization in Sri Lanka",
  description:
    "Leo District 306 D2 is one of the leading Leo Districts in Sri Lanka, sponsored by Lions Clubs International District 306 D2, with 18 active Leo clubs and 1000+ Leos serving communities.",
  url: "https://leodistrict306d2.org",

  contact: {
    email: "thameerad@leodistrict306a2.org",
    phone: "+94 70 120 5186",
    phoneHref: "tel:+94701205186",
    address: {
      name: "Leo Youth Centre",
      line: "Vidya Mawatha",
      city: "Colombo 00700",
      country: "Sri Lanka",
    },
    hours: "Always Open",
  },

  logos: {
    // Official high-resolution branding assets (public/images/logos/official/).
    emblem: "/images/logos/official/leo-emblem.png", // square Leo emblem — navbar + favicon
    emblemWhite: "/images/logos/official/leo-emblem-white.png",
    wordmark: "/images/logos/official/leos-sl-maldives.png", // "Leos of Sri Lanka & Maldives"
    wordmarkWhite: "/images/logos/official/leos-sl-maldives-white.png",
    lions: "/images/logos/official/lions-emblem-blue.png", // Lions Clubs International
    leoLion: "/images/logos/official/leo-lion-emblem.png", // Leo-Lion
    mdp: "/images/logos/official/mdp-lead-for-a-change.png", // MD President 2026/27 theme
    // District President's yearly theme emblem — official "United in Purpose" 2026/27 artwork.
    // If this is ever replaced, change the FILENAME too: next/image caches by URL, so
    // overwriting in place serves a stale image until .next/cache/images is cleared.
    dp: "/images/logos/DP-logo-united-in-purpose-2026-27.png",
    // Backward-compatible aliases.
    primary: "/images/logos/official/leo-emblem.png",
    leo: "/images/logos/official/leo-emblem.png",
  },

  // 2026/27 District President theme.
  dpTheme: {
    theme: "United in Purpose",
    year: "2026/27",
    president: "Leo Lion Buddhika Abenayake",
    role: "District President",
  },
} as const;

// Social accounts — kept as they were on the previous site.
export const socials: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/leo306a2", icon: "facebook" },
  { label: "X (Twitter)", href: "https://x.com/A2Buzz", icon: "x" },
  { label: "Instagram", href: "https://www.instagram.com/a2leos/", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/leo306a2/", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/user/leo306a2", icon: "youtube" },
];

// Homepage counters. Live site rendered these as 0 — real target values below.
export const stats: Stat[] = [
  { value: "1000+", label: "Leos" },
  { value: "18", label: "LEO Clubs" },
  { value: "3", label: "Regions" },
  { value: "200+", label: "Projects Completed" },
];
