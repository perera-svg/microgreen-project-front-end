import {
  BrandPagination,
  BrandPaginationContent,
  BrandPaginationItem,
  BrandPaginationLink,
  BrandPaginationNext,
  BrandPaginationPrevious,
} from "@/components/brand/brand-pagination"

import { shopPaginationLabels } from "./content"
import type { ShopCatalogController } from "./use-shop-catalog"

type ShopPaginationProps = Pick<
  ShopCatalogController,
  "currentPage" | "goToNextPage" | "goToPage" | "goToPreviousPage" | "totalPages"
>

function ShopPagination({
  currentPage,
  goToNextPage,
  goToPage,
  goToPreviousPage,
  totalPages,
}: ShopPaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <BrandPagination>
      <BrandPaginationContent>
        <BrandPaginationItem>
          <BrandPaginationPrevious
            className={currentPage === 1 ? "pointer-events-none opacity-45" : undefined}
            href="#products"
            text={shopPaginationLabels.previous}
            onClick={(event) => {
              event.preventDefault()
              if (currentPage > 1) {
                goToPreviousPage()
              }
            }}
          />
        </BrandPaginationItem>

        {pages.map((pageNumber) => (
          <BrandPaginationItem key={pageNumber}>
            <BrandPaginationLink
              className={
                pageNumber === currentPage
                  ? "border-primary bg-primary text-white hover:bg-primary/90 hover:text-white"
                  : undefined
              }
              href="#products"
              isActive={pageNumber === currentPage}
              onClick={(event) => {
                event.preventDefault()
                goToPage(pageNumber)
              }}
            >
              {pageNumber}
            </BrandPaginationLink>
          </BrandPaginationItem>
        ))}

        <BrandPaginationItem>
          <BrandPaginationNext
            className={
              currentPage === totalPages ? "pointer-events-none opacity-45" : undefined
            }
            href="#products"
            text={shopPaginationLabels.next}
            onClick={(event) => {
              event.preventDefault()
              if (currentPage < totalPages) {
                goToNextPage()
              }
            }}
          />
        </BrandPaginationItem>
      </BrandPaginationContent>
    </BrandPagination>
  )
}

export { ShopPagination }
