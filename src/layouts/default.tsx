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
    height: '100vh',
    overflowY: 'auto'
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
          <Outlet />
        </div>
        <Footer />
      </main>
    </Flex>
  )
}

export default DefaultLayout
