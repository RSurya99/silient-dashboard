import { useEffect } from 'react'
import { useNavbarDispatch } from '~/context/navContext'
import Stats from '~/components/Home/Stats'
import { IconUser } from '@tabler/icons'
import {
  Grid, Paper, AspectRatio, Table,
} from '@mantine/core'
import AreaChartComponent from '~/components/Charts/Area'

function Home() {
  const dispatch = useNavbarDispatch()

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
  ]
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
          <AspectRatio ratio={16 / 9}>
            <Paper withBorder shadow="xs" p="md">
              <AreaChartComponent />
            </Paper>
          </AspectRatio>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper withBorder shadow="xs" p="md" style={{ height: '100%' }}>
            <Table horizontalSpacing="sm" verticalSpacing="xs">
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
          </Paper>
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default Home
