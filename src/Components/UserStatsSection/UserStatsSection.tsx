import { createStyles, Avatar, Flex, Text, Title, Group } from "@mantine/core";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    minHeight: "20rem",
    backgroundColor: "var(--landing-background)",
    fontFamily: "Helvetica Neue",
    padding: "2rem 5rem",

    [theme.fn.smallerThan("md")]: {
      padding: "2rem 1.3rem",
    },
  },

  main: {
    borderRadius: "30px",
    boxShadow: "7px 7px 10px 0px var(--shadow-color)",
    backgroundColor: "white",
    backgroundPosition: "center",
    width: "30rem",
    padding: "0rem 2rem 2rem 2rem",

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },

  nonVisible: {
    opacity: 0,
    transform: "translateY(5rem)",
  },

  visible: {
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 1.1s ease-out, transform 1.3s ease-out",
  },
}));

type UserInfo = {
  fullName: string,
  city: string,
  image: string,
  countryImage: string,
  emailsCleanedCount: number,
}
const users: UserInfo[] = [
  {fullName: "Lisa", city: "Victoria, BC", image: '/images/people/icons8-hello-kitty-100.png', countryImage: "/images/countries/icons8-canada-48.png", emailsCleanedCount: 30130},
  {fullName: "Shashank", city: "Austin, Texas", image: '/images/people/icons8-futurama-bender-100.png', countryImage: "/images/countries/icons8-usa-48.png", emailsCleanedCount: 55383},
  {fullName: "Jan", city: "Bern, Switzerland", image: '/images/people/icons8-homer-simpson-100.png', countryImage: "/images/countries/icons8-switzerland-48.png", emailsCleanedCount: 62787 },
  {fullName: "Marcus", city: "San Francisco, CA", image: '/images/people/icons8-theodore-peterson-100.png', countryImage: "/images/countries/icons8-usa-48.png", emailsCleanedCount: 21773},
  {fullName: "Fabiola", city: "Mahwah, NJ", image: '/images/people/icons8-futurama-mom-100.png', countryImage: "/images/countries/icons8-usa-48.png", emailsCleanedCount: 30251},
  {fullName: "Eric", city: "Austin, Texas", image: '/images/people/icons8-walter-white-100.png', countryImage: "/images/countries/icons8-usa-48.png", emailsCleanedCount: 65954 }]
export default function UserStatsSection({ isVisible }: { isVisible: boolean }) {
  const { classes } = useStyles();

  return (
    <Flex justify="center" align="center" className={classes.container}>
      <Flex direction="column" mih="20rem" className={`${classes.main} ${isVisible ? classes.visible : classes.nonVisible}`}>
        <Flex direction="column">
          <Title mt="sm">
            Leader Board
          </Title>
          <Text weight={300} size="xs">
            Updated June 14th, 2024
          </Text>
        </Flex>
        <Flex direction="column" gap={"sm"} mt={10}>
          { users.sort((a, b) => b.emailsCleanedCount - a.emailsCleanedCount).map((user, i) => {
            return (
              <Group key={user.fullName}>
                <Avatar src={user.image} radius="xl" size="lg" />
                <Flex direction="column">
                  <Flex align="center" gap={5}><Text>{user.fullName}</Text><Image width={15} height={15} alt="zero" src={user.countryImage} /></Flex>
                  <Text size="sm" c="dimmed" fw={400}>
                    {user.emailsCleanedCount} emails
                  </Text>
                  <Text size="sm" c="dimmed" fw={400}>
                    {user.city}
                  </Text>
                </Flex>
              </Group>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}


