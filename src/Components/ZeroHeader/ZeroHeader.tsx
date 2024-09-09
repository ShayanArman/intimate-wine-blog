import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  rem,
  Box,
  MantineSize,
  Flex,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import NavBar from "../NavBar";
import { FiChevronDown, FiFastForward } from "react-icons/fi"
import { FcHeatMap, FcFolder, FcAbout, FcDataSheet, FcLibrary, FcSalesPerformance, FcHome } from "react-icons/fc"
import { registerClickSignUpEventGoogle } from "../Analytics/GoogleAnalytics";

export const TEXT_INTRO_SECTION = "text_intro_section";
export const USERS_STATS_SECTION = "users_section";
export const FEATURES_SECTION = "features";
export const UNSUBSCRIBE_SECTION = "unsubscribe";
export const SECURITY_SECTION = "security";
export const PRIVACY_SECTION = "privacy";
export const BUSINESS_SECTION = "business";

export const mainPageSections = {
  [FEATURES_SECTION]: {sectionId: FEATURES_SECTION, offset: 40},
  [USERS_STATS_SECTION]: {sectionId: USERS_STATS_SECTION, offset: 40},
  [SECURITY_SECTION]: {sectionId: SECURITY_SECTION, offset: 30},
  [BUSINESS_SECTION]: {sectionId: BUSINESS_SECTION, offset: 0},
  [PRIVACY_SECTION]: {sectionId: PRIVACY_SECTION, offset: 40},
}


export const HEADER_PIXEL_HEIGHT = 80;
export const HEADER_HEIGHT = rem(HEADER_PIXEL_HEIGHT);

const useStyles = createStyles(
  (theme) => ({
    header: {
      position: "fixed",
      backgroundColor: 'var(--landing-background)',
      borderBottom: "0px",
      boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)",
      top: 0,
      left: 0,
      zIndex: 9999,
      transition: "background-color 0.3s ease",
    },

    headerColored: {
      backgroundColor: "var(--landing-blur)",
      // boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)",
      boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.5)",
      transition: "all 0.3s"
    },

    inner: {
      height: HEADER_HEIGHT,
      width: "90%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: 'relative',

      [theme.fn.smallerThan("md")]: {
        width: "100%"
      }
    },

    links: {
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },

    logoBurgerContainer: {
      [theme.fn.smallerThan("md")]: {
        columnGap: "10px",
      }
    },

    burger: {
      display: "none",
      [theme.fn.smallerThan("md")]: {
        display: "initial"
      }
    },

    link: {
      display: "block",
      lineHeight: 1,
      padding: `${rem(8)} ${rem(12)}`,
      textDecoration: "none",
      fontWeight: 500,
      color: 'black',
      fontSize: theme.fontSizes.xl,

      "&:hover": {
        color: "var(--zero-red-darker)",
        fontWeight: 700,
        transition: "all 0.08s ease-out",
      },
    },

    // nestedLinks when link has nested links
    nestedLink: {
      fontSize: theme.fontSizes.lg
    },

    // for nested links
    linkOpen: {
      color: "var(--zero-red-darker)",
      fontWeight: 700,
      transition: "all 0.08s ease-out",
    },

    linkLabel: {
      marginRight: rem(5),
    },

  })
);

function throttle(fn: () => void, limit: number) {
  let lastCall = 0;
  return function() {
    const now = new Date().getTime();
    if (now - lastCall < limit) {
      return;
    }
    lastCall = now;
    return fn();
  };
}

