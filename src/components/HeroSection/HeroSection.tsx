import { createStyles, Flex, Text, Button, Box } from "@mantine/core";
import { FiZap } from "react-icons/fi";
import { HEADER_PIXEL_HEIGHT } from "../ZeroHeader/ZeroHeader";
import { registerClickSignUpEventGoogle } from "../Analytics/GoogleAnalytics";
import HeroLiveMetric from "../HeroLiveMetric";

const useStyles = createStyles((theme) => ({
  container: {
    background: "#007aff",
    padding: `${HEADER_PIXEL_HEIGHT}px 5rem 0`,
    position: "relative",
    overflow: "hidden",

    [theme.fn.smallerThan("md")]: {
      padding: `calc(${HEADER_PIXEL_HEIGHT}px + env(safe-area-inset-top)) 1.5rem 0`,
    },
  },

  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 24,
    paddingTop: 80,
    paddingBottom: 80,

    [theme.fn.smallerThan("md")]: {
      paddingTop: 48,
      paddingBottom: 48,
    },
  },

  title: {
    fontSize: "5rem",
    fontWeight: 800,
    color: "white",
    fontFamily: "var(--font-heading)",
    lineHeight: 1.05,
    letterSpacing: "-2px",

    [theme.fn.smallerThan("md")]: {
      fontSize: "3rem",
      letterSpacing: "-1px",
    },
  },

  highlight: {
    background: "linear-gradient(90deg, var(--zero-red) 0%, var(--zero-blue) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: "1.3rem",
    fontWeight: 400,
    maxWidth: 560,
    lineHeight: 1.6,
    fontFamily: "var(--font-body)",

    [theme.fn.smallerThan("md")]: {
      fontSize: "1.1rem",
    },
  },

  ctaButton: {
    border: "none",
    fontWeight: 700,
    fontSize: "1.1rem",
    backgroundColor: "var(--zero-red-darker)",
    transition: "all var(--transition-smooth)",

    "&:hover": {
      backgroundColor: "#d4205a",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(255,50,119,0.35)",
    },
  },

  glow: {
    position: "absolute",
    width: 500,
    height: 500,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,50,119,0.15) 0%, transparent 70%)",
    top: -100,
    right: -100,
    pointerEvents: "none",
  },
}));

export default function HeroSection({
  isSmallScreen,
}: {
  isSmallScreen: boolean;
  onFinishedReading?: () => void;
}) {
  const { classes } = useStyles();
  const heroMinHeight = "100svh";

  return (
    <Flex
      direction="column"
      justify={isSmallScreen ? "flex-start" : "center"}
      mih={heroMinHeight}
      className={classes.container}
    >
      <div className={classes.glow} />
      <Box className={classes.inner}>
        <h1 className={classes.title}>
          Clean your inbox.
          <br />
          <span className={classes.highlight}>Discover magic.</span>
        </h1>

        <Text className={classes.subtitle}>
          Zero Inbox is the AI email organizer that deletes spam, unsubscribes from
          noise, and organizes what&apos;s left — in seconds.
        </Text>

        <Flex align="center" gap={12} wrap="wrap">
          <Button
            component="a"
            href="https://app.zeroinbox.ai"
            target="_blank"
            size={isSmallScreen ? "lg" : "xl"}
            radius="xl"
            leftIcon={<FiZap />}
            onClick={() => registerClickSignUpEventGoogle()}
            className={classes.ctaButton}
          >
            Get Started
          </Button>
        </Flex>

        <HeroLiveMetric />
      </Box>
    </Flex>
  );
}
