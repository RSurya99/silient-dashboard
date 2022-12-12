import { useEffect } from 'react'
import { useNavbar, useNavbarDispatch } from '~/context/navContext'
import Stats from '~/components/Home/Stats'

function Home() {
  const { breadcrumbItems } = useNavbar()
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
  }, [breadcrumbItems])
  const statsData = [
    {
      title: 'Total Users',
      value: '30',
      diff: 0,
    },
    {
      title: 'Total Users',
      value: '30',
      diff: 0,
    },
    {
      title: 'Total Users',
      value: '30',
      diff: 0,
    },
  ]

  return (
    <div>
      <Stats data={statsData} />
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
