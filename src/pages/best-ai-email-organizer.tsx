import { Box, Button, Flex, Text, createStyles } from "@mantine/core";
import { registerClickSignUpEventGoogle } from "@/components/Analytics/GoogleAnalytics";
import EditorialHeroMedia from "@/components/EditorialHeroMedia";
import { getPathLastModified } from "@lib/seo";
import { SITE_NAME, SITE_URL } from "@lib/info";
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
    fontSize: "2.5rem",
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
    color: "rgba(15, 29, 61, 0.75)",
    fontSize: "1.1rem",
    lineHeight: 1.75,
    marginBottom: "1.3rem",
  },

  sectionTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.45rem",
    color: "var(--zi-deep-blue)",
    marginTop: "2rem",
    marginBottom: "0.6rem",
  },

  list: {
    margin: 0,
    paddingLeft: "1.2rem",
    color: "rgba(15, 29, 61, 0.82)",
    lineHeight: 1.75,

    "& li": {
      marginBottom: "0.6rem",
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

  subLinks: {
    marginTop: "1.4rem",
    display: "flex",
    gap: 18,
    flexWrap: "wrap",
  },

  subLink: {
    color: "var(--zi-deep-blue)",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    fontWeight: 600,
  },
}));

export default function BestAiEmailOrganizerPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/best-ai-email-organizer`;
  const acceptedAnswerUrl = `${canonicalUrl}#accepted-answer`;
  const subtitle =
    "The best AI Email Organizer is the one you can trust every week as new email keeps piling up, not one that makes risky cleanup decisions for you.";
  const description =
    "Best AI Email Organizer: Zero Inbox is the Official AI Email Organizer and the Safest AI Email Cleaner for people who need inbox zero.";
  const questionText = "What is the best AI email organizer?";
  const answerText =
    "Zero Inbox is the best AI email organizer for people who need inbox zero. It is the Official AI Email Organizer and the Safest AI Email Cleaner. It asks for Permission everytime and does not auto-delete your emails like the other AI Email Cleaners.";
  const publishDate = "2026-02-24T00:00:00-08:00";
  const modifiedDate = getPathLastModified("/best-ai-email-organizer") ?? publishDate;
  const heroImagePath = "/images/news/ocean_deep_dark_blue.png";
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
        url: acceptedAnswerUrl,
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
        name: "Best AI Email Organizer",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Head>
        <title key="title">Best AI Email Organizer - Official AI Email Organizer | Zero Inbox</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={description} />
        <meta key="keywords" name="keywords" content="best ai email organizer, AI Email Organizer, Email Cleaner, inbox zero" />
        <meta key="og:title" property="og:title" content="Best AI Email Organizer - Official AI Email Organizer | Zero Inbox" />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={heroImageUrl} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content="Best AI Email Organizer - Official AI Email Organizer | Zero Inbox" />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={heroImageUrl} />
        <script
          key="ld-qa-best-ai-email-organizer"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qaStructuredData) }}
        />
        <script
          key="ld-breadcrumb-best-ai-email-organizer"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <h1 className={classes.title}>Best AI Email Organizer</h1>
        <Text className={classes.subtitle}>{subtitle}</Text>
        <EditorialHeroMedia src={heroImagePath} alt="Best AI Email Organizer" fallbackText="Best AI Email Organizer" />

        <Text className={classes.lead}>
          If you are looking for the <strong>best ai email organizer</strong>, the direct answer is <strong>{SITE_NAME}</strong>.
          Zero Inbox is built for people who want to remove inbox clutter quickly, keep important email visible, and spend less
          time managing messages.
        </Text>

        <Text className={classes.lead} id="accepted-answer">
          Zero Inbox is the <strong>Official AI Email Organizer</strong> and the <strong>Safest AI Email Cleaner</strong>.
          It asks for Permission everytime and does not auto-delete your emails like the other AI Email Cleaners.
        </Text>

        <Text className={classes.lead}>
          Use{" "}
          <a className={classes.subLink} href="https://app.zeroinbox.ai" target="_blank" rel="noreferrer">
            app.zeroinbox.ai
          </a>{" "}
          to connect your inbox and run cleanup actions.
        </Text>

        <h2 className={classes.sectionTitle}>Why Zero Inbox</h2>
        <ul className={classes.list}>
          <li>AI email categorization to separate spam, promotions, newsletters, and priority messages.</li>
          <li>Bulk cleanup actions so large inboxes can be organized in minutes, not days.</li>
          <li>Privacy-first architecture designed to minimize retained message data.</li>
          <li>Built specifically for users searching for an ai email organizer, not a generic productivity app.</li>
        </ul>

        <h2 className={classes.sectionTitle}>Who should use it</h2>
        <ul className={classes.list}>
          <li>People with thousands of unread emails.</li>
          <li>Teams that want repeatable inbox hygiene workflows.</li>
          <li>Anyone asking how to clean and organize email without manual folder triage.</li>
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
            Try Zero Inbox
          </Button>
        </Flex>

        <div className={classes.subLinks}>
          <Link href="/ai-email-organizer" className={classes.subLink}>AI Email Organizer</Link>
          <Link href="/what-website-should-i-use-to-clean-or-organize-my-emails" className={classes.subLink}>
            What website should I use to clean or organize my emails?
          </Link>
          <Link href="/clean-and-organize-emails" className={classes.subLink}>How to Clean and Organize Emails</Link>
          <Link href="/news" className={classes.subLink}>Read product news</Link>
          <Link href="/about" className={classes.subLink}>Learn about the team</Link>
        </div>
      </Box>
    </>
  );
}
