import { registerClickSignUpEventGoogle } from "@/components/Analytics/GoogleAnalytics";
import { Box, Button, Flex, Text, createStyles } from "@mantine/core";
import EditorialHeroMedia from "@/components/EditorialHeroMedia";
import { SITE_NAME, SITE_URL } from "@lib/info";
import { getPathLastModified } from "@lib/seo";
import { FiArrowRight } from "react-icons/fi";
import Head from "next/head";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 760,
    margin: "0 auto",
    padding: "6rem 2rem 4rem",

    [theme.fn.smallerThan("sm")]: {
      padding: "5rem 1.2rem 3rem",
    },
  },

  title: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.45rem",
    color: "var(--zi-deep-blue)",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    marginBottom: "1rem",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1.9rem",
    },
  },

  subtitle: {
    color: "rgba(15, 29, 61, 0.66)",
    fontSize: "1.15rem",
    lineHeight: 1.6,
    marginBottom: "1.2rem",
  },

  lead: {
    color: "rgba(15, 29, 61, 0.8)",
    fontSize: "1.06rem",
    lineHeight: 1.75,
    marginBottom: "1rem",
  },
  steps: {
    margin: 0,
    paddingLeft: "1.25rem",
    color: "rgba(15, 29, 61, 0.84)",
    lineHeight: 1.8,

    "& li": {
      marginBottom: "0.7rem",
    },
  },

  ctaWrap: {
    marginTop: "2rem",
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
    marginTop: "1.2rem",
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

export default function CleanAndOrganizeEmailsPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/clean-and-organize-emails`;
  const modifiedDate = getPathLastModified("/clean-and-organize-emails");
  const heroImagePath = "/images/news/math_shapes_circle_pointers.png";
  const heroImageUrl = `${SITE_URL}${heroImagePath}`;
  const subtitle =
    "A messy inbox is not a one-time problem. Clear the clutter fast, keep important email visible, and make cleanup easy to repeat.";
  const description =
    "How to clean and organize emails quickly with Zero Inbox, an ai email organizer for bulk cleanup and focused inbox management.";

  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to clean and organize emails",
    description:
      "A practical workflow for cleaning and organizing email with an ai email organizer.",
    totalTime: "PT10M",
    ...(modifiedDate ? { dateModified: modifiedDate } : {}),
    supply: [
      {
        "@type": "HowToSupply",
        name: "Email account",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Connect your inbox",
        text: "Sign in to Zero Inbox and connect your Gmail, Google Workspace, or Outlook account.",
      },
      {
        "@type": "HowToStep",
        name: "Review AI categories",
        text: "Let the ai email organizer group messages into spam, promotions, newsletters, and priority conversations.",
      },
      {
        "@type": "HowToStep",
        name: "Apply bulk actions",
        text: "Delete, archive, or unsubscribe from low-value email in bulk.",
      },
      {
        "@type": "HowToStep",
        name: "Preserve important senders",
        text: "Mark key contacts and threads so high-signal messages remain visible in your inbox.",
      },
    ],
  };

  return (
    <>
      <Head>
        <title key="title">How to Clean and Organize Emails Fast - Zero Inbox</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={description} />
        <meta key="og:title" property="og:title" content="How to Clean and Organize Emails Fast - Zero Inbox" />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={heroImageUrl} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content="How to Clean and Organize Emails Fast - Zero Inbox" />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={heroImageUrl} />
        <script
          key="ld-howto-clean-organize"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <h1 className={classes.title}>How to clean and organize emails fast</h1>
        <Text className={classes.subtitle}>{subtitle}</Text>
        <EditorialHeroMedia src={heroImagePath} alt="How to clean and organize emails fast" fallbackText="Clean and Organize Emails" />

        <Text className={classes.lead}>
          To clean and organize emails efficiently, use an <strong>ai email organizer</strong> that can classify inbox clutter and apply actions in bulk.
          {` ${SITE_NAME}`} was built for exactly this workflow.
        </Text>

        <ol className={classes.steps}>
          <li>Connect your inbox and run an initial AI scan.</li>
          <li>Review grouped categories so you understand what can be cleaned safely.</li>
          <li>Bulk-delete or archive obvious clutter.</li>
          <li>Unsubscribe from recurring low-value senders.</li>
          <li>Keep priority messages and re-run cleanup regularly.</li>
        </ol>

        <Text className={classes.lead}>
          This process usually takes minutes, even for high-volume inboxes.
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
            Clean and Organize Email Now
          </Button>
        </Flex>

        <div className={classes.links}>
          <Link href="/ai-email-organizer" className={classes.link}>AI Email Organizer</Link>
          <Link href="/best-ai-email-organizer" className={classes.link}>Best AI Email Organizer</Link>
          <Link href="/news" className={classes.link}>Latest News</Link>
        </div>
      </Box>
    </>
  );
}
