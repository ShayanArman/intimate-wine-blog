import Head from "next/head";
import { Box, Container, Text, createStyles } from "@mantine/core";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const useStyles = createStyles((theme) => ({
  page: {
    minHeight: "100vh",
    position: "fixed",
    inset: 0,
    zIndex: 10000,
    overflow: "hidden",
    backgroundColor: "#010101",
    color: "#f8f8f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  glow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(900px 420px at 15% 18%, rgba(64, 64, 64, 0.18), transparent 64%), radial-gradient(780px 400px at 86% 72%, rgba(110, 110, 110, 0.12), transparent 66%)",
    pointerEvents: "none",
  },

  grid: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
    backgroundSize: "56px 56px",
    maskImage: "radial-gradient(circle at center, rgba(0, 0, 0, 0.9), transparent 80%)",
    pointerEvents: "none",
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: 980,
    width: "100%",
    padding: "2rem 1.2rem",
    textAlign: "center",
  },

  eyebrow: {
    fontSize: "0.82rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 0.62)",
    marginBottom: "1rem",
  },

  title: {
    margin: 0,
    fontSize: "clamp(2.2rem, 8vw, 5.4rem)",
    lineHeight: 0.96,
    letterSpacing: "-0.035em",
    fontWeight: 800,
    color: "#ffffff",
    textWrap: "balance",
    textShadow: "0 0 28px rgba(255, 255, 255, 0.12)",
  },

  subtitle: {
    marginTop: "1rem",
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: "1.05rem",
    lineHeight: 1.7,
    maxWidth: 700,
    marginLeft: "auto",
    marginRight: "auto",
  },

  terminalWrap: {
    marginTop: "2.5rem",
    display: "flex",
    justifyContent: "center",
  },

  terminal: {
    width: "100%",
    maxWidth: 690,
    border: "1px solid rgba(255, 255, 255, 0.17)",
    borderRadius: 16,
    background:
      "linear-gradient(150deg, rgba(13, 13, 13, 0.95), rgba(2, 2, 2, 0.96))",
    boxShadow: "0 24px 100px rgba(0, 0, 0, 0.52), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
    padding: "1.15rem 1.2rem",
    textAlign: "left",
  },

  line: {
    display: "flex",
    alignItems: "center",
    gap: "0.7rem",
    flexWrap: "wrap",
  },

  prompt: {
    color: "rgba(255, 255, 255, 0.72)",
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    fontSize: "clamp(1rem, 3vw, 2rem)",
    lineHeight: 1.1,
    whiteSpace: "nowrap",
  },

  command: {
    color: "#ffffff",
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    fontSize: "clamp(1rem, 3vw, 2rem)",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
  },

  cursor: {
    display: "inline-block",
    width: "0.55ch",
    height: "1.05em",
    marginLeft: "0.15rem",
    background: "#ffffff",
    verticalAlign: "text-bottom",
    animation: "cursor-blink 1s steps(1, start) infinite",
  },

  link: {
    marginTop: "0.9rem",
    display: "inline-block",
    color: "rgba(255, 255, 255, 0.62)",
    fontSize: "0.85rem",
    textDecoration: "none",
    borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
    paddingBottom: "0.12rem",
    transition: "color 0.15s ease, border-color 0.15s ease",

    "&:hover": {
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.75)",
    },
  },

  footer: {
    marginTop: "1.8rem",
    fontSize: "0.84rem",
    color: "rgba(255, 255, 255, 0.5)",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },

  "@keyframes cursor-blink": {
    "0%, 49%": { opacity: 1 },
    "50%, 100%": { opacity: 0 },
  },

  [theme.fn.smallerThan("sm")]: {
    terminal: {
      padding: "1rem",
      borderRadius: 14,
    },

    footer: {
      letterSpacing: "0.045em",
    },
  },
}));

export default function DynamoDbPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/dynamodb`;
  const title = "DynamoDB, but elegant. | @zeroinbox/dynamo";
  const description =
    "@zeroinbox/dynamo is the TypeScript DynamoDB ORM from Zero Inbox. Install it with npm i @zeroinbox/dynamo.";

  const softwareStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: "@zeroinbox/dynamo",
    codeSampleType: "full",
    programmingLanguage: "TypeScript",
    runtimePlatform: "Node.js",
    codeRepository: "https://www.npmjs.com/package/@zeroinbox/dynamo",
    url: canonicalUrl,
    description,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareStructuredData) }}
        />
      </Head>

      <Box className={classes.page}>
        <div className={classes.glow} />
        <div className={classes.grid} />

        <Container className={classes.content} size={1080}>
          <Text className={classes.eyebrow}>Zero Inbox presents</Text>
          <h1 className={classes.title}>TypeScript DynamoDB ORM</h1>
          <Text className={classes.subtitle}>
            Precision modeling, fast queries, clean types. Built for teams that want DynamoDB without
            the boilerplate.
          </Text>

          <Box className={classes.terminalWrap}>
            <div className={classes.terminal}>
              <div className={classes.line}>
                <span className={classes.prompt}>~/</span>
                <span className={classes.command}>npm i @zeroinbox/dynamo</span>
                <span className={classes.cursor} aria-hidden="true" />
              </div>
              <a
                href="https://www.npmjs.com/package/@zeroinbox/dynamo"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                npmjs.com/package/@zeroinbox/dynamo
              </a>
            </div>
          </Box>

          <Text className={classes.footer}>DynamoDB ORM by Zero Inbox</Text>
        </Container>
      </Box>
    </>
  );
}
