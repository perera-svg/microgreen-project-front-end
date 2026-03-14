import {
  BrandCard,
  BrandCardContent,
} from "@/components/brand/brand-card"

import {
  checkoutDeliveryDateOptions,
  checkoutDeliveryMethods,
  checkoutDeliveryRecap,
  checkoutDeliveryWindowOptions,
} from "./content"
import type { CheckoutDraft } from "./use-checkout-draft"

type CheckoutDeliverySummaryCardProps = {
  draft: CheckoutDraft
}

function resolveOptionLabel(
  options: ReadonlyArray<{ label: string; value: string }>,
  value: string
) {
  return options.find((option) => option.value === value)?.label
}

function CheckoutDeliverySummaryCard({
  draft,
}: CheckoutDeliverySummaryCardProps) {
  const deliveryMethodLabel =
    checkoutDeliveryMethods.find((method) => method.value === draft.deliveryMethod)
      ?.label ?? "Delivery pending"
  const deliveryDateLabel =
    resolveOptionLabel(checkoutDeliveryDateOptions, draft.deliveryDate) ??
    "Select date"
  const deliveryWindowLabel =
    resolveOptionLabel(checkoutDeliveryWindowOptions, draft.deliveryWindow) ??
    "Select time window"

  return (
    <BrandCard className="gap-0 px-0 py-0">
      <BrandCardContent className="flex flex-col gap-1 px-5 py-5">
        <span className="text-xs font-semibold tracking-[0.16em] text-text-tertiary uppercase">
          {checkoutDeliveryRecap.title}
        </span>
        <p className="text-sm font-medium text-foreground">
          {deliveryMethodLabel} · {deliveryDateLabel} · {deliveryWindowLabel}
        </p>
      </BrandCardContent>
    </BrandCard>
  )
}

export { CheckoutDeliverySummaryCard }
