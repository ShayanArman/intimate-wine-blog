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
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { BsChevronDown } from "react-icons/bs";
import { FcEmptyFilter } from "react-icons/fc";
import classNames from "classnames";

export const HEADER_PIXEL_HEIGHT = 60;
const HEADER_HEIGHT = rem(HEADER_PIXEL_HEIGHT);

const useStyles = createStyles(
  (theme, { backgroundColor }: { backgroundColor: string }) => ({
    header: {
      position: "fixed",
      borderBottom: 0,
      backgroundColor: '#333333',
      top: 0,
      left: 0,
      zIndex: 9999,
      transition: "background-color 0.3s ease",
    },

    headerColored: {
      backgroundColor: "#333333",
      transition: "background-color 0.3s ease",
    },

    inner: {
      height: HEADER_HEIGHT,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    links: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },

    logo: {
      [theme.fn.smallerThan("sm")]: {
        marginLeft: "1rem",
        marginTop: "0.3rem",
      },
      paddingLeft: "15px",
    },

    burger: {
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },

    desktopActionButton: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
      paddingRight: "15px",
    },

    mobileButton: {
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },

    link: {
      display: "block",
      lineHeight: 1,
      padding: `${rem(8)} ${rem(12)}`,
      borderRadius: theme.radius.sm,
      textDecoration: "none",
      color: 'white',
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
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
          <Logo className={classes.logo} />
          {/* <MantineLogo size={28} /> */}
        </Group>
        <Group spacing={5} className={classes.links}>
          <LinksToItems />
        </Group>
        <Box className={classes.desktopActionButton}>
          <ActionButton buttonSize={"md"} innerText="Sign In" />
        </Box>
        <Box className={classes.mobileButton}>
          <ActionButton buttonSize={"xs"} innerText="Sign In" />
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
      radius="xl"
      size={buttonSize}
      color="pink"
    >
      {innerText}
    </Button>
  );
}

function Logo({ className }: { className: string }) {
  return (
    <Link href="/" className={className}>
      <Image width={150} height={40} alt="zeroInbox" src="/horizLogo.png" />
    </Link>
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
  {
    link: "https://google.com",
    label: "Privacy",
    newTab: true,
    links: [
      {
        link: "/security",
        label: "Security",
        newTab: false,
        Icon: <FcEmptyFilter />,
      },
      {
        link: "https://zeroinbox.ai/datafaq.pdf",
        label: "Terms",
        newTab: true,
        Icon: <FcEmptyFilter />,
      },
      {
        link: "https://zeroinbox.ai/privacy.pdf",
        label: "Privacy",
        newTab: true,
        Icon: <FcEmptyFilter />,
      },
    ],
  },
  { link: "https://blog.zeroinbox.ai/", label: "Blog", newTab: false },
  { link: "https://stumbleupon.com", label: "StumbleUpon", newTab: true },
];

function LinksToItems({}) {
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
