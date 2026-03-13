import { cn } from "@/lib/utils"

import {
  BrandFieldError,
  BrandFieldLegend,
  BrandFieldSet,
} from "@/components/brand/brand-field"
import {
  BrandRadioGroup,
  BrandRadioGroupItem,
} from "@/components/brand/brand-radio-group"

import {
  checkoutDeliveryMethodSection,
  checkoutDeliveryMethods,
} from "./content"
import type {
  CheckoutDraft,
  CheckoutDraftChangeHandler,
  CheckoutDraftErrors,
} from "./use-checkout-draft"

type CheckoutDeliveryMethodSectionProps = {
  draft: CheckoutDraft
  errors: CheckoutDraftErrors
  onFieldChange: CheckoutDraftChangeHandler
}

function CheckoutDeliveryMethodSection({
  draft,
  errors,
  onFieldChange,
}: CheckoutDeliveryMethodSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <p className="max-w-2xl text-sm leading-6 text-text-secondary">
        {checkoutDeliveryMethodSection.description}
      </p>

      <BrandFieldSet className="gap-4">
        <BrandFieldLegend className="sr-only">
          {checkoutDeliveryMethodSection.assistiveLabel}
        </BrandFieldLegend>

        <BrandRadioGroup
          className="gap-3 md:grid md:grid-cols-3"
          value={draft.deliveryMethod || undefined}
          onValueChange={(value) =>
            onFieldChange(
              "deliveryMethod",
              checkoutDeliveryMethods.find((method) => method.value === value)
                ?.value ?? ""
            )
          }
        >
          {checkoutDeliveryMethods.map((method) => {
            const isActive = draft.deliveryMethod === method.value

            return (
              <label
                key={method.value}
                className={cn(
                  "flex h-full cursor-pointer rounded-[18px] border p-4 transition-colors",
                  isActive
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background hover:border-primary/30"
                )}
              >
                <div className="flex w-full items-start gap-3">
                  <BrandRadioGroupItem
                    aria-invalid={Boolean(errors.deliveryMethod)}
                    className="mt-0.5"
                    id={method.fieldId}
                    value={method.value}
                  />
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 flex-col gap-1">
                        <span className="text-sm font-semibold text-foreground">
                          {method.label}
                        </span>
                        <span className="text-sm font-semibold text-foreground">
                          {method.priceLabel}
                        </span>
                      </div>

                      <span
                        className={cn(
                          "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-sage-dark"
                        )}
                      >
                        {method.badge}
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-text-secondary">
                      {method.description}
                    </p>
                  </div>
                </div>
              </label>
            )
          })}
        </BrandRadioGroup>

        <BrandFieldError>{errors.deliveryMethod}</BrandFieldError>
      </BrandFieldSet>
    </section>
  )
}

export { CheckoutDeliveryMethodSection }
