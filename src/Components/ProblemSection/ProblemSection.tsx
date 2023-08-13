import {
  createStyles,
  Text,
  rem,
} from '@mantine/core';
import React from 'react';
import { Backhoe, Mailbox, Clock2, ClockHour7, ClockHour8 } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({

  wrapper: {
    backgroundColor: "#333",
    height: 'auto',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30px',
  },  

  container: {
    width: '100%',
    height: 'auto',
    fontWeight: 600,
    fontSize: rem(24),
    position: 'relative',
  },

  heading: {
    margin: '0 auto',
    color: 'white',
    textAlign: 'center',
    paddingTop: '50px',
    paddingBottom: '25px',
    paddingLeft: '100px',
    paddingRight: '100px',
  },

  pinkhighlight: {
      color: '#e65e8c'
  },

  bluehighlight: {
      color: '#47AFE6'
  },

  vertline: {
    width: '200px',
    borderBottom: '2px dotted #e65e8c',
    position: 'relative',
    transform: 'Rotate(90deg)',
    left: '25%',
    top: 253
  },

  horizline1: {
    width: '35px',
    borderBottom: '2px dotted #e65e8c',
    position: 'relative',
    left: '31.91%',
    top: 152,
  },

  horizline2: {
      width: '550px',
      borderBottom: '2px dotted #e65e8c',
      position: 'relative',
      left: 419.7,
      top: 253
    },

  horizline3: {
    width: '35px',
    borderBottom: '2px dotted #e65e8c',
    position: 'relative',
    left: '31.91%',
    top: 350,
  },

  statscontainer: {
    width: '100%',
    height: '500px',
    position: 'relative',
    display: 'flex',
    margin: '0 auto',
    marginBottom: '40px'
  },

  titlediv: {
      width: '33%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
  },

  title: {
      color: '#e65e8c',
  },

  statsdiv: {
      width: '33%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
  },

  stats: {
    color: 'black',
    width: '400px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '5px 5px 15px black',
    borderRadius: '10px',
    margin: '0 auto',
    outline: '1px solid #444'
  },
}))

export default function ProblemSection() {

  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>  
      <div className={classes.container}>
          <Text fw={250} size={rem(45)} className={classes.heading}>Zero Inbox is all about reclaiming your <span className={classes.pinkhighlight}>time</span> and <span className={classes.bluehighlight}>focus</span> from the clutches of an unmanaged inbox.</Text>
          <div className={classes.vertline}></div>
          <div className={classes.horizline1}></div>
          <div className={classes.horizline2}></div>
          <div className={classes.horizline3}></div>
          <div className={classes.statscontainer}>
            <div className={classes.titlediv}>
              <Text fw={250} size={rem(30)} className={classes.title}>The average employee</Text>
            </div>
            <div className={classes.statsdiv}>
              <div className={classes.stats}>
                <div>
                  <Backhoe size={50} strokeWidth={0.8} />
                </div>
                <div>
                  <Text fw={200} size={rem(18)}>Has 62% of their inbox filled with unimportant emails that can be processed in bulk.</Text>
                </div>
              </div>
              <div className={classes.stats}>
                <div>
                  <ClockHour8 size={50} strokeWidth={0.8} />
                </div>
                <div>
                  <Text fw={200} size={rem(18)}>Spends 10% of the total time on email organizing messages they want to keep.</Text>
                </div>
              </div>  
            </div>
            <div className={classes.statsdiv}>
              <div className={classes.stats}>
                <div>
                  <Mailbox size={50} strokeWidth={0.8} />
                </div>
                <div>
                  <Text fw={200} size={rem(18)}>Wastes 27 minutes a day due to a full and unorganized inbox.</Text>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

