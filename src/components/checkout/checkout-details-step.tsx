import type { FormEvent } from "react"

import ArrowRightIcon from "lucide-react/dist/esm/icons/arrow-right"

import { BrandButton } from "@/components/brand/brand-button"
import { BrandSeparator } from "@/components/brand/brand-separator"

import { checkoutActions } from "./content"
import { CheckoutAddressSection } from "./checkout-address-section"
import { CheckoutContactSection } from "./checkout-contact-section"
import { CheckoutStepIndicator } from "./checkout-step-indicator"
import type {
  CheckoutDraft,
  CheckoutDraftChangeHandler,
  CheckoutDraftErrors,
} from "./use-checkout-draft"

type CheckoutDetailsStepProps = {
  draft: CheckoutDraft
  errors: CheckoutDraftErrors
  onFieldChange: CheckoutDraftChangeHandler
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

function CheckoutDetailsStep({
  draft,
  errors,
  onFieldChange,
  onSubmit,
}: CheckoutDetailsStepProps) {
  return (
    <form
      noValidate
      className="rounded-[24px] border border-border bg-card px-6 py-6 shadow-soft sm:px-8 sm:py-8"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-8">
        <CheckoutStepIndicator currentStep="details" />
        <BrandSeparator />
        <CheckoutContactSection
          draft={draft}
          errors={errors}
          onFieldChange={onFieldChange}
        />
        <BrandSeparator />
        <CheckoutAddressSection
          draft={draft}
          errors={errors}
          onFieldChange={onFieldChange}
        />

        <div className="flex justify-start pt-2 sm:justify-end">
          <BrandButton className="w-full sm:w-auto" type="submit">
            {checkoutActions.continueToDeliveryLabel}
            <ArrowRightIcon data-icon="inline-end" />
          </BrandButton>
        </div>
      </div>
    </form>
  )
}

export { CheckoutDetailsStep }
