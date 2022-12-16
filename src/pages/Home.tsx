import { useEffect, useState } from 'react'
import { useNavbarDispatch } from '~/context/navContext'
import Stats from '~/components/Home/Stats'
import {
  IconUser, IconDots, IconArrowUp, IconInfoCircle,
} from '@tabler/icons'
import {
  Grid, AspectRatio, Table, Card, Group, Text, Tabs, Menu, ActionIcon, createStyles, SegmentedControl, Center
} from '@mantine/core'
import AreaChart from '~/components/Charts/Area'
import TinyAreaChart from '~/components/Charts/TinyArea'
import PieChart from '~/components/Charts/Pie'
import DataTable from '~/components/Tables/DataTable'

const useStyles = createStyles(() => ({

}))

const statsData = [
  {
    title: 'Total Users1',
    icon: IconUser,
    value: '30',
    diff: 13,
  },
  {
    title: 'Total Users2',
    icon: IconUser,
    value: '30',
    diff: 0,
  },
  {
    title: 'Total Users3',
    icon: IconUser,
    value: '30',
    diff: -13,
  },
  {
    title: 'Total Users4',
    icon: IconUser,
    value: '30',
    diff: 0.2,
  },
]

const statsTable = [
  {
    name: 'Hydrogen1',
    year: 1766,
    review: 1.0079,
  },
  {
    name: 'Hydrogen2',
    year: 1766,
    review: 1.0079,
  },
  {
    name: 'Hydrogen3',
    year: 1766,
    review: 1.0079,
  },
  {
    name: 'Hydrogen4',
    year: 1766,
    review: 1.0079,
  },
  {
    name: 'Hydrogen5',
    year: 1766,
    review: 1.0079,
  },
  {
    name: 'Hydrogen6',
    year: 1766,
    review: 1.0079,
  },
  {
    name: 'Hydrogen7',
    year: 1766,
    review: 1.0079,
  },
  {
    name: 'Hydrogen8',
    year: 1766,
    review: 1.0079,
  },
  {
    name: 'Hydrogen9',
    year: 1766,
    review: 1.0079,
  },
]

const tableData = [
  {
    name: 'A1',
    email: 'ab@a.id',
    company: 'PT A'
  },
  {
    name: 'A2',
    email: 'ac@a.id',
    company: 'PT A'
  },
  {
    name: 'A3',
    email: 'ad@a.id',
    company: 'PT A'
  },
]

