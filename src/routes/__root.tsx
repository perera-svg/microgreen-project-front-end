import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { CartProvider } from '@/components/cart/cart-provider'
import { BrandToaster } from '@/components/brand/brand-sonner'

function RootLayout() {
  return (
    <CartProvider>
      <Outlet />
      <BrandToaster position="top-right" richColors />
      <TanStackRouterDevtools initialIsOpen={false} />
    </CartProvider>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
