import {
  BrandCard,
  BrandCardContent,
  BrandCardDescription,
  BrandCardHeader,
  BrandCardTitle,
} from "@/components/brand/brand-card"
import {
  BrandField,
  BrandFieldGroup,
  BrandFieldLabel,
} from "@/components/brand/brand-field"
import { BrandInput } from "@/components/brand/brand-input"

import {
  checkoutFieldIds,
  checkoutPaymentAlternativePanels,
  checkoutPaymentCardSection,
  type CheckoutPaymentMethod,
} from "./content"
import type {
  CheckoutDraft,
  CheckoutDraftChangeHandler,
} from "./use-checkout-draft"

type CheckoutPaymentAlternativePanelProps = {
  draft: CheckoutDraft
  method: Exclude<CheckoutPaymentMethod, "" | "card">
  onFieldChange: CheckoutDraftChangeHandler
}

function CheckoutPaymentAlternativePanel({
  draft,
  method,
  onFieldChange,
}: CheckoutPaymentAlternativePanelProps) {
  const panelCopy = checkoutPaymentAlternativePanels[method]

  return (
    <section className="flex flex-col gap-5">
      <h2 className="font-serif text-[1.75rem] leading-tight text-foreground">
        {checkoutPaymentCardSection.title}
      </h2>

      <BrandCard className="rounded-[20px] bg-background">
        <BrandCardHeader className="px-5 pt-5 pb-0">
          <BrandCardTitle className="text-[1.5rem]">
            {panelCopy.title}
          </BrandCardTitle>
          <BrandCardDescription>{panelCopy.description}</BrandCardDescription>
        </BrandCardHeader>

        <BrandCardContent className="px-5 pb-5 pt-5">
          <p className="text-sm leading-6 text-text-secondary">
            {panelCopy.note}
          </p>
        </BrandCardContent>
      </BrandCard>

      <BrandFieldGroup className="gap-4">
        <BrandField className="gap-2">
          <BrandFieldLabel htmlFor={checkoutFieldIds.couponCode}>
            {checkoutPaymentCardSection.couponCodeLabel}
          </BrandFieldLabel>
          <BrandInput
            id={checkoutFieldIds.couponCode}
            placeholder={checkoutPaymentCardSection.couponCodePlaceholder}
            value={draft.couponCode}
            onChange={(event) => onFieldChange("couponCode", event.target.value)}
          />
        </BrandField>
      </BrandFieldGroup>
    </section>
  )
}

export { CheckoutPaymentAlternativePanel }
