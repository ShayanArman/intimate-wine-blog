import { escapeXml, getLatestLastModifiedTimestamp, writeXmlResponse } from "@lib/sitemaps";
import { getAllVideos } from "@lib/videos";
import { GetServerSideProps } from "next";
import { SITE_URL } from "@lib/info";

function buildVideoSitemap() {
  const videos = getAllVideos();
  const videoEntries = videos
    .map((video) => {
      const pageUrl = `${SITE_URL}/videos/${video.slug}`;
      const publicationDate = new Date(`${video.date}T00:00:00Z`).toISOString();

      return `<url>
  <loc>${escapeXml(pageUrl)}</loc>
  <lastmod>${escapeXml(publicationDate)}</lastmod>
  <video:video>
    <video:thumbnail_loc>${escapeXml(video.thumbnailUrl)}</video:thumbnail_loc>
    <video:title>${escapeXml(video.title)}</video:title>
    <video:description>${escapeXml(video.excerpt)}</video:description>
    <video:player_loc>${escapeXml(video.embedUrl)}</video:player_loc>
  </video:video>
</url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videoEntries}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const videos = getAllVideos();
  const sitemap = buildVideoSitemap();
  const lastModifiedAt = getLatestLastModifiedTimestamp(
    videos.map((video) => new Date(`${video.date}T00:00:00Z`).toISOString()),
  );

  return writeXmlResponse({ req, res }, sitemap, lastModifiedAt);
};

export default function VideoSitemapXml() {
  return null;
}
