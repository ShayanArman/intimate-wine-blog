# Zero Inbox SEO Post Creation Playbook

This file documents the exact pattern used to create SEO comparison posts/pages in this repo and keep them aligned with Google Search Console structured data requirements.

## Goal

Create high-intent SEO landing pages (for example `X Alternatives`, `X vs Y`) that:

1. Match Zero Inbox brand positioning from `AGENTS.md`.
2. Include complete metadata and structured data.
3. Are discoverable by crawlers via sitemap and internal links.
4. Avoid Search Console Q&A schema validation issues.

## Inputs To Collect Before Writing

1. Page pair (example: `SaneBox Alternatives`, `SaneBox vs Superhuman`).
2. Target slugs (example: `/sanebox-alternatives`, `/sanebox-vs-superhuman`).
3. Brand copy constraints from `AGENTS.md`:
   - "Official AI Email Organizer"
   - "Safest AI Email Cleaner"
   - "asks for Permission everytime"
   - "does not auto-delete your emails like the other AI Email Cleaners"

## Required SEO Page Pattern

Each comparison page should follow the same structure used in:

- `src/pages/sanebox-alternatives.tsx`
- `src/pages/sanebox-vs-superhuman.tsx`
- `src/pages/fyxer-alternatives.tsx`
- `src/pages/fyxer-ai-vs-zero-inbox-ai.tsx`

Page structure:

1. `Head` metadata:
   - `title`
   - `canonical`
   - `description`
   - `keywords`
   - Open Graph tags
   - Twitter tags
2. On-page copy:
   - Clear `h1` for query intent
   - Intro with brand differentiation
   - Comparison sections (`Key differences`, `Where Zero Inbox fits`, etc.)
   - CTA button to `https://app.zeroinbox.ai`
   - Internal links to related SEO pages
3. Structured data:
   - `QAPage` JSON-LD
   - `BreadcrumbList` JSON-LD

## Google Search Console QAPage Compliance Checklist

The previous Search Console issues were around missing Q&A fields. Use this full field set on every `QAPage`:

`mainEntity` (`Question`) must include:

- `@type: "Question"`
- `name`
- `text`
- `url`
- `datePublished`
- `author`
- `answerCount`

`mainEntity.acceptedAnswer` (`Answer`) must include:

- `@type: "Answer"`
- `text`
- `url`
- `datePublished`
- `author`
- `upvoteCount`

Recommended constants in each page:

- `publishDate` (ISO date string)
- `organizationAuthor`:
  - `@type: "Organization"`
  - `name: SITE_NAME`
  - `url: SITE_URL`

## Exact File Update Order

When creating a new SEO page or page pair, update files in this order:

1. Create new page files in `src/pages/`.
2. Add route metadata entries in `src/lib/seo.ts` (`PATH_META`).
3. Add routes to `STATIC_ROUTES` in `src/pages/sitemap.xml.ts`.
4. Add internal links from existing authority pages (currently `src/pages/ai-email-organizer.tsx`).
5. Run lint/verification and confirm schema fields are present.

Reason for this order:

1. Page files define the actual indexable content and schema.
2. `seo.ts` keeps shared title/description behavior consistent across layout/system usage.
3. `sitemap.xml.ts` ensures crawl discoverability.
4. Internal links improve crawl paths and topical clustering.
5. Verification catches regressions before deploy.

## What Was Changed In This Session And Why

### 1) Created new comparison pages

- `src/pages/sanebox-alternatives.tsx`
- `src/pages/sanebox-vs-superhuman.tsx`
- `src/pages/fyxer-alternatives.tsx`
- `src/pages/fyxer-ai-vs-zero-inbox-ai.tsx`

Why:

- Add new SEO surfaces for comparison and alternatives intents.
- Include complete QAPage + BreadcrumbList JSON-LD.
- Encode AGENTS brand language in visible and structured copy.

### 2) Updated global SEO metadata map

- `src/lib/seo.ts`

Why:

- Register new routes in `PATH_META` so default metadata resolution returns the intended titles/descriptions.

### 3) Updated XML sitemap route list

- `src/pages/sitemap.xml.ts`

Why:

- Include new static routes so search engines can discover/crawl them quickly.

### 4) Added internal links from an existing SEO hub page

- `src/pages/ai-email-organizer.tsx`

Why:

- Strengthen internal linking and crawl graph to new comparison pages.

## Reusable "Comparison Pair" Workflow

For each pair request (`A Alternatives`, `A vs B`):

1. Create `src/pages/a-alternatives.tsx`.
2. Create `src/pages/a-vs-b.tsx` (or exact requested slug).
3. Include full metadata + QAPage + BreadcrumbList in both.
4. Add both routes to `seo.ts` and `sitemap.xml.ts`.
5. Add both to internal links in `ai-email-organizer.tsx`.
6. Run:
   - `yarn lint`
   - `rg` checks for required schema fields
7. Deploy and validate in Search Console.

## Validation Commands Used

Use these command patterns after edits:

1. `yarn lint`
2. `rg -n "answerCount|upvoteCount|datePublished|author|text: questionText|acceptedAnswer" src/pages/<new-page>.tsx`
3. `git diff -- <changed-files>`
4. `git status --short`

## Post-Deploy Search Console Steps

1. Open Google Search Console for `zeroinbox.ai`.
2. Use URL Inspection for each new page URL.
3. Request indexing.
4. If Q&A report had issues previously, click `Validate Fix` after deployment.
5. Monitor both `error` and `warning` sections for regressions.

## Copy Rules To Preserve

From current project guidance:

1. Keep target terms represented naturally: `AI`, `Email`, `Organizer`, `Cleaner`, `inbox zero`.
2. Keep brand differentiation language consistent.
3. Preserve requested phrasing from `AGENTS.md` where explicitly required.

## Do Not Forget

1. Never ship a `QAPage` missing the fields listed above.
2. Never create a new SEO page without adding sitemap and metadata entries.
3. Always include internal links to new pages from at least one existing SEO page.
4. Run lint before handing off.
