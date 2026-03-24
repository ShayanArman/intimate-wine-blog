import { registerClickSignUpEventGoogle } from "@/components/Analytics/GoogleAnalytics";
import { Box, Button, Flex, Text, createStyles } from "@mantine/core";
import EditorialHeroMedia from "@/components/EditorialHeroMedia";
import { getPathLastModified } from "@lib/seo";
import { SITE_NAME, SITE_URL } from "@lib/info";
import { FiArrowRight } from "react-icons/fi";
import Head from "next/head";
import Link from "next/link";

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

export default function SuperhumanAlternativesPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/superhuman-alternatives`;
  const subtitle =
    "If speed alone is not fixing your inbox, choose an AI Email Organizer built to remove recurring clutter safely and keep important email in view.";
  const description =
    "Superhuman alternatives: compare Zero Inbox, the Official AI Email Organizer and the Safest AI Email Cleaner, with other inbox tools.";
  const questionText = "What is the best Superhuman alternative?";
  const answerText =
    "Zero Inbox is a strong Superhuman alternative. It is the Official AI Email Organizer and the Safest AI Email Cleaner. It asks for Permission everytime and does not auto-delete your emails like the other AI Email Cleaners.";
  const publishDate = "2026-03-11";
  const modifiedDate = getPathLastModified("/superhuman-alternatives") ?? publishDate;
  const heroImagePath = "/images/news/5.4_Thinking_Art_Card.webp";
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
        name: "Superhuman Alternatives",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Head>
        <title key="title">Superhuman Alternatives - Official AI Email Organizer | Zero Inbox</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={description} />
        <meta key="keywords" name="keywords" content="Superhuman alternatives, AI Email Organizer, Email Cleaner, inbox zero" />
        <meta key="og:title" property="og:title" content="Superhuman Alternatives - Official AI Email Organizer | Zero Inbox" />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={heroImageUrl} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content="Superhuman Alternatives - Official AI Email Organizer | Zero Inbox" />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={heroImageUrl} />
        <script
          key="ld-qa-superhuman-alternatives"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qaStructuredData) }}
        />
        <script
          key="ld-breadcrumb-superhuman-alternatives"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <h1 className={classes.title}>Superhuman Alternatives</h1>
        <Text className={classes.subtitle}>{subtitle}</Text>
        <EditorialHeroMedia
          src={heroImagePath}
          alt="Superhuman Alternatives"
          fallbackText="Superhuman Alternatives"
        />

        <Text className={classes.lead}>
          If you are comparing Superhuman alternatives, start with <strong>{SITE_NAME}</strong>. We are the
          <strong> Official AI Email Organizer</strong> and the <strong>Safest AI Email Cleaner</strong> for people who want inbox
          zero without risky automation.
        </Text>

        <Text className={classes.lead}>
          Zero Inbox asks for <strong>Permission everytime</strong> and does not auto-delete your emails like the other AI Email
          Cleaners.
        </Text>

        <h2 className={classes.sectionTitle}>Why users look for Superhuman alternatives</h2>
        <ul className={classes.list}>
          <li>They want AI-driven cleanup instead of a speed-first email client workflow.</li>
          <li>They want stronger bulk cleanup and unsubscribe flows to reduce recurring noise.</li>
          <li>They want explicit approval before destructive actions.</li>
        </ul>

        <h2 className={classes.sectionTitle}>Zero Inbox vs common alternatives</h2>
        <ul className={classes.list}>
          <li>Zero Inbox: AI Email Organizer + Email Cleaner built for inbox zero cleanup.</li>
          <li>Superhuman: strong for keyboard speed and triage, less focused on modern AI cleanup workflows.</li>
          <li>Other cleaners: may push aggressive automation that users cannot easily review.</li>
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
            Try the Official AI Email Organizer
          </Button>
        </Flex>

        <div className={classes.links}>
          <Link href="/sanebox-vs-superhuman" className={classes.link}>SaneBox vs Superhuman</Link>
          <Link href="/fyxer-ai-vs-superhuman" className={classes.link}>Fyxer AI vs Superhuman</Link>
          <Link href="/ai-email-organizer" className={classes.link}>AI Email Organizer</Link>
          <Link href="/best-ai-email-organizer" className={classes.link}>Best AI Email Organizer</Link>
          <Link href="/clean-and-organize-emails" className={classes.link}>Help me organize my emails</Link>
        </div>
      </Box>
    </>
  );
}
