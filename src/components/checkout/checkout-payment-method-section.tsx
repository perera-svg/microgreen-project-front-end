import CreditCardIcon from "lucide-react/dist/esm/icons/credit-card"
import LandmarkIcon from "lucide-react/dist/esm/icons/landmark"
import WalletIcon from "lucide-react/dist/esm/icons/wallet"

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
  checkoutPaymentMethodSection,
  checkoutPaymentMethods,
} from "./content"
import type {
  CheckoutDraft,
  CheckoutDraftChangeHandler,
  CheckoutDraftErrors,
} from "./use-checkout-draft"

type CheckoutPaymentMethodSectionProps = {
  draft: CheckoutDraft
  errors: CheckoutDraftErrors
  onFieldChange: CheckoutDraftChangeHandler
}

const PAYMENT_METHOD_ICONS = {
  "bankTransfer": LandmarkIcon,
  "card": CreditCardIcon,
  "cashOnDelivery": WalletIcon,
} as const

function CheckoutPaymentMethodSection({
  draft,
  errors,
  onFieldChange,
}: CheckoutPaymentMethodSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <p className="max-w-2xl text-sm leading-6 text-text-secondary">
        {checkoutPaymentMethodSection.description}
      </p>

      <BrandFieldSet className="gap-4">
        <BrandFieldLegend className="sr-only">
          {checkoutPaymentMethodSection.assistiveLabel}
        </BrandFieldLegend>

        <BrandRadioGroup
          className="gap-3 md:grid md:grid-cols-3"
          value={draft.paymentMethod || undefined}
          onValueChange={(value) =>
            onFieldChange(
              "paymentMethod",
              checkoutPaymentMethods.find((method) => method.value === value)
                ?.value ?? ""
            )
          }
        >
          {checkoutPaymentMethods.map((method) => {
            const Icon = PAYMENT_METHOD_ICONS[method.value]
            const isActive = draft.paymentMethod === method.value

            return (
              <label
                key={method.value}
                className={cn(
                  "flex h-full cursor-pointer rounded-[18px] border p-5 transition-colors",
                  isActive
                    ? "border-primary bg-accent"
                    : "border-border bg-card hover:border-primary/30"
                )}
              >
                <div className="flex w-full items-start gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-primary">
                    <Icon aria-hidden className="size-5" />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-serif text-[1.25rem] leading-tight text-foreground">
                        {method.label}
                      </span>
                      <BrandRadioGroupItem
                        aria-invalid={Boolean(errors.paymentMethod)}
                        className="mt-1"
                        id={method.fieldId}
                        value={method.value}
                      />
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

        <BrandFieldError>{errors.paymentMethod}</BrandFieldError>
      </BrandFieldSet>
    </section>
  )
}

export { CheckoutPaymentMethodSection }
