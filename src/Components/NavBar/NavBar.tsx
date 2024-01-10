import { createStyles, Flex, Text, NavLink } from "@mantine/core";
import Link from "next/link";
import { HEADER_HEIGHT, headerLinks } from "../ZeroHeader/ZeroHeader";
import { useRouter } from "next/router";
import { FiChevronRight } from "react-icons/fi";


const useStyles = createStyles(
    (theme) => ({
      container: {
        position: "fixed",
        top: HEADER_HEIGHT, 
        left: 0,
        zIndex: 8000, 
        backgroundColor: "var(--landing-blur)",
        padding: "20px",

        [theme.fn.largerThan("xs")]: {
          width: "20rem",
          backgroundColor: "var(--landing-blur)",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        },

        [theme.fn.smallerThan("sm")]: {
          width: "100%",
          height: "95%"
        }
      },

      content: {
        rowGap: 5,
        marginLeft: "2rem",
        width: "80%",
        [theme.fn.largerThan("sm")]: {
          width: "100%",
          marginLeft: "0rem"
        }
      },

      rootNav: {
        backgroundColor: "transparent",
        borderRadius: "7px",
      },

      icon: {
        fontSize: "1.3rem",
      },

      label: {
        fontWeight: 500,
        fontSize: "1.5rem",
      },

      iconNested: {
        fontSize: "1.2rem",
      },

      labelNested: {
        fontWeight: 500,
        fontSize: "1.2rem",
      },
      
      rightSection: {
        fontSize: "1.5rem",
        fontWeight: 400
      }
    })
)

export default function NavBar({ opened, closeNavBar }: { opened: boolean, closeNavBar: () => void }) {
    const { classes } = useStyles();
    const router = useRouter();

    if(!opened) {
        return <></>;
    }

    return (
      <Flex className={classes.container}>
        <Flex 
          direction="column"
          className={classes.content}>
            { headerLinks.map((link) => (
              <Link key={link.label} shallow={true} href={link.link} target={link.newTab ? "_blank" : "_self"} passHref>
                <NavLink
                  component={"a"}
                  key={link.label}
                  label={link.label}
                  style={link.link === router.asPath ? {backgroundColor: "var(--blue-light)"}: {}}
                  classNames={{ 
                    icon: classes.icon, 
                    root: classes.rootNav,
                    label: classes.label,
                    rightSection: classes.rightSection
                  }}
                  onClick={() => { if (!link.links) { closeNavBar(); } else { null }  }}
                  rightSection={link.links && <FiChevronRight />}
                  variant="filled"
                  active={router.asPath === link.link}
                  icon={link.Icon}>
                    {
                      link.links?.map((subLink) => (
                        <Link key={subLink.label} shallow={true} href={subLink.link} target={subLink.newTab ? "_blank" : "_self"} passHref>
                          <NavLink 
                            component={"a"}
                            key={subLink.label}
                            classNames={{
                              root: classes.rootNav,
                              icon: classes.iconNested, 
                              label: classes.labelNested
                            }}
                            onClick={() => closeNavBar()}
                            label={subLink.label}
                            variant="filled"
                            icon={subLink.Icon}
                          />
                        </Link>
                      ))
                    }
                </NavLink>
              </Link>
            )) 
            }
            <Flex align="center" justify="center" style={{backgroundColor:"var(--blue-light)", borderRadius: "10px"}} mt={10}>
              <Text weight={500} color="white">Last Updated - Jan 10th, 2024</Text>
            </Flex>
        </Flex>
      </Flex>
    );
}