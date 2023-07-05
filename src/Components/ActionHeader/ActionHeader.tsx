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
} from '@mantine/core';
import Image from "next/image";
import Link from "next/link";
import { useDisclosure } from '@mantine/hooks';
import { BsChevronDown } from "react-icons/bs";
import { FcEmptyFilter } from 'react-icons/fc'
const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
  },

  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  logoDesktop: {
    [theme.fn.smallerThan('sm')]: {
        display: 'none',
    },
  },

  logoMobile: {
    marginLeft: "1rem",
    marginTop: '0.3rem',
    [theme.fn.largerThan('sm')]: {
        display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopActionButton: {
    [theme.fn.smallerThan('sm')]: {
        display: 'none'
      },
  },

  mobileButton: {
    [theme.fn.largerThan('sm')]: {
        display: 'none'
      },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

type Links = { link: string; label: string; links?: { link: string; label: string }[] }[];

export default function ActionHeader({ links }: {links: Links }) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.header}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="md" color="#3DBCF8" />
          <Link href="https://app.zeroinbox.ai/login" className={classes.logoDesktop}>
            <Image
            width={150}
            height={50}
            alt="zeroInbox"
            src="/horizontal.svg"
            />
          </Link>
          <Box className={classes.logoMobile}>
            <Link href="https://app.zeroinbox.ai/login">
                <Image
                width={150}
                height={50}
                alt="zeroInbox"
                src="/horizontal.svg"
                />
            </Link>
        </Box>
          {/* <MantineLogo size={28} /> */}
        </Group>
        <Group spacing={5} className={classes.links}>
          <LinksToItems links={links} />
        </Group>
        <Button component="a" target="_blank" href="https://app.zeroinbox.ai" leftIcon={<FcEmptyFilter />} radius="xl" size="md" color="pink" className={classes.desktopActionButton}>
          Click + Unsubscribe
        </Button>
        <Box className={classes.mobileButton}>
            <Button component="a" target="_blank" href="https://app.zeroinbox.ai" leftIcon={<FcEmptyFilter />} radius="xl" size="xs" color="pink">
                Start
            </Button>
        </Box>
      </Container>
    </Header>
  );
}

function LinksToItems({links}: {links: Links} ) {
    const { classes } = useStyles();

    return links.map((link) => {
        const menuItems = link.links?.map((item) => (
          <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));
    
        if (menuItems) {
          return (
            <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
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
}