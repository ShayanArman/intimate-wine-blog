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
  import { Activity } from 'tabler-icons-react';
  
  const mockdata = [
    {
      title: 'Extreme performance',
      description:
        'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
      icon: Activity,
    },
    {
      title: 'Privacy focused',
      description:
        'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
      icon: Activity,
    },
    {
      title: 'No third parties',
      description:
        "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
      icon: Activity,
    },
    {
        title: 'Random',
        description:
          'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
        icon: Activity,
      },
      {
        title: 'Also random',
        description:
          'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
        icon: Activity,
      },
      {
        title: 'blahblah',
        description:
          "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
        icon: Activity,
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
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },  

    // badge: {
    //     backgroundColor: 'white',
    //     color: '#333'
    // },
  
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
            {/* <Group position="center">
            <Badge variant="filled" size="xl" className={classes.badge}>
                Zero Inbox
            </Badge>
            </Group> */}
    
            {/* <Title order={2} className={classes.title} ta="center" mt="sm" color={'white'}>
            Organize, delete or unsubscribe from thousands of emails in seconds
            </Title> */}
    
            <Text className={classes.description} ta="center" mt="md" size={rem(34)}>
            Relax and let those emails do their thing; we'll swoop in to tidy up the mess whenever you want
            </Text>
    
            <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {features}
            </SimpleGrid>
            {/* <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {features}
            </SimpleGrid> */}
            
        </Container>
      </div>
    );
  }