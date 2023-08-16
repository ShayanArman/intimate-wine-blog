import {
    createStyles,
    Text,
    Card,
    rem,
  } from '@mantine/core';
  import React from 'react';
  import { HexagonNumber1, HexagonNumber2, HexagonNumber3, HexagonNumber4 } from 'tabler-icons-react'
  
  const stepdata = [
    {
      title: 'Step',
      description:
        "Sign-in to your email through Zero Inbox's web portal.",
      icon: HexagonNumber1,
    },
    {
      title: 'Step',
      description:
        'Allow our AI 25 seconds to sort your email into designated folders.',
        icon: HexagonNumber2,
    },
    {
      title: 'Step',
      description:
        "Your inbox is now completely organized. It's your choice to reply, unsubscribe or delete.",
        icon: HexagonNumber3,
    },
    {
      title: 'Step',
      description:
        'Within minutes thousands of emails have been organized, unsubscribed from, and deleted. Have a break. You have the time.',
        icon: HexagonNumber4,
    },
  ];

  
  const useStyles = createStyles((theme) => ({

    wrapper: {
      backgroundColor: "#333",
      height: 'auto',
      width: '100%',
      marginTop: '10px'
    },  

    container: {
        width: '100%',
        height: '650px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    /* stepsbg is in order to have the top right corner of stepsdiv white */

    stepsbg: {
        width: '50%',
        height: '100%',
        backgroundColor: 'white',
    },

    stepsdiv: {
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(45deg, #333 95%, white calc(95% + 2px))',
        padding: '50px',
        paddingLeft: '60px'
    },

    stepsheading: {
      color: 'white',
      textAlign: 'center',
      marginTop: '40px',
      marginBottom: '15px',
    },

    stepscard: {
      width: '100%',
      height: 'auto',
      background: "#333",
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center'
    },

    stepicondiv: {
        marginBottom: '10px'
    },

    stepstitle: {
      color: "#e65e8c",
      textAlign: 'center',
    },

    stepsdescription: {
      color: 'white',
      marginLeft: '30px',
      alignItems: 'center'
    },

    contentdiv: {
        width: '50%',
        height: '100%',
        backgroundImage: 'linear-gradient(45deg, #333 5%, white calc(5% + 2px))',
        borderBottomLeftRadius: '15px',
        padding: '60px',
        display: 'flex-box',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textdiv: {
        textAlign: 'center',
        marginTop: '15px'
    },

    inbox: {
        marginRight: '150px'
    },

    pinkhighlight: {
        color: '#e65e8c',
    },

    mind: {
        marginLeft: '150px'
    },

    bluehighlight: {
        color: '#47AFE6'
    },

    imgdiv: {
        height: '375px',
        width: '375px',
        backgroundImage: 'url(./noun-yoga.png)',
        backgroundSize: 'cover', 
        margin: '0 auto',
        marginTop: '15px'
    },

  }));

  
  export default function Features() {
    const { classes } = useStyles();

    const steps = stepdata.map((step) => (
      <Card key={step.title} className={classes.stepscard}>
        <div className={classes.stepicondiv}>
            <Text fz={rem(25)} fw={225} className={classes.stepstitle}>
            {step.title}
            </Text>
            <step.icon size={rem(55)} strokeWidth={.5} color={'#e65e8c'} />
        </div>
        <Text fz={rem(17)} fw={225} className={classes.stepsdescription} >
          {step.description}
        </Text>
      </Card>
    ));
  
    return (
      <div className={classes.wrapper}>  
        <div className={classes.container}>
            {/* steps bg div is in order to have the top right corner of stepsdiv white */}
            <div className={classes.stepsbg}>
                <div className={classes.stepsdiv}>
                    {steps}
                </div>
            </div>
            <div className={classes.contentdiv}>
                <div className={classes.textdiv}>
                    <Text className={classes.inbox} fw={225} fz={rem(37)}>Clear your <span className={classes.pinkhighlight}>inbox</span></Text>
                    <Text className={classes.mind} fw={225} fz={rem(37)}>Clear your <span className={classes.bluehighlight}>mind</span></Text>
                </div>
                <div className={classes.imgdiv}/>
            </div>
        </div>
      </div>
    );
  }