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
  
  const mockdata = [
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
      height: '90vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },  
  
    description: {
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
  
    card: {
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
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
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={rem(50)}  color={'#333'} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <div className={classes.wrapper}>  
        <Container size="lg" py="xl">
            <Text className={classes.description} ta="center" mt="md" size={rem(34)}>
            Relax and let those emails do their thing; we'll swoop in to tidy up the mess whenever you want
            </Text>
    
            <SimpleGrid cols={4} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {features}
            </SimpleGrid>
        </Container>
      </div>
    );
  }