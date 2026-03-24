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
import { FiChevronDown } from "react-icons/fi";
import NavBar from "../NavBar";
import { registerClickSignUpEventGoogle } from "../Analytics/GoogleAnalytics";
import { LINKED_SITE_URL, SITE_NAME } from "@/lib/seo";

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
  link?: string;
  label: string;
  newTab?: boolean;
  children?: HeaderLink[];
};

export const headerLinks: HeaderLink[] = [
  // { link: `/?section=${FEATURES_SECTION}`, label: "Features", newTab: false },
  // { link: `/?section=${SECURITY_SECTION}`, label: "Security", newTab: false },
  // { link: `/?section=${BUSINESS_SECTION}`, label: "Business", newTab: false },
  { link: `${LINKED_SITE_URL}`, label: "Home", newTab: false },
  { link: `${LINKED_SITE_URL}/about`, label: "About", newTab: false },
  {
    label: "Services",
    children: [
      { link: `${LINKED_SITE_URL}/private-wine-tastings/`, label: "Private Wine Tastings", newTab: true },
      { link: `${LINKED_SITE_URL}/wine-classes/`, label: "Wine Classes", newTab: true },
      { link: `${LINKED_SITE_URL}/private-chef-dinners/`, label: "Private Chef Dinners", newTab: true },
    ],
  },
  { link: `${LINKED_SITE_URL}/reviews`, label: "Reviews", newTab: false },
  { link: "/", label: "Blog", newTab: false },
  { link: `${LINKED_SITE_URL}/contact`, label: "Contact", newTab: false },
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
    overflow: "visible",

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  desktopDropdown: {
    position: "relative",
  },

  desktopDropdownTrigger: {
    gap: rem(6),
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
  },

  desktopDropdownChevron: {
    flexShrink: 0,
    transition: "transform var(--transition-fast)",
  },

  desktopDropdownMenu: {
    position: "absolute",
    top: "calc(100% - 2px)",
    left: 0,
    minWidth: rem(220),
    backgroundColor: "white",
    borderTop: "4px solid var(--initimate-wine-burgundy)",
    boxShadow: "0 18px 40px rgba(0, 0, 0, 0.12)",
    padding: `${rem(14)} 0`,
    opacity: 0,
    visibility: "hidden",
    transform: "translateY(8px)",
    pointerEvents: "none",
    transition: "opacity var(--transition-fast), transform var(--transition-fast), visibility var(--transition-fast)",
  },

  desktopDropdownMenuOpen: {
    opacity: 1,
    visibility: "visible",
    transform: "translateY(0)",
    pointerEvents: "auto",
  },

  desktopDropdownLink: {
    display: "block",
    padding: `${rem(12)} ${rem(22)}`,
    color: "var(--initimate-wine-burgundy)",
    fontFamily: "var(--font-heading)",
    fontWeight: 500,
    fontSize: rem(14),
    textDecoration: "none",
    textTransform: "none",
    letterSpacing: "0.02em",
    whiteSpace: "nowrap",
    transition: "background-color var(--transition-fast), color var(--transition-fast)",

    "&:hover": {
      backgroundColor: "rgba(108, 30, 32, 0.06)",
      color: "var(--initimate-wine-text)",
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
  const [servicesHovered, setServicesHovered] = useState(false);
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
          <Link href={`${LINKED_SITE_URL}`} className={classes.brand} onClick={() => setOpened(false)}>
            <Image width={160} height={42} alt={`${SITE_NAME}`} src="/logoBlackHorizontal.svg" />
          </Link>
        </Flex>

        <Group spacing={2} className={classes.desktopNav}>
          {headerLinks.map((item) => {
            if (item.children?.length) {
              return (
                <div
                  key={item.label}
                  className={classes.desktopDropdown}
                  onMouseEnter={() => setServicesHovered(true)}
                  onMouseLeave={() => setServicesHovered(false)}
                >
                  <button
                    type="button"
                    className={`${classes.link} ${classes.desktopDropdownTrigger}`}
                    aria-expanded={servicesHovered}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <FiChevronDown
                      size={16}
                      className={classes.desktopDropdownChevron}
                      style={{ transform: servicesHovered ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>

                  <div
                    className={`${classes.desktopDropdownMenu} ${servicesHovered ? classes.desktopDropdownMenuOpen : ""}`}
                    role="menu"
                    aria-label={`${item.label} links`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.link ?? "/"}
                        target={child.newTab ? "_blank" : "_self"}
                        className={classes.desktopDropdownLink}
                        role="menuitem"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.link ?? "/"}
                target={item.newTab ? "_blank" : "_self"}
                className={classes.link}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={`${LINKED_SITE_URL}/contact`}
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
