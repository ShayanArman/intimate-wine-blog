import {
  createStyles,
  Box,
  Flex,
  Text,
  Title
} from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';

const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: "1080px",
  },

  content: {
    [theme.fn.smallerThan("md")]: {
      rowGap: 30,
    }
  },

  textSection: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "30px",
    padding: "3rem 1rem 0 3rem",
    textAlign: "left",
    border: "1px solid black",
    minHeight: "20rem",
    maxWidth: "20em",
    fontFamily: "Helvetica Neue",
    width: "40%",
    [theme.fn.smallerThan("md")]: {
      width: "58%",
      maxWidth: "16em",
      padding: "2rem 1.2rem 1.2rem 1.2rem",
    }
  },

  title: {
    fontSize: "40px",
    fontWeight: 400,
    lineHeight: 1,
    [theme.fn.smallerThan("md")]: {
      fontSize: "32px",
    }
  },

  imgSection: {
    width: "50%", 
    margin: "0",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
      margin: "0 auto"
    }
  },

  img: {
    backgroundColor: "black",
    [theme.fn.smallerThan("md")]: {
      backgroundColor: "orange"
    }
  }
}));

export default function TextPlusImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { classes } = useStyles();

  return (
    <Flex w="100%" justify="center" mr="auto" ml="auto" className={classes.container}>
      <Flex 
        ref={containerRef} 
        w={"100%"} 
        justify={"space-between"}
        p="88px 24px 56px 24px" 
        wrap="wrap"
        className={classes.content}>
        <Flex 
          key="textSection" 
          gap={10}
          direction="column"
          className={classes.textSection}>
            <Text className={classes.title}>
              Never miss an important email
            </Text>
            <Text>
              Zero AI shows you bunches of emails. You choose what to do.
            </Text>
        </Flex>
        <Flex 
          key="imageSection" 
          justify="center"
          className={classes.imgSection}>
          <Box mih={"400px"} miw={"200px"} className={classes.img}>

          </Box>
        </Flex>
    </Flex>
    </Flex>
  );
}

// const [isWrapped, setIsWrapped] = useState(false);
  // const isWrappedRef = useRef(isWrapped);

  // useEffect(() => {
  //   isWrappedRef.current = isWrapped;
  // }, [isWrapped]);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (container) {
  //     const resizeObserver = new ResizeObserver(() => {
  //       const children: HTMLElement[] = Array.from(container.children) as HTMLElement[];
  //       const isWrappedAround = children.length > 0 ? children[1].offsetTop > children[0].offsetTop : false;
  //       if (isWrappedAround !== isWrappedRef.current) {
  //         setIsWrapped((prev) => !prev);
  //       }
  //     });

  //     resizeObserver.observe(container);

  //     return () => { 
  //       resizeObserver.unobserve(container);
  //     }
  //   }
  // }, []);