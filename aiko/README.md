# AIKO — AI Kitchen Operations

Marketing site for AIKO (food processing & central kitchen). Next.js 15 + Tailwind CSS 4, fully static.

```bash
cd aiko
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Editing content

All copy, figures, certifications and photo URLs live in `src/content.ts`.
Contact email is `site.email`; the company address is intentionally left out for now.

Photography is hot-linked from the Unsplash CDN (free commercial licence). If a photo fails to load,
its frame falls back to a dark panel, so the layout never breaks.

## Deploying on Vercel

Import the GitHub repo in Vercel and set **Root Directory** to `aiko`. Framework preset: Next.js. No env vars needed.
