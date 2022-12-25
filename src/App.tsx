import { Routes, Route } from 'react-router-dom'
import {
  MantineProvider, ColorSchemeProvider, ColorScheme,
} from '@mantine/core'
import { useState } from 'react'
import Layout from '~/layouts/default'
import BlankLayout from '~/layouts/blank'
import { NavbarProvider } from '~/context/navContext'
import Forbidden from '~/pages/Forbidden'
import NoMatch from '~/pages/NoMatch'
import ServerError from '~/pages/ServerError'
import ForgotPassword from '~/pages/auth/ForgotPassword'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import ResetPassword from './pages/auth/ResetPassword'
import { lazyLoad } from './lazyLoad'

const Home = lazyLoad('./pages/Home')
const Icons = lazyLoad('./pages/icons', 'default')
const Profile = lazyLoad('./pages/account/Profile')
const Settings = lazyLoad('./pages/account/Settings')
const BarChart = lazyLoad('./pages/charts/BarChart')
const PieChart = lazyLoad('./pages/charts/PieChart')
const LineChart = lazyLoad('./pages/charts/LineChart')
const CardComponent = lazyLoad('./pages/components/CardComponent')
const RichTextEditorComponent = lazyLoad('./pages/components/RichTextEditorComponent')
const AdvancedForm = lazyLoad('./pages/forms/AdvancedForm')
const BasicForm = lazyLoad('./pages/forms/BasicForm')
const StepForm = lazyLoad('./pages/forms/StepForm')
const AdvancedTable = lazyLoad('./pages/tables/AdvancedTable')
const SimpleTable = lazyLoad('./pages/tables/SimpleTable')
const DynamicTable = lazyLoad('./pages/tables/DynamicTable')

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
                <Route path="bar" element={<BarChart />} />
                <Route path="pie" element={<PieChart />} />
                <Route path="line" element={<LineChart />} />
              </Route>
              <Route path="components">
                <Route path="card" element={<CardComponent />} />
                <Route path="rich-text-editor" element={<RichTextEditorComponent />} />
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
