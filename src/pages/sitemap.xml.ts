import { getAllVideos } from "@lib/videos";
import { GetServerSideProps } from "next";
import { getAllNews } from "@lib/news";
import { SITE_URL } from "@lib/info";
import {
  NEWS_STATIC_ROUTES,
  PAGES_STATIC_ROUTES,
  TOOLS_STATIC_ROUTES,
  buildSitemapIndex,
  getLatestLastModifiedTimestamp,
  mapStaticRoutesToUrls,
  writeXmlResponse,
} from "@lib/sitemaps";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageUrls = mapStaticRoutesToUrls(PAGES_STATIC_ROUTES);
  const toolUrls = mapStaticRoutesToUrls(TOOLS_STATIC_ROUTES);
  const newsHubUrls = mapStaticRoutesToUrls(NEWS_STATIC_ROUTES);
  const newsArticleDates = getAllNews().map((article) => new Date(`${article.date}T00:00:00Z`).toISOString());
  const videoDates = getAllVideos().map((video) => new Date(`${video.date}T00:00:00Z`).toISOString());

  const sitemaps = [
    {
      loc: `${SITE_URL}/pages-sitemap.xml`,
      lastmod: new Date(getLatestLastModifiedTimestamp(pageUrls.map((url) => url.lastmod))).toISOString(),
    },
    {
      loc: `${SITE_URL}/tools-sitemap.xml`,
      lastmod: new Date(getLatestLastModifiedTimestamp(toolUrls.map((url) => url.lastmod))).toISOString(),
    },
    {
      loc: `${SITE_URL}/news-sitemap.xml`,
      lastmod: new Date(
        getLatestLastModifiedTimestamp([
          ...newsHubUrls.map((url) => url.lastmod),
          ...newsArticleDates,
        ]),
      ).toISOString(),
    },
    {
      loc: `${SITE_URL}/video-sitemap.xml`,
      lastmod: new Date(getLatestLastModifiedTimestamp(videoDates)).toISOString(),
    },
  ];

  const sitemapIndex = buildSitemapIndex(sitemaps);
  const lastModifiedAt = getLatestLastModifiedTimestamp(sitemaps.map((sitemap) => sitemap.lastmod));

  return writeXmlResponse(context, sitemapIndex, lastModifiedAt);
};

export default function SitemapIndexXml() {
  return null;
}
