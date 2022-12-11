import {
  createStyles, Group, ActionIcon, Text,
} from '@mantine/core'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
  },
}))

function Footer() {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Text size="lg" weight={500}>
          Logo
        </Text>
        <Group spacing={0} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  )
}

export default Footer
