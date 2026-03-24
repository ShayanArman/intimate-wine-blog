import { GetServerSideProps } from "next";
import {
  PAGES_STATIC_ROUTES,
  buildUrlSitemap,
  getLatestLastModifiedTimestamp,
  mapStaticRoutesToUrls,
  writeXmlResponse,
} from "@lib/sitemaps";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const urls = mapStaticRoutesToUrls(PAGES_STATIC_ROUTES);
  const sitemap = buildUrlSitemap(urls);
  const lastModifiedAt = getLatestLastModifiedTimestamp(urls.map((url) => url.lastmod));

  return writeXmlResponse(context, sitemap, lastModifiedAt);
};

export default function PagesSitemapXml() {
  return null;
}
