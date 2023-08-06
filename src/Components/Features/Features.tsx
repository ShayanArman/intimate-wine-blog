import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
  } from '@mantine/core';
  import React from 'react';
  import { Axe, Coin, HourglassHigh, Files } from 'tabler-icons-react';
  
  const stepdata = [
    {
      title: 'Step 1',
      description:
        'Seamlessly organize thousands of emails into custom folders with a simple click.',
    },
    {
      title: 'Step 2',
      description:
        'Overwhelmed by junk emails? Instantly opt-out from every unwanted message in your junk folder.',
    },
    {
      title: 'Step 3',
      description:
        'Streamline your email sorting process from hours to minutes with Zero Inbox.',
    },
    {
      title: 'Step 4',
      description:
        'Spend your new found free time however you want',
    },
  ];

  const featuredata = [
    {
      title: 'Organize',
      description:
        'Seamlessly organize thousands of emails into custom folders with a simple click.',
      icon: Files,
    },
    {
      title: 'Unsubscribe',
      description:
        'Overwhelmed by junk emails? Instantly opt-out from every unwanted message in your junk folder.',
      icon: Axe,
    },
    {
      title: 'Save Time',
      description:
        'Streamline your email sorting process from hours to minutes with Zero Inbox.',
      icon: HourglassHigh,
    },
    {
      title: 'Cost Effective',
      description:
        'Our pricing is carefully calibrated to offer our customers the value they deserve.',
      icon: Coin,
    },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: rem(34),
      fontWeight: 300,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(24),
      },
    },

    wrapper: {
      backgroundColor: "#333",
      height: 'auto',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '45px',
    },  

    stepsheading: {
      margin: '0 auto',
      color: 'white',
      textAlign: 'center',

      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: "#E65E8C",
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },

    stepscard: {
      width: '33%',
      height: '200px',
      background: "#333",
      boxShadow: '5px 5px 15px black'
    },

    stepstitle: {
      color: "#e65e8c"
    },

    stepsdescription: {
      color: 'white'
    },
  
    featuresdescription: {
      maxWidth: 800,
      margin: '0 auto',
      color: 'white',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: "#E65E8C",
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    featurecard: {
      backgroundColor: '#e8e8e8',
      boxShadow: '2px 2px 10px black',
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: "#E65E8C",
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },
    },
  }));

  
  export default function Features() {
    const { classes } = useStyles();
    const features = featuredata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.featurecard} padding="xl">
        <feature.icon size={rem(50)} strokeWidth={1.25} color={'#333'} />
        <Text fz="lg" fw={225} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" fw={225} c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));

    const steps = stepdata.map((step) => (
      <Card key={step.title} radius="md" className={classes.stepscard} padding="xl">
        <Text fz="lg" fw={225} className={classes.stepstitle} mt="md">
          {step.title}
        </Text>
        <Text fz="sm" mt="sm" fw={225} className={classes.stepsdescription} >
          {step.description}
        </Text>
      </Card>
    ));
  
    return (
      <div className={classes.wrapper}>  
        <Container size="lg" py="xl">
        <Text ta="center" mt="md" fw={250} size={rem(34)} className={classes.stepsheading}>
          Our process
        </Text>
            <SimpleGrid cols={1} spacing="xl" mt={50} ta="left" breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {steps}
            </SimpleGrid>
            <Text className={classes.featuresdescription} ta="center" mt="md" fw={250} size={rem(34)}>
            Relax and let those emails do their thing; we'll swoop in to tidy up the mess whenever you want
            </Text>
    
            <SimpleGrid cols={4} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {features}
            </SimpleGrid>
        </Container>
      </div>
    );
  }