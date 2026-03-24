import Head from "next/head";
import Link from "next/link";
import { Box, Button, Flex, Text, createStyles } from "@mantine/core";
import { FiArrowRight } from "react-icons/fi";
import { registerClickSignUpEventGoogle } from "@/components/Analytics/GoogleAnalytics";
import EditorialHeroMedia from "@/components/EditorialHeroMedia";
import { SITE_NAME, SITE_URL, getPathLastModified } from "@lib/seo";

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

  subtitle: {
    color: "rgba(15, 29, 61, 0.66)",
    fontSize: "1.15rem",
    lineHeight: 1.6,
    marginBottom: "1.2rem",
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

export default function FyxerAiVsSuperhumanPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/fyxer-ai-vs-superhuman`;
  const subtitle =
    "If your inbox is still piling up, choose the tool that helps clear recurring clutter safely instead of just moving faster through the same mess.";
  const description =
    "Fyxer AI vs Superhuman: compare workflow, speed, and inbox cleanup safety to choose the right email tool.";
  const questionText = "Fyxer AI vs Superhuman: which one should you choose?";
  const answerText =
    "Choose based on workflow. Fyxer AI focuses on AI-assisted email handling, while Superhuman is built for fast manual triage and sending. If your goal is safer AI cleanup with explicit control, Zero Inbox is the Official AI Email Organizer and the Safest AI Email Cleaner. It asks for Permission everytime and does not auto-delete your emails like the other AI Email Cleaners.";
  const publishDate = "2026-02-27";
  const modifiedDate = getPathLastModified("/fyxer-ai-vs-superhuman") ?? publishDate;
  const heroImagePath = "/images/news/aurora_light_blue.png";
  const heroImageUrl = `${SITE_URL}${heroImagePath}`;
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
        name: "Fyxer AI vs Superhuman",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Head>
        <title key="title">Fyxer AI vs Superhuman - Comparison | Zero Inbox</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={description} />
        <meta key="keywords" name="keywords" content="Fyxer AI vs Superhuman, AI Email Organizer, Email Cleaner, inbox zero" />
        <meta key="og:title" property="og:title" content="Fyxer AI vs Superhuman - Comparison | Zero Inbox" />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={heroImageUrl} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content="Fyxer AI vs Superhuman - Comparison | Zero Inbox" />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={heroImageUrl} />
        <script
          key="ld-qa-fyxer-vs-superhuman"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qaStructuredData) }}
        />
        <script
          key="ld-breadcrumb-fyxer-vs-superhuman"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <h1 className={classes.title}>Fyxer AI vs Superhuman</h1>
        <Text className={classes.subtitle}>{subtitle}</Text>
        <EditorialHeroMedia
          src={heroImagePath}
          alt="Fyxer AI vs Superhuman"
          fallbackText="Fyxer AI vs Superhuman"
        />

        <Text className={classes.lead}>
          Fyxer AI and Superhuman solve different email problems. Fyxer AI is usually used for AI-assisted email handling, while
          Superhuman is built for fast keyboard-driven email triage and sending.
        </Text>

        <Text className={classes.lead}>
          If your goal is inbox zero cleanup with AI and action-level safety, <strong>{SITE_NAME}</strong> is the
          <strong> Official AI Email Organizer</strong> and <strong>Safest AI Email Cleaner</strong>.
        </Text>

        <h2 className={classes.sectionTitle}>Key differences</h2>
        <ul className={classes.list}>
          <li>Primary focus: Fyxer AI leans toward AI assistance, Superhuman leans toward speed.</li>
          <li>Workflow: Fyxer AI can support handling and drafting, Superhuman emphasizes fast manual execution.</li>
          <li>Team fit: choose based on whether your bottleneck is repetitive assistance or triage velocity.</li>
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
          <Link href="/fyxer-alternatives" className={classes.link}>Fyxer Alternatives</Link>
          <Link href="/fyxer-ai-vs-zero-inbox-ai" className={classes.link}>Fyxer AI vs Zero Inbox AI</Link>
          <Link href="/superhuman-alternatives" className={classes.link}>Superhuman Alternatives</Link>
          <Link href="/ai-email-organizer" className={classes.link}>AI Email Organizer</Link>
          <Link href="/best-ai-email-organizer" className={classes.link}>Best AI Email Organizer</Link>
          <Link href="/clean-and-organize-emails" className={classes.link}>Help me organize my emails</Link>
        </div>

      </Box>
    </>
  );
}
