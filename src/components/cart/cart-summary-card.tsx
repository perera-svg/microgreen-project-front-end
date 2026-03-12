import { Link } from "@tanstack/react-router"
import ArrowRightIcon from "lucide-react/dist/esm/icons/arrow-right"
import LockIcon from "lucide-react/dist/esm/icons/lock"

import { BrandButton } from "@/components/brand/brand-button"
import { BrandCard, BrandCardContent } from "@/components/brand/brand-card"
import { BrandSeparator } from "@/components/brand/brand-separator"
import { CartPaymentPills } from "./cart-payment-pills"
import { cartLabels, cartLinks } from "./content"

type CartSummaryCardProps = {
  deliveryFeeLabel: string
  discountLabel: string
  subtotalLabel: string
  totalLabel: string
}

function CartSummaryCard({
  deliveryFeeLabel,
  discountLabel,
  subtotalLabel,
  totalLabel,
}: CartSummaryCardProps) {
  return (
    <BrandCard className="gap-0 p-0 lg:sticky lg:top-6">
      <BrandCardContent className="flex flex-col gap-5 px-8 py-8">
        <h2 className="font-serif text-[1.5rem] text-foreground">
          {cartLabels.orderSummary}
        </h2>

        <BrandSeparator />

        <div className="flex items-center justify-between gap-4 text-sm text-text-secondary">
          <span>{cartLabels.subtotal}</span>
          <span className="font-meta text-foreground">{subtotalLabel}</span>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm text-text-secondary">
          <span>{cartLabels.delivery}</span>
          <span className="font-meta text-foreground">{deliveryFeeLabel}</span>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm text-text-secondary">
          <span>{cartLabels.discount}</span>
          <span className="font-meta text-sage-dark">- {discountLabel}</span>
        </div>

        <BrandSeparator />

        <div className="flex items-center justify-between gap-4">
          <span className="text-base font-semibold text-foreground">
            {cartLabels.total}
          </span>
          <span className="font-meta text-lg font-bold text-foreground">
            {totalLabel}
          </span>
        </div>

        <BrandButton
          className="h-12 w-full rounded-full"
          nativeButton={false}
          render={<Link to={cartLinks.checkoutTo} />}
          variant="destructive"
        >
          {cartLabels.checkout}
          <ArrowRightIcon data-icon="inline-end" />
        </BrandButton>

        <div className="flex items-center justify-center gap-2 text-[11px] text-text-tertiary">
          <LockIcon aria-hidden className="size-3" />
          <span>{cartLabels.secureCheckout}</span>
        </div>

        <CartPaymentPills />
      </BrandCardContent>
    </BrandCard>
  )
}

export { CartSummaryCard }
