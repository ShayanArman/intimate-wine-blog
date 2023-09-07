import { createStyles, Flex, Button, NavLink } from "@mantine/core";
import { HEADER_HEIGHT, headerLinks } from "../ZeroHeader/ZeroHeader";
import { FcEnteringHeavenAlive } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


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
        width: "80%",
        [theme.fn.largerThan("sm")]: {
          width: "100%",
        }
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
      <Flex justify="center" className={`${classes.container}`}>
        <Flex 
          direction="column"
          className={classes.content}>
            { headerLinks.map((link, index) => (
              <NavLink
                component={"a"}
                key={link.label}
                label={link.label}
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