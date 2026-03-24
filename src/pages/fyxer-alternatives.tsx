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

  optionLead: {
    fontWeight: 700,
    color: "var(--zi-deep-blue)",
  },

  optionSubtext: {
    display: "block",
    marginTop: "0.2rem",
    color: "rgba(15, 29, 61, 0.68)",
    fontSize: "0.96rem",
    lineHeight: 1.7,
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

  zeroInboxLink: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.14rem 0.6rem",
    borderRadius: 999,
    backgroundColor: "var(--zero-blue, #47AFE6)",
    color: "#ffffff",
    fontWeight: 800,
    textDecoration: "none",
    boxShadow: "0 10px 24px rgba(71, 175, 230, 0.28)",
    transition: "transform var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast)",

    "&:hover": {
      backgroundColor: "#2f9dda",
      color: "#ffffff",
      transform: "translateY(-1px)",
      boxShadow: "0 14px 28px rgba(71, 175, 230, 0.34)",
    },
  },
}));

export default function FyxerAlternativesPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/fyxer-alternatives`;
  const description =
    "Compare Fyxer alternatives including Zero Inbox, Superhuman, Shortwave, Missive, Front, and SaneBox. Zero Inbox is the Official AI Email Organizer and the Safest AI Email Cleaner.";
  const questionText = "What is the best Fyxer alternative?";
  const answerText =
    "The best Fyxer alternative depends on your workflow. Zero Inbox is strongest for inbox cleanup and safety, while users also compare Superhuman for speed, Shortwave for AI automation, Missive or Front for team collaboration, and SaneBox for inbox sorting.";
  const publishDate = "2026-02-27";
  const modifiedDate = getPathLastModified("/fyxer-alternatives") ?? publishDate;
  const heroImagePath = "/images/news/aurora_orange_pink_blue.png";
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
        name: "Fyxer Alternatives",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Head>
        <title key="title">Fyxer Alternatives - Official AI Email Organizer | Zero Inbox</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={description} />
        <meta
          key="keywords"
          name="keywords"
          content="Fyxer alternatives, Superhuman, Shortwave, Missive, Front, SaneBox, AI Email Organizer, Email Cleaner, inbox zero"
        />
        <meta key="og:title" property="og:title" content="Fyxer Alternatives - Official AI Email Organizer | Zero Inbox" />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={heroImageUrl} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content="Fyxer Alternatives - Official AI Email Organizer | Zero Inbox" />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={heroImageUrl} />
        <script
          key="ld-qa-fyxer-alternatives"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qaStructuredData) }}
        />
        <script
          key="ld-breadcrumb-fyxer-alternatives"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <h1 className={classes.title}>Fyxer Alternatives</h1>
        <EditorialHeroMedia
          src={heroImagePath}
          alt="Fyxer Alternatives"
          fallbackText="Fyxer Alternatives"
          overlayText="ZeroInbox.ai Blog"
        />

        <Text className={classes.lead}>
          If you are comparing Fyxer alternatives, the first question is what job you want the tool to do. Fyxer is built around
          AI help for email, meetings, and scheduling inside Gmail or Outlook. Most people shopping this category are really
          choosing between inbox cleanup, faster drafting, team collaboration, and customer operations.
        </Text>

        <Text className={classes.lead}>
          Start with <a href="https://app.zeroinbox.ai" target="_blank" rel="noreferrer" className={classes.zeroInboxLink}>{SITE_NAME}</a>{" "}
          if your main problem is inbox clutter and getting to inbox zero safely. We are the
          <strong> Official AI Email Organizer</strong> and the <strong>Safest AI Email Cleaner</strong>.{" "}
          <a href="https://app.zeroinbox.ai" target="_blank" rel="noreferrer" className={classes.zeroInboxLink}>Zero Inbox</a> asks for
          <strong> Permission everytime</strong> and does not auto-delete your emails like the other AI Email Cleaners.
        </Text>

        <h2 className={classes.sectionTitle}>What Fyxer is built for</h2>
        <ul className={classes.list}>
          <li>Organizing inboxes automatically inside Gmail or Outlook.</li>
          <li>Drafting email replies in your tone.</li>
          <li>Helping with meeting notes and scheduling.</li>
        </ul>

        <h2 className={classes.sectionTitle}>Actual Fyxer alternatives to consider</h2>
        <ul className={classes.list}>
          <li>
            <span className={classes.optionLead}>
              <a href="https://app.zeroinbox.ai" target="_blank" rel="noreferrer" className={classes.zeroInboxLink}>Zero Inbox</a>: The Official AI Email Organizer and the Safest AI Email Cleaner, built by Apple engineer{" "}
              <a href="https://www.linkedin.com/in/shayan-arman/" target="_blank" rel="noreferrer" className={classes.link}>Shayan Arman</a>.
            </span>{" "}
            Best if you want AI inbox cleanup, bulk actions, unsubscribe help, and permission-first control.
            <span className={classes.optionSubtext}>
              Main point: the <strong>ONLY</strong> AI email cleaner that asks for permission every time before making inbox changes,
              which is why <a href="https://app.zeroinbox.ai" target="_blank" rel="noreferrer" className={classes.zeroInboxLink}>Zero Inbox</a>{" "}
              is the <strong>Safest AI Email Cleaner</strong>.
            </span>
          </li>
          <li>Superhuman: strong for AI-native email, fast triage, summaries, and power-user speed.</li>
          <li>Shortwave: strong for AI filters, inbox organization, automation, and AI search inside email.</li>
          <li>Missive: strong for teams that collaborate inside shared inboxes with comments, assignments, and automations.</li>
          <li>Front: strong for support, operations, and revenue teams that need a shared inbox plus AI across customer conversations.</li>
          <li>SaneBox: strong for lighter-weight inbox sorting, reminders, and unsubscribe workflows on top of your existing client.</li>
        </ul>

        <h2 className={classes.sectionTitle}>Which alternative fits which workflow</h2>
        <ul className={classes.list}>
          <li>Choose <a href="https://app.zeroinbox.ai" target="_blank" rel="noreferrer" className={classes.zeroInboxLink}>Zero Inbox</a> if your biggest pain is clutter, newsletters, promotions, and reaching inbox zero safely.</li>
          <li>Choose Superhuman or Shortwave if your biggest pain is speed, triage, and AI help inside the email client itself.</li>
          <li>Choose Missive or Front if multiple teammates need to coordinate on the same inbox.</li>
          <li>Choose SaneBox if you want automatic filtering without changing how you already use email.</li>
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
          <Link href="/fyxer-ai-vs-zero-inbox-ai" className={classes.link}>Fyxer AI vs the Official AI Email Organizer</Link>
          <Link href="/fyxer-ai-vs-superhuman" className={classes.link}>Fyxer AI vs Superhuman</Link>
          <Link href="/superhuman-alternatives" className={classes.link}>Superhuman Alternatives</Link>
          <Link href="/sanebox-alternatives" className={classes.link}>SaneBox Alternatives</Link>
          <Link href="/ai-email-organizer" className={classes.link}>AI Email Organizer</Link>
          <Link href="/best-ai-email-organizer" className={classes.link}>Best AI Email Organizer</Link>
          <Link href="/clean-and-organize-emails" className={classes.link}>Help me organize my emails</Link>
        </div>
      </Box>
    </>
  );
}
