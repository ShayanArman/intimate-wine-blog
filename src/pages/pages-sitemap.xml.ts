import { GetServerSideProps } from "next";
import { getAllNews } from "@lib/news";
import { SITE_URL } from "@lib/info";
import {
  PAGES_STATIC_ROUTES,
  buildUrlSitemap,
  getLatestLastModifiedTimestamp,
  mapStaticRoutesToUrls,
  writeXmlResponse,
} from "@lib/sitemaps";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const staticUrls = mapStaticRoutesToUrls(PAGES_STATIC_ROUTES);
  const articleUrls = getAllNews().map((article) => ({
    loc: `${SITE_URL}/${article.slug}`,
    lastmod: new Date(`${article.date}T00:00:00Z`).toISOString(),
    changefreq: article.changefreq,
    priority: article.priority,
  }));
  const latestArticleTimestamp = articleUrls.length > 0
    ? getLatestLastModifiedTimestamp(articleUrls.map((url) => url.lastmod))
    : 0;
  const urls = staticUrls.map((url) => {
    if (url.loc !== SITE_URL || latestArticleTimestamp === 0) {
      return url;
    }

    return {
      ...url,
      lastmod: new Date(
        Math.max(Date.parse(url.lastmod), latestArticleTimestamp),
      ).toISOString(),
    };
  });
  const sitemapUrls = [...urls, ...articleUrls];
  const sitemap = buildUrlSitemap(sitemapUrls);
  const lastModifiedAt = getLatestLastModifiedTimestamp(sitemapUrls.map((url) => url.lastmod));

  return writeXmlResponse(context, sitemap, lastModifiedAt);
};

export default function PagesSitemapXml() {
  return null;
}
