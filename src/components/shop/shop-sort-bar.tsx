import LayoutGridIcon from "lucide-react/dist/esm/icons/layout-grid"
import ListIcon from "lucide-react/dist/esm/icons/list"

import { BrandButton } from "@/components/brand/brand-button"
import {
  BrandSelect,
  BrandSelectContent,
  BrandSelectGroup,
  BrandSelectItem,
  BrandSelectTrigger,
  BrandSelectValue,
} from "@/components/brand/brand-select"

import { shopSort, shopSortOptions, shopViewControls } from "./content"
import type { ShopCatalogController } from "./use-shop-catalog"

type ShopSortBarProps = Pick<
  ShopCatalogController,
  "filteredCount" | "setSortBy" | "sortBy" | "totalProducts"
>

function ShopSortBar({
  filteredCount,
  setSortBy,
  sortBy,
  totalProducts,
}: ShopSortBarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-[13px] text-text-secondary">
          Showing {filteredCount} of {totalProducts}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-text-secondary">{shopSort.label}</span>
          <BrandSelect
            value={sortBy}
            onValueChange={(value) => setSortBy(value as typeof sortBy)}
          >
            <BrandSelectTrigger className="w-[12.5rem]">
              <BrandSelectValue />
            </BrandSelectTrigger>
            <BrandSelectContent>
              <BrandSelectGroup>
                {shopSortOptions.map((option) => (
                  <BrandSelectItem key={option.value} value={option.value}>
                    {option.label}
                  </BrandSelectItem>
                ))}
              </BrandSelectGroup>
            </BrandSelectContent>
          </BrandSelect>
        </div>
      </div>

      <div className="flex items-center gap-2 self-start sm:self-auto">
        <BrandButton
          aria-label={shopViewControls.gridLabel}
          size="icon-sm"
          type="button"
          variant="secondary"
        >
          <LayoutGridIcon aria-hidden />
        </BrandButton>
        <BrandButton
          aria-label={shopViewControls.listLabel}
          disabled
          size="icon-sm"
          type="button"
          variant="outline"
        >
          <ListIcon aria-hidden />
        </BrandButton>
      </div>
    </div>
  )
}

export { ShopSortBar }
