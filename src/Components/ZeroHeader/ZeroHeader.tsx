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
import { BsChevronDown } from "react-icons/bs";
import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import NavBar from "../NavBar";


export const HEADER_PIXEL_HEIGHT = 80;
export const HEADER_HEIGHT = rem(HEADER_PIXEL_HEIGHT);

const useStyles = createStyles(
  (theme) => ({
    header: {
      position: "fixed",
      backgroundColor: 'var(--landing-background)',
      borderBottom: "0px",
      top: 0,
      left: 0,
      zIndex: 100,
      transition: "background-color 0.3s ease",
    },

    headerColored: {
      backgroundColor: "var(--landing-blur)",
      boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)",
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
      color: 'black',
      fontSize: theme.fontSizes.md,
      fontWeight: 400,

      "&:hover": {
        borderBottom: "2.5px solid #E65E8C",
      },
    },

    linkLabel: {
      marginRight: rem(5),
    },

  })
);


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

  if (linksRef.current && opened) {
    const computedStyle = window.getComputedStyle(linksRef.current);
    if (computedStyle.display !== 'none') {
      setOpened(false);
    }
  }

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
            onClick={() => setOpened((prev) => !prev)}
            className={classes.burger}
            size="md"
            color="var(--zero-blue)"
          />
          <Link href="/" style={{marginTop: "0.3rem"}}>
            <Image width={192} height={50} alt="zeroInbox" src="/zeroInboxLogoBlack.svg" />
          </Link>
        </Flex>
        <Group spacing={5} className={classes.links} ref={linksRef}>
          <LinksToItems />
        </Group>
        <Box>
          <ActionButton buttonSize={isSmallScreen ? "md" : "md"} innerText={ isSmallScreen ? "Start" : "Sign In" } />
        </Box>
      </Container>
    </Header>
    <NavBar opened={opened} setOpened={() => { setOpened(false) }} isSmallScreen={isSmallScreen} />
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
      variant='outline'
      styles={(theme) => ({
        root: {
          border: "none",
          color:"white",
          fontSize: theme.fontSizes.md,
          fontWeight: 300,
          backgroundColor: "var(--zero-red)",
        "&:hover": {
          backgroundColor: "rgba(230, 94, 140, 0.8)",
        }
      }
      })}
    >
      {innerText}
    </Button>
  );
}

type Links = {
  link: string;
  label: string;
  newTab: boolean;
  Icon?: JSX.Element;
  links?: { link: string; label: string; Icon: JSX.Element; newTab: boolean }[];
}[];

export const headerLinks: Links = [
  { link: "/features", label: 'Features', newTab: false },
  { link: "/security", label: "Security", newTab: false },
  { link: "/business", label: 'Business', newTab: false },
  {
    link: "https://zeroinbox.ai/privacy.pdf",
    label: "Privacy",
    newTab: true,
  },
  { link: "https://blog.zeroinbox.ai/", label: "Blog", newTab: true },
];

function LinksToItems() {
  const { classes } = useStyles();

  return headerLinks.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item
        component="a"
        icon={item.Icon}
        href={item.link}
        key={item.label}
        target={item.newTab ? "_blank" : "_self"}
      >
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <BsChevronDown size={rem(12)} stroke={"1.5"} />
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
        key={link.label}
        target={link.newTab ? "_blank" : "_self"}
        className={classes.link}
      >
        {link.label}
      </Link>
    );
  });
}
