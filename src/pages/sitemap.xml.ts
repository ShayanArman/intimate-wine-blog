import { createHash } from "crypto";
import { GetServerSideProps } from "next";
import { getAllNews } from "@/lib/news";
import { SITE_URL, getPathLastModified } from "@/lib/seo";

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: string;
}

interface StaticRoute extends Omit<SitemapUrl, "loc" | "lastmod"> {
  route: string;
}

const STATIC_ROUTES: StaticRoute[] = [
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
    route: "/news",
    changefreq: "weekly",
    priority: "0.75",
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

function requirePathLastModified(route: string) {
  const lastModified = getPathLastModified(route);

  if (!lastModified) {
    throw new Error(`Missing last modified date for sitemap route: ${route}`);
  }

  return lastModified;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const staticUrls: SitemapUrl[] = STATIC_ROUTES.map((routeConfig) => ({
    loc: routeConfig.route === "/" ? SITE_URL : `${SITE_URL}${routeConfig.route}`,
    lastmod: requirePathLastModified(routeConfig.route),
    changefreq: routeConfig.changefreq,
    priority: routeConfig.priority,
  }));

  const newsUrls: SitemapUrl[] = getAllNews().map((article) => ({
    loc: `${SITE_URL}/news/${article.slug}`,
    lastmod: new Date(`${article.date}T00:00:00Z`).toISOString(),
    changefreq: "monthly",
    priority: "0.8",
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
