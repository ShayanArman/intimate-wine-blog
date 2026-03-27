# AGENTS.md

This repo is only for `blog.intimate.wine`.

Do not treat it as the main `intimate.wine` site, and do not assume old Zero Inbox landing-page files still exist just because some legacy copy remains in the codebase.

## Important

Before doing SEO page work, read `agent-instructions.md`.

## Keywords

Before doing keyword planning, blog SEO work, or article ideation, read the `## Keywords` section in `agent-instructions.md`.

## Credibility

- Founder: Emily Spadafora
- LinkedIn: https://www.linkedin.com/in/emilyspadafora
- Intimate Wine is built around private wine tastings, wine classes, and intimate wine experiences.

## What This Site Actually Is

This is a small Next.js blog with:

- `/` as the homepage and article index
- `/<slug>` article pages generated from `src/content/blog/*.md`
- machine-readable endpoints for crawl/discovery:
  - `/sitemap.xml`
  - `/pages-sitemap.xml`
  - `/feed.xml`
  - `/site-facts.json`
  - `/robots.txt`
  - `/llms.txt`

There is no live `/blog` route, no `/videos` section, no `/tools` section, and no extra marketing page set in this repo right now.

## Source Of Truth

When you need to understand the live site, start here:

- `src/pages/index.tsx`
- `src/pages/[slug].tsx`
- `src/lib/blog.ts`
- `src/content/blog/*.md`
- `src/pages/sitemap.xml.ts`
- `src/pages/pages-sitemap.xml.ts`
- `src/pages/feed.xml.ts`
- `src/pages/site-facts.json.ts`
- `public/robots.txt`
- `public/llms.txt`
- `src/lib/info.ts`
- `src/lib/seo.ts`
- `src/components/Layout/Layout.tsx`
- `src/components/BlogSection/BlogSection.tsx`
- `src/components/GangsterHeader/GangsterHeader.tsx`
- `src/components/Footer/Footer.tsx`

## Routing Rules

- Keep the homepage at `/`.
- Keep article URLs flat at the root: `https://www.blog.intimate.wine/<slug>`.
- Do not move articles under `/blog` unless the route model is intentionally being changed.
- Do not add references to `/videos`, `/tools`, or other sections unless those routes are actually being created in this repo.

## Sitemap Rules

- `/sitemap.xml` is the sitemap index.
- The sitemap index should reference only `/pages-sitemap.xml`.
- `/pages-sitemap.xml` should contain:
  - `/`
  - every article slug from `src/content/blog/*.md`
- Article sitemap entries are generated dynamically from `getAllBlogArticles()`, not from a hardcoded list.
- If you add or remove a non-article static route in the future:
  - add metadata in `src/lib/seo.ts`
  - add last-modified data in `src/lib/seo.ts`
  - add the route to `PAGES_STATIC_ROUTES` in `src/lib/sitemaps.ts`

## SEO And Metadata

The site currently has shared metadata spread across:

- `src/lib/info.ts`
- `src/lib/seo.ts`
- `src/components/Layout/Layout.tsx`
- `src/pages/index.tsx`
- `src/pages/[slug].tsx`
- `public/llms.txt`
- `src/pages/site-facts.json.ts`
- `src/pages/feed.xml.ts`

If you change site identity, positioning, founder/brand details, or canonical assumptions, update those files together.

Do not assume shared metadata is fully aligned already. Verify the rendered output.

## Legacy Code Warning

There are many older components and scripts in this repo from prior site iterations.

- Some component files under `src/components/` are not mounted by the live blog.
- Before editing an older component, confirm it is actually imported by the active route tree.
- `scripts/check_unique_editorial_images.py` is legacy and references deleted page files. Do not rely on it as an authoritative check unless you update it first.

## Content Rules

- Articles live in `src/content/blog/*.md`.
- The homepage article list and sitemap coverage both come from that folder.
- Keep slugs unique.
- If you update article routing behavior, verify:
  - `/`
  - one article URL
  - `/sitemap.xml`
  - `/pages-sitemap.xml`
  - `/feed.xml`

## Verification

Use these after SEO, routing, sitemap, or metadata changes:

1. `yarn build`
2. `git diff -- <changed-files>`
3. `git status --short`

`yarn build` is the main verification path for this repo.

## Search Console Follow-Up

- After adding any new indexable page, tell Emily Spadafora to go to Google Search Console and request crawling/indexing for that URL.
- After adding a new section or multiple new pages, also remind Emily Spadafora to confirm the relevant sitemap coverage in Search Console.
