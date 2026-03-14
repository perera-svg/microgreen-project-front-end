import {
  BrandCard,
  BrandCardContent,
  BrandCardHeader,
  BrandCardTitle,
} from "@/components/brand/brand-card"
import { BrandSeparator } from "@/components/brand/brand-separator"
import { cn } from "@/lib/utils"

import type { CartItem } from "@/components/cart/cart-provider"

import { checkoutSummary } from "./content"
import { CheckoutSummaryLine } from "./checkout-summary-line"

type CheckoutSummaryCardProps = {
  deliveryFeeLabel: string
  discountLabel: string
  items: CartItem[]
  sticky?: boolean
  subtotalLabel: string
  totalLabel: string
}

function CheckoutSummaryCard({
  deliveryFeeLabel,
  discountLabel,
  items,
  sticky = true,
  subtotalLabel,
  totalLabel,
}: CheckoutSummaryCardProps) {
  return (
    <BrandCard
      className={cn("gap-0 px-0 py-0", sticky && "lg:sticky lg:top-6")}
    >
      <BrandCardHeader className="px-6 pb-0 pt-6">
        <BrandCardTitle className="text-[1.55rem]">
          {checkoutSummary.orderSummaryLabel}
        </BrandCardTitle>
      </BrandCardHeader>

      <BrandCardContent className="flex flex-col gap-5 px-6 pb-6 pt-5">
        <div className="flex max-h-[23rem] flex-col gap-4 overflow-y-auto pr-1">
          {items.map((item) => (
            <CheckoutSummaryLine key={item.id} item={item} />
          ))}
        </div>

        <BrandSeparator />

        <div className="flex flex-col gap-3 text-sm text-text-secondary">
          <div className="flex items-center justify-between gap-4">
            <span>{checkoutSummary.subtotalLabel}</span>
            <span className="font-meta text-foreground">{subtotalLabel}</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span>{checkoutSummary.deliveryLabel}</span>
            <span className="font-meta text-foreground">
              {deliveryFeeLabel}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span>{checkoutSummary.discountLabel}</span>
            <span className="font-meta text-sage-dark">- {discountLabel}</span>
          </div>
        </div>

        <BrandSeparator />

        <div className="flex items-center justify-between gap-4">
          <span className="text-base font-semibold text-foreground">
            {checkoutSummary.totalLabel}
          </span>
          <span className="font-meta text-lg font-bold text-foreground">
            {totalLabel}
          </span>
        </div>
      </BrandCardContent>
    </BrandCard>
  )
}

export { CheckoutSummaryCard }
