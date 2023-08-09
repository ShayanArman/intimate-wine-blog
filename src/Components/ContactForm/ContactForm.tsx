import {
    createStyles,
    Text,
    Title,
    SimpleGrid,
    Textarea,
    Button,
    Group,
    ActionIcon,
    TextInput,
  } from '@mantine/core';
  import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
  import ContactIcons from '@/Components/ContactIcons';

  const useStyles = createStyles((theme) => ({
  
    wrapper: {
      width: '100%',
      height: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'linear-gradient(161.2deg, #333 60%, rgb(1,1,1, .83) calc(60% + 2px))',
    },
  
    container: {
      marginTop: '60px',
      minHeight: 400,
      boxSizing: 'border-box',
      backgroundColor: 'rgb(255,255,255, .9)',
      backdropFilter: 'blur(3px)',
      borderRadius: theme.radius.lg,
      padding: `calc(${theme.spacing.xl} * 2.5)`,
      boxShadow: '0 0 5px rgba(1,1,1), 2px 2px 10px rgb(1,1,1, .5)',
  
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
      color: 'black',
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
      color: 'black',
      fontWeight: 225,
  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
    },
  
    form: {
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
      border: '1px solid rgb(155,155,155, .3)',
      color: 'black',
      fontWeight: 300,
      borderRadius: '5px',
      
      '&::placeholder': {
        color: theme.colors.gray[5],
      },
    },
  
    inputLabel: {
      color: 'black',
      fontWeight: 225,
    },
  
    control: {
      color: '#e8e8e8',
      transition: '0.3s ease-in',
      fontSize: theme.fontSizes.md,
      fontWeight: 300,
      backgroundColor: '#333',
      borderRadius: '11px',
  
      "&:hover": {
        transition: '0.3s ease-out',
        backgroundColor: "white",
        color: 'black',
      },
  
    },
  }));
  
  const social = [BrandTwitter, BrandYoutube, BrandInstagram];
  
  export default function ContactUs() {
    const { classes } = useStyles();
  
    const icons = social.map((Icon, index) => (
      <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
        <Icon size="1.4rem" stroke='1.5' />
      </ActionIcon>
    ));
  
    return (
      <>
      
      <div className={classes.wrapper}>
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
                  onFocus={(e) => {
                    e.target.style.border = '1px solid rgb(50,50,50, .5)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1px solid rgb(155,155,155, .3)';
                  }}
                  placeholder="your@email.com"
                  required
                  classNames={{ input: classes.input, label: classes.inputLabel }}
                />
                <TextInput
                  label="Name"
                  onFocus={(e) => {
                    e.target.style.border = '1px solid rgb(50,50,50, .5)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1px solid rgb(155,155,155, .3)';
                  }}
                  placeholder="John Doe"
                  mt="md"
                  classNames={{ input: classes.input, label: classes.inputLabel }}
                />
                <Textarea
                  required
                  label="Your message"
                  onFocus={(e) => {
                    e.target.style.border = '1px solid rgb(50,50,50, .5)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1px solid rgb(155,155,155, .3)';
                  }}
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
      </>
    );
  }