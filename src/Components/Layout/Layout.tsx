import ZeroHeader from "@/Components/ZeroHeader/ZeroHeader";
import GoogleAnalytics from "../Analytics/GoogleAnalytics";
import { createStyles, Box, Flex } from "@mantine/core";
import FooterSection from "@/Components/Footer";
import useIsMobile from "@/hooks/useIsMobile";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  getSeoMeta,
  toCanonicalUrl,
} from "@/lib/seo";

const useStyles = createStyles(() => ({
  container: {
    backgroundColor: "var(--landing-background)",
  },

  content: {
    flex: 1,
  },
}));

export default function Layout({ children }: { children: ReactNode }) {
  const isSmallScreen = useIsMobile();
  const { classes } = useStyles();
  const router = useRouter();
  const pageMeta = getSeoMeta(router.pathname);
  const canonicalUrl = toCanonicalUrl(router.asPath || "/");

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/zeroInboxLogoBlack.svg`,
    description:
      "Zero Inbox is an ai email organizer for cleaning and organizing inboxes.",
    email: "info@zeroinbox.ai",
  };

  const webSiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: pageMeta.description,
    inLanguage: "en-US",
  };

  return (
    <>
      <Head>
        <title key="title">{pageMeta.title}</title>
        <link key="favicon" rel="icon" href="/logo.ico" />
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <link key="rss" rel="alternate" type="application/rss+xml" title="Zero Inbox News" href={`${SITE_URL}/feed.xml`} />
        <link key="site-facts-json" rel="alternate" type="application/json" title="Zero Inbox Site Facts" href={`${SITE_URL}/site-facts.json`} />
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta key="description" name="description" content={pageMeta.description} />
        <meta key="keywords" name="keywords" content={pageMeta.keywords} />
        <meta key="author" name="author" content={SITE_NAME} />
        <meta
          key="robots"
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          key="googlebot"
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta key="theme-color" name="theme-color" content="#007aff" />
        <meta key="application-name" name="application-name" content={SITE_NAME} />

        <meta key="og:title" property="og:title" content={pageMeta.title} />
        <meta key="og:description" property="og:description" content={pageMeta.description} />
        <meta key="og:type" property="og:type" content={pageMeta.ogType} />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
        <meta key="og:locale" property="og:locale" content="en_US" />
        <meta key="og:image" property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta key="og:image:alt" property="og:image:alt" content="Zero Inbox dashboard preview" />

        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content={pageMeta.title} />
        <meta key="twitter:description" name="twitter:description" content={pageMeta.description} />
        <meta key="twitter:image" name="twitter:image" content={DEFAULT_OG_IMAGE} />

        <script
          key="ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <script
          key="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteStructuredData) }}
        />
      </Head>

      <Flex id="#top" direction="column" mih="100vh" className={classes.container}>
        <GoogleAnalytics />
        <ZeroHeader isSmallScreen={isSmallScreen} />

        <Box className={classes.content}>
          {children}
        </Box>

        <FooterSection />
      </Flex>
    </>
  );
}
