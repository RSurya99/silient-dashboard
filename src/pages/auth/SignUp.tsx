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
  SimpleGrid,
} from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { Link } from 'react-router-dom'
import { GoogleButton, FacebookButton } from '~/components/SocialButtons'
import { z } from 'zod'

const SignUpSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name is required' }),
  lastName: z.string().min(1, { message: 'Last Name is required' }),
  email: z.string().email({ message: 'Email Address is invalid' }),
  password: z.string().min(8, { message: 'Password must be 8 or more characters long' }),
  confirmPassword: z.string(),
  agreement: z.boolean(),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'], // path of error
})

function SignUp() {
  const formData = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreement: false,
    },
    validate: zodResolver(SignUpSchema),
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
          Create an Account
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account? Click
          {' '}
          <Anchor component={Link} to="/auth/signin">
            here
          </Anchor>
          {' '}
          to Sign In
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={formData.onSubmit((values) => console.log(values))}>
            <SimpleGrid cols={2}>
              <TextInput {...formData.getInputProps('firstName')} label="First Name" placeholder="John" withAsterisk />
              <TextInput {...formData.getInputProps('lastName')} label="Last Name" placeholder="Doe" withAsterisk />
            </SimpleGrid>
            <TextInput {...formData.getInputProps('email')} label="Email" placeholder="johndoe@email.com" withAsterisk mt="md" />
            <PasswordInput {...formData.getInputProps('password')} label="Password" placeholder="Your password" withAsterisk mt="md" />
            <PasswordInput {...formData.getInputProps('confirmPassword')} label="Confirm Password" placeholder="Your confirmation password" withAsterisk mt="md" />
            <Group position="apart" mt="lg">
              <Checkbox
                {...formData.getInputProps('agreement')}
                label={(
                  <>
                    I agree to all the
                    {' '}
                    <Anchor component={Link} to="/terms-and-conditions">
                      Terms and Conditions
                    </Anchor>
                  </>
              )}
                sx={{ lineHeight: 1 }}
              />
            </Group>
            <Button type="submit" fullWidth mt="xl">
              Sign Up
            </Button>
            <Divider label="Or Sign Up with" labelPosition="center" my="lg" />
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

export default SignUp
