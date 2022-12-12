import { Outlet, Link } from 'react-router-dom'
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'
import Footer from '~/components/Footer'
import {
  createStyles, Flex, Breadcrumbs, Anchor,
} from '@mantine/core'
import { useNavbar } from '~/context/navContext'

const useStyles = createStyles((theme) => ({
  main: {
    width: '100%',
    position: 'relative',
  },
  wrapper: {
    height: '100vh',
    overflow: 'hidden',
  },
  content: {
    margin: theme.spacing.xl,
  },
}))

function DefaultLayout() {
  const { classes } = useStyles()
  const { sidebarToggle } = useNavbar()

  return (
    <Flex className={classes.wrapper}>
      {sidebarToggle ? <Sidebar /> : null}
      <main className={classes.main}>
        <Navbar />
        <div className={classes.content}>
          <Breadcrumbs>
            <Anchor size="sm" component={Link} to="/">
              Home
            </Anchor>
            <Anchor size="sm" component={Link} to="/component">
              Component
            </Anchor>
            <Anchor size="sm" component={Link} to="/component/table">
              Table
            </Anchor>
          </Breadcrumbs>
          <Outlet />
        </div>
        <Footer />
      </main>
    </Flex>
  )
}

export default DefaultLayout