function Home() {
  const { theme } = useStyles()
  const dispatch = useNavbarDispatch()
  const [areaChartType, setAreaChartType] = useState<string>('monthly')
  const [segmentedValue, setSegmentedValue] = useState<string>('')

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'UPDATE_BREADCRUMB_ITEMS',
        breadcrumbItems: [
          { label: 'Home', link: '/' },
        ],
      })
    }
  }, [])
  const statsTableBody = statsTable.map((element, idx) => (
    <tr key={element.name}>
      <td>{idx + 1}</td>
      <td>{element.name}</td>
      <td>{element.year}</td>
      <td>{element.review}</td>
    </tr>
  ))

  return (
    <div>
      <Stats data={statsData} />
      <Grid columns={12} pb="md" gutter="lg">
        <Grid.Col span={8}>
          <Card withBorder shadow="xs" p="md" style={{ height: '100%' }}>
            <Card.Section withBorder inheritPadding py="xs">
              <Group position="apart">
                <Text weight={500}>Basic Area Chart</Text>
                <SegmentedControl
                  size="sm"
                  color="blue"
                  value={areaChartType}
                  onChange={setAreaChartType}
                  data={[
                    { label: 'Monthly', value: 'monthly' },
                    { label: 'Annual', value: 'annual' },
                  ]}
                />
              </Group>
            </Card.Section>
            <Card.Section inheritPadding py="xs">
              <AspectRatio ratio={16 / 10}>
                <AreaChart />
              </AspectRatio>
            </Card.Section>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card withBorder shadow="xs" p="md" style={{ height: '100%' }}>
            <Card.Section withBorder inheritPadding py="md">
              <Group position="apart">
                <Text weight={500}>Simple Table</Text>
                <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <ActionIcon>
                      <IconDots size={18} />
                    </ActionIcon>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item>Filter 1</Menu.Item>
                    <Menu.Item>Filter 2</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            </Card.Section>
            <Card.Section inheritPadding py="xs" style={{ height: '100%' }}>
              <Table horizontalSpacing="sm" verticalSpacing="xs" style={{ height: '90%' }}>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Review</th>
                  </tr>
                </thead>
                <tbody>
                  {statsTableBody}
                </tbody>
              </Table>
            </Card.Section>
          </Card>
        </Grid.Col>
      </Grid>
      <Grid columns={12} pb="md" gutter="lg">
        <Grid.Col span={6}>
          <Card withBorder shadow="xs" p="md" style={{ height: '100%' }}>
            <Card.Section withBorder inheritPadding py="md">
              <Group position="apart">
                <Text weight={500}>Analytics</Text>
                <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <ActionIcon>
                      <IconDots size={18} />
                    </ActionIcon>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item>Filter 1</Menu.Item>
                    <Menu.Item>Filter 2</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            </Card.Section>
            <Card.Section inheritPadding py="xs">
              <Grid columns={12} gutter="lg">
                <Grid.Col span={6}>
                  <Card p="xs" pb={0}>
                    <Group align="center" spacing={4}>
                      <Text weight={400} color="gray.6">Statistic</Text>
                      <IconInfoCircle size={16} color={theme.colors.gray[6]} />
                    </Group>
                    <Group align="center" spacing="xl">
                      <Text size="xl">12.727</Text>
                      <Group align="center" spacing={2}>
                        <Text size="sm" color="gray.5">17%</Text>
                        <IconArrowUp size={20} color={theme.colors.green[6]} />
                      </Group>
                    </Group>
                    <AspectRatio ratio={16 / 9}>
                      <TinyAreaChart />
                    </AspectRatio>
                  </Card>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Card p="xs" pb={0}>
                    <Group align="center" spacing={4}>
                      <Text weight={400} color="gray.6">Statistic</Text>
                      <IconInfoCircle size={16} color={theme.colors.gray[6]} />
                    </Group>
                    <Group align="center" spacing="xl">
                      <Text size="xl">12.727</Text>
                      <Group align="center" spacing={2}>
                        <Text size="sm" color="gray.5">17%</Text>
                        <IconArrowUp size={20} color={theme.colors.green[6]} />
                      </Group>
                    </Group>
                    <AspectRatio ratio={16 / 9}>
                      <TinyAreaChart />
                    </AspectRatio>
                  </Card>
                </Grid.Col>
              </Grid>
            </Card.Section>
            <Card.Section inheritPadding py="xs">
              <DataTable data={tableData} withoutSearch />
            </Card.Section>
          </Card>
        </Grid.Col>
        <Grid.Col span={6}>
          <Card withBorder shadow="xs" p="md" style={{ height: '100%' }}>
            <Card.Section withBorder inheritPadding py="xs">
              <Group position="apart">
                <Text weight={500}>Proportion of sales category</Text>
                <Group>
                  <SegmentedControl
                    size="sm"
                    color="blue"
                    value={segmentedValue}
                    onChange={setSegmentedValue}
                    data={[
                      { label: 'All Channels', value: '' },
                      { label: 'Online', value: 'online' },
                      { label: 'Store', value: 'store' },
                    ]}
                  />
                </Group>
              </Group>
            </Card.Section>
            <Center style={{ width: '100%', height: '94%' }}>
              <AspectRatio ratio={1/1} style={{ width: '400px' }}>
                <PieChart />
              </AspectRatio>
            </Center>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default Home
