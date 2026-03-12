import StarIcon from "lucide-react/dist/esm/icons/star"

import { BrandBadge } from "@/components/brand/brand-badge"
import { type ProductDetailRecord } from "./content"
import { type ShopProduct } from "@/components/shop/content"

type ProductDetailSummaryProps = {
  detail: ProductDetailRecord
  product: ShopProduct
}

function ProductDetailSummary({
  detail,
  product,
}: ProductDetailSummaryProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <BrandBadge variant={product.inStock ? "secondary" : "outline"}>
          {detail.stockLabel}
        </BrandBadge>
        <p className="font-meta text-[11px] tracking-[0.18em] text-text-tertiary uppercase">
          {product.categoryLabel}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-serif text-[2.4rem] leading-[1.05] text-foreground sm:text-[3rem]">
          {product.name}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
          <div className="flex items-center gap-1 text-destructive">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon
                key={index}
                aria-hidden
                className="size-4 fill-current"
              />
            ))}
          </div>
          <p className="font-meta text-[11px] tracking-[0.12em] text-text-tertiary uppercase">
            {detail.rating.toFixed(1)} ({detail.reviewCount} reviews)
          </p>
        </div>
      </div>
    </div>
  )
}

export { ProductDetailSummary }
