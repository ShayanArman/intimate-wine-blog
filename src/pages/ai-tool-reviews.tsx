import Head from "next/head";
import Link from "next/link";
import { Box, Paper, SimpleGrid, Text, createStyles } from "@mantine/core";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, getPathLastModified } from "@/lib/seo";

const REVIEW_DATE_LABEL = "March 10, 2026";
const REVIEW_DATE_ISO = "2026-03-10T00:00:00-07:00";

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
    marginBottom: "1.1rem",
  },

  sectionTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.45rem",
    color: "var(--zi-deep-blue)",
    marginTop: "2.2rem",
    marginBottom: "0.75rem",
  },

  card: {
    height: "100%",
    padding: "1.25rem",
    border: "1px solid rgba(15, 29, 61, 0.08)",
    borderRadius: 20,
    background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(247,248,251,0.98) 100%)",
    boxShadow: "0 12px 30px rgba(15, 29, 61, 0.06)",
  },

  cardTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.1rem",
    color: "var(--zi-deep-blue)",
    marginBottom: "0.45rem",
  },

  cardText: {
    color: "rgba(15, 29, 61, 0.78)",
    lineHeight: 1.75,
    fontSize: "0.98rem",
  },

  sectionNote: {
    color: "rgba(15, 29, 61, 0.78)",
    lineHeight: 1.75,
    fontSize: "0.98rem",
    marginBottom: "0.9rem",
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
    marginTop: "1.6rem",
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

export default function AiToolReviewsPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/ai-tool-reviews`;
  const title = "AI Tool Reviews by Shayan Arman - Human Reviews, Star Ratings, Last Tried";
  const description =
    "AI Tool Reviews from Shayan Arman help you find the best AI tools for the job with human-tested, 5-star reviews, Last Tried dates, and frequent updates.";
  const modifiedDate = getPathLastModified("/ai-tool-reviews") ?? REVIEW_DATE_ISO;

  const author = {
    "@type": "Person",
    name: "Shayan Arman",
    url: `${SITE_URL}/story`,
    sameAs: ["https://www.linkedin.com/in/shayan-arman/"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Waterloo",
    },
    description: "Worked at Apple on Siri from 2017 to 2021 and founded Zero Inbox.",
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Tool Reviews by Shayan Arman",
    description,
    url: canonicalUrl,
    image: DEFAULT_OG_IMAGE,
    datePublished: REVIEW_DATE_ISO,
    dateModified: modifiedDate,
    author,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    dateModified: modifiedDate,
    mainEntity: [
      {
        "@type": "Question",
        name: "Who writes the AI tool reviews?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Shayan Arman writes the AI tool reviews. He worked at Apple on Siri from 2017 to 2021 and reviews the best AI tools on the market.",
          dateModified: modifiedDate,
        },
      },
      {
        "@type": "Question",
        name: "How are AI tools rated?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Each review uses a five-star system and explains where a tool is strong, where it breaks, and who it is best for.",
          dateModified: modifiedDate,
        },
      },
      {
        "@type": "Question",
        name: "Are the reviews written after real use?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Every tool is tried and reviewed by a human, and each published review includes a Last Tried date.",
          dateModified: modifiedDate,
        },
      },
    ],
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
        name: "AI Tool Reviews",
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
        <meta
          key="keywords"
          name="keywords"
          content="ai tool reviews, best ai tools, human ai reviews, star ratings, last tried, Shayan Arman"
        />
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
          key="ld-article-ai-tool-reviews"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
        />
        <script
          key="ld-faq-ai-tool-reviews"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        <script
          key="ld-breadcrumb-ai-tool-reviews"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <Text className={classes.meta}>Published {REVIEW_DATE_LABEL}</Text>
        <h1 className={classes.title}>AI Tool Reviews</h1>

        <Text className={classes.lead}>
          <strong>AI Tool Reviews</strong> is a new review system from <strong>Shayan Arman</strong>, who worked at
          Apple on Siri from 2017 to 2021. He will review the best AI tools on the market with direct, human testing
          instead of recycled directory copy.
        </Text>

        <Text className={classes.lead}>
          Every review will use a <strong>star system</strong>, show the exact <strong>Last Tried</strong> date, and
          make it clear that the tool was <strong>tried and reviewed by a human</strong>.
        </Text>

        <Text className={classes.lead}>
          The goal is simple: make it easier to tell which AI tools are actually useful, which ones are improving, and
          which ones are still not ready.
        </Text>

        <h2 className={classes.sectionTitle}>What each review includes</h2>
        <SimpleGrid cols={3} spacing="lg" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          <Paper className={classes.card} shadow="none">
            <Text className={classes.cardTitle}>Star System</Text>
            <Text className={classes.cardText}>
              Every tool gets a clear one-to-five star rating so readers can quickly understand overall quality and fit.
            </Text>
          </Paper>

          <Paper className={classes.card} shadow="none">
            <Text className={classes.cardTitle}>Last Tried</Text>
            <Text className={classes.cardText}>
              Every review shows when the tool was last tested so readers know how fresh the verdict is.
            </Text>
          </Paper>

          <Paper className={classes.card} shadow="none">
            <Text className={classes.cardTitle}>Human Reviewed</Text>
            <Text className={classes.cardText}>
              Every tool is tried and reviewed by a human. No review is published from screenshots, scraped copy, or
              affiliate summaries alone.
            </Text>
          </Paper>
        </SimpleGrid>

        <h2 className={classes.sectionTitle}>How the star system works</h2>
        <ul className={classes.list}>
          <li>5 stars means the tool is exceptional and easy to recommend right now.</li>
          <li>4 stars means the tool is strong, useful, and worth serious consideration.</li>
          <li>3 stars means the tool works, but there are meaningful tradeoffs.</li>
          <li>2 stars means the idea is promising, but the product is not ready for most people.</li>
          <li>1 star means the tool is not recommended in its current state.</li>
        </ul>

        <h2 className={classes.sectionTitle}>How Shayan reviews AI tools</h2>
        <Text className={classes.sectionNote}>
          Read more about{" "}
          <a className={classes.link} href="https://www.linkedin.com/in/shayan-arman/" target="_blank" rel="noreferrer">
            Shayan Arman
          </a>{" "}
          on LinkedIn.
        </Text>
        <ul className={classes.list}>
          <li>He signs up, uses the product, and tests the core workflow directly.</li>
          <li>He checks usefulness, speed, reliability, clarity, and trust.</li>
          <li>He updates the review when the product changes in a meaningful way.</li>
          <li>He keeps the writeups concise so readers can decide quickly.</li>
        </ul>

        <div className={classes.links}>
          <Link href="/tools" className={classes.link}>Browse all tools</Link>
          <Link href="/story" className={classes.link}>Read Shayan&apos;s story</Link>
          <Link href="/about" className={classes.link}>About Zero Inbox</Link>
          <Link href="/ai-email-organizer" className={classes.link}>AI Email Organizer</Link>
          <Link href="/news" className={classes.link}>Product News</Link>
        </div>
      </Box>
    </>
  );
}
