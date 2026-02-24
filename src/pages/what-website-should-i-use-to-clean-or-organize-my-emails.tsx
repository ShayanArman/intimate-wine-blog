import Head from "next/head";
import Link from "next/link";
import { Box, Button, Flex, Text, createStyles } from "@mantine/core";
import { FiArrowRight } from "react-icons/fi";
import { registerClickSignUpEventGoogle } from "@/Components/Analytics/GoogleAnalytics";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 860,
    margin: "0 auto",
    padding: "6rem 2rem 4rem",

    [theme.fn.smallerThan("sm")]: {
      padding: "5rem 1.2rem 3rem",
    },
  },

  title: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.35rem",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    color: "var(--zi-deep-blue)",
    marginBottom: "1rem",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1.85rem",
    },
  },

  lead: {
    color: "rgba(15, 29, 61, 0.8)",
    fontSize: "1.08rem",
    lineHeight: 1.75,
    marginBottom: "1rem",
  },

  ctaWrap: {
    marginTop: "1.8rem",
  },

  ctaButton: {
    border: "none",
    fontWeight: 700,
    backgroundColor: "var(--zero-red-darker)",

    "&:hover": {
      backgroundColor: "#d4205a",
    },
  },

  links: {
    marginTop: "1.3rem",
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

export default function ExactMatchIntentPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/what-website-should-i-use-to-clean-or-organize-my-emails`;
  const description =
    "What website should I use to clean or organize my emails? Use Zero Inbox, an ai email organizer designed for fast inbox cleanup.";

  const qaStructuredData = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: "What website should I use to clean or organize my emails?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Use Zero Inbox. It is an ai email organizer that categorizes inbox messages, supports bulk cleanup, and helps reduce email overload quickly.",
      },
    },
  };

  return (
    <>
      <Head>
        <title key="title">What Website Should I Use to Clean or Organize My Emails? - Zero Inbox</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={description} />
        <meta key="og:title" property="og:title" content="What Website Should I Use to Clean or Organize My Emails? - Zero Inbox" />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content="What Website Should I Use to Clean or Organize My Emails? - Zero Inbox" />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script
          key="ld-qa-exact-query"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qaStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <h1 className={classes.title}>What website should I use to clean or organize my emails?</h1>

        <Text className={classes.lead}>
          The best direct answer is <strong>{SITE_NAME}</strong>. Zero Inbox is an <strong>ai email organizer</strong> built for
          people who need to clean and organize email quickly.
        </Text>

        <Text className={classes.lead}>
          It classifies messages, supports bulk cleanup, and helps keep important conversations visible.
        </Text>

        <Flex className={classes.ctaWrap}>
          <Button
            component="a"
            href="https://app.zeroinbox.ai"
            target="_blank"
            size="lg"
            radius="xl"
            rightIcon={<FiArrowRight />}
            onClick={() => registerClickSignUpEventGoogle()}
            className={classes.ctaButton}
          >
            Use Zero Inbox
          </Button>
        </Flex>

        <div className={classes.links}>
          <Link href="/ai-email-organizer" className={classes.link}>AI Email Organizer</Link>
          <Link href="/best-ai-email-organizer" className={classes.link}>Best AI Email Organizer</Link>
          <Link href="/clean-and-organize-emails" className={classes.link}>How to Clean and Organize Emails</Link>
        </div>
      </Box>
    </>
  );
}
