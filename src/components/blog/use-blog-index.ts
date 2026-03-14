import { useState } from "react"

import {
  BLOG_PAGE_SIZE,
  blogArticles,
  type BlogArticleData,
  type BlogCategory,
} from "./content"

function clampPage(page: number, totalPages: number) {
  return Math.min(Math.max(page, 1), totalPages)
}

function useBlogIndex() {
  const [selectedCategory, setSelectedCategoryState] =
    useState<BlogCategory>("all")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredArticles =
    selectedCategory === "all"
      ? blogArticles
      : blogArticles.filter((article) => article.category === selectedCategory)
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / BLOG_PAGE_SIZE))
  const safeCurrentPage = clampPage(currentPage, totalPages)
  const startIndex = (safeCurrentPage - 1) * BLOG_PAGE_SIZE
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + BLOG_PAGE_SIZE
  )

  function setCategory(nextCategory: BlogCategory) {
    setSelectedCategoryState(nextCategory)
    setCurrentPage(1)
  }

  function goToPage(pageNumber: number) {
    setCurrentPage(clampPage(pageNumber, totalPages))
  }

  function goToNextPage() {
    setCurrentPage((pageNumber) => clampPage(pageNumber + 1, totalPages))
  }

  function goToPreviousPage() {
    setCurrentPage((pageNumber) => clampPage(pageNumber - 1, totalPages))
  }

  function resetCategory() {
    setCategory("all")
  }

  return {
    currentPage: safeCurrentPage,
    filteredArticles,
    goToNextPage,
    goToPage,
    goToPreviousPage,
    hasResults: filteredArticles.length > 0,
    paginatedArticles,
    resetCategory,
    selectedCategory,
    setCategory,
    totalPages,
  }
}

export { useBlogIndex }
export type { BlogArticleData }
