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

/** One monthly newsletter issue. */
export type NewsletterIssue = {
  /** "2026-07". Sorts naturally as a string; formatted for display at render time. */
  month: string;
  /** Optional override; defaults to the formatted month. */
  title?: string;
  /** Cover thumbnail under public/. Omit to fall back to the generated cover. */
  cover?: string;
  /**
   * Where the PDF lives: either a local "/downloads/..." path or an absolute external
   * URL. Hosting is deliberately not baked in, so moving the files later (Drive, a CDN)
   * is a data edit rather than a component change. Undefined means "coming soon".
   */
  file?: string;
  /** Embeddable preview URL when it differs from `file` (e.g. a Drive /preview link). */
  previewUrl?: string;
};

/** A publisher of newsletters: the district itself, or one club. */
export type NewsletterSource = {
  slug: string; // "district", or a club slug
  name: string;
  scope: "district" | "club";
  issues: NewsletterIssue[]; // may be empty
};
