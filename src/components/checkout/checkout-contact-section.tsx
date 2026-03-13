import {
  BrandField,
  BrandFieldError,
  BrandFieldGroup,
  BrandFieldLabel,
} from "@/components/brand/brand-field"
import { BrandInput } from "@/components/brand/brand-input"

import { checkoutContactSection, checkoutFieldIds } from "./content"
import type { CheckoutDraft, CheckoutDraftErrors } from "./use-checkout-draft"

type CheckoutContactSectionProps = {
  draft: CheckoutDraft
  errors: CheckoutDraftErrors
  onFieldChange: <Field extends keyof CheckoutDraft>(
    field: Field,
    value: CheckoutDraft[Field]
  ) => void
}

function CheckoutContactSection({
  draft,
  errors,
  onFieldChange,
}: CheckoutContactSectionProps) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h1 className="font-serif text-[2rem] leading-tight text-foreground">
          {checkoutContactSection.title}
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-text-secondary">
          {checkoutContactSection.description}
        </p>
      </div>

      <BrandFieldGroup className="gap-4 md:grid md:grid-cols-2">
        <BrandField
          data-invalid={errors.email ? "true" : undefined}
          className="gap-2"
        >
          <BrandFieldLabel htmlFor={checkoutFieldIds.email}>
            {checkoutContactSection.emailLabel}
          </BrandFieldLabel>
          <BrandInput
            aria-invalid={Boolean(errors.email)}
            id={checkoutFieldIds.email}
            placeholder={checkoutContactSection.emailPlaceholder}
            type="email"
            value={draft.email}
            onChange={(event) => onFieldChange("email", event.target.value)}
          />
          <BrandFieldError>{errors.email}</BrandFieldError>
        </BrandField>

        <BrandField
          data-invalid={errors.phone ? "true" : undefined}
          className="gap-2"
        >
          <BrandFieldLabel htmlFor={checkoutFieldIds.phone}>
            {checkoutContactSection.phoneLabel}
          </BrandFieldLabel>
          <BrandInput
            aria-invalid={Boolean(errors.phone)}
            id={checkoutFieldIds.phone}
            inputMode="tel"
            placeholder={checkoutContactSection.phonePlaceholder}
            type="tel"
            value={draft.phone}
            onChange={(event) => onFieldChange("phone", event.target.value)}
          />
          <BrandFieldError>{errors.phone}</BrandFieldError>
        </BrandField>
      </BrandFieldGroup>
    </section>
  )
}

export { CheckoutContactSection }
