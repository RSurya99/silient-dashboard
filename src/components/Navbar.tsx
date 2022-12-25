import {
  createStyles,
  Header,
  Group,
  Menu,
  Avatar,
  UnstyledButton,
  Text,
  ActionIcon,
  useMantineColorScheme,
  Indicator,
  Drawer,
  Alert,
  Grid,
  ScrollArea,
  TextInput,
  Kbd,
} from '@mantine/core'
import {
  IconSearch,
  IconChevronDown,
  IconSwitchHorizontal,
  IconSettings,
  IconLogout,
  IconMoonStars,
  IconSun,
  IconMenu2,
  IconBell,
  IconLanguage,
  IconAlertCircle,
  IconUserCircle,
  IconDashboard,
  IconFileText,
} from '@tabler/icons'
import { useState } from 'react'
import type { User } from '~/types/navbar'
import { useNavbar, useNavbarDispatch } from '~/context/navContext'
import { SpotlightProvider, openSpotlight } from '@mantine/spotlight'
import type { SpotlightAction } from '@mantine/spotlight'
import { useNavigate } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    position: 'sticky',
    top: 0,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },

    'input:hover': {
      cursor: 'pointer',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },
}))

function Navbar() {
  const { classes, theme, cx } = useStyles()
  const [userMenuOpened, setUserMenuOpened] = useState(false)
  const dispatch = useNavbarDispatch()
  const { sidebarToggle } = useNavbar()
  const onClickSidebarToggle = () => {
    if (dispatch) {
      dispatch({ type: 'UPDATE_SIDEBAR_TOGGLE', sidebarToggle: !sidebarToggle })
    }
  }
  const [opened, setOpened] = useState(false)
  // async dispatch
  // const action2 = () => {
  //   if (dispatch) {
  //     asyncUpdate(dispatch, !sidebarToggle)
  //   }
  // }
  const user: User = {
    name: 'John Doe',
    image: 'https://avatars0.githubusercontent.com/u/1443320?s=460&v=4',
  }
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const routePush = useNavigate()

  const actions: SpotlightAction[] = [
    {
      title: 'Dashboard',
      description: 'Get into Dashboard Homepage',
      onTrigger: () => routePush('/'),
      icon: <IconDashboard size={18} />,
    },
    {
      title: 'Documentation',
      description: 'Visit documentation to lean more about all features',
      onTrigger: () => routePush('/documentation'),
      icon: <IconFileText size={18} />,
    },
  ]

  return (
    <>
      <Drawer
        opened={opened}
        position="right"
        onClose={() => setOpened(false)}
        title="Notifications"
        padding="lg"
        size="xl"
        zIndex={1002}
      >
        <ScrollArea offsetScrollbars style={{ height: '90vh' }}>
          <Grid columns={1} gutter="sm">
            {new Array(5).fill('').map((_, index) => (
              <Grid.Col key={index}>
                <Alert icon={<IconAlertCircle size={16} />} title="Bummer!" color={index % 2 === 0 ? 'red' : 'green'} withCloseButton>
                  Something terrible happened! You made a mistake and your data was lost forever!
                </Alert>
              </Grid.Col>
            ))}
          </Grid>
        </ScrollArea>
      </Drawer>
      <Header height={56} className={classes.header} pb={60}>
        <div className={classes.inner}>
          <Group>
            <ActionIcon
              size="lg"
              variant="transparent"
              onClick={onClickSidebarToggle}
              color="primaryColor"
            >
              <IconMenu2 size={20} />
            </ActionIcon>
            <Text color="dark.7" size="lg" weight={600}>Dashboard</Text>
          </Group>

          <Group spacing="xs">
            <SpotlightProvider
              actions={actions}
              searchIcon={<IconSearch size={18} />}
              searchPlaceholder="Search..."
              shortcut={['mod + K', '/']}
              nothingFoundMessage="Nothing found..."
            >
              <UnstyledButton onClick={() => openSpotlight()} className={classes.search}>
                <TextInput placeholder="Search" icon={<IconSearch size={14} />} rightSectionWidth={75} rightSection={<Kbd>Ctrl + K</Kbd>} />
              </UnstyledButton>
            </SpotlightProvider>

            <ActionIcon
              size="lg"
              variant="outline"
              color={dark ? 'yellow' : 'blue'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <IconSun size={20} /> : <IconMoonStars size={20} />}
            </ActionIcon>
            <Indicator>
              <ActionIcon
                size="lg"
                variant="outline"
                color="blue"
                title="Toggle color scheme"
                onClick={() => setOpened(true)}
              >
                <IconBell size={20} />
              </ActionIcon>
            </Indicator>
            <Menu shadow="md" width={125} position="bottom-end" transition="pop-top-right">
              <Menu.Target>
                <div style={{ padding: `${theme.spacing.xs}px 0` }}>
                  <ActionIcon
                    size="lg"
                    variant="outline"
                    color="blue"
                    title="Toggle color scheme"
                  >
                    <IconLanguage size={20} />
                  </ActionIcon>
                </div>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item icon={<Text size="xs" color="dimmed">EN</Text>}>English</Menu.Item>
                <Menu.Item icon={<Text size="xs" color="dimmed">ID</Text>}>Indonesia</Menu.Item>
                <Menu.Item icon={<Text size="xs" color="dimmed">JP</Text>}>Japanese</Menu.Item>
                <Menu.Item icon={<Text size="xs" color="dimmed">CN</Text>}>Chinese</Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Menu
              width={225}
              position="bottom-end"
              transition="pop-top-right"
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
            >
              <Menu.Target>
                <UnstyledButton
                  className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                >
                  <Group spacing={7}>
                    <Avatar src={user.image} alt={user.name} radius="xl" size={28} />
                    <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                      {user.name}
                    </Text>
                    <IconChevronDown size={14} stroke={1.5} />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item icon={<IconUserCircle size={14} stroke={1.5} />}>Profile</Menu.Item>
                <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
                  Account settings
                </Menu.Item>
                <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
                  Change account
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item color="red" icon={<IconLogout size={14} stroke={1.5} />}>
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </div>
      </Header>
    </>
  )
}

export default Navbar
