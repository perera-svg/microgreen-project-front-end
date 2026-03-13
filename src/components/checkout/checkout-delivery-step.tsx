import type { FormEvent } from "react"

import ArrowLeftIcon from "lucide-react/dist/esm/icons/arrow-left"
import ArrowRightIcon from "lucide-react/dist/esm/icons/arrow-right"

import { BrandButton } from "@/components/brand/brand-button"
import { BrandSeparator } from "@/components/brand/brand-separator"

import { checkoutActions, checkoutDeliveryStep } from "./content"
import { CheckoutDeliveryInstructionsSection } from "./checkout-delivery-instructions-section"
import { CheckoutDeliveryMethodSection } from "./checkout-delivery-method-section"
import { CheckoutDeliveryScheduleSection } from "./checkout-delivery-schedule-section"
import { CheckoutStepIndicator } from "./checkout-step-indicator"
import type {
  CheckoutDraft,
  CheckoutDraftChangeHandler,
  CheckoutDraftErrors,
} from "./use-checkout-draft"

type CheckoutDeliveryStepProps = {
  draft: CheckoutDraft
  errors: CheckoutDraftErrors
  onBack: () => void
  onFieldChange: CheckoutDraftChangeHandler
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

function CheckoutDeliveryStep({
  draft,
  errors,
  onBack,
  onFieldChange,
  onSubmit,
}: CheckoutDeliveryStepProps) {
  return (
    <form
      noValidate
      className="rounded-[24px] border border-border bg-card px-6 py-6 shadow-soft sm:px-8 sm:py-8"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-8">
        <CheckoutStepIndicator currentStep="delivery" />
        <BrandSeparator />

        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-[2rem] leading-tight text-foreground">
            {checkoutDeliveryStep.title}
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-text-secondary">
            {checkoutDeliveryStep.description}
          </p>
        </div>

        <CheckoutDeliveryMethodSection
          draft={draft}
          errors={errors}
          onFieldChange={onFieldChange}
        />
        <BrandSeparator />
        <CheckoutDeliveryScheduleSection
          draft={draft}
          errors={errors}
          onFieldChange={onFieldChange}
        />
        <BrandSeparator />
        <CheckoutDeliveryInstructionsSection
          draft={draft}
          onFieldChange={onFieldChange}
        />

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <BrandButton
            className="h-auto justify-start self-start px-0"
            type="button"
            variant="link"
            onClick={onBack}
          >
            <ArrowLeftIcon data-icon="inline-start" />
            {checkoutActions.backToDetailsLabel}
          </BrandButton>

          <BrandButton className="w-full sm:w-auto" type="submit">
            {checkoutActions.continueToPaymentLabel}
            <ArrowRightIcon data-icon="inline-end" />
          </BrandButton>
        </div>
      </div>
    </form>
  )
}

export { CheckoutDeliveryStep }
