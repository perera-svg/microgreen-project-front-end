import {
  BrandField,
  BrandFieldError,
  BrandFieldGroup,
  BrandFieldLabel,
} from "@/components/brand/brand-field"
import { BrandInput } from "@/components/brand/brand-input"
import {
  BrandSelect,
  BrandSelectContent,
  BrandSelectGroup,
  BrandSelectItem,
  BrandSelectTrigger,
  BrandSelectValue,
} from "@/components/brand/brand-select"

import {
  checkoutAddressSection,
  checkoutCities,
  checkoutDistricts,
  checkoutFieldIds,
} from "./content"
import type {
  CheckoutDraft,
  CheckoutDraftChangeHandler,
  CheckoutDraftErrors,
} from "./use-checkout-draft"

type CheckoutAddressSectionProps = {
  draft: CheckoutDraft
  errors: CheckoutDraftErrors
  onFieldChange: CheckoutDraftChangeHandler
}

function CheckoutAddressSection({
  draft,
  errors,
  onFieldChange,
}: CheckoutAddressSectionProps) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="font-serif text-[1.75rem] leading-tight text-foreground">
          {checkoutAddressSection.title}
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-text-secondary">
          {checkoutAddressSection.description}
        </p>
      </div>

      <BrandFieldGroup className="gap-4">
        <BrandField
          data-invalid={errors.fullName ? "true" : undefined}
          className="gap-2"
        >
          <BrandFieldLabel htmlFor={checkoutFieldIds.fullName}>
            {checkoutAddressSection.fullNameLabel}
          </BrandFieldLabel>
          <BrandInput
            aria-invalid={Boolean(errors.fullName)}
            id={checkoutFieldIds.fullName}
            placeholder={checkoutAddressSection.fullNamePlaceholder}
            value={draft.fullName}
            onChange={(event) => onFieldChange("fullName", event.target.value)}
          />
          <BrandFieldError>{errors.fullName}</BrandFieldError>
        </BrandField>

        <BrandField
          data-invalid={errors.addressLine1 ? "true" : undefined}
          className="gap-2"
        >
          <BrandFieldLabel htmlFor={checkoutFieldIds.addressLine1}>
            {checkoutAddressSection.addressLine1Label}
          </BrandFieldLabel>
          <BrandInput
            aria-invalid={Boolean(errors.addressLine1)}
            id={checkoutFieldIds.addressLine1}
            placeholder={checkoutAddressSection.addressLine1Placeholder}
            value={draft.addressLine1}
            onChange={(event) =>
              onFieldChange("addressLine1", event.target.value)
            }
          />
          <BrandFieldError>{errors.addressLine1}</BrandFieldError>
        </BrandField>

        <BrandField className="gap-2">
          <BrandFieldLabel htmlFor={checkoutFieldIds.addressLine2}>
            {checkoutAddressSection.addressLine2Label}
          </BrandFieldLabel>
          <BrandInput
            id={checkoutFieldIds.addressLine2}
            placeholder={checkoutAddressSection.addressLine2Placeholder}
            value={draft.addressLine2}
            onChange={(event) =>
              onFieldChange("addressLine2", event.target.value)
            }
          />
        </BrandField>

        <BrandFieldGroup className="gap-4 md:grid md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_11rem]">
          <BrandField
            data-invalid={errors.city ? "true" : undefined}
            className="gap-2"
          >
            <BrandFieldLabel htmlFor={checkoutFieldIds.city}>
              {checkoutAddressSection.cityLabel}
            </BrandFieldLabel>
            <BrandSelect
              value={draft.city || undefined}
              onValueChange={(value) => onFieldChange("city", value ?? "")}
            >
              <BrandSelectTrigger
                aria-invalid={Boolean(errors.city)}
                id={checkoutFieldIds.city}
              >
                <BrandSelectValue
                  placeholder={checkoutAddressSection.cityPlaceholder}
                />
              </BrandSelectTrigger>
              <BrandSelectContent>
                <BrandSelectGroup>
                  {checkoutCities.map((city) => (
                    <BrandSelectItem key={city} value={city}>
                      {city}
                    </BrandSelectItem>
                  ))}
                </BrandSelectGroup>
              </BrandSelectContent>
            </BrandSelect>
            <BrandFieldError>{errors.city}</BrandFieldError>
          </BrandField>

          <BrandField
            data-invalid={errors.district ? "true" : undefined}
            className="gap-2"
          >
            <BrandFieldLabel htmlFor={checkoutFieldIds.district}>
              {checkoutAddressSection.districtLabel}
            </BrandFieldLabel>
            <BrandSelect
              value={draft.district || undefined}
              onValueChange={(value) =>
                onFieldChange("district", value ?? "")
              }
            >
              <BrandSelectTrigger
                aria-invalid={Boolean(errors.district)}
                id={checkoutFieldIds.district}
              >
                <BrandSelectValue
                  placeholder={checkoutAddressSection.districtPlaceholder}
                />
              </BrandSelectTrigger>
              <BrandSelectContent>
                <BrandSelectGroup>
                  {checkoutDistricts.map((district) => (
                    <BrandSelectItem key={district} value={district}>
                      {district}
                    </BrandSelectItem>
                  ))}
                </BrandSelectGroup>
              </BrandSelectContent>
            </BrandSelect>
            <BrandFieldError>{errors.district}</BrandFieldError>
          </BrandField>

          <BrandField
            data-invalid={errors.postalCode ? "true" : undefined}
            className="gap-2"
          >
            <BrandFieldLabel htmlFor={checkoutFieldIds.postalCode}>
              {checkoutAddressSection.postalCodeLabel}
            </BrandFieldLabel>
            <BrandInput
              aria-invalid={Boolean(errors.postalCode)}
              id={checkoutFieldIds.postalCode}
              inputMode="numeric"
              placeholder={checkoutAddressSection.postalCodePlaceholder}
              value={draft.postalCode}
              onChange={(event) =>
                onFieldChange("postalCode", event.target.value)
              }
            />
            <BrandFieldError>{errors.postalCode}</BrandFieldError>
          </BrandField>
        </BrandFieldGroup>
      </BrandFieldGroup>
    </section>
  )
}

export { CheckoutAddressSection }
