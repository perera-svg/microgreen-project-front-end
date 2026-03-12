import { Link } from "@tanstack/react-router"
import MinusIcon from "lucide-react/dist/esm/icons/minus"
import PlusIcon from "lucide-react/dist/esm/icons/plus"
import XIcon from "lucide-react/dist/esm/icons/x"

import { BrandButton } from "@/components/brand/brand-button"
import type { CartItem, CartItemIdentity } from "./cart-provider"

type CartItemRowProps = {
  item: CartItem
  onDecrement: (identity: CartItemIdentity) => void
  onIncrement: (identity: CartItemIdentity) => void
  onRemove: (identity: CartItemIdentity) => void
}

function CartItemRow({
  item,
  onDecrement,
  onIncrement,
  onRemove,
}: CartItemRowProps) {
  const identity = { productId: item.productId, variantId: item.variantId }

  return (
    <div className="flex flex-col gap-5 py-5 sm:flex-row sm:items-center">
      <Link
        className="overflow-hidden rounded-[10px] bg-secondary/40 sm:shrink-0"
        params={{ productId: item.productId }}
        to="/shop/$productId"
      >
        <img
          alt={item.imageAlt}
          className="size-20 object-cover"
          decoding="async"
          loading="lazy"
          src={item.image}
        />
      </Link>

      <div className="min-w-0 flex-1">
        <Link
          className="transition-colors hover:text-sage-dark"
          params={{ productId: item.productId }}
          to="/shop/$productId"
        >
          <h2 className="truncate font-serif text-xl leading-tight text-foreground">
            {item.name}
          </h2>
        </Link>
        <p className="mt-1 text-xs text-text-tertiary sm:text-[11px]">
          {item.subtitle}
        </p>
      </div>

      <div className="flex items-center gap-3 sm:ml-auto">
        <div className="inline-flex items-center rounded-[8px] border border-border bg-card">
          <BrandButton
            aria-label={`Decrease ${item.name} quantity`}
            className="h-8 w-8 rounded-[6px] border-0 px-0"
            size="icon-sm"
            type="button"
            variant="ghost"
            onClick={() => onDecrement(identity)}
          >
            <MinusIcon aria-hidden className="size-4" />
          </BrandButton>
          <span className="grid h-8 min-w-9 place-items-center border-x border-border px-2 font-meta text-[13px] text-foreground">
            {item.quantity}
          </span>
          <BrandButton
            aria-label={`Increase ${item.name} quantity`}
            className="h-8 w-8 rounded-[6px] border-0 px-0"
            size="icon-sm"
            type="button"
            variant="ghost"
            onClick={() => onIncrement(identity)}
          >
            <PlusIcon aria-hidden className="size-4" />
          </BrandButton>
        </div>

        <p className="min-w-20 text-right font-meta text-sm text-foreground sm:text-base">
          {item.lineTotalLabel}
        </p>

        <BrandButton
          aria-label={`Remove ${item.name}`}
          className="text-text-tertiary hover:text-foreground"
          size="icon-sm"
          type="button"
          variant="ghost"
          onClick={() => onRemove(identity)}
        >
          <XIcon aria-hidden className="size-4" />
        </BrandButton>
      </div>
    </div>
  )
}

export { CartItemRow }
