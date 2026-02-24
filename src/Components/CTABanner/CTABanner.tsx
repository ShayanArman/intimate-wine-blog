import { keyframes } from "@emotion/react";
import { createStyles, Box, Text, Button, Flex } from "@mantine/core";
import { registerClickSignUpEventGoogle } from "../Analytics/GoogleAnalytics";

const pulse = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0.6;
  }
  70% {
    transform: scale(2.4);
    opacity: 0;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
`;

const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    padding: "5rem 2rem",
    background: "linear-gradient(135deg, var(--zi-deep-blue) 0%, #1a2d6d 60%, #2a1a4d 100%)",

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 1.5rem",
    },
  },

  inner: {
    maxWidth: 700,
    margin: "0 auto",
    textAlign: "center" as const,
  },

  heading: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.4rem",
    color: "white",
    lineHeight: 1.15,
    letterSpacing: "-1px",
    marginBottom: 16,

    [theme.fn.smallerThan("md")]: {
      fontSize: "1.8rem",
    },
  },

  subtext: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "1.1rem",
    lineHeight: 1.6,
    marginBottom: 32,
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

  liveDotWrap: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 10,
    height: 10,
  },

  liveDotPulse: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    backgroundColor: "#52d86a",
    animation: `${pulse} 1.8s ease-out infinite`,
  },

  liveDot: {
    position: "relative",
    display: "inline-block",
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#52d86a",
  },
}));

export default function CTABanner() {
  const { classes } = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.inner}>
        <Text className={classes.heading}>Ready to reach inbox zero?</Text>
        <Text className={classes.subtext}>
          Join thousands of professionals who have reclaimed their inbox with Zero Inbox.
        </Text>
        <Flex justify="center">
          <Button
            component="a"
            href="https://app.zeroinbox.ai"
            target="_blank"
            size="xl"
            radius="xl"
            leftIcon={
              <span className={classes.liveDotWrap}>
                <span className={classes.liveDotPulse} />
                <span className={classes.liveDot} />
              </span>
            }
            onClick={() => registerClickSignUpEventGoogle()}
            className={classes.ctaButton}
          >
            Get Started
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
