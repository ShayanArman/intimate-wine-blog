import {
  createStyles,
  Menu,
  Center,
  Text,
  Header,
  Container,
  Group,
  Button,
  Burger,
  rem,
  Box,
  MantineSize,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { BsChevronDown } from "react-icons/bs";
import classNames from "classnames";
import useIsMobile from "@/hooks/useIsMobile";

export const HEADER_PIXEL_HEIGHT = 80;
const HEADER_HEIGHT = rem(HEADER_PIXEL_HEIGHT);

const useStyles = createStyles(
  (theme, { backgroundColor }: { backgroundColor: string }) => ({
    header: {
      position: "fixed",
      backgroundColor: '#fffef6',
      borderBottom: "0px",
      top: 0,
      left: 0,
      zIndex: 9999,
      transition: "background-color 0.3s ease",
    },

    headerColored: {
      backgroundColor: "rgba(255, 254, 246, 0.8)",
      boxShadow: "0px 0px px 0px grey",
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

    logo: {
      marginTop: "0.3rem",
      position: "absolute",
      left: 0,

      [theme.fn.smallerThan("lg")]: {
        // marginLeft: "0.5rem",
        marginTop: "0.3rem",
        position: 'relative',
      },
    },

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
      fontWeight: 200,

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
}: {
  scrolledToHeader: boolean;
}) {
  const { classes } = useStyles({ backgroundColor: "white" });
  const isSmallScreen = useIsMobile();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Header
      height={HEADER_HEIGHT}
      mb={120}
      className={classNames(classes.header, {
        [classes.headerColored]: scrolledToHeader,
      })}
    >
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="md"
            color="#3DBCF8"
          />
          <Link href="/" className={classes.logo}>
            <Image width={150} height={40} alt="zeroInbox" src="/horizontalBlack.png" />
          </Link>
        </Group>
        <Group spacing={5} className={classes.links}>
          <LinksToItems />
        </Group>
        <Box>
          <ActionButton buttonSize={isSmallScreen ? "xs" : "md"} innerText="Sign In" />
        </Box>
      </Container>
    </Header>
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
      radius="lg"
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
  {
    link: "https://zeroinbox.ai/privacy.pdf",
    label: "Privacy",
    newTab: true,
  },
  { link: "/business", label: 'Business', newTab: false },
  { link: "https://blog.zeroinbox.ai/", label: "Blog", newTab: true },
  { link: "/contact", label: 'Contact Us', newTab: false },
];

function LinksToItems() {
  const { classes } = useStyles({ backgroundColor: "white" });

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
