import GoogleAnalytics from "../Analytics/GoogleAnalytics";
import { createStyles, Box, Flex } from "@mantine/core";
import GangsterHeader from "@/components/GangsterHeader";
import FooterSection from "@/components/Footer";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Head from "next/head";
import {
  BUSINESS_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  SITE_FOUNDER,
  SITE_NAME,
  SITE_URL,
  socials_links_map,
} from "@lib/info";
import {
  getPathLastModified,
  getSeoMeta,
  toCanonicalUrl,
} from "@lib/seo";

const useStyles = createStyles(() => ({
  container: {
    backgroundColor: "var(--landing-background)",
  },

  content: {
    flex: 1,
  },
}));

export default function Layout({ children }: { children: ReactNode }) {
  const { classes } = useStyles();
  const router = useRouter();
  const pageMeta = getSeoMeta(router.pathname);
  const canonicalUrl = toCanonicalUrl(router.asPath || "/");
  const lastModified = getPathLastModified(router.pathname);

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logoHorizontal.svg`,
    description: BUSINESS_DESCRIPTION,
    founder: SITE_FOUNDER,
    sameAs: [socials_links_map.instagram],
  };

  const webSiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: pageMeta.description,
    inLanguage: "en-US",
  };

  const webPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageMeta.title,
    url: canonicalUrl,
    description: pageMeta.description,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(lastModified ? { dateModified: lastModified } : {}),
  };

  return (
    <>
      <Head>
        <title key="title">{pageMeta.title}</title>
        <link key="favicon" rel="icon" href="/logo.ico" />
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <link key="rss" rel="alternate" type="application/rss+xml" title={`${SITE_NAME} News`} href={`${SITE_URL}/feed.xml`} />
        <link key="llms-txt" rel="alternate" type="text/plain" title={`${SITE_NAME} LLMs.txt`} href={`${SITE_URL}/llms.txt`} />
        <link key="site-facts-json" rel="alternate" type="application/json" title={`${SITE_NAME} Site Facts`} href={`${SITE_URL}/site-facts.json`} />
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
        {lastModified ? <meta key="last-modified" name="last-modified" content={lastModified} /> : null}

        <meta key="og:title" property="og:title" content={pageMeta.title} />
        <meta key="og:description" property="og:description" content={pageMeta.description} />
        <meta key="og:type" property="og:type" content={pageMeta.ogType} />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
        <meta key="og:locale" property="og:locale" content="en_US" />
        <meta key="og:image" property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta key="og:image:alt" property="og:image:alt" content={DEFAULT_OG_IMAGE_ALT} />
        {lastModified ? <meta key="og:updated_time" property="og:updated_time" content={lastModified} /> : null}
        {pageMeta.ogType === "article" && lastModified ? (
          <meta key="article:modified_time" property="article:modified_time" content={lastModified} />
        ) : null}

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
        <script
          key="ld-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageStructuredData) }}
        />
      </Head>

      <Flex id="#top" direction="column" mih="100vh" className={classes.container}>
        <GoogleAnalytics />
        <GangsterHeader />

        <Box className={classes.content}>
          {children}
        </Box>

        <FooterSection />
      </Flex>
    </>
  );
}
