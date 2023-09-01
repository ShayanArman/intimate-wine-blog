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
import { useState } from "react";
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
      marginLeft: '7.25%',

      [theme.fn.smallerThan("lg")]: {
        display: "none",
      },
    },

    // logo: {
    //   marginTop: "0.3rem",

    //   [theme.fn.smallerThan("lg")]: {
    //     marginTop: "0.3rem",
    //     position: 'relative',
    //   },
    // },

    burger: {
      [theme.fn.largerThan("lg")]: {
        display: "none"
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
        <Flex align="center" style={{border: "1px solid black"}}>
          <Burger
            opened={opened}
            onClick={() => setOpened((prev) => !prev)}
            className={classes.burger}
            size="md"
            color="var(--zero-blue)"
          />
          <Link href="/" style={{marginTop: "0.3rem"}}>
            <Image width={150} height={50} alt="zeroInbox" src="/zeroInboxLogoBlack.svg" />
          </Link>
        </Flex>
        <Group spacing={5} className={classes.links}>
          <LinksToItems />
        </Group>
        <Box>
          <ActionButton buttonSize={isSmallScreen ? "sm" : "md"} innerText="Sign In" />
        </Box>
      </Container>
    </Header>
    <NavBar opened={opened} />
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

const zeroLinks: Links = [
  { link: "/features", label: 'Features', newTab: false },
  { link: "/security", label: "Security", newTab: false },
  { link: "/business", label: 'Zero AI for Business', newTab: false },
  {
    link: "https://zeroinbox.ai/privacy.pdf",
    label: "Privacy + FAQ",
    newTab: true,
  },
  { link: "https://blog.zeroinbox.ai/", label: "Blog", newTab: true },
];

function LinksToItems() {
  const { classes } = useStyles();

  return zeroLinks.map((link) => {
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
