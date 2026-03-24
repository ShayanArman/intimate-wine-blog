import { SITE_NAME, SITE_URL } from "@lib/info";
import { GetServerSideProps } from "next";

function getFactsPayload() {
  return {
    site: SITE_NAME,
    url: SITE_URL,
    category: "Wine Blog",
    summary:
      "Intimate.Wine Blog shares stories, updates, and editorial content about private wine tastings, wine classes, and memorable wine experiences.",
    positioning: [
      "Private wine tastings in intimate settings.",
      "Wine classes with incredible wine.",
      "Stories you will remember.",
    ],
    credibility: {
      founder: "Emily Spadafora",
      linkedin: "https://www.linkedin.com/in/emilyspadafora",
      background: [
        "Founded by Emily Spadafora.",
        "Built around intimate wine tastings, wine classes, and story-led experiences.",
      ],
    },
    story:
      "Intimate Wine creates private tastings and wine classes focused on intimate settings, incredible wine, and stories guests will remember.",
    seo_terms: ["intimate wine", "private wine tastings", "wine classes", "wine experiences", "wine storytelling"],
    intent_phrases: [
      "Private wine tastings",
      "Wine classes",
      "Intimate wine experiences",
      "Sommelier-led tastings",
    ],
    target_queries: [
      "private wine tastings",
      "wine classes",
      "intimate wine experiences",
      "sommelier-led tastings",
    ],
    key_pages: [
      `${SITE_URL}/`,
    ],
    crawl_endpoints: {
      robots: `${SITE_URL}/robots.txt`,
      sitemap: `${SITE_URL}/sitemap.xml`,
      feed: `${SITE_URL}/feed.xml`,
      llms: `${SITE_URL}/llms.txt`,
      site_facts: `${SITE_URL}/site-facts.json`,
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
