import { Fragment } from "react"
import { Link } from "@tanstack/react-router"
import ArrowLeftIcon from "lucide-react/dist/esm/icons/arrow-left"

import { BrandSeparator } from "@/components/brand/brand-separator"
import type { CartItem, CartItemIdentity } from "./cart-provider"
import { CartItemRow } from "./cart-item-row"
import { CartPromoRow } from "./cart-promo-row"
import { cartLabels, cartLinks } from "./content"

type CartItemsSectionProps = {
  items: CartItem[]
  onApplyPromo: (promoCode: string) => void
  onDecrement: (identity: CartItemIdentity) => void
  onIncrement: (identity: CartItemIdentity) => void
  onRemove: (identity: CartItemIdentity) => void
}

function CartItemsSection({
  items,
  onApplyPromo,
  onDecrement,
  onIncrement,
  onRemove,
}: CartItemsSectionProps) {
  return (
    <section className="min-w-0">
      <div className="flex flex-col">
        {items.map((item, index) => (
          <Fragment key={item.id}>
            <CartItemRow
              item={item}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
              onRemove={onRemove}
            />
            {index < items.length - 1 ? <BrandSeparator /> : null}
          </Fragment>
        ))}

        <BrandSeparator />
        <CartPromoRow onApplyPromo={onApplyPromo} />

        <Link
          className="inline-flex w-fit items-center gap-2 py-4 text-[13px] font-medium text-sage-dark transition-colors hover:text-foreground"
          to={cartLinks.continueShoppingTo}
        >
          <ArrowLeftIcon aria-hidden className="size-4" />
          {cartLabels.continueShopping}
        </Link>
      </div>
    </section>
  )
}

export { CartItemsSection }
