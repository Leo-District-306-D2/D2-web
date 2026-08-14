// Shared content types for the LEO District 306 D2 site.

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export type SocialLink = {
  label: string;
  href: string;
  icon: "facebook" | "x" | "instagram" | "linkedin" | "youtube";
};

export type Leader = {
  name: string;
  title: string;
  image: string;
  /** true when the live site had no real photo for this officer (uses a placeholder). */
  placeholder?: boolean;
  /** internal note for maintainers, not rendered. */
  note?: string;
};

export type LeaderGroup = { section: string; members: Leader[] };

export type PastPresident = {
  term: string; // e.g. "2005/06"
  name: string; // includes honorific prefix as displayed
  homeClub: string;
  motto: string;
  image: string;
  logo: string;
};

export type Club = { name: string; president?: string; members?: number };

export type Zone = {
  id: string; // e.g. "A1"
  director: string;
  clubs: Club[];
};

export type Region = {
  id: string; // "A" | "B" | "C"
  name: string;
  director: string;
  zones: Zone[];
};

export type Project = {
  title: string;
  description: string;
  date: string;
  image: string;
  category: "events" | "service";
};

export type GalleryItem = {
  title: string;
  category: "events" | "service";
  image: string;
};

export type Service = { title: string; description: string };

export type Stat = { value: string; label: string };

export type DownloadFile = {
  name: string;
  description: string;
  href?: string; // undefined => not yet available (placeholder)
  type?: string; // e.g. "PDF", "PNG"
};

export type DownloadCategory = { title: string; files: DownloadFile[] };

export type TimelineEvent = { year: string; title: string; description: string };
