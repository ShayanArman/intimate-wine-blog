import { FEATURES_SECTION, UNSUBSCRIBE_SECTION, PRIVACY_SECTION, SECURITY_SECTION, BUSINESS_SECTION, mainPageSections } from "@/Components/ZeroHeader/ZeroHeader";
import { HEADER_PIXEL_HEIGHT, TEXT_INTRO_SECTION, USERS_STATS_SECTION } from "@/Components/ZeroHeader/ZeroHeader";
import useIsMobile, { useIsLargeScreen } from "@/hooks/useIsMobile";
import UserStatsSection from "@/Components/UserStatsSection";
import TextPlusImage from "@/Components/TextPlusImage";
import TextSection from "@/Components/TextSection";
import { useState, useEffect } from "react";
import HeroSection from "@/Components/HeroSection";
import { Box, Text } from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import { useRouter } from "next/router";
import { scroller } from 'react-scroll';
import Image from 'next/image';

type SectionKey = keyof typeof mainPageSections;

export default function Home() {
  const [seenComponents, setSeenComponents] = useState<Set<string>>(new Set());
  const isSmallScreen = useIsMobile();
  const isLargeScreen = useIsLargeScreen();
  const router = useRouter();
  const isZeroInbox = process.env.NEXT_PUBLIC_IS_ZERO_INBOX === "true";

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
        <HeroSection isSmallScreen={isSmallScreen} onFinishedReading={() => undefined} />

        <TextSection
          key={TEXT_INTRO_SECTION}
          isVisible={seenComponents.has(TEXT_INTRO_SECTION)} 
          innerText={
            <Text>
              Overflowing inbox? <span style={{color: "var(--zero-red)"}}>{isZeroInbox ? "Zero Inbox" : "Inbox Zero"}</span> can <span style={{color: "var(--zero-blue)"}}>organize</span> it in 30 seconds! - no matter the size. Clear your annoying emails and get to Inbox Zero. <span style={{color: "var(--zero-red)"}}>Zero AI</span> can do that.
            </Text>
          }
        />
        <Waypoint topOffset={800} onEnter={() => {!seenComponents.has(TEXT_INTRO_SECTION) ? addSeenComponent(TEXT_INTRO_SECTION) : null }} />
        
        <UserStatsSection isVisible={seenComponents.has(USERS_STATS_SECTION)} 
        />
        <Waypoint topOffset={800} onEnter={() => {!seenComponents.has(USERS_STATS_SECTION) ? addSeenComponent(USERS_STATS_SECTION) : null }} />


        <TextPlusImage
          id={FEATURES_SECTION}
          title={`Delete spam fast with ${isZeroInbox ? "Zero Inbox" : "Inbox Zero"}`}
          description={`${isZeroInbox ? "Zero Inbox" : "Inbox Zero"} quickly clears what you don't need. Only important emails are left. Use ${isZeroInbox ? "Zero Inbox" : "Inbox Zero"}: AI Email Organizer to clean your email inbox in seconds. Get to Inbox Zero quickly. Feel more productive, use the best Email Productivity tool on the planet.`}
          Image={<Image style={{borderRadius: "24px", boxShadow: "7px 7px 10px 0px var(--shadow-color)"}} width={200} height={400} alt="phone" src="/images/features-1200px.png" />}
          version={"reg"}
          isSmallScreen={isSmallScreen}
          link={{text: "Learn more", href:"https://app.zeroinbox.ai"}}
          placement="text-first"
        />

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: 'black' }} pt={30}>
          <TextPlusImage
            id={UNSUBSCRIBE_SECTION}
            title={"Unsubscribe is here."}
            description={"Unsubscribe seamlessly. With the press of a button. Get to Inbox Zero and stay there - try it below."}
            Image={<Image style={{borderRadius: "24px", boxShadow: "7px 7px 10px 0px var(--shadow-color)"}} width={200} height={400} alt="phone" src="/images/unsubscribe-1200px.png" />}
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
            description={`Google Security Partner. End to End encryption, at every step. Get to Inbox Zero with the most secure AI Email Organizer on the planet. ${isZeroInbox ? "Zero Inbox" : "Inbox Zero"}: Email Cleaner clears your inbox in seconds - securely.`}
            Image={<Image style={{borderRadius: "24px"}} width={619} height={580} alt="phone" src="/images/security-1200px.png" />}
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
            description={`${isZeroInbox ? "Zero Inbox" : "Inbox Zero"}: Email Cleaner gives you complete control over your account and data. Manage your data with a simple click. Get to Inbox Zero with Privacy in mind. Privacy over your emails is at the forefront; with ${isZeroInbox ? "Zero Inbox" : "Inbox Zero"}: Email Organizer.`}
            Image={<Image style={{borderRadius: "24px", boxShadow: "7px 7px 10px 0px var(--shadow-color)"}} width={200} height={400} alt="phone" src="/images/privacy-1200px.png" />}
            version={"reg"}
            isSmallScreen={isSmallScreen}
            link={{text: "Privacy", href:"https://app.zeroinbox.ai"}}
            placement={isLargeScreen ? "image-first" : "text-first"}
          />
        </Box>

        <Box mih={"500px"} w={"100%"} pt={150}>
          <TextPlusImage
            id={BUSINESS_SECTION}
            title={`${isZeroInbox ? "Zero Inbox" : "Inbox Zero"} for Business`}
            description={`Be more productive with ${isZeroInbox ? "Zero Inbox" : "Inbox Zero"}: Email Productivity. Get to Inbox Zero and stay there. Communicate quickly and efficiently with ${isZeroInbox ? "Zero Inbox" : "Inbox Zero"} - Email Organizer. The average employee spends an hour a day on email. Try the ultimate email productivity hack. Let Zero AI handle it.`}
            Image={<Image style={{borderRadius: "24px", boxShadow: "7px 7px 10px 0px var(--shadow-color)"}} width={200} height={400} alt="phone" src="/images/business-1200px.png" />}
            version={"reg"}
            isSmallScreen={isSmallScreen}
            link={{text: "Contact us", href:"mailto:info@zeroinbox.ai?subject=Zero Inbox: AI Email Manager for Business"}}
            placement="text-first"
          />
        </Box>
      </>
  )
}
