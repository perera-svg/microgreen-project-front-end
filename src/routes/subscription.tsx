import { createFileRoute } from "@tanstack/react-router"

import { SubscriptionPage } from "@/components/subscription/subscription-page"

export const Route = createFileRoute("/subscription")({
  component: SubscriptionPage,
})
