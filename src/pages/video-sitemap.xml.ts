import { GetServerSideProps } from "next";
import { createHash } from "crypto";
import { SITE_URL } from "@/lib/seo";
import { getAllVideos } from "@/lib/videos";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

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
  const sitemap = buildVideoSitemap();
  const etag = `"${createHash("sha1").update(sitemap).digest("hex")}"`;
  const ifNoneMatch = req.headers["if-none-match"];
  const matchesEtag =
    typeof ifNoneMatch === "string" &&
    ifNoneMatch
      .split(",")
      .map((value) => value.trim())
      .includes(etag);

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.setHeader("ETag", etag);

  if (matchesEtag) {
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

export default function VideoSitemapXml() {
  return null;
}
