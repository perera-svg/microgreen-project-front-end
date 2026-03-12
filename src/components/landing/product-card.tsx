import { Link } from "@tanstack/react-router"

import { BrandBadge } from "@/components/brand/brand-badge"
import { BrandButton } from "@/components/brand/brand-button"
import { BrandCard } from "@/components/brand/brand-card"
import { BrandCardContent } from "@/components/brand/brand-card"
import { cn } from "@/lib/utils"

import { landingProductCardCtaHref, landingProductCardCtaLabel } from "./content"
import type { ProductCardData } from "./content"

function ProductCard({
  badge,
  badgeClassName,
  category,
  description,
  image,
  imageAlt,
  name,
  price,
}: ProductCardData) {
  return (
    <BrandCard className="h-full gap-0 overflow-hidden py-0">
      <img
        alt={imageAlt}
        className="h-52 w-full object-cover"
        decoding="async"
        loading="lazy"
        src={image}
      />
      <BrandCardContent className="flex h-full flex-col gap-4 px-4 py-4">
        <div className="flex flex-col gap-2">
          <BrandBadge
            className={cn("self-start", badgeClassName)}
            variant="secondary"
          >
            {badge}
          </BrandBadge>
          <p className="text-xs text-text-tertiary">{category}</p>
          <h3 className="font-serif text-[1.45rem] leading-tight text-foreground">
            {name}
          </h3>
          <p className="text-sm leading-6 text-text-secondary">{description}</p>
        </div>
        <div className="mt-auto flex flex-col gap-4">
          <p className="font-meta text-base text-foreground">{price}</p>
          <BrandButton
            className="w-full"
            nativeButton={false}
            render={<Link to={landingProductCardCtaHref} />}
          >
            {landingProductCardCtaLabel}
          </BrandButton>
        </div>
      </BrandCardContent>
    </BrandCard>
  )
}

export { ProductCard }
