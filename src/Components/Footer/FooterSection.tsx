import { createStyles, Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram, BrandLinkedin } from 'tabler-icons-react';
import Link from "next/link";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  footer: {
    display: 'flex',
    height: '90px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    color: 'white',
    borderTop: ".5px solid grey",
  },

  inner: {
    width: '90%',
    height: '100%',
    display: 'flex',
    position: "relative",
    justifyContent: "center",
    alignItems: 'center',
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  logoDiv: {
    left: 0,
    position: 'absolute',
    marginTop: "0.3rem",
  },

  links: {
    transition: "0.3s ease-in",
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },

    "&:hover": {
      color: 'white',
      textDecoration: 'none',
      transition: "0.3s ease-out",
    }

  },

  actionIcon: {
    backgroundColor: '#333',
    borderColor: '#333',

    "&:hover": {
      backgroundColor: '#333',
    }
  },

  socials: {
    right: 0,
    position: 'absolute'
  },

  socialIcons: {
    color: '#E65E8C',
    transition: "0.3s ease-out",

    "&:hover": {
      color: 'white',
      transition: "0.3s ease-in",
    },
  },



  }

));

const links = [
  { link: '/', label: 'Features', newTab: false},
  { link: 'https://zeroinbox.ai/privacy.pdf', label: 'Privacy', newTab: true},
  { link: '/business', label: 'Business', newTab: false},
  { link: 'https://www.blog.zeroinbox.ai/', label: 'Blog', newTab: true},
  { link: '/contact', label: 'Contact Us', newTab: false},
];


export default function Footer() {
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Anchor<'a'>
      className={classes.links}
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      size="sm"
      target={link.newTab ? "_blank" : "_self"}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <div className={classes.logoDiv}>
          <Logo />
        </div>
        <Group className={classes.links}>{items}</Group>
        <Group className={classes.socials} spacing="xs" position="right" noWrap>
          <ActionIcon size="xl" variant="default" radius="xl" className={classes.actionIcon}>
            <InstaIcon className={classes.socialIcons}/>
          </ActionIcon>
          <ActionIcon size="xl" variant="default" radius="xl" className={classes.actionIcon}>
            <TwitterIcon className={classes.socialIcons}/>
          </ActionIcon>
          <ActionIcon size="xl" variant="default" radius="xl" className={classes.actionIcon}>
            <YouTubeIcon className={classes.socialIcons}/>
          </ActionIcon>
          <ActionIcon size="xl" variant="default" radius="xl" className={classes.actionIcon}>
            <LinkedInIcon className={classes.socialIcons}/>
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <Image width={40} height={50} alt="zeroInbox" src="/logo.ico" />
    </Link>
  );
}

function InstaIcon({ className }: { className: string }) {
  return (
    <Link target={'_blank'} href='https://www.instagram.com/zeroinbox.ai/'>
      <BrandInstagram
        size={50}
        strokeWidth={.75}
        className={className}
      />
    </Link>
  );
}
function TwitterIcon({ className }: { className: string}) {
  return (
    <Link target={'_blank'} href='https://www.twitter.com'>
      <BrandTwitter
        size={50}
        strokeWidth={.75}
        className={className}
      />
    </Link>
  );
}
function YouTubeIcon({ className }: { className: string}) {
  return (
  <Link target={'_blank'} href='https://www.youtube.com'>
    <BrandYoutube
      size={50}
      strokeWidth={.75}
      className={className}
    />
  </Link>
  );
}
function LinkedInIcon({ className }: { className: string }) {
  return (
    <Link target={'_blank'} href='https://www.linkedin.com/company/zero-inbox/' >
      <BrandLinkedin
        size={50}
        strokeWidth={.75}
        className={className}
      />
    </Link>
  );
}
