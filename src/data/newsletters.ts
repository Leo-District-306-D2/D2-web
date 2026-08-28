import type { NewsletterIssue, NewsletterSource } from "@/lib/types";
import { allClubs } from "./clubs";

/**
 * Newsletter Rack content.
 *
 * Where the PDFs are hosted is not decided yet, so no issue hardcodes a storage location:
 * `file` and `previewUrl` take either a local "/downloads/..." path or an absolute URL
 * (a Google Drive "/preview" link, a CDN URL). Moving the files later is a change to this
 * file alone. An issue with no `file` renders as "Coming soon".
 *
 * To add an issue: drop it into the right source's `issues` array. Order does not matter,
 * `sortedIssues()` sorts newest first.
 */

/** Club name to URL slug: "Leo Club of Arawwala" becomes "arawwala". */
export function slugify(clubName: string): string {
  return clubName
    .replace(/^Leo Club of /i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** "2026-07" becomes "July 2026". Falls back to the raw value if it is not a valid month. */
export function formatMonth(month: string): string {
  const [year, m] = month.split("-");
  const index = Number(m) - 1;
  const names = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return names[index] ? `${names[index]} ${year}` : month;
}

/** Display title for an issue: its own title, or the formatted month. */
export function issueTitle(issue: NewsletterIssue): string {
  return issue.title ?? formatMonth(issue.month);
}

/** Newest first. Month strings are zero-padded, so a plain string sort is correct. */
export function sortedIssues(source: NewsletterSource): NewsletterIssue[] {
  return [...source.issues].sort((a, b) => b.month.localeCompare(a.month));
}

/** The most recent issue, or undefined when a source has published nothing yet. */
export function latestIssue(source: NewsletterSource): NewsletterIssue | undefined {
  return sortedIssues(source)[0];
}

// The district's own newsletter. Sample entries so the layout can be reviewed before real
// issues exist; replace `month` values and add `file` / `cover` as they are published.
export const districtNewsletter: NewsletterSource = {
  slug: "district",
  name: "District 306 D2 Newsletter",
  scope: "district",
  issues: [
    { month: "2026-08" },
    { month: "2026-07" },
  ],
};

// One entry per member club, generated from `allClubs` so the two lists cannot drift apart.
// Every club starts empty and gains issues as they are submitted.
export const clubNewsletters: NewsletterSource[] = allClubs.map((name) => ({
  slug: slugify(name),
  name,
  scope: "club" as const,
  issues: [],
}));

/** Every source, district first. Used for routing and lookups. */
export const newsletterSources: NewsletterSource[] = [districtNewsletter, ...clubNewsletters];

export function findSource(slug: string): NewsletterSource | undefined {
  return newsletterSources.find((s) => s.slug === slug);
}
