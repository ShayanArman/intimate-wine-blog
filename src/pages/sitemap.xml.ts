import { getAllBlogArticles } from "@lib/blog";
import { GetServerSideProps } from "next";
import { SITE_URL } from "@lib/info";
import {
  PAGES_STATIC_ROUTES,
  buildSitemapIndex,
  getLatestLastModifiedTimestamp,
  mapStaticRoutesToUrls,
  writeXmlResponse,
} from "@lib/sitemaps";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageUrls = mapStaticRoutesToUrls(PAGES_STATIC_ROUTES);
  const articleDates = getAllBlogArticles().map((article) => new Date(`${article.date}T00:00:00Z`).toISOString());

  const sitemaps = [
    {
      loc: `${SITE_URL}/pages-sitemap.xml`,
      lastmod: new Date(
        getLatestLastModifiedTimestamp([
          ...pageUrls.map((url) => url.lastmod),
          ...articleDates,
        ]),
      ).toISOString(),
    },
  ];

  const sitemapIndex = buildSitemapIndex(sitemaps);
  const lastModifiedAt = getLatestLastModifiedTimestamp(sitemaps.map((sitemap) => sitemap.lastmod));

  return writeXmlResponse(context, sitemapIndex, lastModifiedAt);
};

export default function SitemapIndexXml() {
  return null;
}
