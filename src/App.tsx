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
import BasicForm from './pages/forms/BasicForm'
import AdvancedForm from './pages/forms/AdvancedForm'
import StepForm from './pages/forms/StepForm'
import Bar from './pages/charts/BarChart'
import Pie from './pages/charts/PieChart'
import Line from './pages/charts/LineChart'
import Card from './pages/components/CardComponent'
import RichTextEditor from './pages/components/RichTextEditorComponent'
import Icons from './pages/icons'
import SimpleTable from './pages/tables/SimpleTable'
import AdvancedTable from './pages/tables/AdvancedTable'
import DynamicTable from './pages/tables/DynamicTable'
import Profile from './pages/account/Profile'
import Settings from './pages/account/Settings'

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
              <Route path="forms">
                <Route path="basic-form" element={<BasicForm />} />
                <Route path="advanced-form" element={<AdvancedForm />} />
                <Route path="step-form" element={<StepForm />} />
              </Route>
              <Route path="charts">
                <Route path="bar" element={<Bar />} />
                <Route path="pie" element={<Pie />} />
                <Route path="line" element={<Line />} />
              </Route>
              <Route path="components">
                <Route path="card" element={<Card />} />
                <Route path="rich-text-editor" element={<RichTextEditor />} />
              </Route>
              <Route path="icons" element={<Icons />} />
              <Route path="tables">
                <Route path="simple-table" element={<SimpleTable />} />
                <Route path="dynamic-table" element={<DynamicTable />} />
                <Route path="advanced-table" element={<AdvancedTable />} />
              </Route>
              <Route path="account">
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
              </Route>
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
