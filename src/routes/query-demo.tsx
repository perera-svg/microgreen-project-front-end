import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/query-demo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/query-demo"!</div>
}
