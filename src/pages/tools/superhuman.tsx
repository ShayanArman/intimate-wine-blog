import { Box, SimpleGrid, Text, createStyles } from "@mantine/core";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@lib/info";
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
    fontSize: "2.55rem",
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
    marginTop: "2.1rem",
    marginBottom: "0.75rem",
  },

  factCard: {
    padding: "1rem 1.1rem",
    borderRadius: 18,
    border: "1px solid rgba(15, 29, 61, 0.08)",
    background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(247,248,251,0.98) 100%)",
    boxShadow: "0 12px 30px rgba(15, 29, 61, 0.06)",
  },

  factLabel: {
    color: "rgba(15, 29, 61, 0.58)",
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "0.03em",
    textTransform: "uppercase" as const,
    marginBottom: "0.2rem",
  },

  factValue: {
    color: "var(--zi-deep-blue)",
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.1rem",
  },

  list: {
    margin: 0,
    paddingLeft: "1.2rem",
    color: "rgba(15, 29, 61, 0.84)",
    lineHeight: 1.8,

    "& li": {
      marginBottom: "0.55rem",
    },
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

export default function SuperhumanToolPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/tools/superhuman`;
  const title = "Superhuman Review - 3.5 / 5 Stars";
  const description =
    "Human-tested Superhuman review from Shayan Arman with a 3.5 / 5 star rating, what the tool does well, and where it falls short.";
  const modifiedDate = getPathLastModified("/tools/superhuman") ?? PUBLISH_DATE_ISO;

  const reviewStructuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: "Superhuman Review",
    reviewBody:
      "Superhuman is fast, polished, and strong for keyboard-heavy email users, but it is less compelling if you want broader AI organization, cleanup, or pricing flexibility.",
    datePublished: PUBLISH_DATE_ISO,
    dateModified: modifiedDate,
    url: canonicalUrl,
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
    reviewRating: {
      "@type": "Rating",
      ratingValue: 3.5,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: "Superhuman",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, macOS, iOS",
      url: "https://superhuman.com",
      description: "Premium email client focused on speed, shortcuts, and fast inbox triage.",
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
        item: `${SITE_URL}/tools`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Superhuman",
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
        <meta key="keywords" name="keywords" content="superhuman review, ai tools, human-tested review, email client review" />
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
          key="ld-superhuman-review"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewStructuredData) }}
        />
        <script
          key="ld-superhuman-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <Text className={classes.meta}>Published {PUBLISH_DATE_LABEL}</Text>
        <h1 className={classes.title}>Superhuman</h1>

        <Text className={classes.lead}>
          Superhuman is a premium email client built around speed. It focuses on keyboard shortcuts, fast triage, and a
          polished inbox experience for people who want to move through email quickly.
        </Text>

        <SimpleGrid cols={3} spacing="lg" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          <Box className={classes.factCard}>
            <Text className={classes.factLabel}>Rating</Text>
            <Text className={classes.factValue}>3.5 / 5 stars</Text>
          </Box>
          <Box className={classes.factCard}>
            <Text className={classes.factLabel}>Last Tried</Text>
            <Text className={classes.factValue}>March 10, 2026</Text>
          </Box>
          <Box className={classes.factCard}>
            <Text className={classes.factLabel}>Human Reviewed</Text>
            <Text className={classes.factValue}>Yes</Text>
          </Box>
        </SimpleGrid>

        <h2 className={classes.sectionTitle}>What Superhuman does well</h2>
        <ul className={classes.list}>
          <li>The product feels fast and polished from the first session.</li>
          <li>Keyboard-heavy users can move through inbox triage quickly.</li>
          <li>The interface is clean and makes email feel more focused.</li>
        </ul>

        <h2 className={classes.sectionTitle}>Where it falls short</h2>
        <ul className={classes.list}>
          <li>The value is strongest for people who already live in email all day.</li>
          <li>It is less compelling if you want broader AI organization and cleanup workflows.</li>
          <li>The pricing bar is high relative to what many users need from an email tool.</li>
        </ul>

        <h2 className={classes.sectionTitle}>Verdict</h2>
        <Text className={classes.lead}>
          Superhuman earns <strong>3.5 / 5 stars</strong>. It is a strong product for speed-first email users, but it
          is not the most complete option if your goal is wider AI assistance, inbox cleanup, and workflow automation.
        </Text>

        <div className={classes.links}>
          <Link href="/tools" className={classes.link}>Back to tools</Link>
          <Link href="/ai-tool-reviews" className={classes.link}>AI Tool Reviews</Link>
          <Link href="/superhuman-alternatives" className={classes.link}>Superhuman Alternatives</Link>
        </div>
      </Box>
    </>
  );
}
