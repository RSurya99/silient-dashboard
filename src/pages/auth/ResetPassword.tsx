import {
  createStyles,
  Paper,
  Title,
  Text,
  Button,
  Container,
  Center,
  PasswordInput,
} from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'

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

const ResetPasswordSchema = z.object({
  password: z.string().min(8, { message: 'Password must be 8 or more characters long' }),
  confirmPassword: z.string(),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

function ResetPassword() {
  const { classes } = useStyles()
  const formData = useForm({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: zodResolver(ResetPasswordSchema),
    validateInputOnBlur: true,
    validateInputOnChange: true,
  })

  return (
    <Center style={{ height: '100vh' }}>
      <Container size="xs" style={{ width: '100%' }}>
        <Title className={classes.title} align="center">
          Create new Password
        </Title>
        <Text color="dimmed" size="sm" align="center">
          Your new password must be different from previous used passwords
        </Text>

        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <form onSubmit={formData.onSubmit((values) => console.log(values))}>
            <PasswordInput {...formData.getInputProps('password')} label="New Password" placeholder="Your new password" withAsterisk mt="md" />
            <PasswordInput {...formData.getInputProps('confirmPassword')} label="Confirm Password" placeholder="Your confirmation password" withAsterisk mt="md" />
            <Button type="submit" fullWidth mt="xl">
              Reset Password
            </Button>
          </form>
        </Paper>
      </Container>
    </Center>
  )
}

export default ResetPassword
