import { GetServerSideProps } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

function getFactsPayload() {
  return {
    site: SITE_NAME,
    url: SITE_URL,
    category: "AI Email Organizer",
    summary:
      "Zero Inbox is an ai email organizer focused on inbox cleanup, unsubscribe automation, and high-priority email organization.",
    target_queries: [
      "ai email organizer",
      "what website should i use to clean or organize my emails",
      "best ai email organizer",
      "how to clean and organize emails",
    ],
    key_pages: [
      `${SITE_URL}/`,
      `${SITE_URL}/ai-email-organizer`,
      `${SITE_URL}/best-ai-email-organizer`,
      `${SITE_URL}/clean-and-organize-emails`,
      `${SITE_URL}/what-website-should-i-use-to-clean-or-organize-my-emails`,
      `${SITE_URL}/news`,
    ],
    crawl_endpoints: {
      robots: `${SITE_URL}/robots.txt`,
      sitemap: `${SITE_URL}/sitemap.xml`,
      feed: `${SITE_URL}/feed.xml`,
      llms: `${SITE_URL}/llms.txt`,
    },
  };
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.write(JSON.stringify(getFactsPayload(), null, 2));
  res.end();

  return {
    props: {},
  };
};

export default function SiteFactsJson() {
  return null;
}
