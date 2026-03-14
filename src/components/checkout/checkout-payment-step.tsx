import type { FormEvent } from "react"

import ArrowLeftIcon from "lucide-react/dist/esm/icons/arrow-left"
import ArrowRightIcon from "lucide-react/dist/esm/icons/arrow-right"
import ShieldCheckIcon from "lucide-react/dist/esm/icons/shield-check"

import { BrandButton } from "@/components/brand/brand-button"
import { BrandSeparator } from "@/components/brand/brand-separator"

import {
  checkoutActions,
  checkoutPaymentSecurityNote,
  checkoutPaymentStep,
} from "./content"
import { CheckoutPaymentAlternativePanel } from "./checkout-payment-alternative-panel"
import { CheckoutPaymentCardFields } from "./checkout-payment-card-fields"
import { CheckoutPaymentMethodSection } from "./checkout-payment-method-section"
import { CheckoutStepIndicator } from "./checkout-step-indicator"
import type {
  CheckoutDraft,
  CheckoutDraftChangeHandler,
  CheckoutDraftErrors,
} from "./use-checkout-draft"

type CheckoutPaymentStepProps = {
  draft: CheckoutDraft
  errors: CheckoutDraftErrors
  onBack: () => void
  onFieldChange: CheckoutDraftChangeHandler
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

function CheckoutPaymentStep({
  draft,
  errors,
  onBack,
  onFieldChange,
  onSubmit,
}: CheckoutPaymentStepProps) {
  const selectedMethod = draft.paymentMethod || "card"

  return (
    <form
      noValidate
      className="rounded-[24px] border border-border bg-card px-6 py-6 shadow-soft sm:px-8 sm:py-8"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-8">
        <CheckoutStepIndicator currentStep="payment" />
        <BrandSeparator />

        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-[2rem] leading-tight text-foreground">
            {checkoutPaymentStep.title}
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-text-secondary">
            {checkoutPaymentStep.description}
          </p>
        </div>

        <CheckoutPaymentMethodSection
          draft={draft}
          errors={errors}
          onFieldChange={onFieldChange}
        />
        <BrandSeparator />

        {selectedMethod === "card" ? (
          <CheckoutPaymentCardFields
            draft={draft}
            errors={errors}
            onFieldChange={onFieldChange}
          />
        ) : (
          <CheckoutPaymentAlternativePanel
            draft={draft}
            method={selectedMethod}
            onFieldChange={onFieldChange}
          />
        )}

        <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-accent px-4 py-3 text-[13px] font-medium text-primary">
          <ShieldCheckIcon aria-hidden className="size-4 shrink-0" />
          <span>{checkoutPaymentSecurityNote.text}</span>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <BrandButton
            className="h-auto justify-start self-start px-0"
            type="button"
            variant="link"
            onClick={onBack}
          >
            <ArrowLeftIcon data-icon="inline-start" />
            {checkoutActions.backToDeliveryLabel}
          </BrandButton>

          <BrandButton
            className="w-full border-transparent bg-destructive text-primary-foreground hover:bg-destructive/90 sm:w-auto"
            type="submit"
          >
            {checkoutActions.placeOrderLabel}
            <ArrowRightIcon data-icon="inline-end" />
          </BrandButton>
        </div>
      </div>
    </form>
  )
}

export { CheckoutPaymentStep }
