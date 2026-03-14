import {
  BrandPagination,
  BrandPaginationContent,
  BrandPaginationItem,
  BrandPaginationLink,
  BrandPaginationNext,
  BrandPaginationPrevious,
} from "@/components/brand/brand-pagination"

import { blogPaginationLabels } from "./content"

type BlogPaginationProps = {
  currentPage: number
  goToNextPage: () => void
  goToPage: (pageNumber: number) => void
  goToPreviousPage: () => void
  totalPages: number
}

function BlogPagination({
  currentPage,
  goToNextPage,
  goToPage,
  goToPreviousPage,
  totalPages,
}: BlogPaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto flex max-w-7xl justify-center">
        <BrandPagination>
          <BrandPaginationContent>
            <BrandPaginationItem>
              <BrandPaginationPrevious
                className={currentPage === 1 ? "pointer-events-none opacity-45" : undefined}
                href="#blog-grid"
                text={blogPaginationLabels.previous}
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
                  href="#blog-grid"
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
                href="#blog-grid"
                text={blogPaginationLabels.next}
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
      </div>
    </section>
  )
}

export { BlogPagination }
