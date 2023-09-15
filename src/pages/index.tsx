import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Text } from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import { scroller } from 'react-scroll';
import TextSection from "@/Components/TextSection";
import HeroSection from "@/Components/HeroSection";
import useIsMobile, { useIsLargeScreen } from "@/hooks/useIsMobile";
import TextPlusImage from "@/Components/TextPlusImage";
import { BUSINESS_SECTION, FEATURES_SECTION, PRIVACY_SECTION, SECURITY_SECTION, UNSUBSCRIBE_SECTION, mainPageSections } from "@/common/constants";
import { HEADER_PIXEL_HEIGHT } from "@/Components/ZeroHeader/ZeroHeader";

type SectionKey = keyof typeof mainPageSections;

export default function Home() {
  const [seenComponents, setSeenComponents] = useState<Set<string>>(new Set());
  const isSmallScreen = useIsMobile();
  const isLargeScreen = useIsLargeScreen();
  const router = useRouter();

  useEffect(() => {
    // If there's a section query in the URL, use react-scroll to scroll to that section
    const { section } = router.query;

    if (section && typeof section === 'string' && mainPageSections[section as SectionKey]) {
      // Use a delay to ensure page elements have rendered, then scroll smoothly to the section
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0,
          offset: -1*(HEADER_PIXEL_HEIGHT+mainPageSections[section as SectionKey].offset),
          smooth: 'easeInOutQuart',
        });
      }, 50);
    }
  }, [router.query]);

  const addSeenComponent = (component: string) => {
    setSeenComponents((prevItems) => new Set(prevItems).add(component));
  };

  return (
      <>
        <HeroSection isSmallScreen={isSmallScreen} />

        <TextSection
          key="text1" 
          isVisible={seenComponents.has("text1")} 
          innerText={
          <Text>
            Overflowing inbox? <span style={{color: "var(--zero-red)"}}>Zero AI</span> can <span style={{color: "var(--zero-blue)"}}>organize</span> it in 30 seconds! - no matter the size. Bye annoying emails. <span style={{color: "var(--zero-red)"}}>Zero AI</span> can do that.
          </Text>
        }/>
        <Waypoint topOffset={800} onEnter={() => {!seenComponents.has("text1") ? addSeenComponent("text1") : null }} />

        <TextPlusImage
          id={FEATURES_SECTION}
          title={"Never miss an important email"}
          description={"Zero AI quickly sorts what you don't need. Only important emails are left."}
          version={"reg"}
          isSmallScreen={isSmallScreen}
          link={{text: "Learn more", href:"https://app.zeroinbox.ai"}}
          placement="text-first"
        />

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: 'black' }} pt={30}>
          <TextPlusImage
            id={UNSUBSCRIBE_SECTION}
            title={"Unsubscribe is here."}
            description={"Unsubscribe seamlessly. With the press of a button. Try it below."}
            version="black"
            isSmallScreen={isSmallScreen}
            link={{text: "Unsubscribe", href:"https://app.zeroinbox.ai"}}
            placement={isLargeScreen ? "image-first" : "text-first"}
          />
        </Box>

        <Box mih={"500px"} w={"100%"} pt={30}>
          <TextPlusImage
            id={SECURITY_SECTION}
            title={"Secure from the ground up"}
            description={"Google Security Partner. End to End encryption, at every step."}
            version={"reg"}
            isSmallScreen={isSmallScreen}
            link={{text: "Learn more", href:"https://app.zeroinbox.ai"}}
            placement="text-first"
          />
        </Box>

        <Box mih={"500px"} w={"100%"} pt={150}>
          <TextPlusImage
            id={PRIVACY_SECTION}
            title={"You're in control."}
            description={"All your emails, your way. Complete control over your account and data. Delete everything with a simple click. All your emails stay in Gmail Folders."}
            version={"reg"}
            isSmallScreen={isSmallScreen}
            link={{text: "Privacy", href:"https://app.zeroinbox.ai"}}
            placement={isLargeScreen ? "image-first" : "text-first"}
          />
        </Box>

        <Box mih={"500px"} w={"100%"} pt={150}>
          <TextPlusImage
            id={BUSINESS_SECTION}
            title={"Zero Inbox for Business"}
            description={"Communicate, quickly. Employee chat, with Zero AI email Manager to help you manage your emails. The average employee spends an hour a day email. Let Zero AI handle it."}
            version={"reg"}
            isSmallScreen={isSmallScreen}
            link={{text: "Contact us", href:"https://app.zeroinbox.ai"}}
            placement="text-first"
          />
        </Box>
      </>
  )
}
