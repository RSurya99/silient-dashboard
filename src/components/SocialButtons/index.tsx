import { Button, ButtonProps, Group } from '@mantine/core'
import { GoogleIcon } from './GoogleIcon'
import { FacebookIcon } from './FacebookIcon'

export function GoogleButton(props: ButtonProps) {
  return <Button leftIcon={<GoogleIcon />} variant="default" {...props} />
}

export function FacebookButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<FacebookIcon />}
      variant="default"
      {...props}
    />
  )
}

export function SocialButtons() {
  return (
    <Group position="center" sx={{ padding: 15 }}>
      <GoogleButton>Continue with Google</GoogleButton>
      <FacebookButton>Sign in with Facebook</FacebookButton>
    </Group>
  )
}
