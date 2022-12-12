import {
  Navbar, Text, Group, Code, ScrollArea, createStyles,
} from '@mantine/core'
import {
  IconGauge,
  IconComponents,
  IconIcons,
  IconChartPie,
  IconTable,
  IconError404,
  IconUser,
  IconHeartHandshake,
  IconForms,
} from '@tabler/icons'
import LinksGroup from './SidebarLinkGroup'

const mockdata = [
  { label: 'Dashboard', icon: IconGauge, link: '/' },
  {
    label: 'Forms',
    icon: IconForms,
    links: [
      { label: 'Basic Form', link: '/forms/basic-form' },
      { label: 'Step Form', link: '/forms/step-form' },
      { label: 'Advanced Form', link: '/forms/advanced-form' },
    ],
  },
  {
    label: 'Components',
    icon: IconComponents,
    links: [
      { label: 'Card', link: '/components/card' },
      { label: 'Rich Text Editor', link: '/components/rich-text-editor' },
    ],
  },
  { label: 'Icons', icon: IconIcons, link: '/icons' },
  {
    label: 'Charts',
    icon: IconChartPie,
    links: [
      { label: 'Line Chart', link: '/charts/line' },
      { label: 'Bar Chart', link: '/charts/bar' },
      { label: 'Pie Chart', link: '/charts/pie' },
    ],
  },
  {
    label: 'Tables',
    icon: IconTable,
    links: [
      { label: 'Simple Table', link: '/tables/simple-table' },
      { label: 'Dynamic Table', link: '/tables/dynamic-table' },
      { label: 'Advanced Table', link: '/tables/advanced-table' },
    ],
  },
  {
    label: 'Error Pages',
    icon: IconError404,
    links: [
      { label: '403', link: '/pages/403' },
      { label: '404', link: '/pages/404' },
      { label: '500', link: '/pages/500' },
    ],
  },
  {
    label: 'Account Pages',
    icon: IconUser,
    links: [
      { label: 'Account Profile', link: '/account/profile' },
      { label: 'Account Settings', link: '/account/settings' },
    ],
  },
  { label: 'Donate', icon: IconHeartHandshake, link: 'https://github.com/rsurya99' },
]

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    height: '100vh',
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}))

export default function NavbarNested() {
  const { classes } = useStyles()
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />)

  return (
    <Navbar width={{ sm: 275 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Text color="dark.7" size="lg" weight={600}>Silient</Text>
          <Code sx={{ fontWeight: 700 }}>v0.0.1</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  )
}
