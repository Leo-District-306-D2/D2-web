# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Rebuild of the LEO District 306 D2 website in Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. Static content site (leadership, clubs, gallery, downloads) — no backend, database, or API routes. Every route prerenders as static content; deployed on Vercel.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (static prerender + tsc typecheck)
npm run start    # serve the production build
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test suite. `npm run build` is the only full verification step — it typechecks and prerenders all 10 routes, so run it after non-trivial changes.

## Architecture

**Content/component separation is the core convention.** All page content (leader names, club rosters, gallery items, nav links, stats, etc.) lives in typed data files under `src/data/`, imported into route components under `src/app/`. To change what's displayed, edit `src/data/*.ts`; only touch `src/app/` or `src/components/` when changing layout/behavior. Shared content shapes are centralized in `src/lib/types.ts` — extend a type there before adding new fields to a data file.

Key data files and what they back:
- `src/data/site.ts` — name, contact, socials, logo paths, DP theme, homepage stats
- `src/data/navigation.ts` — nav/footer links
- `src/data/leaders.ts` / `src/data/pastPresidents.ts` — leadership pages
- `src/data/clubs.ts` — region → zone → club hierarchy driving the interactive explorer at `/clubs`
- `src/data/projects.ts`, `src/data/gallery.ts` — homepage projects and `/gallery` (filter + lightbox)
- `src/data/downloads.ts` — categorized files on `/downloads`; a `DownloadFile` with no `href` renders as "not yet available"
- `src/data/about.ts`, `src/data/services.ts` — About page and "What We Do" content

Routing is standard App Router under `src/app/`: each subdirectory is a route (`about/`, `leaders/` with nested `leaders/past-presidents/`, `clubs/`, `gallery/`, `downloads/`, `contact/`). `layout.tsx` wraps every page with `Navbar`/`Footer` and sets global metadata from `src/data/site.ts`; each route page also exports its own `metadata` with a bare `title` that feeds the layout's `"%s | LEO District 306 D2"` template.

**Server-first.** Only four files are client components — `Navbar`, `ClubsExplorer`, `GalleryGrid`, `StatCounter`. All interactivity lives there; pages stay server components that pass data in as props. Keep new interactive state inside a component in `src/components/` rather than making a route `"use client"`.

Pages are built from repeated section markup rather than a layout abstraction: `<section>` → `.container-page` → `SectionHeading` → a grid of `.card`s. Follow that shape when adding a section.

Path alias: `@/*` maps to `src/*` (see `tsconfig.json`).

## Styling

Brand theming lives in `src/app/globals.css` as Tailwind v4 `@theme` tokens (`--color-brand`, `--color-gold`, `--color-ink`, etc., sampled from the district's DP badge), plus `@layer components` classes (`.container-page`, `.btn` + `.btn-primary`/`-slate`/`-outline`/`-gold`, `.card`/`.card-hover`, `.eyebrow`) and the site's animation keyframes (fade/float/sparkle/`badge-shine` effects, all disabled under `prefers-reduced-motion`). There is no CSS module or styled-component anywhere — new styles go in `globals.css` or stay as Tailwind utilities.

Note: pages use a `font-display` class on headings that **compiles to nothing** — no `--font-display` token is defined, so headings inherit the body stack (this matches the live site deliberately; `globals.css` explains why Geist is loaded but unused). Defining `--font-display` in `@theme` would retroactively restyle every heading on the site.

## Assets and images

All images/PDFs are local under `public/` — no remote image hosts are configured. Asset paths deliberately contain **spaces, mixed case, and Sinhala characters** (e.g. `/images/leaders/District Executive Officers/…`, `/images/unknown person.jpg`). Copy paths exactly: Vercel's filesystem is case-sensitive, and a wrong-case extension has already caused a 404 on this site (see README).

**Replacing a photo or logo requires a new filename, not an overwrite.** `next/image` caches by URL, so overwriting a file in place serves the stale image until `.next/cache/images` is cleared. `leaders.ts` therefore embeds the officer's name in each photo filename; `site.ts` carries the same warning on the DP theme logo.

## Content notes

- `Leader.placeholder: true` and `DownloadFile` with no `href` mark data known to be incomplete — check README.md's "Remaining TODOs" before treating these as bugs to silently fix. Several `Leader.note` fields are maintainer-only context and are never rendered.
- **The contact email and social links intentionally use `306a2`, not `306d2`** — `thameerad@leodistrict306a2.org` and the `leo306a2`/`a2leos`/`A2Buzz` accounts in `src/data/site.ts`. A previous rebuild "corrected" these to `306d2` on the assumption they belonged to another district; that was wrong and was reverted. Don't re-apply it without confirming with the district.
- Club counts on `/clubs` are **not** derived from `clubs.ts`: the page hardcodes `18` total clubs and pads per-zone counts with `Math.max(z.clubs.length, 3)`, because only Zone A1 has real club detail. When zones A2/B1/B2/C1/C2 get filled in, remove those fudges in `src/app/clubs/page.tsx`.
- README documents `scripts/fetch-assets.mjs` for re-syncing images from the live site, but **no `scripts/` directory exists** in the repo (it was never committed). Don't reference or try to run it.
