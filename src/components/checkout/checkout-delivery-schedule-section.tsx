import {
  BrandField,
  BrandFieldError,
  BrandFieldGroup,
  BrandFieldLabel,
} from "@/components/brand/brand-field"
import {
  BrandSelect,
  BrandSelectContent,
  BrandSelectGroup,
  BrandSelectItem,
  BrandSelectTrigger,
  BrandSelectValue,
} from "@/components/brand/brand-select"

import {
  checkoutDeliveryDateOptions,
  checkoutDeliveryScheduleSection,
  checkoutDeliveryWindowOptions,
  checkoutFieldIds,
} from "./content"
import type {
  CheckoutDraft,
  CheckoutDraftChangeHandler,
  CheckoutDraftErrors,
} from "./use-checkout-draft"

type CheckoutDeliveryScheduleSectionProps = {
  draft: CheckoutDraft
  errors: CheckoutDraftErrors
  onFieldChange: CheckoutDraftChangeHandler
}

function CheckoutDeliveryScheduleSection({
  draft,
  errors,
  onFieldChange,
}: CheckoutDeliveryScheduleSectionProps) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="font-serif text-[1.75rem] leading-tight text-foreground">
          {checkoutDeliveryScheduleSection.title}
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-text-secondary">
          {checkoutDeliveryScheduleSection.description}
        </p>
      </div>

      <BrandFieldGroup className="gap-4 md:grid md:grid-cols-2">
        <BrandField
          data-invalid={errors.deliveryDate ? "true" : undefined}
          className="gap-2"
        >
          <BrandFieldLabel htmlFor={checkoutFieldIds.deliveryDate}>
            {checkoutDeliveryScheduleSection.dateLabel}
          </BrandFieldLabel>
          <BrandSelect
            value={draft.deliveryDate || undefined}
            onValueChange={(value) => onFieldChange("deliveryDate", value ?? "")}
          >
            <BrandSelectTrigger
              aria-invalid={Boolean(errors.deliveryDate)}
              id={checkoutFieldIds.deliveryDate}
            >
              <BrandSelectValue
                placeholder={checkoutDeliveryScheduleSection.datePlaceholder}
              />
            </BrandSelectTrigger>
            <BrandSelectContent>
              <BrandSelectGroup>
                {checkoutDeliveryDateOptions.map((option) => (
                  <BrandSelectItem key={option.value} value={option.value}>
                    {option.label}
                  </BrandSelectItem>
                ))}
              </BrandSelectGroup>
            </BrandSelectContent>
          </BrandSelect>
          <BrandFieldError>{errors.deliveryDate}</BrandFieldError>
        </BrandField>

        <BrandField
          data-invalid={errors.deliveryWindow ? "true" : undefined}
          className="gap-2"
        >
          <BrandFieldLabel htmlFor={checkoutFieldIds.deliveryWindow}>
            {checkoutDeliveryScheduleSection.windowLabel}
          </BrandFieldLabel>
          <BrandSelect
            value={draft.deliveryWindow || undefined}
            onValueChange={(value) => onFieldChange("deliveryWindow", value ?? "")}
          >
            <BrandSelectTrigger
              aria-invalid={Boolean(errors.deliveryWindow)}
              id={checkoutFieldIds.deliveryWindow}
            >
              <BrandSelectValue
                placeholder={checkoutDeliveryScheduleSection.windowPlaceholder}
              />
            </BrandSelectTrigger>
            <BrandSelectContent>
              <BrandSelectGroup>
                {checkoutDeliveryWindowOptions.map((option) => (
                  <BrandSelectItem key={option.value} value={option.value}>
                    {option.label}
                  </BrandSelectItem>
                ))}
              </BrandSelectGroup>
            </BrandSelectContent>
          </BrandSelect>
          <BrandFieldError>{errors.deliveryWindow}</BrandFieldError>
        </BrandField>
      </BrandFieldGroup>
    </section>
  )
}

export { CheckoutDeliveryScheduleSection }
