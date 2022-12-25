import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
} from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 26,
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column-reverse',
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}))

function ForgotPassword() {
  const { classes } = useStyles()

  return (
    <Center style={{ height: '100vh' }}>
      <Container size="xs" style={{ width: '100%' }}>
        <Title className={classes.title} align="center">
          Forgot your password?
        </Title>
        <Text color="dimmed" size="sm" align="center">
          Enter your email to get a reset link
        </Text>

        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <TextInput label="Your email" placeholder="johndoe@email.com" required />
          <Group position="apart" mt="lg" className={classes.controls}>
            <Anchor color="dimmed" size="sm" className={classes.control}>
              <Center inline>
                <IconArrowLeft size={12} stroke={1.5} />
                <Anchor ml={5} component={Link} to="/auth/signin" color="dimmed">Back to Sign In page</Anchor>
              </Center>
            </Anchor>
            <Button className={classes.control}>Send Email</Button>
          </Group>
        </Paper>
      </Container>
    </Center>
  )
}

export default ForgotPassword
