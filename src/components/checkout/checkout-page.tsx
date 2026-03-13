import type { FormEvent } from "react"

import { toast } from "sonner"

import { useCart } from "@/components/cart/cart-provider"

import { checkoutFieldIds, checkoutToastMessages } from "./content"
import { CheckoutDeliveryStep } from "./checkout-delivery-step"
import { CheckoutDetailsStep } from "./checkout-details-step"
import { CheckoutEmptyState } from "./checkout-empty-state"
import { CheckoutFooterBar } from "./checkout-footer-bar"
import { CheckoutNav } from "./checkout-nav"
import { CheckoutSummaryCard } from "./checkout-summary-card"
import { useCheckoutDraft, type CheckoutDraftField } from "./use-checkout-draft"

function focusCheckoutField(field: CheckoutDraftField) {
  window.requestAnimationFrame(() => {
    document.getElementById(checkoutFieldIds[field])?.focus()
  })
}

function CheckoutPage() {
  const {
    deliveryFeeLabel,
    discountLabel,
    hasItems,
    items,
    subtotalLabel,
    totalLabel,
  } = useCart()
  const {
    draft,
    errors,
    goToStep,
    submitDelivery,
    submitDetails,
    updateField,
  } = useCheckoutDraft()

  function handleDetailsSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const result = submitDetails()

    if (!result.ok) {
      focusCheckoutField(result.firstInvalidField)
    }
  }

  function handleDeliverySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const result = submitDelivery()

    if (!result.ok) {
      focusCheckoutField(result.firstInvalidField)
      return
    }

    toast(checkoutToastMessages.paymentStepTitle, {
      description: checkoutToastMessages.paymentStepDescription,
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="flex min-h-screen flex-col">
        <CheckoutNav />

        {hasItems ? (
          <section className="flex-1">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-10 lg:px-8 lg:py-12">
              {draft.currentStep === "details" ? (
                <CheckoutDetailsStep
                  draft={draft}
                  errors={errors}
                  onFieldChange={updateField}
                  onSubmit={handleDetailsSubmit}
                />
              ) : (
                <CheckoutDeliveryStep
                  draft={draft}
                  errors={errors}
                  onBack={() => goToStep("details")}
                  onFieldChange={updateField}
                  onSubmit={handleDeliverySubmit}
                />
              )}

              <CheckoutSummaryCard
                deliveryFeeLabel={deliveryFeeLabel}
                discountLabel={discountLabel}
                items={items}
                subtotalLabel={subtotalLabel}
                totalLabel={totalLabel}
              />
            </div>
          </section>
        ) : (
          <section className="flex-1">
            <CheckoutEmptyState />
          </section>
        )}

        <CheckoutFooterBar />
      </div>
    </main>
  )
}

export { CheckoutPage }
