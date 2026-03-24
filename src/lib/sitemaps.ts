import { GetServerSidePropsContext } from "next";
import { getPathLastModified } from "@/lib/seo";
import { createHash } from "crypto";
import { SITE_URL } from "./info";

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: string;
}

export interface SitemapReference {
  loc: string;
  lastmod: string;
}

export interface StaticRoute extends Omit<SitemapUrl, "loc" | "lastmod"> {
  route: string;
}

export const PAGES_STATIC_ROUTES: StaticRoute[] = [
  {
    route: "/",
    changefreq: "daily",
    priority: "1.0",
  },
  {
    route: "/about",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    route: "/story",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    route: "/ai-email-organizer",
    changefreq: "weekly",
    priority: "0.95",
  },
  {
    route: "/best-ai-email-organizer",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    route: "/clean-and-organize-emails",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    route: "/what-website-should-i-use-to-clean-or-organize-my-emails",
    changefreq: "weekly",
    priority: "0.85",
  },
  {
    route: "/mark-zuckerberg-loves-inbox-zero-ai",
    changefreq: "weekly",
    priority: "0.85",
  },
  {
    route: "/sanebox-alternatives",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/sanebox-vs-superhuman",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/superhuman-alternatives",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/fyxer-alternatives",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/fyxer-ai-vs-zero-inbox-ai",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/fyxer-ai-vs-superhuman",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/invest",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    route: "/videos",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/dynamodb",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    route: "/workflows",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    route: "/workflows/accounting",
    changefreq: "monthly",
    priority: "0.65",
  },
  {
    route: "/workflows/email-management",
    changefreq: "monthly",
    priority: "0.65",
  },
  {
    route: "/workflows/sales",
    changefreq: "monthly",
    priority: "0.65",
  },
  {
    route: "/workflows/workflow/contacts-sync",
    changefreq: "monthly",
    priority: "0.65",
  },
  {
    route: "/workflows/workflow/email-cleaner",
    changefreq: "monthly",
    priority: "0.65",
  },
  {
    route: "/workflows/workflow/sequencer",
    changefreq: "monthly",
    priority: "0.65",
  },
  {
    route: "/workflows/workflow/transaction-summary",
    changefreq: "monthly",
    priority: "0.65",
  },
];

export const TOOLS_STATIC_ROUTES: StaticRoute[] = [
  {
    route: "/ai-tool-reviews",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/tools",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/tools/superhuman",
    changefreq: "weekly",
    priority: "0.75",
  },
];

export const NEWS_STATIC_ROUTES: StaticRoute[] = [
  {
    route: "/news",
    changefreq: "weekly",
    priority: "0.75",
  },
];

export function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildUrlSitemap(urls: SitemapUrl[]) {
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

export function buildSitemapIndex(sitemaps: SitemapReference[]) {
  const sitemapSet = sitemaps
    .map(
      (sitemap) => `<sitemap>
  <loc>${escapeXml(sitemap.loc)}</loc>
  <lastmod>${escapeXml(sitemap.lastmod)}</lastmod>
</sitemap>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapSet}
</sitemapindex>`;
}

export function requirePathLastModified(route: string) {
  const lastModified = getPathLastModified(route);

  if (!lastModified) {
    throw new Error(`Missing last modified date for sitemap route: ${route}`);
  }

  return lastModified;
}

export function mapStaticRoutesToUrls(routes: StaticRoute[]): SitemapUrl[] {
  return routes.map((routeConfig) => ({
    loc: routeConfig.route === "/" ? SITE_URL : `${SITE_URL}${routeConfig.route}`,
    lastmod: requirePathLastModified(routeConfig.route),
    changefreq: routeConfig.changefreq,
    priority: routeConfig.priority,
  }));
}

export function getLatestLastModifiedTimestamp(values: string[]) {
  return values.reduce((latestTimestamp, value) => {
    return Math.max(latestTimestamp, Date.parse(value));
  }, 0);
}

export function writeXmlResponse(
  context: Pick<GetServerSidePropsContext, "req" | "res">,
  xml: string,
  lastModifiedAt?: number,
) {
  const { req, res } = context;
  const etag = `"${createHash("sha1").update(xml).digest("hex")}"`;
  const ifNoneMatch = req.headers["if-none-match"];
  const ifModifiedSince = req.headers["if-modified-since"];
  const matchesEtag =
    typeof ifNoneMatch === "string" &&
    ifNoneMatch
      .split(",")
      .map((value) => value.trim())
      .includes(etag);
  const modifiedSinceTimestamp = typeof ifModifiedSince === "string" ? Date.parse(ifModifiedSince) : Number.NaN;
  const hasFreshDate = typeof lastModifiedAt === "number" && Number.isFinite(lastModifiedAt);
  const isFreshByDate = hasFreshDate && Number.isFinite(modifiedSinceTimestamp) && modifiedSinceTimestamp >= lastModifiedAt;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.setHeader("ETag", etag);

  if (hasFreshDate) {
    res.setHeader("Last-Modified", new Date(lastModifiedAt).toUTCString());
  }

  if (matchesEtag || isFreshByDate) {
    res.statusCode = 304;
    res.end();

    return {
      props: {},
    };
  }

  res.write(xml);
  res.end();

  return {
    props: {},
  };
}
