import {
  createStyles, Title, Text, Button, Container, Group, Center,
} from '@mantine/core'
import { useEffect } from 'react'
import { useNavbarDispatch } from '~/context/navContext'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}))

function ServerError() {
  const { classes } = useStyles()
  const dispatch = useNavbarDispatch()

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'UPDATE_BREADCRUMB_ITEMS',
        breadcrumbItems: [],
      })
    }
  }, [])

  return (
    <>
      <Center style={{ height: '100vh' }}>
        <Container size="lg" style={{ width: '100%' }}>
          <div className={classes.label}>500</div>
          <Title className={classes.title}>Oops, Something went wrong.</Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            We are working on fixing the problem, please try again later.
          </Text>
          <Group position="center">
            <Button component={Link} to="/" variant="subtle" size="md">
              Take me back to home page
            </Button>
          </Group>
        </Container>
      </Center>
    </>
  )
}

export default ServerError
