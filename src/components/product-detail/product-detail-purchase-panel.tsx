import HeartIcon from "lucide-react/dist/esm/icons/heart"
import ShoppingCartIcon from "lucide-react/dist/esm/icons/shopping-cart"

import { BrandButton } from "@/components/brand/brand-button"
import { BrandCard, BrandCardContent } from "@/components/brand/brand-card"
import { BrandSeparator } from "@/components/brand/brand-separator"
import {
  type ProductDetailRecord,
  type ProductDetailVariant,
  productDetailLabels,
} from "./content"
import { QuantityStepper } from "./quantity-stepper"
import { TrustItem } from "./trust-item"
import { VariantChip } from "./variant-chip"

type ProductDetailPurchasePanelProps = {
  detail: ProductDetailRecord
  onAddToCart: () => void
  onAddToWishlist: () => void
  onDecrementQuantity: () => void
  onIncrementQuantity: () => void
  onSelectVariant: (variantId: string) => void
  quantity: number
  selectedVariant: ProductDetailVariant
}

function ProductDetailPurchasePanel({
  detail,
  onAddToCart,
  onAddToWishlist,
  onDecrementQuantity,
  onIncrementQuantity,
  onSelectVariant,
  quantity,
  selectedVariant,
}: ProductDetailPurchasePanelProps) {
  return (
    <BrandCard className="gap-0 p-0">
      <BrandCardContent className="flex flex-col gap-6 px-6 py-6">
        <div className="flex flex-col gap-2">
          <p className="font-serif text-[2rem] leading-none text-foreground sm:text-[2.4rem]">
            {selectedVariant.priceLabel}
          </p>
          <p className="text-sm text-text-secondary">
            Packed fresh after harvest and chilled for same-day dispatch when
            available.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-meta text-[11px] tracking-[0.16em] text-text-tertiary uppercase">
            {productDetailLabels.selectVariant}
          </p>
          <div className="flex flex-wrap gap-2">
            {detail.variants.map((variant) => (
              <VariantChip
                key={variant.id}
                isSelected={variant.id === selectedVariant.id}
                label={variant.label}
                onSelect={() => onSelectVariant(variant.id)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-meta text-[11px] tracking-[0.16em] text-text-tertiary uppercase">
            {productDetailLabels.quantity}
          </p>
          <QuantityStepper
            quantity={quantity}
            onDecrement={onDecrementQuantity}
            onIncrement={onIncrementQuantity}
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <BrandButton className="flex-1" type="button" variant="destructive" onClick={onAddToCart}>
            <ShoppingCartIcon data-icon="inline-start" />
            {productDetailLabels.addToCart}
          </BrandButton>
          <BrandButton className="flex-1" type="button" variant="outline" onClick={onAddToWishlist}>
            <HeartIcon data-icon="inline-start" />
            {productDetailLabels.addToWishlist}
          </BrandButton>
        </div>

        <BrandSeparator />

        <div className="grid gap-3 sm:grid-cols-3">
          {detail.trustItems.map((item) => (
            <TrustItem key={item.label} {...item} />
          ))}
        </div>
      </BrandCardContent>
    </BrandCard>
  )
}

export { ProductDetailPurchasePanel }
