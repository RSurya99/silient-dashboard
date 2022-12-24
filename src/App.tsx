import { Routes, Route } from 'react-router-dom'
import {
  MantineProvider, ColorSchemeProvider, ColorScheme,
} from '@mantine/core'

import { useState } from 'react'
import Home from '~/pages/Home'
import NoMatch from '~/pages/NoMatch'
import Layout from '~/layouts/default'
import BlankLayout from '~/layouts/blank'
import { NavbarProvider } from '~/context/navContext'
import Forbidden from '~/pages/Forbidden'
import ServerError from '~/pages/ServerError'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <NavbarProvider>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            globalStyles: (theme) => ({
              '::-webkit-scrollbar': {
                width: '6px',
              },
              '::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '::-webkit-scrollbar-thumb': {
                border: `0px solid ${theme.colors.blue[3]}`,
                backgroundClip: 'padding-box',
                borderRadius: '9999px',
                backgroundColor: theme.colors.blue[5],
              },
              '::-webkit-scrollbar-thumb:hover': {
                backgroundColor: theme.colors.blue[6],
              },
            }),
          }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/auth" element={<BlankLayout />}>
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
            </Route>
            <Route path="/error" element={<BlankLayout />}>
              <Route path="404" element={<NoMatch />} />
              <Route path="403" element={<Forbidden />} />
              <Route path="500" element={<ServerError />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </MantineProvider>
      </ColorSchemeProvider>
    </NavbarProvider>
  )
}

export default App
