import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
} from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
import ContactIcons from '@/Components/ContactIcons';
import FooterSection from "@/Components/Footer";
import { useState } from "react";
import ZeroHeader, { HEADER_PIXEL_HEIGHT } from '@/Components/ZeroHeader/ZeroHeader';

const useStyles = createStyles((theme) => ({

  '*:focus': {
    outline: 'none',
  },

  wrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },

  container: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundColor: '#3b3b3b',
    borderRadius: theme.radius.lg,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  titlediv: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
  },

  title: {
    color: 'white',
    paddingBottom: '10px',
    fontWeight: 400,
  },

  underline: {
    position: 'relative',
    width: '100px',
    height: '1px',
    backgroundColor: '#e65e8c',
    margin: '0 auto',
  },

  description: {
    color: 'white',
    fontWeight: 225,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: '#3b3b3b',
    padding: theme.spacing.xl,
    borderRadius: theme.radius.lg,
  },

  social: {
    color: '#333',

    '&:hover': {
      color: theme.colors[theme.primaryColor][7],
    },
  },

  input: {
    backgroundColor: 'white',
    border: 'none',
    color: 'black',
    fontWeight: 300,
    outline: 'none',
    borderRadius: '5px',
    
    '&:focus': {
      outline: 'none',
    },

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: 'white',
    fontWeight: 225,
  },

  control: {
    color: 'white',
    transition: '0.3s ease-out',
    fontSize: theme.fontSizes.md,
    fontWeight: 300,
    backgroundColor: '#e65e8c',
    borderRadius: '11px',

    "&:hover": {
      transition: '0.3s ease-in',
      backgroundColor: "#333"
    },

  },
}));

const social = [BrandTwitter, BrandYoutube, BrandInstagram];

export default function ContactUs() {
  const { classes } = useStyles();

  const [scrolledToHeader, setScrolledToHeader] = useState(false);

  const onEnter = () => {
    setScrolledToHeader(false);
  };

  const onLeave = () => {
    setScrolledToHeader(true);
  };

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke='1.5' />
    </ActionIcon>
  ));

  return (
    <>
    
    <div className={classes.wrapper}>
    <ZeroHeader scrolledToHeader={scrolledToHeader} />
        <div className={classes.container}>
          <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <div>
              <div className={classes.titlediv}>
                <Title className={classes.title}>Require further information?</Title>
                <div className={classes.underline}></div>
                <Text className={classes.description} mt="sm" mb={30}>
                  Send us a message and we'll get back to you!
                </Text>
              </div>

              <ContactIcons />

              <Group mt="xl">{icons}</Group>
            </div>
            <div className={classes.form}>
              <TextInput
                label="Email"
                placeholder="your@email.com"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <TextInput
                label="Name"
                placeholder="John Doe"
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <Textarea
                required
                label="Your message"
                placeholder="Tell me more about.."
                minRows={6}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />

              <Group position="center" mt="md">
                <Button className={classes.control}>Send message</Button>
              </Group>
            </div>
          </SimpleGrid>
        </div>
      </div>
      <FooterSection />
    </>
  );
}