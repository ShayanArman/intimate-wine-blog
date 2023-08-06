import ZeroHeader from "@/Components/ZeroHeader";
import { createStyles, Box, SimpleGrid, Group, Textarea, TextInput, Container, Title, Button, Text, ActionIcon } from '@mantine/core';
import { useState } from "react";
import FooterSection from "@/Components/Footer";
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
import ContactIcons from '@/Components/ContactIcons/ContactIconsBusiness';

const useStyles = createStyles((theme) => ({

  wrapper: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(161.2deg, #e8e8e8 60%, #333 calc(60% + 2px))',
  },

  container: {
    marginTop: '60px',
    minHeight: 400,
    width: "50%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(59,59,59, .95)',
    backdropFilter: 'blur(3px)',
    borderRadius: theme.radius.lg,
    padding: `calc(${theme.spacing.xl} * 2.5)`,
    boxShadow: '2px 2px 10px rgb(25,25,25, .7)',

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

  social: {
    color: '#333',

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
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
          <SimpleGrid cols={1} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <div>
              <div className={classes.titlediv}>
                <Title className={classes.title}>Business Engagement</Title>
                <div className={classes.underline}></div>
                <Text className={classes.description} mt="sm" mb={30}>
                  For all business inquiries please contact Shayan Arman
                </Text>
              </div>

              <ContactIcons />

              <Group mt="xl">{icons}</Group>
            </div>
          </SimpleGrid>
        </div>
      </div>
      <FooterSection />
    </>
  );
}