export default function ZeroHeader({
  scrolledToHeader,
  isSmallScreen,
}: {
  scrolledToHeader: boolean;
  isSmallScreen: boolean;
}) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const linksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleResize() {
      if (linksRef.current && opened) {
        const computedStyle = window.getComputedStyle(linksRef.current);
        if (computedStyle.display !== 'none') {
          setOpened(false);
        }
      }
    }

    handleResize();
    const throttledHandleResize = throttle(handleResize, 50);
    window.addEventListener('resize', throttledHandleResize);
    return () => {
      window.removeEventListener('resize', throttledHandleResize);
    };
  });

  return (
    <>
      <Header
        height={HEADER_HEIGHT}
        mb={120}
        className={classNames(classes.header, {
          [classes.headerColored]: scrolledToHeader,
        })}
      >
        <Container className={classes.inner} fluid>
          <Flex align="center" className={classes.logoBurgerContainer}>
            <Burger
              opened={opened}
              onClick={() => { setOpened((prev) => !prev) }}
              className={classes.burger}
              size="md"
              color="var(--zero-blue)"
            />
            <Link href="/" style={{marginTop: "0.3rem"}} onClick={() => setOpened(false)}>
              <Image width={192} height={50} alt="zeroInbox" src="/zeroInboxLogoBlack.svg" />
            </Link>
          </Flex>
          <Group spacing={5} className={classes.links} ref={linksRef}>
            <LinksToItems />
          </Group>
          <Group>
            { !isSmallScreen &&
              <Link
              href={"https://app.zeroinbox.ai"}
              shallow={true}
              target={"_blank"}
              onClick={() => { registerClickSignUpEventGoogle() }}
              className={classes.link}
            >
              Sign In
            </Link>}
            <ActionButton buttonSize={isSmallScreen ? "md" : "lg"} innerText={ isSmallScreen ? "Start" : "Register" } />
          </Group>
        </Container>
      </Header>
      <NavBar opened={opened} closeNavBar={() => setOpened(false)} />
    </>
  );
}

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
      leftIcon={<FiFastForward />}
      variant='outline'
      onClick={() => registerClickSignUpEventGoogle() }
      styles={(theme) => ({
        root: {
          border: "none",
          color:"white",
          fontSize: theme.fontSizes.md,
          fontWeight: 300,
          backgroundColor: "var(--zero-red-darker)",
        "&:hover": {
          backgroundColor: "#228be6",
        }
      }
      })}
    >
      {innerText}
    </Button>
  );
}

type Link = {
  link: string;
  label: string;
  newTab: boolean;
  showOnHeader: boolean;
  Icon?: JSX.Element;
  links?: { link: string; label: string; Icon?: JSX.Element; newTab: boolean }[];
};

const isZeroInbox = process.env.NEXT_PUBLIC_IS_ZERO_INBOX === "true";
export const headerLinks: Link[] = [
  { link: "/", label: `${isZeroInbox ? "Zero Inbox" : "Inbox Zero"}`, Icon: <FcHome />, newTab: false, showOnHeader: false },
  { link: `/?section=${FEATURES_SECTION}`, label: 'Features', Icon: <FcFolder />, newTab: false, showOnHeader: true },
  { link: `/?section=${SECURITY_SECTION}`, label: "Security", Icon: <FcDataSheet />, newTab: false, showOnHeader: true },
  { link: `/?section=${BUSINESS_SECTION}`, label: 'Business', Icon: <FcSalesPerformance />, newTab: false, showOnHeader: true },
  { link: "/privacyAndData", label: 'Privacy', Icon: <FcHeatMap />, newTab: true, showOnHeader: true,
    links: [
      {link: `/?section=${PRIVACY_SECTION}`, label: "Privacy Info",  newTab: false},
      {link: "/terms.pdf", label: "Data FAQ", newTab: true},
    ]
  },
  { link: "https://blog.zeroinbox.ai", label: "Blog", Icon: <FcLibrary />, newTab: true, showOnHeader: true },
  { link: "/about", label: 'About', Icon: <FcAbout />, newTab: false, showOnHeader: false },
];

function LinksToItems() {
  const { classes } = useStyles();
  const [labelOpened, setLabelOpened] = useState("");

  return headerLinks.filter(link => link.showOnHeader).map((link) => {
    const menuItems = link.links?.map((item) => (
      <Link key={item.label} shallow={true} href={item.link} target={item.newTab ? "_blank" : "_self"} passHref>
        <Menu.Item
          component="a"
          icon={item.Icon}
          className={classes.nestedLink}
        >
          {item.label}
        </Menu.Item>
      </Link>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          onOpen={()=> { setLabelOpened(link.label)}}
          onClose={()=> { setLabelOpened("") }}
          transitionProps={{ exitDuration: 0 }}
          withinPortal={false}
        >
          <Menu.Target>
            <a
              href={link.link}
              className={`${classes.link} ${link.label === labelOpened ? classes.linkOpen : null }`}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <FiChevronDown />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        href={link.link}
        shallow={true}
        key={link.label}
        target={link.newTab ? "_blank" : "_self"}
        className={classes.link}
      >
        {link.label}
      </Link>
    );
  });
}
