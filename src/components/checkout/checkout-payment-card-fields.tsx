import {
  BrandField,
  BrandFieldError,
  BrandFieldGroup,
  BrandFieldLabel,
} from "@/components/brand/brand-field"
import { BrandInput } from "@/components/brand/brand-input"

import {
  checkoutFieldIds,
  checkoutPaymentCardSection,
} from "./content"
import type {
  CheckoutDraft,
  CheckoutDraftChangeHandler,
  CheckoutDraftErrors,
} from "./use-checkout-draft"

type CheckoutPaymentCardFieldsProps = {
  draft: CheckoutDraft
  errors: CheckoutDraftErrors
  onFieldChange: CheckoutDraftChangeHandler
}

function CheckoutPaymentCardFields({
  draft,
  errors,
  onFieldChange,
}: CheckoutPaymentCardFieldsProps) {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="font-serif text-[1.75rem] leading-tight text-foreground">
        {checkoutPaymentCardSection.title}
      </h2>

      <BrandFieldGroup className="gap-4">
        <BrandField
          data-invalid={errors.cardholderName ? "true" : undefined}
          className="gap-2"
        >
          <BrandFieldLabel htmlFor={checkoutFieldIds.cardholderName}>
            {checkoutPaymentCardSection.cardholderNameLabel}
          </BrandFieldLabel>
          <BrandInput
            aria-invalid={Boolean(errors.cardholderName)}
            id={checkoutFieldIds.cardholderName}
            placeholder={checkoutPaymentCardSection.cardholderNamePlaceholder}
            value={draft.cardholderName}
            onChange={(event) =>
              onFieldChange("cardholderName", event.target.value)
            }
          />
          <BrandFieldError>{errors.cardholderName}</BrandFieldError>
        </BrandField>

        <BrandField
          data-invalid={errors.cardNumber ? "true" : undefined}
          className="gap-2"
        >
          <BrandFieldLabel htmlFor={checkoutFieldIds.cardNumber}>
            {checkoutPaymentCardSection.cardNumberLabel}
          </BrandFieldLabel>
          <BrandInput
            aria-invalid={Boolean(errors.cardNumber)}
            id={checkoutFieldIds.cardNumber}
            inputMode="numeric"
            placeholder={checkoutPaymentCardSection.cardNumberPlaceholder}
            value={draft.cardNumber}
            onChange={(event) => onFieldChange("cardNumber", event.target.value)}
          />
          <BrandFieldError>{errors.cardNumber}</BrandFieldError>
        </BrandField>

        <BrandField
          data-invalid={errors.billingAddress ? "true" : undefined}
          className="gap-2"
        >
          <BrandFieldLabel htmlFor={checkoutFieldIds.billingAddress}>
            {checkoutPaymentCardSection.billingAddressLabel}
          </BrandFieldLabel>
          <BrandInput
            aria-invalid={Boolean(errors.billingAddress)}
            id={checkoutFieldIds.billingAddress}
            placeholder={checkoutPaymentCardSection.billingAddressPlaceholder}
            value={draft.billingAddress}
            onChange={(event) =>
              onFieldChange("billingAddress", event.target.value)
            }
          />
          <BrandFieldError>{errors.billingAddress}</BrandFieldError>
        </BrandField>

        <BrandFieldGroup className="gap-4 md:grid md:grid-cols-2">
          <BrandField
            data-invalid={errors.expiryDate ? "true" : undefined}
            className="gap-2"
          >
            <BrandFieldLabel htmlFor={checkoutFieldIds.expiryDate}>
              {checkoutPaymentCardSection.expiryDateLabel}
            </BrandFieldLabel>
            <BrandInput
              aria-invalid={Boolean(errors.expiryDate)}
              id={checkoutFieldIds.expiryDate}
              inputMode="numeric"
              placeholder={checkoutPaymentCardSection.expiryDatePlaceholder}
              value={draft.expiryDate}
              onChange={(event) =>
                onFieldChange("expiryDate", event.target.value)
              }
            />
            <BrandFieldError>{errors.expiryDate}</BrandFieldError>
          </BrandField>

          <BrandField
            data-invalid={errors.cvv ? "true" : undefined}
            className="gap-2"
          >
            <BrandFieldLabel htmlFor={checkoutFieldIds.cvv}>
              {checkoutPaymentCardSection.cvvLabel}
            </BrandFieldLabel>
            <BrandInput
              aria-invalid={Boolean(errors.cvv)}
              id={checkoutFieldIds.cvv}
              inputMode="numeric"
              placeholder={checkoutPaymentCardSection.cvvPlaceholder}
              value={draft.cvv}
              onChange={(event) => onFieldChange("cvv", event.target.value)}
            />
            <BrandFieldError>{errors.cvv}</BrandFieldError>
          </BrandField>
        </BrandFieldGroup>

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

export { CheckoutPaymentCardFields }
