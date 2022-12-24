import { useState, useEffect } from 'react'
import {
  Group, Box, Collapse, ThemeIcon, Text, createStyles, UnstyledButton, Anchor,
} from '@mantine/core'
import {
  TablerIcon, IconCalendarStats, IconChevronLeft, IconChevronRight,
} from '@tabler/icons'
import { useLocation, Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  controlActive: {
    '&, &:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.blue[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}))

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link?: string;
}

export default function LinksGroup({
  icon: Icon, label, initiallyOpened, links, link: href,
}: LinksGroupProps) {
  const { classes, theme, cx } = useStyles()
  const location = useLocation()
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft
  const [sidebarItemProps, setSidebarItemProps] = useState({})

  useEffect(() => {
    if (href) {
      console.log('href', href)
      const isExternal = href.includes('http')
      console.log('isExternal', isExternal)
      setSidebarItemProps({
        ...sidebarItemProps,
        component: isExternal ? Anchor : Link,
        target: isExternal ? '_blank' : undefined,
        [isExternal ? 'href' : 'to']: href,
      })
      console.log('sidebarItemProps dsa', sidebarItemProps)
    }
  }, [href])
  
  const items = (hasLinks ? links : []).map((link) => (
    <Text
      component={Link}
      className={cx(classes.link, { [classes.controlActive]: location.pathname === link.link })}
      to={link.link}
      key={link.label}
    >
      {link.label}
    </Text>
  ))

  useEffect(() => {
    if(links){
      setOpened(links.some((link) => link.link === location.pathname))
    }
  }, [location.pathname])

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={cx(classes.control, { [classes.controlActive]: location.pathname === href })}
        {...sidebarItemProps}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">
              {label}
            </Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}

const mockdata = {
  label: 'Releases',
  icon: IconCalendarStats,
  links: [
    { label: 'Upcoming releases', link: '/' },
    { label: 'Previous releases', link: '/' },
    { label: 'Releases schedule', link: '/' },
  ],
}

export function NavbarLinksGroup() {
  return (
    <Box
      sx={(theme) => ({
        minHeight: 220,
        padding: theme.spacing.md,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      })}
    >
      <LinksGroup {...mockdata} />
    </Box>
  )
}
