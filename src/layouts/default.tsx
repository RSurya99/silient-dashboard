import { Outlet, Link, useLocation } from 'react-router-dom'
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'
import Footer from '~/components/Footer'
import {
  createStyles, Flex, Breadcrumbs, Anchor, LoadingOverlay,
} from '@mantine/core'
import { useNavbar, useNavbarDispatch } from '~/context/navContext'
import { Suspense, useEffect } from 'react'
import CustomLoader from '~/components/Loader/CustomLoader'
import { capitalize } from 'lodash'

const useStyles = createStyles((theme) => ({
  main: {
    width: '100%',
    position: 'relative',
    height: '100vh',
    overflowY: 'auto',
  },
  wrapper: {
    overflow: 'hidden',
    position: 'relative',
  },
  content: {
    margin: theme.spacing.xl,
    minHeight: '82vh',
  },
}))

function DefaultLayout() {
  const { classes } = useStyles()
  const { sidebarToggle, breadcrumbItems } = useNavbar()
  const dispatch = useNavbarDispatch()
  const location = useLocation()

  useEffect(() => {
    const pathName = location.pathname.split('/')
    if (dispatch) {
      dispatch({
        type: 'UPDATE_BREADCRUMB_ITEMS',
        breadcrumbItems: pathName.map((el) => ({ label: capitalize(el) || 'Home', link: el || '/' })),
      })
    }
  }, [location])

  const items = breadcrumbItems.map((item) => (
    <Anchor size="sm" component={Link} to={item.link} key={item.link}>
      {item.label}
    </Anchor>
  ))

  return (
    <Flex className={classes.wrapper}>
      {sidebarToggle ? <Sidebar /> : null}
      <main className={classes.main}>
        <Navbar />
        <div className={classes.content}>
          <Breadcrumbs>
            {items}
          </Breadcrumbs>
          <Suspense fallback={<LoadingOverlay loader={CustomLoader} visible overlayBlur={2} />}>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
      </main>
    </Flex>
  )
}

export default DefaultLayout
