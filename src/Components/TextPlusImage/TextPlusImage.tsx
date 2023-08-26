import {
  Box,
  Flex,
  Text
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
        const isWrappedAround = children.length > 0 ? children[0].offsetTop !== children[1].offsetTop : false;
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
    <Flex ref={containerRef} justify={"space-between"} wrap="wrap" gap={100} ml={"10%"} mr={"20%"} style={{border: "1px solid black"}}>
      <Flex key="text" direction="column" justify="center">
        <Text>
          This is some text explaining how great Zero Inbox is.
        </Text>
      </Flex>
      <Flex key="image" style={{margin: isWrapped ? "0 auto" : "0", border: "1px solid black"}}>
        <Box mih={"250px"} miw={"200px"} style={{ backgroundColor: isWrapped ? "orange" : "black"}}>

        </Box>
      </Flex>
    </Flex>
  );
}
