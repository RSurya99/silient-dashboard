import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import CustomLoader from '~/components/Loader/CustomLoader'
import { LoadingOverlay } from '@mantine/core'

function BlankLayout() {
  return (
    <div>
      <Suspense fallback={<LoadingOverlay loader={CustomLoader} visible overlayBlur={2} />}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default BlankLayout
