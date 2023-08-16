import {
    createStyles,
    rem,
  } from '@mantine/core';
  import React from 'react';
  
  const useStyles = createStyles((theme) => ({
  
    wrapper: {
      width: '100%',
      height: '100vh',
      backgroundColor: '#fffef6',
    },
  
    container: {
      width: '95%',
      height: '95%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  
    },
  
    textwrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
      height: '100%',
    },
  
    textcontainer: {
      width: '100%',
      height: '75%',
      padding: '150px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  
    title: {
      fontSize: rem(55),
      paddingBottom: '10px'
    },

    bluehighlight: {
        color: 'blue'
    },
  
    description: {
      fontSize: rem(20)
    },
  
    imgwrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
      height: '100%',
    },
  
    imgcontainer: {
      width: '350px',
      height: '600px',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    },
  
    img: {
      width: '100%',
      height: '100%',
      display: 'block',
      objectFit: 'cover'
    },
  
  
  
    
  }))
  
  export default function ProblemSection() {
  
    const { classes } = useStyles();
  
    return (
  
      <div className={classes.wrapper}>
        <div className={classes.container}>
            <div className={classes.imgwrapper}>
                <div className={classes.imgcontainer}>
                    <img className={classes.img} src='https://img.freepik.com/premium-photo/silver-smartphone-front-side-white-background_187299-20187.jpg'></img>
                </div>
            </div>
            <div className={classes.textwrapper}>
                <div className={classes.textcontainer}>
                    <div className={classes.title}>
                        <p>Speak <span className={classes.bluehighlight}>freely</span></p>
                    </div>
                    <div className={classes.description}>
                        <p>From a group call to classmates to a quick call with mom, feel like you’re in the same room with voice and video calls.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      
    );
  }
  
  