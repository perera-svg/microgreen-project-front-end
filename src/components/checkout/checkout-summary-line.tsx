import type { CartItem } from "@/components/cart/cart-provider"

import { checkoutSummary } from "./content"

type CheckoutSummaryLineProps = {
  item: CartItem
}

function CheckoutSummaryLine({ item }: CheckoutSummaryLineProps) {
  return (
    <div className="flex items-center gap-4">
      <img
        alt={item.imageAlt}
        className="size-[4.5rem] rounded-[14px] border border-border object-cover"
        loading="lazy"
        src={item.image}
      />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground">
          {item.name}
        </p>
        <p className="truncate text-xs text-text-secondary">
          {item.variantLabel}
        </p>
        <p className="font-meta text-[11px] tracking-[0.08em] text-text-tertiary uppercase">
          {checkoutSummary.quantityPrefix} {item.quantity}
        </p>
      </div>

      <p className="font-meta text-sm font-semibold text-foreground">
        {item.lineTotalLabel}
      </p>
    </div>
  )
}

export { CheckoutSummaryLine }
