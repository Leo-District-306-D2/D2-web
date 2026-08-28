import type { NavItem } from "@/lib/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Leaders",
    href: "/leaders",
    children: [
      { label: "Current Leaders", href: "/leaders" },
      { label: "Past District Presidents", href: "/leaders/past-presidents" },
    ],
  },
  { label: "Clubs", href: "/clubs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Newsletters", href: "/newsletters" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Leaders", href: "/leaders" },
    { label: "Clubs", href: "/clubs" },
  ],
  resources: [
    { label: "Gallery", href: "/gallery" },
    { label: "Newsletters", href: "/newsletters" },
    { label: "Downloads", href: "/downloads" },
    { label: "Contact", href: "/contact" },
  ],
};
