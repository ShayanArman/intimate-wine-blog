import {
  createStyles,
  Group,
  Burger,
  rem,
  Flex,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavBar from "../NavBar";
import { registerClickSignUpEventGoogle } from "../Analytics/GoogleAnalytics";
import { SITE_NAME } from "@/lib/seo";

export const HEADER_PIXEL_HEIGHT = 84;
export const HEADER_HEIGHT = rem(HEADER_PIXEL_HEIGHT);

/* ─── Section IDs (unchanged) ─── */
export const TEXT_INTRO_SECTION = "text_intro_section";
export const USERS_STATS_SECTION = "users_section";
export const FEATURES_SECTION = "features";
export const UNSUBSCRIBE_SECTION = "unsubscribe";
export const SECURITY_SECTION = "security";
export const PRIVACY_SECTION = "privacy";
export const BUSINESS_SECTION = "business";

export const mainPageSections = {
  [FEATURES_SECTION]: { sectionId: FEATURES_SECTION, offset: 40 },
  [USERS_STATS_SECTION]: { sectionId: USERS_STATS_SECTION, offset: 40 },
  [SECURITY_SECTION]: { sectionId: SECURITY_SECTION, offset: 30 },
  [BUSINESS_SECTION]: { sectionId: BUSINESS_SECTION, offset: 0 },
  [PRIVACY_SECTION]: { sectionId: PRIVACY_SECTION, offset: 40 },
};

/* ─── Header Links ─── */
type HeaderLink = {
  link: string;
  label: string;
  newTab: boolean;
};

export const headerLinks: HeaderLink[] = [
  // { link: `/?section=${FEATURES_SECTION}`, label: "Features", newTab: false },
  // { link: `/?section=${SECURITY_SECTION}`, label: "Security", newTab: false },
  // { link: `/?section=${BUSINESS_SECTION}`, label: "Business", newTab: false },
  { link: "/home", label: "Home", newTab: false },
  { link: "/about", label: "About", newTab: false },
  // add Services
  { link: "/reviews", label: "Reviews", newTab: false },
  { link: "/", label: "Blog", newTab: false },
  { link: "/contact", label: "Contact", newTab: false },
];

/* ─── Styles ─── */
const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 100,
    width: "100%",
    backgroundColor: "white",
    borderBottom: "1px solid rgba(108, 30, 32, 0.12)",
  },

  header: {
    minHeight: HEADER_HEIGHT,
    padding: `0 ${rem(28)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: rem(24),

    [theme.fn.smallerThan("md")]: {
      minHeight: rem(76),
      padding: `0 ${rem(16)}`,
    },
  },

  brand: {
    display: "inline-flex",
    alignItems: "center",
    lineHeight: 0,
    flexShrink: 0,
  },

  desktopNav: {
    marginLeft: "auto",
    gap: rem(2),

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    display: "none",

    [theme.fn.smallerThan("md")]: {
      display: "inline-flex",
    },
  },

  link: {
    display: "inline-flex",
    alignItems: "center",
    minHeight: rem(40),
    lineHeight: 1,
    padding: `${rem(8)} ${rem(14)}`,
    textDecoration: "none",
    fontFamily: "var(--font-heading)",
    fontWeight: 500,
    color: "var(--initimate-wine-burgundy)",
    fontSize: rem(14),
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    transition: "color var(--transition-fast)",

    "&:hover": {
      color: "var(--initimate-wine-text)",
    },
  },
}));

export default function ZeroHeader() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Flex align="center" gap={12}>
          <Burger
            opened={opened}
            onClick={() => setOpened((prev) => !prev)}
            className={classes.burger}
            size="sm"
            color="var(--initimate-wine-burgundy)"
          />
          <Link href="/" className={classes.brand} onClick={() => setOpened(false)}>
            <Image width={160} height={42} alt={`${SITE_NAME}`} src="/logoBlackHorizontal.svg" />
          </Link>
        </Flex>

        <Group spacing={2} className={classes.desktopNav}>
          {headerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              target={item.newTab ? "_blank" : "_self"}
              className={classes.link}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://app.zeroinbox.ai"
            target="_blank"
            className={classes.link}
          >
            Book
          </Link>
        </Group>
      </div>
      <NavBar opened={opened} closeNavBar={() => setOpened(false)} />
    </div>
  );
}
