import {
  createStyles, Group, Card, SimpleGrid, Text,
} from '@mantine/core'
import {
  IconArrowUpRight,
  IconArrowDownRight,
  TablerIcon,
} from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  root: {
    padding: `${theme.spacing.lg}px 0`,
  },

  value: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}))

interface StatsGridProps {
  data: { title: string; icon: TablerIcon; value: string; diff: number }[];
}

function Stats({ data }: StatsGridProps) {
  const { classes } = useStyles()
  const stats = data.map((stat) => {
    const Icon = stat.icon
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight

    return (
      <Card withBorder p="md" radius="sm" key={stat.title}>
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size={22} stroke={1.5} />
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
          <Text
            color={stat.diff > 0 ? 'teal' : 'red'}
            size="sm"
            weight={500}
            className={classes.diff}
          >
            <span>
              {stat.diff}
              %
            </span>
            <DiffIcon size={16} stroke={1.5} />
          </Text>
        </Group>

        <Text size="xs" color="dimmed" mt={7}>
          Compared to previous month
        </Text>
      </Card>
    )
  })
  return (
    <div className={classes.root}>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: 'md', cols: 2 },
          { maxWidth: 'xs', cols: 1 },
        ]}
      >
        {stats}
      </SimpleGrid>
    </div>
  )
}

export default Stats
