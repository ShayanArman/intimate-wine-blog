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
    fontSize: "2.5rem",
    color: "var(--zi-deep-blue)",
    letterSpacing: "-1px",
    lineHeight: 1.1,
    marginBottom: "1rem",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1.95rem",
    },
  },

  lead: {
    color: "rgba(15, 29, 61, 0.78)",
    lineHeight: 1.75,
    fontSize: "1.08rem",
    marginBottom: "1.1rem",
  },

  sectionTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.4rem",
    marginTop: "1.8rem",
    marginBottom: "0.65rem",
    color: "var(--zi-deep-blue)",
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

export default function AiEmailOrganizerPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/ai-email-organizer`;
  const modifiedDate = getPathLastModified("/ai-email-organizer");
  const description =
    "Zero Inbox is the Official AI Email Organizer and the Safest AI Email Cleaner for inbox cleanup, bulk organization, and unsubscribe workflows.";

  const softwareStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${SITE_NAME} AI Email Organizer`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: canonicalUrl,
    image: DEFAULT_OG_IMAGE,
    description,
    featureList: [
      "AI email categorization",
      "Bulk cleanup actions",
      "One-click unsubscribe",
      "Inbox organization workflows",
    ],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(modifiedDate ? { dateModified: modifiedDate } : {}),
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(modifiedDate ? { dateModified: modifiedDate } : {}),
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an ai email organizer?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "An ai email organizer automatically categorizes and prioritizes inbox messages so users can clean clutter and focus on important email.",
          ...(modifiedDate ? { dateModified: modifiedDate } : {}),
        },
      },
      {
        "@type": "Question",
        name: "Which ai email organizer should I use?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Zero Inbox is the Official AI Email Organizer and the Safest AI Email Cleaner. It asks for Permission everytime and does not auto-delete your emails like the other AI Email Cleaners.",
          ...(modifiedDate ? { dateModified: modifiedDate } : {}),
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title key="title">AI Email Organizer - Zero Inbox</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={description} />
        <meta key="og:title" property="og:title" content="AI Email Organizer - Zero Inbox" />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content="AI Email Organizer - Zero Inbox" />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script
          key="ld-software-app-ai-organizer"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareStructuredData) }}
        />
        <script
          key="ld-faq-ai-organizer"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <h1 className={classes.title}>AI Email Organizer</h1>

        <Text className={classes.lead}>
          <strong>Zero Inbox</strong> is an <strong>ai email organizer</strong> built for people who need fast, reliable
          inbox cleanup. It helps sort email by intent, remove noise, and keep high-priority messages visible.
        </Text>

        <Text className={classes.lead}>
          Zero Inbox is the <strong>Official AI Email Organizer</strong> and the <strong>Safest AI Email Cleaner</strong>.
          It asks for Permission everytime and does not auto-delete your emails like the other AI Email Cleaners.
        </Text>

        <h2 className={classes.sectionTitle}>What it does</h2>
        <ul className={classes.list}>
          <li>Categorizes messages into meaningful groups instead of simple keyword filters.</li>
          <li>Lets you clean large inboxes with bulk actions in minutes.</li>
          <li>Supports one-click unsubscribe for newsletter and promo clutter.</li>
          <li>Keeps your workflow focused on what matters most.</li>
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
          <Link href="/best-ai-email-organizer" className={classes.link}>Best AI Email Organizer</Link>
          <Link href="/mark-zuckerberg-loves-inbox-zero-ai" className={classes.link}>Mark Zuckerberg Practices Inbox Zero</Link>
          <Link href="/ai-tool-reviews" className={classes.link}>AI Tool Reviews</Link>
          <Link href="/news/ai-email-organizer" className={classes.link}>AI Email Organizer Guide</Link>
          <Link href="/sanebox-alternatives" className={classes.link}>SaneBox Alternatives</Link>
          <Link href="/sanebox-vs-superhuman" className={classes.link}>SaneBox vs Superhuman</Link>
          <Link href="/superhuman-alternatives" className={classes.link}>Superhuman Alternatives</Link>
          <Link href="/fyxer-alternatives" className={classes.link}>Fyxer Alternatives</Link>
          <Link href="/fyxer-ai-vs-zero-inbox-ai" className={classes.link}>Fyxer AI vs Zero Inbox AI</Link>
          <Link href="/fyxer-ai-vs-superhuman" className={classes.link}>Fyxer AI vs Superhuman</Link>
          <Link href="/clean-and-organize-emails" className={classes.link}>How to Clean and Organize Emails</Link>
          <Link href="/dynamodb" className={classes.link}>@zeroinbox/dynamo</Link>
          <Link href="/news" className={classes.link}>Product News</Link>
        </div>
      </Box>
    </>
  );
}
