import { Button, createStyles, Flex, List, Text, Title } from "@mantine/core";
import Script from "next/script";

const useStyles = createStyles((theme) => ({
  container: {
    margin: "3rem 0rem",
  },

  section: {
    width: "50%",

    [theme.fn.smallerThan("xl")]: {
      width: "80%"
    }
  },

  title: {
    fontFamily: "Calibri, Arial, sans-serif"
  },

  description: {
    fontFamily: "Calibri, Arial, sans-serif",
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
    alignContent: "center"
  }
}));

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'buy-button-id'?: string; // Add any specific attributes you use.
        'publishable-key'?: string; // Add any specific attributes you use
        };
    }
  }
}

export default function Invest() {
  const { classes } = useStyles();

  return (
    <Flex direction="column" align={"center"} className={classes.container} gap={30}>
      <Script async src="https://js.stripe.com/v3/buy-button.js"></Script>
      <Flex direction="column" align="center" className={classes.section} gap={10}>
        <h1 className={classes.title}>
          Join Us
        </h1>
        <stripe-buy-button
          buy-button-id="buy_btn_1RyxVRDiSp5w1D9ctMJQJuP2"
          publishable-key="pk_live_51LkBIzDiSp5w1D9cTkO1gzwjZNmn8FCzO2UMApwriY75CMKNU1fKLyi9ZuLQwJtosnQUC2gnTu3zm5sqUVe9fGDt006NbdBfVf"
        >
        </stripe-buy-button>
      </Flex>

      <Flex direction="column" align="center" className={classes.section} gap={10}>
        <h1 className={classes.title}>
          AI Workflows
        </h1>
        <Text className={classes.description}>
          The goal of AI Workflows is to redesign work. We believe that mundane tasks in office work can be automated.
          The current industry approach are AI Agents - that can completely automate work, such as emailing clients,
          automating away Junior Accountants. We think a better approach is Workflows. Where competent individuals use Workflows
          to aid them in their day to day tasks. For example an accountant quickly looking through a Customers emails for receipts.
          Or a Real Estate Agent creating Listing websites with one Click. Were excited for you to join us on this Journey!
          - Shayan Arman, CEO of Zero Inbox AI Workflows LTD.
        </Text>
        <Button 
          mt={15}
          radius="lg" 
          component="a"
          href="https://app.zeroinbox.ai"
          size={ "xl"}
          color="dark"
          target="_blank"
          variant="filled"
        >
          Try AI Workflows
        </Button>
      </Flex>

      <Flex direction="column" align="center" className={classes.section} gap={10}>
        <h1 className={classes.title}>
          Advisory
        </h1>
        <p className={classes.description}>
          We are advised by <span><PeopleLink link="https://www.linkedin.com/in/wmyork/" content="William York" /></span>. MIT, Apple;
        </p>
      </Flex>

      <Flex direction="column" align="center" className={classes.section} gap={10}>
        <h1 className={classes.title}>
          Founder Bio
        </h1>
        <p className={classes.description}>
          <span><PeopleLink link="https://www.linkedin.com/in/shayan-arman/" content="Shayan Arman" /></span> graduated from Waterloo with an Honours Degree in Computer Engineer. He went on to work at Apple Inc in 2017, launching multiple Siri products. From there he gained worldwide experience traveling to over 35 countries. And starting ZeroInbox.ai, the worlds first AI First Email Manager.
        </p>
      </Flex>
    </Flex>
  );
}

function PeopleLink({link, content}: {link: string, content: string}) {
  return (
    <a style={{textDecoration: "underline"}} href={link} target="_blank">
      { content }
    </a>
  )
}


{/* <Text c="dimmed" align="center" style={{ 
  fontStyle: 'italic',
  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
  padding: '2rem',
  borderRadius: '16px',
  border: '1px solid rgba(148, 163, 184, 0.2)',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
}}>
  <Text size="lg" mb="md"><Text weight={700} span={true} style={{ color: '#1e293b' }}>Business Valuation:</Text> <Text span={true} style={{ color: '#3730a3', fontWeight: 600 }}>$1 Million USD</Text></Text>
  <Text size="lg" mb="md"><Text weight={700} span={true} style={{ color: '#1e293b' }}>Total Shares Outstanding:</Text> <Text span={true} style={{ color: '#059669', fontWeight: 600 }}>1 Million Shares</Text></Text>
  <Text size="lg" mb="md"><Text weight={700} span={true} style={{ color: '#1e293b' }}>For Sale:</Text> <Text span={true} style={{ color: '#dc2626', fontWeight: 600 }}>100,000 at $1 each</Text></Text>
  <Text size="lg"><Text weight={700} span={true} style={{ color: '#1e293b' }}>Share Type:</Text> <Text span={true} style={{ color: '#7c3aed', fontWeight: 600 }}>Class A Voting</Text></Text>
</Text> */}