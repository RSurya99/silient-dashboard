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
import { useForm, zodResolver } from '@mantine/form'
import { Link } from 'react-router-dom'
import { GoogleButton, FacebookButton } from '~/components/SocialButtons'
import { z } from 'zod'

const SignInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be 8 or more characters long' }),
  rememberMe: z.boolean(),
})

function SignIn() {
  const formData = useForm({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: zodResolver(SignInSchema),
    validateInputOnBlur: true,
    validateInputOnChange: true,
  })

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
          <form onSubmit={formData.onSubmit((values) => console.log(values))}>
            <TextInput {...formData.getInputProps('email')} label="Email" placeholder="johndoe@email.com" withAsterisk />
            <PasswordInput {...formData.getInputProps('password')} label="Password" placeholder="Your password" withAsterisk mt="md" />
            <Group position="apart" mt="lg">
              <Checkbox {...formData.getInputProps('rememberMe')} label="Remember me" sx={{ lineHeight: 1 }} />
              <Anchor component={Link} to="/auth/forgot-password" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button type="submit" fullWidth mt="xl">
              Sign in
            </Button>
            <Divider label="Or continue with" labelPosition="center" my="lg" />
            <Group grow mb="md" mt="md">
              <GoogleButton radius="xl">Google</GoogleButton>
              <FacebookButton radius="xl">Facebook</FacebookButton>
            </Group>
          </form>
        </Paper>
      </Container>
    </Center>
  )
}

export default SignIn
