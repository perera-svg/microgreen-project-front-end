import { Link } from "@tanstack/react-router"

import { BrandBadge } from "@/components/brand/brand-badge"
import { BrandButton } from "@/components/brand/brand-button"
import { BrandCard, BrandCardContent } from "@/components/brand/brand-card"
import { BrandSeparator } from "@/components/brand/brand-separator"
import { type ShopProduct } from "@/components/shop/content"
import {
  getProductDetailCardDescription,
  getProductDetailCardImage,
} from "./content"

type RelatedProductCardProps = {
  product: ShopProduct
}

function RelatedProductCard({ product }: RelatedProductCardProps) {
  const cardImage = getProductDetailCardImage(product.id, product.image)
  const cardDescription = getProductDetailCardDescription(product)

  return (
    <BrandCard className="h-full gap-0 overflow-hidden py-0">
      <Link
        className="group block overflow-hidden bg-secondary/40"
        params={{ productId: product.id }}
        to="/shop/$productId"
      >
        <div className="relative aspect-[1.18]">
          <img
            alt={product.imageAlt}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            decoding="async"
            loading="lazy"
            src={cardImage}
          />
          <BrandBadge className="absolute left-3 top-3" variant="secondary">
            {product.badgeLabel}
          </BrandBadge>
        </div>
      </Link>

      <BrandCardContent className="flex h-full flex-col gap-4 px-4 py-4">
        <div className="flex flex-col gap-2">
          <p className="text-[10px] font-semibold tracking-[0.18em] text-primary uppercase">
            {product.categoryLabel}
          </p>
          <Link
            className="transition-colors hover:text-sage-dark"
            params={{ productId: product.id }}
            to="/shop/$productId"
          >
            <h3 className="font-serif text-[1.4rem] leading-tight text-foreground">
              {product.name}
            </h3>
          </Link>
          <p className="min-h-[3.3rem] text-sm leading-6 text-text-secondary">
            {cardDescription}
          </p>
        </div>

        <BrandSeparator />

        <div className="mt-auto flex items-center justify-between gap-4">
          <p className="font-meta text-base text-foreground">{product.priceLabel}</p>
          <BrandButton
            nativeButton={false}
            render={<Link params={{ productId: product.id }} to="/shop/$productId" />}
            size="sm"
            variant="outline"
          >
            View
          </BrandButton>
        </div>
      </BrandCardContent>
    </BrandCard>
  )
}

export { RelatedProductCard }
