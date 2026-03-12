import { useState } from "react"

import {
  shopPriceBounds,
  shopProducts,
  type ShopCategory,
  type ShopProduct,
  type ShopQuickFilterValue,
  type ShopSort,
  type ShopTag,
  SHOP_PAGE_SIZE,
} from "./content"

const DEFAULT_QUICK_FILTER: ShopQuickFilterValue = "all"
const DEFAULT_CATEGORY: ShopCategory = "all"
const DEFAULT_SELECTED_TAGS: ShopTag[] = ["organic"]
const DEFAULT_MAX_PRICE = shopPriceBounds.max
const DEFAULT_IN_STOCK_ONLY = true
const DEFAULT_SORT: ShopSort = "featured"

function sortProducts(products: ShopProduct[], sortBy: ShopSort) {
  const nextProducts = [...products]

  switch (sortBy) {
    case "newest":
      return nextProducts.sort((left, right) => right.releaseOrder - left.releaseOrder)
    case "price-asc":
      return nextProducts.sort((left, right) => left.price - right.price)
    case "price-desc":
      return nextProducts.sort((left, right) => right.price - left.price)
    case "featured":
    default:
      return nextProducts.sort((left, right) => left.featuredRank - right.featuredRank)
  }
}

function useShopCatalog() {
  const [quickFilter, setQuickFilterState] =
    useState<ShopQuickFilterValue>(DEFAULT_QUICK_FILTER)
  const [category, setCategoryState] = useState<ShopCategory>(DEFAULT_CATEGORY)
  const [selectedTags, setSelectedTags] =
    useState<ShopTag[]>(DEFAULT_SELECTED_TAGS)
  const [maxPrice, setMaxPriceState] = useState(DEFAULT_MAX_PRICE)
  const [inStockOnly, setInStockOnlyState] = useState(DEFAULT_IN_STOCK_ONLY)
  const [sortBy, setSortByState] = useState<ShopSort>(DEFAULT_SORT)
  const [page, setPage] = useState(1)

  const filteredProducts = shopProducts.filter((product) => {
    if (category !== "all" && product.category !== category) {
      return false
    }

    if (selectedTags.some((tag) => !product.tags.includes(tag))) {
      return false
    }

    if (quickFilter === "new" && !product.isNew) {
      return false
    }

    if (
      quickFilter !== "all" &&
      quickFilter !== "new" &&
      !product.tags.includes(quickFilter)
    ) {
      return false
    }

    if (product.price > maxPrice) {
      return false
    }

    if (inStockOnly && !product.inStock) {
      return false
    }

    return true
  })

  const sortedProducts = sortProducts(filteredProducts, sortBy)
  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / SHOP_PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * SHOP_PAGE_SIZE,
    currentPage * SHOP_PAGE_SIZE,
  )

  function setQuickFilter(nextQuickFilter: ShopQuickFilterValue) {
    setPage(1)
    setQuickFilterState(nextQuickFilter)
  }

  function setCategory(nextCategory: ShopCategory) {
    setPage(1)
    setCategoryState(nextCategory)
  }

  function toggleTag(tag: ShopTag, checked: boolean) {
    setPage(1)
    setSelectedTags((currentTags) => {
      if (checked) {
        return currentTags.includes(tag) ? currentTags : [...currentTags, tag]
      }

      return currentTags.filter((currentTag) => currentTag !== tag)
    })
  }

  function setMaxPrice(nextPrice: number) {
    setPage(1)
    setMaxPriceState(nextPrice)
  }

  function setInStockOnly(nextValue: boolean) {
    setPage(1)
    setInStockOnlyState(nextValue)
  }

  function setSortBy(nextSort: ShopSort) {
    setPage(1)
    setSortByState(nextSort)
  }

  function goToPage(nextPage: number) {
    const boundedPage = Math.max(1, Math.min(nextPage, totalPages))
    setPage(boundedPage)
  }

  function clearFilters() {
    setQuickFilterState(DEFAULT_QUICK_FILTER)
    setCategoryState(DEFAULT_CATEGORY)
    setSelectedTags(DEFAULT_SELECTED_TAGS)
    setMaxPriceState(DEFAULT_MAX_PRICE)
    setInStockOnlyState(DEFAULT_IN_STOCK_ONLY)
    setSortByState(DEFAULT_SORT)
    setPage(1)
  }

  const hasActiveRefinements =
    quickFilter !== DEFAULT_QUICK_FILTER ||
    category !== DEFAULT_CATEGORY ||
    maxPrice !== DEFAULT_MAX_PRICE ||
    inStockOnly !== DEFAULT_IN_STOCK_ONLY ||
    sortBy !== DEFAULT_SORT ||
    selectedTags.length !== DEFAULT_SELECTED_TAGS.length ||
    selectedTags.some((tag) => !DEFAULT_SELECTED_TAGS.includes(tag))

  return {
    category,
    clearFilters,
    currentPage,
    filteredCount: sortedProducts.length,
    goToNextPage: () => goToPage(currentPage + 1),
    goToPage,
    goToPreviousPage: () => goToPage(currentPage - 1),
    hasActiveRefinements,
    inStockOnly,
    maxPrice,
    paginatedProducts,
    quickFilter,
    selectedTags,
    setCategory,
    setInStockOnly,
    setMaxPrice,
    setQuickFilter,
    setSortBy,
    sortBy,
    toggleTag,
    totalPages,
    totalProducts: shopProducts.length,
  }
}

type ShopCatalogController = ReturnType<typeof useShopCatalog>

export { useShopCatalog }
export type { ShopCatalogController }
