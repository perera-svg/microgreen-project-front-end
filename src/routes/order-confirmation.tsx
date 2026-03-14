import { createFileRoute, redirect } from "@tanstack/react-router"

import { OrderConfirmationPage } from "@/components/order-confirmation/order-confirmation-page"
import { orderConfirmationLinks } from "@/components/order-confirmation/content"
import { readStoredOrderConfirmationSnapshot } from "@/components/order-confirmation/order-confirmation-snapshot"

export const Route = createFileRoute("/order-confirmation")({
  beforeLoad: () => {
    if (
      typeof window !== "undefined" &&
      !readStoredOrderConfirmationSnapshot()
    ) {
      throw redirect({ to: orderConfirmationLinks.checkoutTo })
    }
  },
  component: OrderConfirmationPage,
})
