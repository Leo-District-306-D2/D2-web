# LEO District 306 D2 — Website

A rebuild of the LEO District 306 D2 website in **Next.js 16** (App Router) + **TypeScript** +
**Tailwind CSS v4**. All page content lives in typed data files under `src/data/`, so the site can be
updated without touching component code.

## Getting started

```bash
npm install      # already installed during scaffold
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build (static prerender)
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

```
src/
  app/                     # routes (App Router)
    page.tsx               # Home
    about/                 # About
    leaders/               # Current Leaders
      past-presidents/     # Past District Presidents
    clubs/                 # Clubs (interactive region/zone explorer)
    gallery/               # Gallery (filter + lightbox)
    downloads/             # Downloads
    contact/               # Contact (+ map)
    not-found.tsx          # custom 404
    layout.tsx             # root layout, fonts, metadata, Navbar/Footer
    globals.css            # Tailwind theme + brand tokens
  components/              # Navbar, Footer, cards, StatCounter, GalleryGrid, ClubsExplorer, Icons…
  data/                    # ← EDIT CONTENT HERE
  lib/types.ts            # shared content types
public/images/            # all real assets pulled from the live site
scripts/                  # one-off helpers to (re)sync assets/content from the live site
```

### Editing content
| What | File |
|------|------|
| Name, contact, socials, stats | `src/data/site.ts` |
| Nav / footer links | `src/data/navigation.ts` |
| Current leaders | `src/data/leaders.ts` |
| Past presidents | `src/data/pastPresidents.ts` |
| Clubs / regions / zones | `src/data/clubs.ts` |
| Homepage projects | `src/data/projects.ts` |
| Gallery | `src/data/gallery.ts` |
| Downloads | `src/data/downloads.ts` |
| About page + homepage blurbs | `src/data/about.ts` |
| "What We Do" services | `src/data/services.ts` |

## Fixes applied vs. the live site
- President name spelling unified to **Eshan Kasturiarachchi** across pages.
- Title typo fixed: "Leo-Lion Relation" → "Relations".
- Past-president club-name typos fixed (e.g. "University of Moratuw", "Rattanapitiya", "EMPOWERD", lowercase "leo").
- Region B director photo path fixed (live site referenced a `.JPG` that 404s; real file is lowercase).
- **Downloads** page now has a working layout with categorized cards (was empty), and links to the real administrative documents and officer appointment letters (was placeholder-only in the initial rebuild).
- Stat counters show real values with a count-up animation (were rendering as `0`).
- Added a styled **404** page and an embedded **map** on Contact.

> Note: the initial rebuild also "corrected" the contact email (`…@306a2.org` → `…@306d2.org`) and
> replaced the social media links with placeholders, both on the assumption that the `306a2`
> email/accounts belonged to a different district. That assumption was wrong — both were restored
> to their original values in `src/data/site.ts`.

## Remaining TODOs (need info from the district)
- [ ] **DP theme logo** — replace `public/images/logos/DP-logo-2026-27.png` (currently a placeholder using last year's DP logo) with the official "United in Purpose" 2026/27 artwork. Keep the same filename; no code change needed.
- [ ] **Brand Guidelines PDF** — placeholder (no `href`) in the Logos & Branding section of `src/data/downloads.ts`.
- [ ] **Replace placeholder headshots** (`/images/unknown person.jpg`) — flagged with `placeholder: true` in `src/data/leaders.ts` (Ranmal Perera, Durga, Umayangi de Silva, Pamudi Vimansa, Thathsara Wagasenevi, Zahra Zuhri, Dimuth Samaraweera).
- [ ] **District Vice President photo** carries a "306 A2" event watermark — see note in `leaders.ts`.
- [ ] **Confirm** the canonical spelling of "Eshan Kasturiarachchi".
- [ ] **Fill in remaining clubs** — only Zone A1's 3 clubs have detail; zones A2/B1/B2/C1/C2 are scaffolded in `src/data/clubs.ts`.

## Re-syncing from the live site
`scripts/fetch-assets.mjs` re-downloads all images into `public/`.
`scripts/discover-assets.mjs` / `scripts/extract-text.mjs` were used to inventory image URLs and page text.

```bash
node scripts/fetch-assets.mjs
```

## Leo District 306 D2 Website
