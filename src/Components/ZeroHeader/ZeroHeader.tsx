import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Burger,
  rem,
  UnstyledButton,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { BsChevronDown } from "react-icons/bs";
import { HideOnMobile } from "../common/HideOnMobile";
import { ShowOnMobile } from "../common/ShowOnMobile";
import useIsMobile from "@/hooks/useIsMobile";
const HEADER_HEIGHT = rem(100);

const useStyles = createStyles((theme) => ({
  container: {
    height: HEADER_HEIGHT,
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
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

  burger: {
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
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
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
}));

type HeaderActionProps = {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
};

export default function ZeroHeader({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
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
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  const isMobile = useIsMobile();

  return (
    <Header
      height={HEADER_HEIGHT}
      sx={{
        borderBottom: "1",
      }}
      mb={120}
    >
      <Container className={isMobile ? classes.container : classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <HideOnMobile>
            <Link href="https://app.zeroinbox.ai/login">
              <Image
                width={150}
                height={50}
                alt="zeroInbox"
                src="/horizontal.svg"
              />
            </Link>
          </HideOnMobile>
        </Group>

        <ShowOnMobile>
          <Link
            style={{ border: "1px solid black" }}
            href="https://app.zeroinbox.ai/login"
          >
            <Image
              width={150}
              height={50}
              alt="zeroInbox"
              src="/horizontal.svg"
            />
          </Link>
        </ShowOnMobile>

        <HideOnMobile>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
        </HideOnMobile>

        <HideOnMobile>
          <UnstyledButton
            h={30}
            style={{ backgroundColor: "#EA577B", borderRadius: "50%" }}
          >
            Start
          </UnstyledButton>
        </HideOnMobile>
      </Container>
    </Header>
  );
}
