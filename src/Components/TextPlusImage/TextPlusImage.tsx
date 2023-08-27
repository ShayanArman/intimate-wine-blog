import {
  Box,
  Flex,
  Text,
  Title
} from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';

export default function TextPlusImage() {
  const [isWrapped, setIsWrapped] = useState(false);
  const isWrappedRef = useRef(isWrapped);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isWrappedRef.current = isWrapped;
  }, [isWrapped]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const resizeObserver = new ResizeObserver(() => {
        const children: HTMLElement[] = Array.from(container.children) as HTMLElement[];
        const isWrappedAround = children.length > 0 ? children[1].offsetTop > children[0].offsetTop : false;
        if (isWrappedAround !== isWrappedRef.current) {
          setIsWrapped((prev) => !prev);
        }
      });

      resizeObserver.observe(container);

      return () => { 
        resizeObserver.unobserve(container);
      }
    }
  }, []);

  return (
    <Box w="100%" mr="auto" ml="auto" style={{maxWidth: "1080px"}}>
      <Flex ref={containerRef} justify={"space-between"} p="88px 24px 56px 24px" wrap="wrap" gap={100} align="center" style={{border: "1px solid black"}}>
        <Flex key="text" direction="column" justify="center" style={{border: "1px solid black"}}>
          <Text>
            <Title>
              AI does not mean automatic.
            </Title>
            Zero AI shows you bunches of emails. You choose what to do.
          </Text>
        </Flex>
        <Flex key="image" style={{margin: isWrapped ? "0 auto" : "0", border: "1px solid black"}}>
          <Box mih={"250px"} miw={"200px"} style={{ backgroundColor: isWrapped ? "orange" : "black"}}>

          </Box>
        </Flex>
    </Flex>
    </Box>
  );
}
