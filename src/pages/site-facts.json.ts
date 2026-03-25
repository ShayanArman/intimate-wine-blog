import {
  BUSINESS_DESCRIPTION,
  BUSINESS_STORY,
  LINKED_SITE_URL,
  MAIN_PAGE_DESCRIPTION,
  SITE_CATEGORY,
  SITE_FOUNDER,
  SITE_NAME,
  SITE_URL,
  socials_links_map,
} from "@lib/info";
import { GetServerSideProps } from "next";

import * as Keywords from "@lib/keywords";

function getFactsPayload() {
  return {
    site: SITE_NAME,
    url: SITE_URL,
    related_site: LINKED_SITE_URL,
    category: SITE_CATEGORY,
    summary: MAIN_PAGE_DESCRIPTION,
    positioning: Keywords.positioning,
    credibility: {
      founder: SITE_FOUNDER.name,
      linkedin: socials_links_map.founderLinkedIn,
      instagram: socials_links_map.instagram,
      background: [
        `Founded by ${SITE_FOUNDER.name}.`,
        BUSINESS_DESCRIPTION,
      ],
    },
    story: BUSINESS_STORY,
    seo_terms: Keywords.seo_terms,
    intent_phrases: Keywords.intent_phrases,
    target_queries: Keywords.target_queries,
    key_pages: [
      `${SITE_URL}/`,
      LINKED_SITE_URL,
    ],
    crawl_endpoints: {
      robots: `${SITE_URL}/robots.txt`,
      sitemap: `${SITE_URL}/sitemap.xml`,
      pages_sitemap: `${SITE_URL}/pages-sitemap.xml`,
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
