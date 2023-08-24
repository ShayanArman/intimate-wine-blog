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

  nonVisible: {
    opacity: 0,
    transform: 'translateY(150px)',
  },

  visible: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 1s ease-out'
  }
}));


export default function TextSection({isActive, innerText}: {isActive: boolean, innerText: string}) {
    const { classes } = useStyles();

    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.textdiv}>
            <p className={`${classes.text} ${isActive ? classes.visible : classes.nonVisible}`}>
              { innerText }
            </p>
          </div>
        </div>
      </div>
    );
  }