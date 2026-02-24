import { GetServerSideProps } from "next";
import { SITE_URL } from "@/lib/seo";

function buildRobotsTxt() {
  return `User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

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
