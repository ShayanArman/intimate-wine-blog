import {
  createStyles,
  Container,
  Group,
  Button,
  Burger,
  rem,
  Flex,
  MantineSize,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import NavBar from "../NavBar";
import { FiFastForward } from "react-icons/fi";
import { registerClickSignUpEventGoogle } from "../Analytics/GoogleAnalytics";

export const HEADER_PIXEL_HEIGHT = 88;
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
  { link: `/?section=${FEATURES_SECTION}`, label: "Features", newTab: false },
  { link: `/?section=${SECURITY_SECTION}`, label: "Security", newTab: false },
  { link: `/?section=${BUSINESS_SECTION}`, label: "Business", newTab: false },
  { link: "/news", label: "News", newTab: false },
  { link: "/about", label: "About", newTab: false },
];

/* ─── Styles ─── */
const useStyles = createStyles((theme) => ({
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    height: HEADER_HEIGHT,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    backgroundColor: "transparent",
  },

  headerHidden: {
    transform: "translateY(-100%)",
  },

  pill: {
    width: "92%",
    maxWidth: 1200,
    height: 74,
    borderRadius: "var(--radius-pill)",
    backgroundColor: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(16px)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `0 ${rem(24)}`,
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    display: "none",
    [theme.fn.smallerThan("md")]: {
      display: "initial",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(14)}`,
    textDecoration: "none",
    fontWeight: 500,
    color: "#333",
    fontSize: rem(15),
    borderRadius: "var(--radius-sm)",
    transition: "color var(--transition-fast), background-color var(--transition-fast)",

    "&:hover": {
      color: "var(--zero-red-darker)",
      backgroundColor: "rgba(255,50,119,0.06)",
    },
  },
}));

/* ─── Smart-Hide Header ─── */
export default function ZeroHeader({
  isSmallScreen,
}: {
  scrolledToHeader?: boolean;
  isSmallScreen: boolean;
}) {
  const [opened, setOpened] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const { classes } = useStyles();

  useEffect(() => {
    const THRESHOLD = 10;

    function handleScroll() {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setIsScrolled(currentY > 50);

      if (Math.abs(delta) < THRESHOLD) return;

      if (delta > 0 && currentY > HEADER_PIXEL_HEIGHT) {
        setIsHidden(true);  // scrolling down → hide
      } else {
        setIsHidden(false); // scrolling up → show
      }

      lastScrollY.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={classNames(classes.header, {
          [classes.headerHidden]: isHidden && !opened,
        })}
      >
        <div className={classes.pill}>
          <Flex align="center" gap={10}>
            <Burger
              opened={opened}
              onClick={() => setOpened((prev) => !prev)}
              className={classes.burger}
              size="sm"
              color="var(--zero-red-darker)"
            />
            <Link href="/" onClick={() => setOpened(false)}>
              <Image width={160} height={42} alt="Zero Inbox" src="/zeroInboxLogoBlack.svg" />
            </Link>
          </Flex>

          <Group spacing={4} className={classes.links}>
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
          </Group>

          <Group spacing={8}>
            {!isSmallScreen && (
              <Link
                href="https://app.zeroinbox.ai"
                target="_blank"
                className={classes.link}
              >
                Log In
              </Link>
            )}
            <ActionButton
              buttonSize={isSmallScreen ? "sm" : "md"}
              innerText={isSmallScreen ? "Start" : "Sign Up"}
            />
          </Group>
        </div>
      </div>
      <NavBar opened={opened} closeNavBar={() => setOpened(false)} />
    </>
  );
}

/* ─── CTA Button ─── */
function ActionButton({
  buttonSize,
  innerText,
}: {
  buttonSize: MantineSize;
  innerText: string;
}) {
  return (
    <Button
      component="a"
      target="_blank"
      href="https://app.zeroinbox.ai"
      radius="xl"
      size={buttonSize}
      leftIcon={<FiFastForward size={14} />}
      onClick={() => registerClickSignUpEventGoogle()}
      styles={() => ({
        root: {
          border: "none",
          color: "white",
          fontWeight: 600,
          backgroundColor: "var(--zero-red-darker)",
          "&:hover": {
            backgroundColor: "#d4205a",
          },
        },
      })}
    >
      {innerText}
    </Button>
  );
}
