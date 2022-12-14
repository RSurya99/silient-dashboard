import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Menu,
  Avatar,
  UnstyledButton,
  Text,
  ActionIcon,
  useMantineColorScheme,
} from '@mantine/core'
import {
  IconSearch,
  IconChevronDown,
  IconHeart,
  IconStar,
  IconMessage,
  IconSwitchHorizontal,
  IconSettings,
  IconLogout,
  IconPlayerPause,
  IconTrash,
  IconMoonStars,
  IconSun,
  IconMenu2,
} from '@tabler/icons'
import { useState } from 'react'
import type { User } from '~/types/navbar'
import { useNavbar, useNavbarDispatch } from '~/context/navContext'

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
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
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

  return (
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

        <Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size={20} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          />

          <ActionIcon
            size="lg"
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size={20} /> : <IconMoonStars size={20} />}
          </ActionIcon>

          <Menu
            width={260}
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
                  <Avatar src={user.image} alt={user.name} radius="xl" size={24} />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {user.name}
                  </Text>
                  <IconChevronDown size={14} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<IconHeart size={14} color={theme.colors.red[6]} stroke={1.5} />}>
                Liked posts
              </Menu.Item>
              <Menu.Item icon={<IconStar size={14} color={theme.colors.yellow[6]} stroke={1.5} />}>
                Saved posts
              </Menu.Item>
              <Menu.Item icon={<IconMessage size={14} color={theme.colors.blue[6]} stroke={1.5} />}>
                Your comments
              </Menu.Item>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>Account settings</Menu.Item>
              <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
                Change account
              </Menu.Item>
              <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>Logout</Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item icon={<IconPlayerPause size={14} stroke={1.5} />}>
                Pause subscription
              </Menu.Item>
              <Menu.Item color="red" icon={<IconTrash size={14} stroke={1.5} />}>
                Delete account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </div>
    </Header>
  )
}

export default Navbar
