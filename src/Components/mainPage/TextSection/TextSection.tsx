import {
    createStyles,
    Text,
    Card,
    SimpleGrid,
    Container,
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',

  },

  textdiv: {
    width: '60%',
    height: 'auto',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: rem(45),
  },

}));


export default function TextSection() {

    const { classes } = useStyles();
  
    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.textdiv}>
            <p className={classes.text}>With private messaging and calling, you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.</p>
          </div>
        </div>
      </div>
    );
  }