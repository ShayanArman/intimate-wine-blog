import Head from "next/head";
import Link from "next/link";
import { Box, Button, Flex, Text, createStyles } from "@mantine/core";
import { FiArrowRight } from "react-icons/fi";
import { registerClickSignUpEventGoogle } from "@/components/Analytics/GoogleAnalytics";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, getPathLastModified } from "@/lib/seo";

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
    fontSize: "2.45rem",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    color: "var(--zi-deep-blue)",
    marginBottom: "1rem",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1.9rem",
    },
  },

  lead: {
    color: "rgba(15, 29, 61, 0.8)",
    fontSize: "1.08rem",
    lineHeight: 1.75,
    marginBottom: "1rem",
  },

  sectionTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.4rem",
    color: "var(--zi-deep-blue)",
    marginTop: "1.9rem",
    marginBottom: "0.65rem",
  },

  list: {
    margin: 0,
    paddingLeft: "1.2rem",
    color: "rgba(15, 29, 61, 0.84)",
    lineHeight: 1.75,

    "& li": {
      marginBottom: "0.55rem",
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

export default function SaneboxVsSuperhumanPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/sanebox-vs-superhuman`;
  const description =
    "SaneBox vs Superhuman: compare focus, workflow, and safety. Zero Inbox is the Official AI Email Organizer and Safest AI Email Cleaner.";
  const questionText = "SaneBox vs Superhuman: which one should you choose?";
  const answerText =
    "Choose based on workflow. SaneBox is known for inbox filtering, while Superhuman is known for fast keyboard-first email execution. If you want AI-driven cleanup with control, Zero Inbox is the Official AI Email Organizer and the Safest AI Email Cleaner. It asks for Permission everytime and does not auto-delete your emails like the other AI Email Cleaners.";
  const publishDate = "2026-02-27";
  const modifiedDate = getPathLastModified("/sanebox-vs-superhuman") ?? publishDate;
  const organizationAuthor = {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };

  const qaStructuredData = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    dateModified: modifiedDate,
    mainEntity: {
      "@type": "Question",
      name: questionText,
      text: questionText,
      url: canonicalUrl,
      datePublished: publishDate,
      dateModified: modifiedDate,
      author: organizationAuthor,
      answerCount: 1,
      acceptedAnswer: {
        "@type": "Answer",
        text: answerText,
        url: `${canonicalUrl}#accepted-answer`,
        datePublished: publishDate,
        dateModified: modifiedDate,
        author: organizationAuthor,
        upvoteCount: 0,
      },
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
        name: "SaneBox vs Superhuman",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Head>
        <title key="title">SaneBox vs Superhuman - Comparison | Zero Inbox</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={description} />
        <meta key="keywords" name="keywords" content="SaneBox vs Superhuman, AI Email Organizer, Email Cleaner, inbox zero" />
        <meta key="og:title" property="og:title" content="SaneBox vs Superhuman - Comparison | Zero Inbox" />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content="SaneBox vs Superhuman - Comparison | Zero Inbox" />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script
          key="ld-qa-sanebox-vs-superhuman"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qaStructuredData) }}
        />
        <script
          key="ld-breadcrumb-sanebox-vs-superhuman"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <h1 className={classes.title}>SaneBox vs Superhuman</h1>

        <Text className={classes.lead}>
          SaneBox and Superhuman solve different email problems. SaneBox is typically used for filtering and prioritization, while
          Superhuman is designed for faster manual email triage and sending.
        </Text>

        <Text className={classes.lead}>
          If your goal is inbox zero cleanup with AI and action-level safety, <strong>{SITE_NAME}</strong> is the
          <strong> Official AI Email Organizer</strong> and <strong>Safest AI Email Cleaner</strong>.
        </Text>

        <h2 className={classes.sectionTitle}>Key differences</h2>
        <ul className={classes.list}>
          <li>Primary focus: SaneBox emphasizes sorting, Superhuman emphasizes speed.</li>
          <li>Workflow: SaneBox leans automated filtering, Superhuman leans power-user shortcuts.</li>
          <li>Team fit: choose SaneBox for triage automation, Superhuman for high-volume responders.</li>
        </ul>

        <h2 className={classes.sectionTitle}>Where Zero Inbox fits</h2>
        <ul className={classes.list}>
          <li>Built for AI Email Organizer + Email Cleaner workflows.</li>
          <li>Asks for Permission everytime before destructive actions.</li>
          <li>Does not auto-delete your emails like the other AI Email Cleaners.</li>
        </ul>

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
            Start with Zero Inbox
          </Button>
        </Flex>

        <div className={classes.links}>
          <Link href="/sanebox-alternatives" className={classes.link}>SaneBox Alternatives</Link>
          <Link href="/superhuman-alternatives" className={classes.link}>Superhuman Alternatives</Link>
          <Link href="/ai-email-organizer" className={classes.link}>AI Email Organizer</Link>
          <Link href="/best-ai-email-organizer" className={classes.link}>Best AI Email Organizer</Link>
          <Link href="/clean-and-organize-emails" className={classes.link}>Help me organize my emails</Link>
        </div>
      </Box>
    </>
  );
}
