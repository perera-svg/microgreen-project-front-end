import { Outlet, createFileRoute } from "@tanstack/react-router"

function BlogRouteLayout() {
  return <Outlet />
}

export const Route = createFileRoute("/blog")({
  component: BlogRouteLayout,
})
