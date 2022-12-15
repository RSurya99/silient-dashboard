import { Routes, Route } from 'react-router-dom'
import {
  MantineProvider, ColorSchemeProvider, ColorScheme,
} from '@mantine/core'

import { useState } from 'react'
import Home from '~/pages/Home'
import NoMatch from '~/pages/NoMatch'
import Layout from '~/layouts/default'
import { NavbarProvider } from '~/context/navContext'
import Forbidden from '~/pages/Forbidden'
import ServerError from '~/pages/ServerError'

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
                width: '8px',
              },
              '::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '::-webkit-scrollbar-thumb': {
                border: `0px solid ${theme.colors.blue[1]}`,
                backgroundClip: 'padding-box',
                borderRadius: '9999px',
                backgroundColor: theme.colors.blue[3],
              },
              '::-webkit-scrollbar-thumb:hover': {
                backgroundColor: theme.colors.blue[4],
              },
            }),
          }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/pages/404" element={<NoMatch />} />
              <Route path="/pages/403" element={<Forbidden />} />
              <Route path="/pages/500" element={<ServerError />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </MantineProvider>
      </ColorSchemeProvider>
    </NavbarProvider>
  )
}

export default App
