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
  checkoutDeliveryInstructionsSection,
  checkoutFieldIds,
} from "./content"
import type {
  CheckoutDraft,
  CheckoutDraftChangeHandler,
} from "./use-checkout-draft"

type CheckoutDeliveryInstructionsSectionProps = {
  draft: CheckoutDraft
  onFieldChange: CheckoutDraftChangeHandler
}

function CheckoutDeliveryInstructionsSection({
  draft,
  onFieldChange,
}: CheckoutDeliveryInstructionsSectionProps) {
  return (
    <BrandCard className="rounded-[20px] bg-background">
      <BrandCardHeader className="px-5 pt-5 pb-0">
        <BrandCardTitle className="text-[1.5rem]">
          {checkoutDeliveryInstructionsSection.title}
        </BrandCardTitle>
        <BrandCardDescription>
          {checkoutDeliveryInstructionsSection.description}
        </BrandCardDescription>
      </BrandCardHeader>

      <BrandCardContent className="px-5 pb-5">
        <BrandFieldGroup className="gap-4">
          <BrandField className="gap-2">
            <BrandFieldLabel htmlFor={checkoutFieldIds.deliveryInstructionAccess}>
              {checkoutDeliveryInstructionsSection.accessLabel}
            </BrandFieldLabel>
            <BrandInput
              id={checkoutFieldIds.deliveryInstructionAccess}
              placeholder={checkoutDeliveryInstructionsSection.accessPlaceholder}
              value={draft.deliveryInstructionAccess}
              onChange={(event) =>
                onFieldChange("deliveryInstructionAccess", event.target.value)
              }
            />
          </BrandField>

          <BrandField className="gap-2">
            <BrandFieldLabel htmlFor={checkoutFieldIds.deliveryInstructionDropoff}>
              {checkoutDeliveryInstructionsSection.dropoffLabel}
            </BrandFieldLabel>
            <BrandInput
              id={checkoutFieldIds.deliveryInstructionDropoff}
              placeholder={checkoutDeliveryInstructionsSection.dropoffPlaceholder}
              value={draft.deliveryInstructionDropoff}
              onChange={(event) =>
                onFieldChange("deliveryInstructionDropoff", event.target.value)
              }
            />
          </BrandField>

          <BrandField className="gap-2">
            <BrandFieldLabel htmlFor={checkoutFieldIds.deliveryInstructionSpecial}>
              {checkoutDeliveryInstructionsSection.specialLabel}
            </BrandFieldLabel>
            <BrandInput
              id={checkoutFieldIds.deliveryInstructionSpecial}
              placeholder={checkoutDeliveryInstructionsSection.specialPlaceholder}
              value={draft.deliveryInstructionSpecial}
              onChange={(event) =>
                onFieldChange("deliveryInstructionSpecial", event.target.value)
              }
            />
          </BrandField>
        </BrandFieldGroup>
      </BrandCardContent>
    </BrandCard>
  )
}

export { CheckoutDeliveryInstructionsSection }
