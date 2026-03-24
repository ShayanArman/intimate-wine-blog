import { GetServerSideProps } from "next";
import { getAllNews } from "@lib/news";
import {
  NEWS_STATIC_ROUTES,
  buildUrlSitemap,
  getLatestLastModifiedTimestamp,
  mapStaticRoutesToUrls,
  writeXmlResponse,
} from "@lib/sitemaps";
import { SITE_URL } from "@lib/seo";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const hubUrls = mapStaticRoutesToUrls(NEWS_STATIC_ROUTES);
  const articleUrls = getAllNews().map((article) => ({
    loc: `${SITE_URL}/news/${article.slug}`,
    lastmod: new Date(`${article.date}T00:00:00Z`).toISOString(),
    changefreq: "monthly" as const,
    priority: "0.8",
  }));
  const urls = [...hubUrls, ...articleUrls];
  const sitemap = buildUrlSitemap(urls);
  const lastModifiedAt = getLatestLastModifiedTimestamp(urls.map((url) => url.lastmod));

  return writeXmlResponse(context, sitemap, lastModifiedAt);
};

export default function NewsSitemapXml() {
  return null;
}
