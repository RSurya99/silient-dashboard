import {
  createStyles, Title, Text, Button, Container, Group, Center,
} from '@mantine/core'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  root: {
    margin: 'auto',
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

function NoMatch() {
  const { classes } = useStyles()

  return (
    <Center style={{ height: '100vh' }}>
      <Container size="lg" style={{ width: '100%' }}>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>You have found a secret place.</Title>
        <Text color="dimmed" size="lg" align="center" className={classes.description}>
          The page you are trying to find is not found.
          You may have mistyped or the page has been moved to another URL.
        </Text>
        <Group position="center">
          <Button component={Link} to="/" variant="subtle" size="md">
            Take me back to home page
          </Button>
        </Group>
      </Container>
    </Center>
  )
}

export default NoMatch
