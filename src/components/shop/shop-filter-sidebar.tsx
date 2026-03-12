import { BrandButton } from "@/components/brand/brand-button"
import { BrandCheckbox } from "@/components/brand/brand-checkbox"
import {
  BrandRadioGroup,
  BrandRadioGroupItem,
} from "@/components/brand/brand-radio-group"
import { BrandSeparator } from "@/components/brand/brand-separator"
import { BrandSlider } from "@/components/brand/brand-slider"

import {
  shopCategoryOptions,
  shopPriceBounds,
  shopSidebar,
  shopTagOptions,
} from "./content"
import type { ShopCatalogController } from "./use-shop-catalog"

type ShopFilterSidebarProps = Pick<
  ShopCatalogController,
  | "category"
  | "clearFilters"
  | "inStockOnly"
  | "maxPrice"
  | "selectedTags"
  | "setCategory"
  | "setInStockOnly"
  | "setMaxPrice"
  | "toggleTag"
>

function ShopFilterSidebar({
  category,
  clearFilters,
  inStockOnly,
  maxPrice,
  selectedTags,
  setCategory,
  setInStockOnly,
  setMaxPrice,
  toggleTag,
}: ShopFilterSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="flex flex-col gap-6">
        <section className="flex flex-col gap-3">
          <h2 className="text-[13px] font-semibold text-foreground">
            {shopSidebar.categoriesTitle}
          </h2>
          <BrandRadioGroup
            className="gap-3"
            value={category}
            onValueChange={(value) => setCategory(value as typeof category)}
          >
            {shopCategoryOptions.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-3 text-[13px] text-foreground"
              >
                <BrandRadioGroupItem value={option.value} />
                <span
                  className={
                    option.value === category ? "text-foreground" : "text-text-secondary"
                  }
                >
                  {option.label}
                </span>
              </label>
            ))}
          </BrandRadioGroup>
        </section>

        <BrandSeparator />

        <section className="flex flex-col gap-3">
          <h2 className="text-[13px] font-semibold text-foreground">
            {shopSidebar.priceTitle}
          </h2>
          <BrandSlider
            max={shopPriceBounds.max}
            min={shopPriceBounds.min}
            step={shopPriceBounds.step}
            value={[maxPrice]}
            onValueChange={(values) =>
              setMaxPrice(
                Array.isArray(values) ? values[0] ?? shopPriceBounds.max : values,
              )
            }
          />
          <div className="flex items-center justify-between">
            <span className="font-meta text-xs text-text-tertiary">Rs. 0</span>
            <span className="font-meta text-xs text-text-tertiary">
              Rs. {maxPrice.toLocaleString()}
            </span>
          </div>
        </section>

        <BrandSeparator />

        <section className="flex flex-col gap-3">
          <h2 className="text-[13px] font-semibold text-foreground">
            {shopSidebar.tagsTitle}
          </h2>
          {shopTagOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 text-[13px] text-foreground"
            >
              <BrandCheckbox
                checked={selectedTags.includes(option.value)}
                onCheckedChange={(checked) =>
                  toggleTag(option.value, checked === true)
                }
              />
              <span
                className={
                  selectedTags.includes(option.value)
                    ? "text-foreground"
                    : "text-text-secondary"
                }
              >
                {option.label}
              </span>
            </label>
          ))}
        </section>

        <BrandSeparator />

        <section className="flex flex-col gap-4">
          <label className="flex cursor-pointer items-center gap-3 text-[13px] text-foreground">
            <BrandCheckbox
              checked={inStockOnly}
              onCheckedChange={(checked) => setInStockOnly(checked === true)}
            />
            <span>{shopSidebar.availabilityLabel}</span>
          </label>

          <BrandButton
            className="w-full rounded-full"
            type="button"
            variant="outline"
            onClick={clearFilters}
          >
            {shopSidebar.clearFiltersLabel}
          </BrandButton>
        </section>
      </div>
    </aside>
  )
}

export { ShopFilterSidebar }
