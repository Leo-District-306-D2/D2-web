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

// The district's own newsletter. No issues published yet, so the rack shows its empty state.
export const districtNewsletter: NewsletterSource = {
  slug: "district",
  name: "District 306 D2 Newsletter",
  scope: "district",
  issues: [],
};

/**
 * Published club newsletters, keyed by club slug.
 *
 * Files live at public/newsletters/<slug>/<leo year>/<YYYY-MM>.pdf, with the first page
 * rendered alongside as <YYYY-MM>-cover.jpg. The Leo year runs
 * July to June, so 2026-27 holds 2026-07 through 2027-06. Add a club's key here as soon as it
 * submits; clubs with no key render "No newsletters yet".
 */
const publishedIssues: Record<string, NewsletterIssue[]> = {
  kalubowila: [
    { month: "2026-07", file: "/newsletters/kalubowila/2026-27/2026-07.pdf", cover: "/newsletters/kalubowila/2026-27/2026-07-cover.jpg" },
    { month: "2026-08", file: "/newsletters/kalubowila/2026-27/2026-08.pdf", cover: "/newsletters/kalubowila/2026-27/2026-08-cover.jpg" },
  ],
  // "IGNITE" Volume 02 Issue 01, AnyFlip-hosted - view-only, no local file and no Download
  // button. Names no month; July assumed, matching every other club's Issue 01 this Leo year.
  "gampaha-wickramarachchi-university-of-indigenous-medicine-fissms": [
    { month: "2026-07", previewUrl: "https://anyflip.com/dszco/zmly/", cover: "/newsletters/gampaha-wickramarachchi-university-of-indigenous-medicine-fissms/2026-27/2026-07-cover.png" },
  ],
  // "The IXth Tale", Heyzine-hosted flipbooks - view-only, no local file and no Download
  // button. Volume 01 issues 1-4 name no month; July-October assumed sequentially from the
  // issue number, matching every other club this Leo year. Correct here if the club says
  // otherwise.
  "panadura-alubomulla": [
    { month: "2026-07", previewUrl: "https://heyzine.com/flip-book/6f3fa9864b.html", cover: "/newsletters/panadura-alubomulla/2026-27/2026-07-cover.png" },
    { month: "2026-08", previewUrl: "https://heyzine.com/flip-book/375e078f1e.html", cover: "/newsletters/panadura-alubomulla/2026-27/2026-08-cover.png" },
    { month: "2026-09", previewUrl: "https://heyzine.com/flip-book/bb832216f2.html", cover: "/newsletters/panadura-alubomulla/2026-27/2026-09-cover.png" },
    { month: "2026-10", previewUrl: "https://heyzine.com/flip-book/9292301890.html", cover: "/newsletters/panadura-alubomulla/2026-27/2026-10-cover.png" },
  ],
  // "INSPIRE". Now the club's own AnyFlip-hosted editions - view-only like
  // sri-lanka-technological-campus below, no local file and no Download button. Volume 11
  // issues 01-04 name no month; July-October assumed sequentially from the issue number,
  // matching every other club this Leo year. Correct here if the club says otherwise.
  piliyandala: [
    { month: "2026-07", previewUrl: "https://anyflip.com/wqfao/bdxn/", cover: "/newsletters/piliyandala/2026-27/2026-07-cover.png" },
    { month: "2026-08", previewUrl: "https://anyflip.com/wqfao/rrqc/", cover: "/newsletters/piliyandala/2026-27/2026-08-cover.jpg" },
    { month: "2026-09", previewUrl: "https://anyflip.com/wqfao/aohg/", cover: "/newsletters/piliyandala/2026-27/2026-09-cover.png" },
    { month: "2026-10", previewUrl: "https://anyflip.com/wqfao/kwst/", cover: "/newsletters/piliyandala/2026-27/2026-10-cover.png" },
  ],
  // "INSPIRO". Neither cover nor page text names a month, and the PDF creation dates only record
  // when the files were compressed, so July and August are taken from the issue numbers, matching
  // every other club this Leo year. Correct here if the club says otherwise.
  "pepiliyana-woodlands": [
    { month: "2026-07", file: "/newsletters/pepiliyana-woodlands/2026-27/2026-07.pdf", cover: "/newsletters/pepiliyana-woodlands/2026-27/2026-07-cover.jpg" },
    { month: "2026-08", file: "/newsletters/pepiliyana-woodlands/2026-27/2026-08.pdf", cover: "/newsletters/pepiliyana-woodlands/2026-27/2026-08-cover.jpg" },
  ],
  "university-of-moratuwa": [
    { month: "2026-07", file: "/newsletters/university-of-moratuwa/2026-27/2026-07.pdf", cover: "/newsletters/university-of-moratuwa/2026-27/2026-07-cover.jpg" },
    { month: "2026-08", file: "/newsletters/university-of-moratuwa/2026-27/2026-08.pdf", cover: "/newsletters/university-of-moratuwa/2026-27/2026-08-cover.jpg" },
  ],
  // "La Rivista". Supplied as PDFs, so these replaced the earlier AnyFlip embed and are now
  // downloadable like the rest. Months are printed on the covers: Issue 01 July, Issue 02 August.
  raththanapitiya: [
    { month: "2026-07", file: "/newsletters/raththanapitiya/2026-27/2026-07.pdf", cover: "/newsletters/raththanapitiya/2026-27/2026-07-cover.jpg" },
    { month: "2026-08", file: "/newsletters/raththanapitiya/2026-27/2026-08.pdf", cover: "/newsletters/raththanapitiya/2026-27/2026-08-cover.jpg" },
  ],
  // "The Leo Times" Volume 08 Issue 02, also AnyFlip-hosted. The cover names no month; August
  // is taken from its International Youth Day lead and from Issue 02 elsewhere being August.
  "sri-lanka-technological-campus": [
    { month: "2026-08", previewUrl: "https://online.anyflip.com/pkyeo/ckbw/", cover: "/newsletters/sri-lanka-technological-campus/2026-27/2026-08-cover.jpg" },
  ],
  "university-of-sri-jayewardenepura": [
    // Volume 08 Issue 01 names no month; July assumed, since Issue 02 is dated August.
    { month: "2026-07", file: "/newsletters/university-of-sri-jayewardenepura/2026-27/2026-07.pdf", cover: "/newsletters/university-of-sri-jayewardenepura/2026-27/2026-07-cover.jpg" },
    { month: "2026-08", file: "/newsletters/university-of-sri-jayewardenepura/2026-27/2026-08.pdf", cover: "/newsletters/university-of-sri-jayewardenepura/2026-27/2026-08-cover.jpg" },
  ],
};

// One entry per member club, generated from `allClubs` so the two lists cannot drift apart.
export const clubNewsletters: NewsletterSource[] = allClubs.map((name) => {
  const slug = slugify(name);
  return { slug, name, scope: "club" as const, issues: publishedIssues[slug] ?? [] };
});

/** Every source, district first. Used for routing and lookups. */
export const newsletterSources: NewsletterSource[] = [districtNewsletter, ...clubNewsletters];

export function findSource(slug: string): NewsletterSource | undefined {
  return newsletterSources.find((s) => s.slug === slug);
}
