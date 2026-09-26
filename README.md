# AIKO — AI Kitchen Operations

Marketing site for AIKO (food processing & central kitchen). Next.js 15 + Tailwind CSS 4, fully static.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Editing content

All copy, figures, certifications and photo URLs live in `src/content.ts`.
Contact email is `site.email`; the company address is intentionally left out for now.

Photography comes from Unsplash (free commercial licence) and is stored locally as compressed WebP
in `public/images/`. If a photo fails to load, its frame falls back to a dark panel, so the layout never breaks.

## Deploying on Vercel

Pushing to `main` deploys to production through the existing Vercel project. Framework preset: Next.js, no env vars needed.
