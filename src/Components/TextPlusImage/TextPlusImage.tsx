import {
  createStyles,
  Box,
  Flex,
  Text,
  Title
} from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';

const useStyles = createStyles((theme) => ({
  textSection: {
    backgroundColor: "transparent",
    textAlign: "left",
    border: "1px solid black",
    minHeight: "10rem",
    fontFamily: "Helvetica Neue",
    width: "40%",
    [theme.fn.smallerThan("md")]: {
      width: "58%"
    }
  },

  title: {
    fontSize: "40px",
    [theme.fn.smallerThan("md")]: {
      fontSize: "32px",
    }
  },

  imgSection: {
    border: "1px solid black",
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
  // const [isWrapped, setIsWrapped] = useState(false);
  // const isWrappedRef = useRef(isWrapped);
  const containerRef = useRef<HTMLDivElement>(null);
  const { classes } = useStyles();

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

  return (
    <Box w="100%" mr="auto" ml="auto" style={{maxWidth: "1080px"}}>
      <Flex 
        ref={containerRef} 
        w={"100%"} 
        justify={"space-between"} 
        gap={16} 
        p="88px 24px 56px 24px" 
        wrap="wrap" 
        style={{border: "1px solid black"}}>
        <Flex 
          key="textSectionxxyy" 
          direction="column" 
          justify="center" 
          className={classes.textSection}>
            <Title className={classes.title}>
              Important emails will never be lost in your junk folder
            </Title>
            <Text>
              Zero AI shows you bunches of emails. You choose what to do.
            </Text>
        </Flex>
        <Flex 
          key="image" 
          justify="center"
          className={classes.imgSection}>
          <Box mih={"400px"} miw={"200px"} className={classes.img}>

          </Box>
        </Flex>
    </Flex>
    </Box>
  );
}
