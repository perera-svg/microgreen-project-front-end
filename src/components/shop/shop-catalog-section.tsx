import type { ShopProduct } from "./content"
import { ShopFilterSidebar } from "./shop-filter-sidebar"
import { ShopPagination } from "./shop-pagination"
import { ShopProductGrid } from "./shop-product-grid"
import { ShopSortBar } from "./shop-sort-bar"
import type { ShopCatalogController } from "./use-shop-catalog"

type ShopCatalogSectionProps = {
  catalog: ShopCatalogController
  onAddToCart: (product: ShopProduct) => void
}

function ShopCatalogSection({
  catalog,
  onAddToCart,
}: ShopCatalogSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <ShopFilterSidebar
          category={catalog.category}
          clearFilters={catalog.clearFilters}
          inStockOnly={catalog.inStockOnly}
          maxPrice={catalog.maxPrice}
          selectedTags={catalog.selectedTags}
          setCategory={catalog.setCategory}
          setInStockOnly={catalog.setInStockOnly}
          setMaxPrice={catalog.setMaxPrice}
          toggleTag={catalog.toggleTag}
        />

        <div className="flex min-w-0 flex-col gap-8">
          <ShopSortBar
            filteredCount={catalog.filteredCount}
            setSortBy={catalog.setSortBy}
            sortBy={catalog.sortBy}
            totalProducts={catalog.totalProducts}
          />

          <div id="products">
            <ShopProductGrid
              products={catalog.paginatedProducts}
              onAddToCart={onAddToCart}
              onClearFilters={catalog.clearFilters}
            />
          </div>

          <ShopPagination
            currentPage={catalog.currentPage}
            goToNextPage={catalog.goToNextPage}
            goToPage={catalog.goToPage}
            goToPreviousPage={catalog.goToPreviousPage}
            totalPages={catalog.totalPages}
          />
        </div>
      </div>
    </section>
  )
}

export { ShopCatalogSection }
