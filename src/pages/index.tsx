import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from 'next/image';
import { Box, Text, Container, Grid, Flex, Title, Button } from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import { scroller } from 'react-scroll';
import TextSection from "@/Components/TextSection";
import HeroSection from "@/Components/HeroSection";
import useIsMobile, { useIsLargeScreen } from "@/hooks/useIsMobile";
import TextPlusImage from "@/Components/TextPlusImage";
import { HEADER_PIXEL_HEIGHT } from "@/Components/ZeroHeader/ZeroHeader";
import { FEATURES_SECTION, UNSUBSCRIBE_SECTION, PRIVACY_SECTION, SECURITY_SECTION, BUSINESS_SECTION, mainPageSections } from "@/Components/ZeroHeader/ZeroHeader";

import { BsArrowRightCircle } from "react-icons/bs";

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

        <Container size="lg" mb="60px" className="container">
          <Grid gutter="xl">
            <Grid.Col xs={12} sm={6} md={8} style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
              <Title order={2} size="h1" style={{fontSize: '60px', textAlign: 'center', marginBottom: '20px', lineHeight: 1, fontWeight: 600}}>Never miss an important email</Title>
              <Text fz="md" align="center" mb="15px">Zero AI quickly sorts what you don&lsquo;t need. Only important emails are left.</Text>
              <Button size="md" color="grape" component="a" href="https://app.zeroinbox.ai">
                Learn More &nbsp; <BsArrowRightCircle size="13px"  />
              </Button>
            </Grid.Col>
            <Grid.Col xs={12} sm={6} md={4} style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
              <Image style={{borderRadius: "24px", boxShadow: "7px 7px 10px 0px var(--shadow-color)"}} width={300} height={600} alt="phone" src="/images/features-1200px.png" />
            </Grid.Col>
          </Grid>
        </Container>

        <TextPlusImage
          id={FEATURES_SECTION}
          title={"Never miss an important email"}
          description={"Zero AI quickly sorts what you don't need. Only important emails are left."}
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
            description={"Unsubscribe seamlessly. With the press of a button. Try it below."}
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
            description={"Google Security Partner. End to End encryption, at every step."}
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
            description={"All your emails, your way. Complete control over your account and data. Delete everything with a simple click. All your emails stay in Gmail Folders."}
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
            title={"Zero Inbox for Business"}
            description={"Communicate quickly with Zero Inbox - Email Manager. The average employee spends an hour a day on email. Let Zero AI handle it."}
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