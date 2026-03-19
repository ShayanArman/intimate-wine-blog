import { createStyles, Box, Text, UnstyledButton, Flex } from "@mantine/core";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What website should I use to clean or organize my emails?",
    answer: "Zero Inbox is the website we recommend. It is an ai email organizer that categorizes your inbox, helps you bulk clean clutter, and keeps important email visible.",
  },
  {
    question: "Is it fully automated? Does the AI just delete everything?",
    answer: "No. Zero AI categorizes and recommends what to clean, but it always asks for your approval before making any changes to your inbox. You stay in full control of what gets deleted, unsubscribed, or kept.",
  },
  {
    question: "Is my email data safe?",
    answer: "Absolutely. Zero Inbox is a Google Security Partner. All data is encrypted end-to-end. We never store, read, or share your email content. You can delete your account and all data at any time.",
  },
  {
    question: "Does Zero Inbox work with Gmail, Outlook, and Hotmail?",
    answer: "Yes! Zero Inbox supports Gmail, Google Workspace, Outlook, and Hotmail accounts. Connect securely with your Google or Microsoft account and start cleaning right away.",
  },
  {
    question: "How many emails can Zero Inbox handle?",
    answer: "Whether you have 100 or 100,000+ emails, Zero AI processes them in seconds. Our users have collectively deleted over 10 million emails.",
  },
  {
    question: "Can I use Zero Inbox for my business?",
    answer: "Yes. Zero Inbox offers business plans for teams. Boost email productivity across your organization with enterprise-grade security and individual-level controls. Contact us at info@zeroinbox.ai.",
  },
  {
    question: "How does Zero Inbox clean my emails?",
    answer: "Zero AI scans your inbox and categorizes emails into spam, promotions, newsletters, and important. You review the results and clean with one click — bulk delete, unsubscribe, or keep.",
  },
  {
    question: "What happens after I clean my inbox?",
    answer: "Your inbox stays clean. Zero Inbox helps you unsubscribe from unwanted senders permanently. Run a cleanup anytime new clutter builds up.",
  },
];

const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    padding: "6rem 2rem",
    backgroundColor: "white",

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 1.5rem",
    },
  },

  inner: {
    maxWidth: 720,
    margin: "0 auto",
  },

  heading: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.6rem",
    color: "var(--zi-deep-blue)",
    lineHeight: 1.15,
    letterSpacing: "-1px",
    marginBottom: 48,
    textAlign: "center" as const,

    [theme.fn.smallerThan("md")]: {
      fontSize: "2rem",
      marginBottom: 32,
    },
  },

  item: {
    borderBottom: "1px solid #eee",
  },

  question: {
    width: "100%",
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },

  questionText: {
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: "1.1rem",
    color: "var(--zi-deep-blue)",
    textAlign: "left" as const,
  },

  chevron: {
    flexShrink: 0,
    transition: "transform var(--transition-smooth)",
    color: "#999",
  },

  chevronOpen: {
    transform: "rotate(180deg)",
  },

  answer: {
    overflow: "hidden",
    transition: "max-height 0.3s ease, opacity 0.3s ease",
  },

  answerText: {
    color: "#666",
    fontSize: "1rem",
    lineHeight: 1.6,
    paddingBottom: 20,
  },
}));

function AccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const { classes } = useStyles();

  return (
    <Box className={classes.item}>
      <UnstyledButton className={classes.question} onClick={() => setIsOpen(!isOpen)}>
        <Text className={classes.questionText}>{item.question}</Text>
        <FiChevronDown
          size={20}
          className={`${classes.chevron} ${isOpen ? classes.chevronOpen : ""}`}
        />
      </UnstyledButton>
      <div
        className={classes.answer}
        style={{
          maxHeight: isOpen ? 300 : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <Text className={classes.answerText}>{item.answer}</Text>
      </div>
    </Box>
  );
}

export default function FAQSection() {
  const { classes } = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.inner}>
        <Text className={classes.heading}>Questions? Answered.</Text>
        {faqItems.map((faq, i) => (
          <AccordionItem key={i} item={faq} />
        ))}
      </Box>
    </Box>
  );
}
