import {
    createStyles,
    rem,
  } from '@mantine/core';
  import React from 'react';
  import { useEffect, useState } from 'react';

  const useFadeInOnScroll = (targetId) => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        const elementOffset = targetElement.offsetTop;
        const triggerPoint = elementOffset - (windowHeight * 0.8);
  
        setIsVisible(scrollY > triggerPoint);

        if (scrollY > triggerPoint) {
          window.removeEventListener('scroll',handleScroll)
        }
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);
  
    return isVisible;
  };
  
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
      alignItems: 'center',
      opacity: 0
  
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

    visible: {
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'opacity 2s ease, transform 2s ease',
      }
    
  }))
  
  export default function Section4() {
  
    const { classes } = useStyles();
    const fadeInOnScroll = useFadeInOnScroll('section4');
  
    return (
  
      <div className={classes.wrapper}>
        <div className={`${classes.container} ${fadeInOnScroll ? classes.visible : ''}`} id="section4">
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
  
  