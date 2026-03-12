import { cn } from "@/lib/utils"
import { BrandButton } from "@/components/brand/brand-button"

import { shopHeader, shopQuickFilters } from "./content"
import type { ShopCatalogController } from "./use-shop-catalog"

type ShopHeaderProps = Pick<
  ShopCatalogController,
  "quickFilter" | "setQuickFilter"
>

function ShopHeader({ quickFilter, setQuickFilter }: ShopHeaderProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5">
        <div className="space-y-2">
          <h1 className="text-4xl leading-tight text-foreground sm:text-[2.75rem]">
            {shopHeader.title}
          </h1>
          <p className="text-sm text-text-secondary sm:text-base">
            {shopHeader.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {shopQuickFilters.map((filter) => (
            <BrandButton
              key={filter.value}
              className={cn(
                "h-9 rounded-full px-4",
                quickFilter === filter.value &&
                  "border-primary bg-secondary text-sage-dark hover:bg-secondary",
              )}
              type="button"
              variant="outline"
              onClick={() => setQuickFilter(filter.value)}
            >
              {filter.label}
            </BrandButton>
          ))}
        </div>
      </div>
    </section>
  )
}

export { ShopHeader }
