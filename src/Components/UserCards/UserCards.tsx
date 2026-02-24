import { createStyles, Box, Text, Card, Group, SimpleGrid } from "@mantine/core";
import Image from "next/image";

type UserStory = {
  fullName: string;
  city: string;
  testimonial: string;
  image: string;
  countryImage: string;
  cleanedCount: number;
};

const userStories: UserStory[] = [
  {
    fullName: "Lisa",
    city: "Victoria, BC",
    testimonial: "Holy crap!!!",
    image: "/images/people/icons8-hello-kitty-100.png",
    countryImage: "/images/countries/icons8-canada-48.png",
    cleanedCount: 30130,
  },
  {
    fullName: "Shashank",
    city: "Austin, Texas",
    testimonial: "Shayan was super helpful setting us up!",
    image: "/images/people/icons8-futurama-bender-100.png",
    countryImage: "/images/countries/icons8-usa-48.png",
    cleanedCount: 55383,
  },
  {
    fullName: "Jan",
    city: "Bern, Switzerland",
    testimonial: "I like that it asks for my approval. Honestly pretty easy!",
    image: "/images/people/icons8-homer-simpson-100.png",
    countryImage: "/images/countries/icons8-switzerland-48.png",
    cleanedCount: 62787,
  },
  {
    fullName: "Marcus",
    city: "San Francisco, CA",
    testimonial: "Okay ya. No more emails hah.",
    image: "/images/people/icons8-theodore-peterson-100.png",
    countryImage: "/images/countries/icons8-usa-48.png",
    cleanedCount: 21773,
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "100%",
    backgroundColor: "#f6f7f5",
    padding: "2rem 0 0",
  },

  container: {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 2rem",

    [theme.fn.smallerThan("md")]: {
      padding: "0 1rem",
    },
  },

  card: {
    borderRadius: 20,
    border: "1px solid rgba(30, 35, 48, 0.08)",
    backgroundColor: "white",
    boxShadow: "0 8px 20px rgba(20, 33, 16, 0.06)",
    minHeight: "100%",
  },

  count: {
    color: "var(--zi-electric-blue)",
    fontWeight: 700,
    marginTop: "0.8rem",
    fontSize: "0.95rem",
  },
}));

export default function UserCards() {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: "lg", cols: 2 },
          { maxWidth: "xs", cols: 1 },
        ]}
      >
        {userStories.map((user) => (
          <Card key={user.fullName} className={classes.card} padding="lg">
            <Group align="center" spacing={10}>
              <Image
                width={56}
                height={56}
                alt={user.fullName}
                src={user.image}
                style={{ borderRadius: "999px" }}
              />
              <Box>
                <Group spacing={5}>
                  <Text fw={700}>{user.fullName}</Text>
                  <Image
                    width={14}
                    height={14}
                    alt={`${user.city} flag`}
                    src={user.countryImage}
                  />
                </Group>
                <Text size="sm" c="dimmed">
                  {user.city}
                </Text>
              </Box>
            </Group>
            <Text mt={12} style={{ lineHeight: 1.6 }}>
              &quot;{user.testimonial}&quot;
            </Text>
            <Text className={classes.count}>
              {user.cleanedCount.toLocaleString()} emails handled
            </Text>
          </Card>
        ))}
      </SimpleGrid>
      </Box>
    </Box>
  );
}
