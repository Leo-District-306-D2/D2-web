# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Rebuild of the LEO District 306 D2 (Sri Lanka) website in Next.js 16 (App Router) + TypeScript +
Tailwind CSS v4. It's a static/content site: there is no backend, database, or API layer — content
is just typed data files imported by page components.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (static prerender)
npm run start    # serve the production build
npm run lint     # eslint (flat config, eslint.config.mjs)
```

There is no test suite configured.

## Architecture

**Content/component split is the core pattern.** Every page under `src/app/` is a thin component
that imports typed data from `src/data/*.ts` and renders it — page content is edited by changing
data files, not JSX. Shared content shapes live in `src/lib/types.ts`. When adding a content field,
add it to the type in `types.ts` first, then the data file, then the component that renders it.

Key data files and what they drive:
- `src/data/site.ts` — name, contact info, social links, logos, homepage stat counters. Read by
  `app/layout.tsx` for metadata, JSON-LD structured data, and OpenGraph/Twitter cards, plus
  Navbar/Footer.
- `src/data/navigation.ts` — nav/footer links.
- `src/data/leaders.ts`, `pastPresidents.ts` — leadership pages.
- `src/data/clubs.ts` — the region → zone → club hierarchy (`Region`/`Zone`/`Club` types), consumed
  by the interactive `ClubsExplorer` client component on `/clubs`.
- `src/data/projects.ts`, `gallery.ts` — homepage projects and `/gallery` (filter + lightbox via
  `GalleryGrid`).
- `src/data/downloads.ts` — categorized document cards on `/downloads`.
- `src/data/newsletters.ts` — not just data: also exports helpers (`slugify`, `formatMonth`,
  `issueTitle`, `sortedIssues`, `latestIssue`) used by the newsletter rack and per-club pages
  (`app/newsletters/[club]/page.tsx`). `NewsletterIssue.file`/`previewUrl` can be either a local
  `/downloads/...` path or an absolute URL — hosting location is deliberately not committed to one
  place, so moving files later is a data edit only.
- `src/data/about.ts`, `services.ts` — About page and "What We Do" section content.

**Path alias:** `@/*` maps to `src/*` (see `tsconfig.json`).

**Styling:** Tailwind v4 via `@tailwindcss/postcss`; brand colors are CSS custom properties defined
in `src/app/globals.css` (`--color-brand*`, `--color-gold*`, `--color-ink`, `--color-muted`, etc.)
rather than Tailwind config — reference these tokens (e.g. `bg-brand`, `text-gold-dark`) instead of
hardcoding hex values.

**Client vs. server components:** most components are server components by default; only ones
needing interactivity (`ClubsExplorer`, `GalleryGrid`, `StatCounter`'s count-up) are marked
`"use client"`. Keep new interactive widgets client-only and push data fetching/content to the
server-rendered parent where possible.

## Content accuracy notes

This is a rebuild of a live site, and several past content fixes/discrepancies are tracked directly
as comments in the data files (e.g. corrected name spellings, fixed typos, restored original contact
email/socials after a wrong "correction" in an earlier pass). Read the comments in `src/data/site.ts`,
`leaders.ts`, and `pastPresidents.ts` before changing contact info, names, or socials — some values
look wrong but are intentional (matching the district's actual records, not the cleaner-looking guess).

Known outstanding placeholders (see `placeholder: true` flags in `src/data/leaders.ts` and the
downloads/logo TODOs in `README.md`): some leader headshots and the Brand Guidelines PDF link are
not yet available from the district.

Note: `README.md` references `scripts/fetch-assets.mjs` etc. for re-syncing assets from the live
site, but the `scripts/` directory does not currently exist in this repo — treat that section of the
README as stale.
