import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@lib/info";
import { Box, Paper, Text, createStyles } from "@mantine/core";
import { getPathLastModified } from "@lib/seo";
import Head from "next/head";
import Link from "next/link";

const PUBLISH_DATE_LABEL = "March 10, 2026";
const PUBLISH_DATE_ISO = "2026-03-10T00:00:00-07:00";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 920,
    margin: "0 auto",
    padding: "6rem 2rem 4rem",

    [theme.fn.smallerThan("sm")]: {
      padding: "5rem 1.2rem 3rem",
    },
  },

  meta: {
    display: "inline-flex",
    alignSelf: "flex-start",
    width: "fit-content",
    marginBottom: "0.9rem",
    padding: "0.35rem 0.75rem",
    borderRadius: 999,
    background: "rgba(15, 29, 61, 0.07)",
    color: "rgba(15, 29, 61, 0.75)",
    fontSize: "0.92rem",
    fontWeight: 700,
    letterSpacing: "0.01em",
  },

  title: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.6rem",
    lineHeight: 1.08,
    letterSpacing: "-1px",
    color: "var(--zi-deep-blue)",
    marginBottom: "1rem",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "2rem",
    },
  },

  lead: {
    color: "rgba(15, 29, 61, 0.8)",
    fontSize: "1.08rem",
    lineHeight: 1.8,
    marginBottom: "1rem",
  },

  sectionTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.45rem",
    color: "var(--zi-deep-blue)",
    marginTop: "2.2rem",
    marginBottom: "0.75rem",
  },

  toolCard: {
    padding: "1.25rem",
    border: "1px solid rgba(15, 29, 61, 0.08)",
    borderRadius: 20,
    background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(247,248,251,0.98) 100%)",
    boxShadow: "0 12px 30px rgba(15, 29, 61, 0.06)",
  },

  toolName: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.2rem",
    color: "var(--zi-deep-blue)",
    marginBottom: "0.35rem",
  },

  toolMeta: {
    color: "rgba(15, 29, 61, 0.7)",
    fontSize: "0.95rem",
    fontWeight: 700,
    marginBottom: "0.55rem",
  },

  toolText: {
    color: "rgba(15, 29, 61, 0.78)",
    lineHeight: 1.75,
    fontSize: "0.98rem",
  },

  links: {
    marginTop: "1.4rem",
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
  },

  link: {
    color: "var(--zi-deep-blue)",
    fontWeight: 600,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  },
}));

export default function ToolsIndexPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/tools`;
  const title = "AI Tools - Human-Tested Reviews by Shayan Arman";
  const description =
    "Browse AI tool reviews from Shayan Arman to find the best AI tools for the job with human-tested writeups, ratings, and frequent updates.";
  const modifiedDate = getPathLastModified("/tools") ?? PUBLISH_DATE_ISO;

  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Tools",
    headline: "AI Tools",
    description,
    url: canonicalUrl,
    datePublished: PUBLISH_DATE_ISO,
    dateModified: modifiedDate,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: `${SITE_URL}/tools/superhuman`,
          name: "Superhuman Review",
        },
      ],
    },
    author: {
      "@type": "Person",
      name: "Shayan Arman",
      url: `${SITE_URL}/story`,
      sameAs: ["https://www.linkedin.com/in/shayan-arman/"],
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={description} />
        <meta key="keywords" name="keywords" content="ai tools, ai tool reviews, superhuman review, human-tested ai tools" />
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script
          key="ld-tools-collection"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionStructuredData) }}
        />
        <script
          key="ld-tools-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <Text className={classes.meta}>Published {PUBLISH_DATE_LABEL}</Text>
        <h1 className={classes.title}>Tools</h1>

        <Text className={classes.lead}>
          Tools is the directory for AI Tool Reviews from Shayan Arman, helping you find the best AI tools for the job
          with human-tested reviews, clear ratings, and frequent updates.
        </Text>

        <h2 className={classes.sectionTitle}>Tools</h2>
        <Paper className={classes.toolCard} shadow="none">
          <Text className={classes.toolName}>
            <Link href="/tools/superhuman" className={classes.link}>Superhuman</Link>
          </Text>
          <Text className={classes.toolMeta}>Rating: 3.5 / 5 stars</Text>
          <Text className={classes.toolText}>
            Superhuman is a premium email client built for fast keyboard-driven inbox triage. It feels polished and
            quick, but the value depends on whether you want speed-first email or broader AI organization and cleanup.
          </Text>
        </Paper>

        <div className={classes.links}>
          <Link href="/tools/superhuman" className={classes.link}>Read the Superhuman review</Link>
          <Link href="/ai-tool-reviews" className={classes.link}>Back to AI Tool Reviews</Link>
        </div>
      </Box>
    </>
  );
}
