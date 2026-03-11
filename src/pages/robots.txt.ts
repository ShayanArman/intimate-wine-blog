import { GetServerSideProps } from "next";
import { SITE_URL } from "@/lib/seo";

const ALLOWED_AI_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Google-Extended",
  "Google"
];

function buildRobotsTxt() {
  const botRules = ALLOWED_AI_BOTS.map((bot) => `User-agent: ${bot}\nAllow: /`).join("\n\n");

  return `${botRules}

User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.write(buildRobotsTxt());
  res.end();

  return {
    props: {},
  };
};

export default function RobotsTxt() {
  return null;
}
