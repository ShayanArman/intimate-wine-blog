import { keyframes } from "@emotion/react";
import { Box, Flex, Text, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";

const pulse = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0.6;
  }
  70% {
    transform: scale(2.4);
    opacity: 0;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
`;

const useStyles = createStyles((theme) => ({
  metricBar: {
    display: "inline-flex",
    alignItems: "center",
    gap: 14,
    width: "fit-content",
    padding: "0.8rem 1rem",
    borderRadius: 18,
    border: "1px solid rgba(255, 255, 255, 0.28)",
    backgroundColor: "rgba(15, 38, 95, 0.28)",

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },

  liveState: {
    display: "flex",
    alignItems: "center",
    lineHeight: 1,
    gap: 10,
    minWidth: "max-content",
  },

  dotWrap: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 10,
    height: 10,
  },

  dotPulse: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    backgroundColor: "#52d86a",
    animation: `${pulse} 1.8s ease-out infinite`,
  },

  dot: {
    position: "relative",
    display: "inline-block",
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#52d86a",
  },

  liveText: {
    display: "inline-flex",
    alignItems: "center",
    color: "rgba(255, 255, 255, 0.95)",
    fontSize: "0.78rem",
    lineHeight: 1,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontWeight: 700,
  },

  timeText: {
    display: "inline-flex",
    alignItems: "center",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "0.78rem",
    lineHeight: 1,
    letterSpacing: "0.02em",
    fontWeight: 600,
  },

  divider: {
    width: 1,
    height: 30,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },

  metricNumber: {
    color: "white",
    lineHeight: 1,
    fontWeight: 700,
    fontSize: "1.25rem",
  },

  metricLabel: {
    marginTop: 4,
    color: "rgba(255, 255, 255, 0.86)",
    fontSize: "0.9rem",
    lineHeight: 1.2,
  },
}));

interface HeroLiveMetricProps {
  value?: string;
  label?: string;
  statusLabel?: string;
}

function formatCurrentTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function HeroLiveMetric({
  value = "10M+",
  label = "emails processed by users",
  statusLabel = "Live usage",
}: HeroLiveMetricProps) {
  const { classes } = useStyles();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setCurrentTime(formatCurrentTime());

    const interval = window.setInterval(() => {
      setCurrentTime(formatCurrentTime());
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <Flex className={classes.metricBar}>
      <Box className={classes.liveState}>
        <Box className={classes.dotWrap}>
          <span className={classes.dotPulse} />
          <span className={classes.dot} />
        </Box>
        <Text className={classes.liveText}>{statusLabel}</Text>
        {currentTime && <Text className={classes.timeText}>{currentTime}</Text>}
      </Box>

      <Box className={classes.divider} />

      <Box>
        <Text className={classes.metricNumber}>{value}</Text>
        <Text className={classes.metricLabel}>{label}</Text>
      </Box>
    </Flex>
  );
}
