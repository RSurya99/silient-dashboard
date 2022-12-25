import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
  Center,
} from '@mantine/core'
import { Link } from 'react-router-dom'
import { GoogleButton, FacebookButton } from '~/components/SocialButtons'

function SignIn() {
  return (
    <Center style={{ height: '100vh' }}>
      <Container size="xs" style={{ width: '100%' }}>
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?
          {' '}
          <Anchor component={Link} to="/auth/signup">
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="johndoe@email.com" required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
            <Anchor component={Link} to="/auth/forgot-password" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Sign in
          </Button>
          <Divider label="Or continue with" labelPosition="center" my="lg" />
          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <FacebookButton radius="xl">Facebook</FacebookButton>
          </Group>
        </Paper>
      </Container>
    </Center>
  )
}

export default SignIn
