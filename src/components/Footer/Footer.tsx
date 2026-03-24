import { createStyles, Box, Text, Flex } from "@mantine/core";
import { LINKED_SITE_URL, socials_links_map } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";


const useStyles = createStyles((theme) => ({
  footer: {
    width: "100%",
    padding: "4rem 2rem 2rem",
    backgroundColor: "var(--initimate-wine-green)",

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
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
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

  socialLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255,255,255,0.4)",
    transition: "color var(--transition-fast)",

    "&:hover": {
      color: "white",
    },
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
            {/* TODO_P0: SEND ME A LOGO TO ADD HERE. */}
            <Image width={140} height={37} alt="Intimate Wine" src="/logoBlackHorizontal.svg" style={{ filter: "brightness(0) invert(1)" }} />
            <Text className={classes.brandText}>
              From Dream to Reality
            </Text>
          </div>

          {/* Product Column */}
          <div>
            <Text className={classes.columnTitle}>Business</Text>
            <Link href={`${LINKED_SITE_URL}/about/#background`} className={classes.link}>Background</Link>
          </div>

          {/* Resources Column */}
          <div>
            <Text className={classes.columnTitle}>Resources</Text>
            <Link href={`${LINKED_SITE_URL}`} className={classes.link}>Home</Link>
            <Link href="/" className={classes.link}>Blog</Link>
            <Link href={`${LINKED_SITE_URL}/about`} className={classes.link}>About</Link>
            {/* TODO_P0: SARAH_O add #team to about About. */}
            <Link href={`${LINKED_SITE_URL}/about/#team`} className={classes.link}>Team</Link>
            {/* TODO_P0: SARAH_O add #team to about Background. */}
            <Link href={`${LINKED_SITE_URL}/about/#background`} className={classes.link}>Story</Link>
            {/* TODO_P0: SARAH_O add #team to about Philosophy. */}
            <Link href={`${LINKED_SITE_URL}/about/#philosophy`} className={classes.link}>Philosophy</Link>
            <Link href={`${LINKED_SITE_URL}/contact`} className={classes.link}>Contact</Link>
            {/* TODO_P0: SHAYAN add Booking link so customers can book from this blog -> main page booking. */}
          </div>

          {/* Learn More Column */}
          {/* TODO_PL: Add Alternatives section */}
          {/* <div>
            <Text className={classes.columnTitle}>Learn more</Text>
            <Link href="/ai-email-organizer" className={classes.link}>AI Email Organizer</Link>
            <Link href="/best-ai-email-organizer" className={classes.link}>Best AI Email Organizer</Link>
            <Link href="/clean-and-organize-emails" className={classes.link}>Clean and Organize Emails</Link>
            <Link href="/what-website-should-i-use-to-clean-or-organize-my-emails" className={classes.link}>Organize My Emails</Link>
            <Link href="/mark-zuckerberg-loves-inbox-zero-ai" className={classes.link}>Mark Zuckerberg</Link>
            <Link href="/news/why-zero-inbox" className={classes.link}>Why Zero Inbox</Link>
            <Link href="/superhuman-alternatives" className={classes.link}>Superhuman Alternatives</Link>
          </div> */}

          {/* Account Column */}
          <div>
            <Text className={classes.columnTitle}>Book</Text>
            <Link href={`${LINKED_SITE_URL}/contact`} target="_blank" className={classes.link}>Book</Link>
          </div>
        </div>

        <Flex justify="space-between" align="center" className={classes.divider} wrap="wrap" gap={12}>
          <Text className={classes.bottomText}>© {new Date().getFullYear()} Intimate.Wine. All rights reserved.</Text>
          <Flex gap={20}>
            <Link
              href={socials_links_map.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Intimate Wine on Instagram"
              title="Instagram"
              className={classes.socialLink}
            >
              <FiInstagram size={18} />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
