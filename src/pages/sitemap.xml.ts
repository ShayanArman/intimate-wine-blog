import { createHash } from "crypto";
import { GetServerSideProps } from "next";
import { getAllNews } from "@/lib/news";
import { SITE_URL } from "@/lib/seo";

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: string;
}

interface StaticRoute extends Omit<SitemapUrl, "loc"> {
  route: string;
}

// Keep these dates aligned with the page's most recent meaningful content update.
const STATIC_ROUTES: StaticRoute[] = [
  {
    route: "/",
    lastmod: "2026-03-03T00:11:55-08:00",
    changefreq: "daily",
    priority: "1.0",
  },
  {
    route: "/about",
    lastmod: "2026-02-27T10:49:51-08:00",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    route: "/story",
    lastmod: "2026-02-27T10:50:24-08:00",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    route: "/ai-email-organizer",
    lastmod: "2026-03-05T14:36:43-08:00",
    changefreq: "weekly",
    priority: "0.95",
  },
  {
    route: "/best-ai-email-organizer",
    lastmod: "2026-02-27T10:18:19-08:00",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    route: "/clean-and-organize-emails",
    lastmod: "2026-02-24T14:16:45-08:00",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    route: "/what-website-should-i-use-to-clean-or-organize-my-emails",
    lastmod: "2026-02-27T10:18:19-08:00",
    changefreq: "weekly",
    priority: "0.85",
  },
  {
    route: "/sanebox-alternatives",
    lastmod: "2026-02-27T10:27:58-08:00",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/sanebox-vs-superhuman",
    lastmod: "2026-02-27T10:27:58-08:00",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/fyxer-alternatives",
    lastmod: "2026-02-27T10:37:07-08:00",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/fyxer-ai-vs-zero-inbox-ai",
    lastmod: "2026-02-27T10:34:40-08:00",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/fyxer-ai-vs-superhuman",
    lastmod: "2026-02-27T10:37:07-08:00",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/invest",
    lastmod: "2026-02-24T00:41:59-08:00",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    route: "/news",
    lastmod: "2026-02-24T14:16:45-08:00",
    changefreq: "weekly",
    priority: "0.75",
  },
  {
    route: "/dynamodb",
    lastmod: "2026-03-02T23:51:39-08:00",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    route: "/workflows",
    lastmod: "2025-08-23T08:33:12-07:00",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    route: "/workflows/accounting",
    lastmod: "2025-08-23T08:33:12-07:00",
    changefreq: "monthly",
    priority: "0.65",
  },
  {
    route: "/workflows/email-management",
    lastmod: "2025-08-23T08:33:12-07:00",
    changefreq: "monthly",
    priority: "0.65",
  },
  {
    route: "/workflows/sales",
    lastmod: "2025-08-23T08:33:12-07:00",
    changefreq: "monthly",
    priority: "0.65",
  },
  {
    route: "/workflows/workflow/contacts-sync",
    lastmod: "2025-08-23T08:33:12-07:00",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    route: "/workflows/workflow/email-cleaner",
    lastmod: "2025-08-23T08:33:12-07:00",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    route: "/workflows/workflow/sequencer",
    lastmod: "2025-08-23T08:33:12-07:00",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    route: "/workflows/workflow/transaction-summary",
    lastmod: "2025-08-23T08:33:12-07:00",
    changefreq: "monthly",
    priority: "0.6",
  },
];

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSitemap(urls: SitemapUrl[]) {
  const urlSet = urls
    .map(
      (url) => `<url>
  <loc>${escapeXml(url.loc)}</loc>
  <lastmod>${escapeXml(url.lastmod)}</lastmod>
  <changefreq>${url.changefreq}</changefreq>
  <priority>${url.priority}</priority>
</url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlSet}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const staticUrls: SitemapUrl[] = STATIC_ROUTES.map((routeConfig) => ({
    loc: routeConfig.route === "/" ? SITE_URL : `${SITE_URL}${routeConfig.route}`,
    lastmod: routeConfig.lastmod,
    changefreq: routeConfig.changefreq,
    priority: routeConfig.priority,
  }));

  const newsUrls: SitemapUrl[] = getAllNews().map((article) => ({
    loc: `${SITE_URL}/news/${article.slug}`,
    lastmod: new Date(`${article.date}T00:00:00Z`).toISOString(),
    changefreq: "monthly",
    priority: "0.7",
  }));

  const allUrls = [...staticUrls, ...newsUrls];
  const sitemap = buildSitemap(allUrls);
  const sitemapLastModifiedAt = allUrls.reduce((latestTimestamp, url) => {
    return Math.max(latestTimestamp, Date.parse(url.lastmod));
  }, 0);
  const sitemapLastModified = new Date(sitemapLastModifiedAt || Date.now()).toUTCString();
  const etag = `"${createHash("sha1").update(sitemap).digest("hex")}"`;
  const ifNoneMatch = req.headers["if-none-match"];
  const ifModifiedSince = req.headers["if-modified-since"];
  const matchesEtag = typeof ifNoneMatch === "string" && ifNoneMatch.split(",").map((value) => value.trim()).includes(etag);
  const modifiedSinceTimestamp = typeof ifModifiedSince === "string" ? Date.parse(ifModifiedSince) : Number.NaN;
  const isFreshByDate = Number.isFinite(modifiedSinceTimestamp) && modifiedSinceTimestamp >= sitemapLastModifiedAt;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.setHeader("Last-Modified", sitemapLastModified);
  res.setHeader("ETag", etag);

  if (matchesEtag || isFreshByDate) {
    res.statusCode = 304;
    res.end();

    return {
      props: {},
    };
  }

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function SitemapXml() {
  return null;
}
