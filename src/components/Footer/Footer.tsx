import { BUSINESS_NAME, LINKED_SITE_URL, MAIN_PAGE_DESCRIPTION, SITE_NAME, SITE_SLOGAN, socials_links_map } from "@lib/info";
import { createStyles, Box, Text, Flex } from "@mantine/core";
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
          <Image
            width={364}
            height={52}
            alt="Intimate Wine"
            src="logoHorizontalSlogan.svg"
            style={{ width: "auto", height: 24, filter: "brightness(0) invert(1)" }}
          />

          <div>
            <Text className={classes.columnTitle}>Explore</Text>
            <Link href={`${LINKED_SITE_URL}`} className={classes.link}>Home</Link>
            <Link href="/" className={classes.link}>Blog</Link>
            <Link href={`${LINKED_SITE_URL}/about`} className={classes.link}>About</Link>
            <Link href={`${LINKED_SITE_URL}/reviews`} className={classes.link}>Reviews</Link>
          </div>

          <div>
            <Text className={classes.columnTitle}>Experiences</Text>
            <Link href={`${LINKED_SITE_URL}/private-wine-tastings/`} className={classes.link}>Private Wine Tastings</Link>
            <Link href={`${LINKED_SITE_URL}/wine-classes/`} className={classes.link}>Wine Classes</Link>
            <Link href={`${LINKED_SITE_URL}/private-chef-dinners/`} className={classes.link}>Private Chef Dinners</Link>
          </div>

          <div>
            <Text className={classes.columnTitle}>Visit</Text>
            <Link href={`${LINKED_SITE_URL}/contact`} className={classes.link}>Book</Link>
            <Link href={`${LINKED_SITE_URL}/contact`} className={classes.link}>Contact</Link>
          </div>
        </div>

        <Flex justify="space-between" align="center" className={classes.divider} wrap="wrap" gap={12}>
          <Text className={classes.bottomText}>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</Text>
          <Flex gap={20}>
            <Link
              href={socials_links_map.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`${BUSINESS_NAME} on Instagram`}
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
