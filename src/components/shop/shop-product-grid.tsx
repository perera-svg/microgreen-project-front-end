import SearchXIcon from "lucide-react/dist/esm/icons/search-x"

import { BrandButton } from "@/components/brand/brand-button"
import {
  BrandEmpty,
  BrandEmptyContent,
  BrandEmptyDescription,
  BrandEmptyHeader,
  BrandEmptyMedia,
  BrandEmptyTitle,
} from "@/components/brand/brand-empty"

import { shopEmptyState, type ShopProduct } from "./content"
import { ShopProductCard } from "./shop-product-card"

type ShopProductGridProps = {
  onAddToCart: (productName: string) => void
  onClearFilters: () => void
  products: ShopProduct[]
}

function ShopProductGrid({
  onAddToCart,
  onClearFilters,
  products,
}: ShopProductGridProps) {
  if (products.length === 0) {
    return (
      <BrandEmpty className="min-h-[24rem]">
        <BrandEmptyHeader>
          <BrandEmptyMedia variant="icon">
            <SearchXIcon aria-hidden />
          </BrandEmptyMedia>
          <BrandEmptyTitle>{shopEmptyState.title}</BrandEmptyTitle>
          <BrandEmptyDescription>{shopEmptyState.description}</BrandEmptyDescription>
        </BrandEmptyHeader>
        <BrandEmptyContent>
          <BrandButton type="button" variant="outline" onClick={onClearFilters}>
            {shopEmptyState.actionLabel}
          </BrandButton>
        </BrandEmptyContent>
      </BrandEmpty>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ShopProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export { ShopProductGrid }
