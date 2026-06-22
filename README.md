# Mathias Mørk — Portfolio

A high-fidelity portfolio site for a mid-level product designer. Built from the
provided moodboard: light, editorial aesthetic, mono-accent typography,
multi-color category chips, and high-saturation project thumbnails with depth.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
Geist Sans + Geist Mono.

## Deploy (Vercel)

This is a standard Next.js app, so Vercel deploys it with zero config:

1. Push to GitHub (this repo).
2. On [vercel.com](https://vercel.com) → **Add New… → Project** → **Continue with
   GitHub** → import `mathiasmoerk/portfolio`.
3. Vercel auto-detects Next.js — just click **Deploy**.

After that, every `git push` to `main` triggers a production deploy, and pull
requests get preview URLs automatically. No environment variables are required.

## Running it

This machine has a local Node install at `~/.local/node`. Put it on your PATH first:

```bash
export PATH="$HOME/.local/node/bin:$PATH"

npm run dev     # dev server → http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

> Note: the in-app Preview tool uses `next start` (the Turbopack **dev** server
> can't spawn its PostCSS worker inside the preview sandbox). For normal local
> work, `npm run dev` is fine.

## Where to edit content

**All copy lives in one file:** [`src/lib/content.ts`](src/lib/content.ts).
Search for `TODO` — those are the placeholders waiting on your real details:

- **Projects** (`projects[]`): titles, years, roles, summaries, category chips,
  and thumbnail colors/variant (`phone` | `browser` | `cards`). Project 01
  (Sydbank / data-governance) is a full case study; 02 and 03 are placeholders
  marked "Coming soon" until their details arrive.
- **About** (`about`): `years`, `stats`, `philosophy`, `education`, `experience`.
- **Site** (`site`): name, email, and the LinkedIn/Webflow links in `social`.

### Case studies

A project becomes a full case-study page at `/work/<slug>` as soon as it has a
`caseStudy` object (see `projects[0]`). The route lives in
[`src/app/work/[slug]/page.tsx`](src/app/work/[slug]/page.tsx) and is statically
generated per slug. Cards and the hero link there automatically; projects
without a `caseStudy` render as "Coming soon".

### Project images

Real screenshots live in [`public/projects/`](public/projects). Project 1 uses:
`p1-cover.png`, `p1-overview.png`, `p1-dashboard.png`, `p1-threads.png`,
`p1-compose.png` (sourced from the iCloud `…/🎒Portfolio/Alation` folder).
`ProjectMedia` loads each by path and falls back to a styled placeholder if a
file is missing, so the layout never breaks. **Note:** `next start` reads
`public/` at startup — after adding images, rebuild (`npm run build`) and
restart for them to serve.

## Structure

```
src/
  app/
    layout.tsx        fonts + metadata
    page.tsx          composes the sections
    globals.css       design tokens (colors, type, shadows, motion)
  components/
    Header.tsx        sticky nav + mobile menu
    Hero.tsx          headline + featured project (peeks above the fold)
    Work.tsx          selected-work grid
    ProjectCard.tsx   card with thumbnail + chips
    Thumb.tsx         generative thumbnails (phone/browser/cards mockups)
    About.tsx         philosophy + stats + experience/education
    Footer.tsx        contact
    Chip.tsx          multi-color category chip
  lib/
    content.ts        ← all editable copy
```

Responsive from wide desktop down to ~360px (the 1080×2340 @ 3× target device).
