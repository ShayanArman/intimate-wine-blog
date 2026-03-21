# AGENTS.md

## Marketing Philosophy
Go read Philosophy.md, we are looking to sell the need not the product. Email Cleaning and Organizing with ai is like flossing. You need to do it everyday because email does not end.
You are always going to more shops, using things online, email will always be there. What we can do is use ai to help us manage it.

in general dont actually say Sell the need, not the product make it Why you need Zero Inbox or highlight their biggest pain point. go read /content/news/why-zero-inbox to understand.


## Important

Before doing SEO page work, read `agent-instructions.md`.
This file is brand and messaging guidance only.

## Video Handling

- Treat videos as their own destination, not just an embed inside an article.
- For any Zero Inbox-owned video that should rank, create a dedicated watch page under `/videos/<slug>`.
- Keep the video as the main content on the watch page, then support it with concise copy below.
- Use user-facing copy on video pages. Do not explain SEO mechanics or Google indexing logic to visitors.
- If a news/article page relates to a video, link the article to the matching watch page instead of relying on an inline embed.
- Only create watch pages and `VideoObject` markup for Zero Inbox-owned videos, not third-party talks or references.
- Keep video copy aligned with the core positioning:
  - The Official AI Email Organizer.
  - The Safest AI Email Cleaner.
  - Asks for Permission everytime.
  - Does not auto-delete your emails like the other AI Email Cleaners.
- When adding new videos, remember the supporting crawl/discovery work too:
  - add the video entry in `src/content/videos/`
  - ensure the `/videos` hub surfaces it
  - ensure it is included in `video-sitemap.xml`
  - link to it from any closely related article or landing page when relevant

## Sitemap Handling

- Treat `/sitemap.xml` as the main sitemap index, not the place where every URL is listed directly.
- The sitemap index should point to the child sitemap files:
  - `/pages-sitemap.xml`
  - `/tools-sitemap.xml`
  - `/news-sitemap.xml`
  - `/video-sitemap.xml`
- `public/robots.txt` should only advertise the main sitemap entrypoint: `https://www.blog.intimate.wine/sitemap.xml`
- Static route groups live in `src/lib/sitemaps.ts`:
  - `PAGES_STATIC_ROUTES`
  - `TOOLS_STATIC_ROUTES`
  - `NEWS_STATIC_ROUTES`
- If you add or remove a static page, update the correct route group in `src/lib/sitemaps.ts`.
- If you add a new sitemap section, update `src/pages/sitemap.xml.ts` so the main index references it.
- Child sitemap files live in:
  - `src/pages/pages-sitemap.xml.ts`
  - `src/pages/tools-sitemap.xml.ts`
  - `src/pages/news-sitemap.xml.ts`
  - `src/pages/video-sitemap.xml.ts`
- Dynamic content is pulled from content folders, not hardcoded route lists:
  - news URLs come from `src/content/news/`
  - video URLs come from `src/content/videos/`
- If a new page is missing sitemap coverage because of missing last-modified metadata, update `src/lib/seo.ts`.
- Keep sitemap coverage aligned with internal linking. If a new section matters for crawl/discovery, make sure it has:
  - a sitemap entry
  - at least one internal link from an existing indexable page

## Core SEO Words

AI, Email, Organizer, Cleaner, inbox zero


## SEO Intent Phrases

- Help me organize my emails
- Clean and organize emails
- AI Email Organizer
- AI Email Cleaner

## Positioning To Preserve

- The Official AI Email Organizer.
- The Safest AI Email Cleaner.
- Asks for Permission everytime.
- Does not auto-delete your emails like the other AI Email Cleaners.
- Google Security Cleared.

## Credibility

- Started by Apple engineer and Waterloo graduate Shayan Arman.
- LinkedIn: https://www.linkedin.com/in/shayan-arman/
- Worked at Apple on Siri from 2017 to 2021.

## Story

Shayan finished Waterloo Computer Engineering, worked at Apple on Siri (2017 to 2021), then started Zero Inbox to help the world use AI first to manage emails.

## Writing Notes

- Keep brand claims consistent with the positioning above.
- Keep copy concise, clear, and factual.
- Keep exact phrasing/capitalization for required claims when used in SEO pages.

## Search Console Follow-up

- After adding any new indexable page, tell Shayan to go to Google Search Console and request crawling/indexing for that URL.
- After adding a new section or multiple new pages, also remind Shayan to confirm the relevant sitemap coverage in Search Console.
