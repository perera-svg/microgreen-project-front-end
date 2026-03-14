import { OrderConfirmationActions } from "./order-confirmation-actions"
import { OrderConfirmationFooter } from "./order-confirmation-footer"
import { OrderConfirmationHero } from "./order-confirmation-hero"
import { OrderConfirmationInfoCard } from "./order-confirmation-info-card"
import { OrderConfirmationNav } from "./order-confirmation-nav"
import { readStoredOrderConfirmationSnapshot } from "./order-confirmation-snapshot"
import { OrderConfirmationSummaryCard } from "./order-confirmation-summary-card"

function OrderConfirmationPage() {
  const snapshot = readStoredOrderConfirmationSnapshot()

  if (!snapshot) {
    return null
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="flex min-h-screen flex-col">
        <OrderConfirmationNav />

        <section className="flex-1">
          <div className="mx-auto flex w-full max-w-7xl justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
            <div className="flex w-full max-w-[35rem] flex-col gap-6 sm:gap-8">
              <OrderConfirmationHero snapshot={snapshot} />
              <OrderConfirmationInfoCard snapshot={snapshot} />
              <OrderConfirmationSummaryCard snapshot={snapshot} />
              <OrderConfirmationActions snapshot={snapshot} />
            </div>
          </div>
        </section>

        <OrderConfirmationFooter />
      </div>
    </main>
  )
}

export { OrderConfirmationPage }
