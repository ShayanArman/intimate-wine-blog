import { Flex, Text, UnstyledButton } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

const text = ["Welcome, my name is Zero AI.", "I will Organize your Emails in 30 seconds.", "Ready?"];

export default function IntroDialog({
}: {
}) {
  const [isReading, setIsReading] = useState(true);
  const [visibleText, setVisibleText] = useState("");
  const showIndexRef = useRef({ sentenceIndex: 0, charIndex: 0 });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const displayChar = () => {
      const { sentenceIndex, charIndex } = showIndexRef.current;

      if (sentenceIndex < text.length) {
        const sentence = text[sentenceIndex];
        if (sentence && charIndex < sentence.length) {
          setVisibleText((oldVisText) => oldVisText + sentence[charIndex]);
          showIndexRef.current = {
            ...showIndexRef.current,
            charIndex: charIndex + 1,
          };
          timeout = setTimeout(displayChar, charIndex === sentence.length - 1 ? 800 : 75);
        } else {
          showIndexRef.current = {
            sentenceIndex: sentenceIndex + 1,
            charIndex: 0,
          };
          
          setVisibleText((oldVisText) => {
            return sentenceIndex + 1 < text.length ? "" : oldVisText;
          });

          timeout = setTimeout(displayChar, 500);
        }
      } else {
        setIsReading(false);
      }
    };

    if (isReading) {
      displayChar();
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isReading]);

  return (
    <Flex direction="column">
        <Text py="md" weight={"bold"} size="xl" align="center" color="white">
          { visibleText.trim() }
        </Text>
        { !isReading && 
            <UnstyledButton
            component="a"
            target="_blank"
            href="https://app.zeroinbox.ai"
            color="pink"
             style={{border: "1px solid white", color: "white", padding: "10px", borderRadius: "10px"}}>
                Learn More
            </UnstyledButton>
          }
    </Flex>
      );
}