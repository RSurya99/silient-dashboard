import { useEffect, useState } from 'react'
import { useNavbarDispatch } from '~/context/navContext'
import Stats from '~/components/Home/Stats'
import { IconUser } from '@tabler/icons'
import {
  Grid, AspectRatio, Table, Card, Group, Text, Tabs,
} from '@mantine/core'
import AreaChartComponent from '~/components/Charts/Area'

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
]

function Home() {
  const dispatch = useNavbarDispatch()
  const [areaChartType, setAreaChartType] = useState<string | null>('monthly')

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
      <Grid columns={12}>
        <Grid.Col span={8}>
          <Card withBorder shadow="xs" p="md" style={{ height: '100%' }}>
            <Card.Section inheritPadding py="md">
              <Group position="apart">
                <Text weight={500}>Basic Area Chart</Text>
                <Tabs
                  unstyled
                  styles={(theme) => ({
                    tab: {
                      ...theme.fn.focusStyles(),
                      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
                      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
                      border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]}`,
                      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
                      cursor: 'pointer',
                      fontSize: theme.fontSizes.sm,
                      display: 'flex',
                      alignItems: 'center',

                      '&:disabled': {
                        opacity: 0.5,
                        cursor: 'not-allowed',
                      },

                      '&:not(:first-of-type)': {
                        borderLeft: 0,
                      },

                      '&:first-of-type': {
                        borderTopLeftRadius: theme.radius.sm,
                        borderBottomLeftRadius: theme.radius.sm,
                      },

                      '&:last-of-type': {
                        borderTopRightRadius: theme.radius.sm,
                        borderBottomRightRadius: theme.radius.sm,
                      },

                      '&[data-active]': {
                        backgroundColor: theme.colors.blue[6],
                        borderColor: theme.colors.blue[6],
                        color: theme.white,
                      },
                    },

                    tabIcon: {
                      marginRight: theme.spacing.xs,
                      display: 'flex',
                      alignItems: 'center',
                    },

                    tabsList: {
                      display: 'flex',
                    },
                  })}
                  value={areaChartType}
                  onTabChange={setAreaChartType}
                >
                  <Tabs.List>
                    <Tabs.Tab value="monthly">Monthly</Tabs.Tab>
                    <Tabs.Tab value="yearly">Yearly</Tabs.Tab>
                  </Tabs.List>
                </Tabs>
              </Group>
            </Card.Section>
            <Card.Section inheritPadding py="xs">
              <AspectRatio ratio={16 / 9}>
                <AreaChartComponent />
              </AspectRatio>
            </Card.Section>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card withBorder shadow="xs" p="md" style={{ height: '100%' }}>
            <Card.Section inheritPadding pt="md" pb="0">
              <Group position="apart">
                <Text weight={500}>Simple Table</Text>
              </Group>
            </Card.Section>
            <Card.Section inheritPadding py="xs">
              <Table horizontalSpacing="sm" verticalSpacing="sm" style={{ height: '100%' }}>
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
    </div>
  )
}

export default Home
