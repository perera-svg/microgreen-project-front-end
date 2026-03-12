import { BrandBadge } from "@/components/brand/brand-badge"
import { BrandButton } from "@/components/brand/brand-button"
import { BrandCard, BrandCardContent } from "@/components/brand/brand-card"
import { BrandSeparator } from "@/components/brand/brand-separator"

import { shopProductCardCtaLabel, type ShopProduct } from "./content"

type ShopProductCardProps = {
  onAddToCart: (productName: string) => void
  product: ShopProduct
}

function ShopProductCard({ onAddToCart, product }: ShopProductCardProps) {
  return (
    <BrandCard className="h-full gap-0 overflow-hidden py-0">
      <div className="relative aspect-[1.4] overflow-hidden bg-secondary/40">
        <img
          alt={product.imageAlt}
          className="h-full w-full object-cover"
          decoding="async"
          loading="lazy"
          src={product.image}
        />
        <BrandBadge className="absolute left-3 top-3" variant="secondary">
          {product.badgeLabel}
        </BrandBadge>
      </div>

      <BrandCardContent className="flex h-full flex-col gap-4 px-4 py-4">
        <div className="flex flex-col gap-2">
          <p className="text-[10px] font-semibold tracking-[0.18em] text-primary uppercase">
            {product.categoryLabel}
          </p>
          <h3 className="font-serif text-[1.45rem] leading-tight text-foreground">
            {product.name}
          </h3>
          <p className="min-h-[3.9rem] text-sm leading-6 text-text-secondary">
            {product.description}
          </p>
        </div>

        <BrandSeparator />

        <div className="mt-auto flex items-center justify-between gap-4">
          <p className="font-meta text-base text-foreground">{product.priceLabel}</p>

          {product.inStock ? (
            <BrandButton
              className="h-8 rounded-full px-4 text-[12px]"
              size="sm"
              type="button"
              variant="destructive"
              onClick={() => onAddToCart(product.name)}
            >
              {shopProductCardCtaLabel}
            </BrandButton>
          ) : (
            <BrandButton
              className="h-8 rounded-full px-4 text-[12px]"
              disabled
              size="sm"
              type="button"
              variant="outline"
            >
              Out of Stock
            </BrandButton>
          )}
        </div>
      </BrandCardContent>
    </BrandCard>
  )
}

export { ShopProductCard }
