import Head from 'next/head'
import ActionHeader from '@/Components/ActionHeader';
import { Box } from '@mantine/core';
import { Waypoint } from 'react-waypoint';

const zeroLinks=[
  {link: 'https://google.com', label: 'GOOGLE', links: [{link: "https://google.com", label:"google"}, {link: "https://youtube.com", label:"youtube"}]},
  {link: 'https://youtube.com', label: 'YouTube'},
  {link: 'https://stumbleupon.com', label: 'StumbleUpon'},
];

export default function Home() {
  const onEnter = () => {
    console.log('Waypoint entered');
  };

  const onLeave = () => {
    console.log('Waypoint left');
  };

  return (
    <>
      <Head>
        <title>Zero Inbox</title>
        <link rel="icon" href="/logo.ico" />
        <meta name="description" content="Clear your Email, clear your Mind." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content={"Zero Inbox"} />
      </Head>
      
      <Box>
        <ActionHeader links={zeroLinks} />
        <Box mih="50rem" id="section1">
          Hi HI hi
        </Box>
        <Box mih="50rem" id="section2">
          Hi HI hi
        </Box>
        <Box mih="50rem" id="section3">
          Hi HI hi
        </Box>
        <Waypoint
          onEnter={onEnter}
          onLeave={onLeave}
        />
        <Box mih="50rem" id="section5">
          Hi HI hi
        </Box>
      </Box>
    </>
  )
}
