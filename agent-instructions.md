# Intimate Wine Blog Content and SEO Playbook

This file documents the current content, routing, and crawl rules for `blog.intimate.wine`.

Use it before making SEO or editorial changes in this repo.

## Goal

Keep the blog simple, crawlable, and easy to reuse for future customers:

1. The homepage `/` is the blog index.
2. Articles live at root-level URLs like `/<slug>`.
3. Sitemap coverage should reflect the real route structure without legacy sections.
4. Customer-specific copy should live in shared config where possible, not be scattered through page files.

## Current Structure

- `src/content/blog/*.md`
  Source files for blog articles.
- `src/pages/index.tsx`
  Renders the blog homepage and the article list structured data.
- `src/pages/[slug].tsx`
  Renders article pages at root-level URLs like `/<slug>`.
- `src/pages/sitemap.xml.ts`
  Serves the sitemap index at `/sitemap.xml`.
- `src/pages/pages-sitemap.xml.ts`
  Serves the URL sitemap for `/` plus all article URLs.
- `src/lib/blog.ts`
  Loads markdown articles from `src/content/blog/`.
- `src/lib/info.ts`
  Shared brand and site constants.
- `src/lib/seo.ts`
  Shared metadata and last-modified data for static routes.
- `src/lib/sitemaps.ts`
  Shared sitemap helpers and static route config.
- `public/robots.txt`
  Crawl policy. Keep it minimal.
- `public/llms.txt`
  Machine-readable summary for the blog domain.
- `src/pages/site-facts.json.ts`
  Machine-readable site facts endpoint.

## Routing Rules

- The homepage `/` should continue to act as the main blog hub.
- Blog content lives at root-level URLs on the blog domain, not under a `/blog` subdirectory.
- Each article should resolve at `https://www.blog.intimate.wine/<slug>`.

## Sitemap Rules

- `/sitemap.xml` is the sitemap index, not the full URL list.
- The sitemap index should currently reference only:
  - `/pages-sitemap.xml`
- `/pages-sitemap.xml` should include:
  - `/`
  - every root-level article URL from `src/content/blog/`
- Do not recreate `blog-sitemap.xml` unless the route structure changes again.
- If you add a new static page outside the markdown article flow:
  - add metadata in `src/lib/seo.ts`
  - add last-modified data in `src/lib/seo.ts`
  - add the route to `PAGES_STATIC_ROUTES` in `src/lib/sitemaps.ts`

## Shared Config Rules

When this repo is reused for another customer, the first place to update should be shared config files:

- `src/lib/info.ts`
  - `SITE_NAME`
  - `SITE_URL`
  - `LINKED_SITE_URL`
  - `BUSINESS_TITLE`
  - `BUSINESS_DESCRIPTION`
  - `MAIN_PAGE_DESCRIPTION`
  - founder/social constants
- `public/llms.txt`
- `src/pages/site-facts.json.ts`

If you find customer-specific copy hardcoded in page components, prefer moving it into shared config instead of duplicating strings.

## Homepage Rules

- Keep the homepage description sourced from `MAIN_PAGE_DESCRIPTION` in `src/lib/info.ts`.
- Keep homepage structured data aligned with the actual blog index.
- Homepage article links and structured data URLs should use root-level article URLs: `${SITE_URL}/${article.slug}`.
- If the homepage changes meaningfully, make sure the title, description, structured data, and sitemap last-modified behavior still match.

## Article Workflow

When adding or updating an article:

1. Create or edit the markdown file in `src/content/blog/`.
2. Keep the slug unique and appropriate for a root-level URL.
3. Ensure the article appears correctly on `/`.
4. Ensure the generated article URL is `/<slug>`.
5. Keep internal links consistent with the root-level article pattern.
6. Verify the article is included in `/pages-sitemap.xml`.

## Article Frontmatter

Current article files commonly use:

- `title`
- `date`
- `category`
- `excerpt`
- `slug`
- `thumbnail`
- `imageFallbackText`
- `subtitle` when needed

Legacy fields may still exist in older content, but do not assume legacy video-related fields are part of the active routing or sitemap model.

## Keywords

Read this section before doing blog keyword planning, article ideation, or SEO page work. Go read the files @lib/keywords.ts and @lib/keywords.md

## Verification

Run these after relevant SEO or content changes:

1. `yarn build`
2. `git diff -- <changed-files>`
3. `git status --short`

If you touched sitemap behavior, also manually confirm:

1. `/sitemap.xml`
2. `/pages-sitemap.xml`
3. the intended article URL pattern

## Search Console Follow-Up

After adding a new indexable page or materially changing crawl structure:

1. Request indexing for the changed URL in Google Search Console.
2. Confirm sitemap coverage for `https://www.blog.intimate.wine/sitemap.xml`.

## Do Not Forget

1. Keep the blog on `blog.intimate.wine`, not the main `intimate.wine` site.
2. Keep the article URL structure flat at the root.
3. Keep sitemap, robots, `llms.txt`, and `site-facts.json` aligned with the current brand and domain.
4. Prefer shared constants for reusable customer-specific copy.
