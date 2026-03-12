import { createRootRoute, Outlet } from '@tanstack/react-router'

import { BrandToaster } from '@/components/brand/brand-sonner'

function RootLayout() {
  return (
    <>
      <Outlet />
      <BrandToaster position="top-right" richColors />
    </>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
