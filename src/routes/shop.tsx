import { Outlet, createFileRoute } from "@tanstack/react-router"

function ShopRouteLayout() {
  return <Outlet />
}

export const Route = createFileRoute("/shop")({
  component: ShopRouteLayout,
})
