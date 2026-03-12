import type { ComponentProps } from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"
import { BrandButton } from "@/components/brand/brand-button"
import { cn } from "@/lib/utils"
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"

const BrandPagination = Pagination
const BrandPaginationItem = PaginationItem

type BrandPaginationContentProps = ComponentProps<typeof PaginationContent>

type BrandPaginationLinkProps = {
  isActive?: boolean
} & Pick<ComponentProps<typeof BrandButton>, "size"> &
  ComponentProps<"a">

function BrandPaginationContent({
  className,
  ...props
}: BrandPaginationContentProps) {
  return <PaginationContent className={cn("gap-1.5", className)} {...props} />
}

function BrandPaginationLink({
  className,
  isActive,
  size = "icon-sm",
  ...props
}: BrandPaginationLinkProps) {
  return (
    <BrandButton
      variant={isActive ? "outline" : "ghost"}
      size={size}
      className={cn("min-w-9", className)}
      nativeButton={false}
      render={
        <a
          aria-current={isActive ? "page" : undefined}
          data-slot="pagination-link"
          data-active={isActive}
          {...props}
        />
      }
    />
  )
}

function BrandPaginationPrevious({
  className,
  text = "Previous",
  ...props
}: ComponentProps<typeof BrandPaginationLink> & { text?: string }) {
  return (
    <BrandPaginationLink
      aria-label="Go to previous page"
      size="sm"
      className={cn("pl-3", className)}
      {...props}
    >
      <ChevronLeftIcon data-icon="inline-start" />
      <span className="hidden sm:block">{text}</span>
    </BrandPaginationLink>
  )
}

function BrandPaginationNext({
  className,
  text = "Next",
  ...props
}: ComponentProps<typeof BrandPaginationLink> & { text?: string }) {
  return (
    <BrandPaginationLink
      aria-label="Go to next page"
      size="sm"
      className={cn("pr-3", className)}
      {...props}
    >
      <span className="hidden sm:block">{text}</span>
      <ChevronRightIcon data-icon="inline-end" />
    </BrandPaginationLink>
  )
}

function BrandPaginationEllipsis({
  className,
  ...props
}: ComponentProps<typeof PaginationEllipsis>) {
  return (
    <PaginationEllipsis
      className={cn("rounded-[10px] bg-background text-text-tertiary", className)}
      {...props}
    >
      <MoreHorizontalIcon />
      <span className="sr-only">More pages</span>
    </PaginationEllipsis>
  )
}

export {
  BrandPagination,
  BrandPaginationContent,
  BrandPaginationEllipsis,
  BrandPaginationItem,
  BrandPaginationLink,
  BrandPaginationNext,
  BrandPaginationPrevious,
}

