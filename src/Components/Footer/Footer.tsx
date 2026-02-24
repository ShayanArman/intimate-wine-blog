import { createStyles, Box, Text, Flex } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footer: {
    width: "100%",
    padding: "4rem 2rem 2rem",
    backgroundColor: "var(--zi-dark)",

    [theme.fn.smallerThan("md")]: {
      padding: "3rem 1.5rem 2rem",
    },
  },

  inner: {
    maxWidth: 1100,
    margin: "0 auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gap: 40,
    marginBottom: 48,

    [theme.fn.smallerThan("md")]: {
      gridTemplateColumns: "1fr 1fr",
      gap: 32,
    },

    [theme.fn.smallerThan("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },

  brand: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  brandText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.9rem",
    lineHeight: 1.6,
    maxWidth: 260,
  },

  columnTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    marginBottom: 16,
  },

  link: {
    display: "block",
    color: "rgba(255,255,255,0.7)",
    fontSize: "0.95rem",
    padding: "6px 0",
    transition: "color var(--transition-fast)",

    "&:hover": {
      color: "white",
    },
  },

  divider: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: 24,
  },

  bottomText: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "0.8rem",
  },
}));

export default function FooterSection() {
  const { classes } = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Box className={classes.inner}>
        <div className={classes.grid}>
          {/* Brand Column */}
          <div className={classes.brand}>
            <Image width={140} height={37} alt="Zero Inbox" src="/zeroInboxLogoBlack.svg" style={{ filter: "brightness(0) invert(1)" }} />
            <Text className={classes.brandText}>
              AI-powered email organization. Clean your inbox, keep what matters.
            </Text>
          </div>

          {/* Product Column */}
          <div>
            <Text className={classes.columnTitle}>Product</Text>
            <Link href="/?section=features" className={classes.link}>Features</Link>
            <Link href="/?section=security" className={classes.link}>Security</Link>
            <Link href="/?section=privacy" className={classes.link}>Privacy</Link>
            <Link href="/?section=business" className={classes.link}>Business</Link>
          </div>

          {/* Resources Column */}
          <div>
            <Text className={classes.columnTitle}>Resources</Text>
            <Link href="/ai-email-organizer" className={classes.link}>AI Email Organizer</Link>
            <Link href="/news" className={classes.link}>News</Link>
            <Link href="/best-ai-email-organizer" className={classes.link}>Best AI Email Organizer</Link>
            <Link href="/clean-and-organize-emails" className={classes.link}>Clean and Organize Emails</Link>
            <Link href="/what-website-should-i-use-to-clean-or-organize-my-emails" className={classes.link}>Exact Match Answer</Link>
            <Link href="/about" className={classes.link}>About</Link>
            <Link href="/about#team" className={classes.link}>Team</Link>
            <Link href="mailto:info@zeroinbox.ai" className={classes.link}>Contact</Link>
            <Link href="/terms.pdf" target="_blank" className={classes.link}>Terms</Link>
          </div>

          {/* Account Column */}
          <div>
            <Text className={classes.columnTitle}>Account</Text>
            <Link href="https://app.zeroinbox.ai" target="_blank" className={classes.link}>Log In</Link>
            <Link href="https://app.zeroinbox.ai" target="_blank" className={classes.link}>Sign Up</Link>
          </div>
        </div>

        <Flex justify="space-between" align="center" className={classes.divider} wrap="wrap" gap={12}>
          <Text className={classes.bottomText}>© {new Date().getFullYear()} Zero Inbox. All rights reserved.</Text>
          <Flex gap={20}>
            <Link href="/terms.pdf" target="_blank" className={classes.link} style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>Terms</Link>
            <Link href="/privacy.pdf" target="_blank" className={classes.link} style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>Privacy</Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
