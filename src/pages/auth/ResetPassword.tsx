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
  PasswordInput,
  Box,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import { Link } from 'react-router-dom';

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
}));

function ResetPassword() {
  const { classes } = useStyles();

  return (
    <>
      <Center style={{ height: '100vh' }}>
        <Container size="xs" style={{ width: '100%' }}>
          <Title className={classes.title} align="center">
            Create new Password
          </Title>
          <Text color="dimmed" size="sm" align="center">
            Your new password must be different from previous used passwords
          </Text>

          <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
            <PasswordInput label="New Password" placeholder="Your new password" required mt="md" />
            <PasswordInput label="Confirm Password" placeholder="Your confirmation password" required mt="md" />
            <Button fullWidth mt="xl">
              Reset Password
            </Button>
          </Paper>
        </Container>
      </Center>
    </>
  );
}

export default ResetPassword