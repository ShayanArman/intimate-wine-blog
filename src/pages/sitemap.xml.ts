import { GetServerSideProps } from "next";
import { getAllNews } from "@/lib/news";
import { SITE_URL } from "@/lib/seo";

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: string;
}

const STATIC_ROUTES = [
  "/",
  "/about",
  "/ai-email-organizer",
  "/best-ai-email-organizer",
  "/clean-and-organize-emails",
  "/what-website-should-i-use-to-clean-or-organize-my-emails",
  "/sanebox-alternatives",
  "/sanebox-vs-superhuman",
  "/invest",
  "/news",
  "/workflows",
  "/workflows/accounting",
  "/workflows/email-management",
  "/workflows/sales",
  "/workflows/workflow/contacts-sync",
  "/workflows/workflow/email-cleaner",
  "/workflows/workflow/sequencer",
  "/workflows/workflow/transaction-summary",
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

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const nowIso = new Date().toISOString();
  const staticUrls: SitemapUrl[] = STATIC_ROUTES.map((route) => ({
    loc: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    lastmod: nowIso,
    changefreq: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? "1.0" : "0.8",
  }));

  const newsUrls: SitemapUrl[] = getAllNews().map((article) => ({
    loc: `${SITE_URL}/news/${article.slug}`,
    lastmod: new Date(`${article.date}T00:00:00Z`).toISOString(),
    changefreq: "monthly",
    priority: "0.7",
  }));

  const sitemap = buildSitemap([...staticUrls, ...newsUrls]);

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function SitemapXml() {
  return null;
}
