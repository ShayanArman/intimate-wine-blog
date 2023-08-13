import { useState } from "react";
import { Box } from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import HeroSection from "@/Components/mainPage/HeroSection";
import ZeroHeader, { HEADER_PIXEL_HEIGHT } from '@/Components/ZeroHeader/ZeroHeader';
import Features from "@/Components/mainPage/Features";
import FooterSection from "@/Components/Footer";
import StartNow from "@/Components/mainPage/StartNow";
import Statement from "@/Components/Statement";
import ProblemSection from "@/Components/ProblemSection";
import InfoSection from "@/Components/InfoSection";
import StepsSection from "@/Components/StepsSection";


export default function Home() {
  const [scrolledToHeader, setScrolledToHeader] = useState(false);

  const onEnter = () => {
    setScrolledToHeader(false);
  };

  const onLeave = () => {
    setScrolledToHeader(true);
  };

  return (
      <Box>
        <ZeroHeader scrolledToHeader={scrolledToHeader} />
        <Waypoint
          onEnter={onEnter}
          onLeave={onLeave}
        >
          <Box mih={"60px"} w={"100%"} style={{ backgroundColor: "white"}}>
          </Box>
        </Waypoint>
        
        { /* EnterWaypoint  topOffset is height plus 40*/ }
        <Waypoint topOffset={200+60+HEADER_PIXEL_HEIGHT-20}>
        </Waypoint>
        
        <HeroSection />
        <ProblemSection />
        <Features />
        <InfoSection />
        <StepsSection />
        {/* <Features /> */}
        <StartNow />
        <FooterSection />
      </Box>
  )
}
