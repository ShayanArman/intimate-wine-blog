import { createStyles, Divider, Space, Flex, NavLink } from "@mantine/core";
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

        [theme.fn.largerThan("sm")]: {
          marginLeft: "10px",
          width: "20rem",
          height: "initial",
          backgroundColor: "var(--landing-blur)",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        },

        [theme.fn.smallerThan("sm")]: {
          width: "100%",
          height: "100%"
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
        fontWeight: 400,
        fontSize: "1.5rem",
      },

      iconNested: {
        fontSize: "1.2rem",
      },

      labelNested: {
        fontWeight: 300,
        fontSize: "1.2rem",
      },
      
      rightSection: {
        fontSize: "1.5rem",
        fontWeight: 400
      }
    })
)

export default function NavBar({ opened }: { opened: boolean }) {
    const { classes } = useStyles();
    const router = useRouter();

    if(!opened) {
        return <></>;
    }

    return (
      <Flex className={`${classes.container}`}>
        <Flex 
          direction="column"
          className={classes.content}>
            { headerLinks.map((link, index) => (
              <NavLink
                component={"a"}
                key={link.label}
                label={link.label}
                classNames={{ 
                  icon: classes.icon, 
                  root: classes.rootNav,
                  label: classes.label,
                  rightSection: classes.rightSection
                }}
                rightSection={link.links && <FiChevronRight />}
                href={link.link}
                target={link.newTab ? "_blank" : "_self"}
                variant="filled"
                active={router.asPath === link.link}
                icon={link.Icon}>
                  {
                    link.links?.map((subLink) => (
                      <NavLink 
                        component={"a"}
                        key={subLink.label}
                        classNames={{
                          root: classes.rootNav,
                          icon: classes.iconNested, 
                          label: classes.labelNested
                        }}
                        label={subLink.label}
                        href={subLink.link}
                        target={subLink.newTab ? "_blank" : "_self"}
                        variant="filled"
                        icon={subLink.Icon}
                      />
                    ))
                  }
                </NavLink>
            )) 
            }
        </Flex>
      </Flex>
    );
}