import { createStyles, ThemeIcon, Text, SimpleGrid, Box, Stack } from '@mantine/core';
import { Sun, Phone, MapPin, At } from 'tabler-icons-react';

type ContactIconVariant = 'white' | 'pink';

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === 'pink'
        ? "#E65E8C"
        : '#333',
    backgroundColor: '#333',
    color: "#e65e8c",
    border: '.25px solid black',
  },

  title: {
    color: 'gray',
    fontWeight: 250,
  },

  description: {
    color: 'black',
    fontWeight: 300,
  },
}));

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = 'pink',
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === 'pink' ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size="1.25rem" />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size="1.5rem" />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text size='xxl' className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
  { title: 'Email', description: 'sarman@zeroinbox.ai', icon: At },
  { title: 'Phone', description: '+1 (672) 999 1028', icon: Phone },
  { title: 'Address', description: '1618 West 6th Ave Vancouver, BC V6J-0H3', icon: MapPin },
  { title: 'Working hours', description: '8 a.m. – 6 p.m.', icon: Sun },
];

export function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
  return <Stack>{items}</Stack>;
}

export default function ContactIcons() {
  return (
    <SimpleGrid cols={1} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.lg,
        })}
      >
        <ContactIconsList />
      </Box>
    </SimpleGrid>
  );
}