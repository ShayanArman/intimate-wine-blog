import { SITE_NAME, SITE_URL } from "@lib/info";
import { GetServerSideProps } from "next";
import { getAllNews } from "@lib/news";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildRss() {
  const items = getAllNews()
    .map((article) => {
      const link = `${SITE_URL}/${article.slug}`;
      const pubDate = new Date(`${article.date}T00:00:00Z`).toUTCString();

      return `<item>
  <title>${escapeXml(article.title)}</title>
  <link>${escapeXml(link)}</link>
  <guid>${escapeXml(link)}</guid>
  <description>${escapeXml(article.excerpt)}</description>
  <pubDate>${pubDate}</pubDate>
</item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${SITE_NAME} News</title>
    <link>${SITE_URL}</link>
    <description>Product updates and research from ${SITE_NAME}</description>
    ${items}
  </channel>
</rss>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/rss+xml");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.write(buildRss());
  res.end();

  return {
    props: {},
  };
};

export default function FeedXml() {
  return null;
}
