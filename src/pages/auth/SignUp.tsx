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
import { Link } from 'react-router-dom'
import { GoogleButton, FacebookButton } from '~/components/SocialButtons'

function SignUp() {
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
          <SimpleGrid cols={2}>
            <TextInput label="First Name" placeholder="John" required />
            <TextInput label="Last Name" placeholder="Doe" required />
          </SimpleGrid>
          <TextInput label="Email" placeholder="johndoe@email.com" required mt="md" />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <PasswordInput label="Confirm Password" placeholder="Your confirmation password" required mt="md" />
          <Group position="apart" mt="lg">
            <Checkbox
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
          <Button fullWidth mt="xl">
            Sign Up
          </Button>
          <Divider label="Or Sign Up with" labelPosition="center" my="lg" />
          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <FacebookButton radius="xl">Facebook</FacebookButton>
          </Group>
        </Paper>
      </Container>
    </Center>
  )
}

export default SignUp
