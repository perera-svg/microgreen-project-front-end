import type { FormEvent } from "react"

import { toast } from "sonner"
import ArrowRightIcon from "lucide-react/dist/esm/icons/arrow-right"

import { BrandButton } from "@/components/brand/brand-button"
import { BrandSeparator } from "@/components/brand/brand-separator"
import { useCart } from "@/components/cart/cart-provider"

import { checkoutActions, checkoutFieldIds, checkoutToastMessages } from "./content"
import { CheckoutAddressSection } from "./checkout-address-section"
import { CheckoutContactSection } from "./checkout-contact-section"
import { CheckoutEmptyState } from "./checkout-empty-state"
import { CheckoutFooterBar } from "./checkout-footer-bar"
import { CheckoutNav } from "./checkout-nav"
import { CheckoutStepIndicator } from "./checkout-step-indicator"
import { CheckoutSummaryCard } from "./checkout-summary-card"
import { useCheckoutDraft } from "./use-checkout-draft"

function CheckoutPage() {
  const {
    deliveryFeeLabel,
    discountLabel,
    hasItems,
    items,
    subtotalLabel,
    totalLabel,
  } = useCart()
  const { draft, errors, submitDraft, updateField } = useCheckoutDraft()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const result = submitDraft()

    if (!result.ok) {
      window.requestAnimationFrame(() => {
        document.getElementById(checkoutFieldIds[result.firstInvalidField])?.focus()
      })

      return
    }

    toast(checkoutToastMessages.nextStepTitle, {
      description: checkoutToastMessages.nextStepDescription,
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="flex min-h-screen flex-col">
        <CheckoutNav />

        {hasItems ? (
          <section className="flex-1">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-10 lg:px-8 lg:py-12">
              <form
                noValidate
                className="rounded-[24px] border border-border bg-card px-6 py-6 shadow-soft sm:px-8 sm:py-8"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-8">
                  <CheckoutStepIndicator />
                  <BrandSeparator />
                  <CheckoutContactSection
                    draft={draft}
                    errors={errors}
                    onFieldChange={updateField}
                  />
                  <BrandSeparator />
                  <CheckoutAddressSection
                    draft={draft}
                    errors={errors}
                    onFieldChange={updateField}
                  />

                  <div className="flex justify-start pt-2 sm:justify-end">
                    <BrandButton className="w-full sm:w-auto" type="submit">
                      {checkoutActions.continueLabel}
                      <ArrowRightIcon data-icon="inline-end" />
                    </BrandButton>
                  </div>
                </div>
              </form>

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
