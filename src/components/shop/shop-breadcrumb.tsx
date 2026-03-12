import { Link } from "@tanstack/react-router"

import {
  BrandBreadcrumb,
  BrandBreadcrumbItem,
  BrandBreadcrumbLink,
  BrandBreadcrumbList,
  BrandBreadcrumbPage,
  BrandBreadcrumbSeparator,
} from "@/components/brand/brand-breadcrumb"

import { shopBreadcrumb } from "./content"

function ShopBreadcrumb() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
      <BrandBreadcrumb className="text-xs">
        <BrandBreadcrumbList className="gap-1.5">
          <BrandBreadcrumbItem>
            <BrandBreadcrumbLink
              className="text-text-tertiary hover:text-foreground"
              render={<Link to={shopBreadcrumb.homeTo} />}
            >
              {shopBreadcrumb.homeLabel}
            </BrandBreadcrumbLink>
          </BrandBreadcrumbItem>
          <BrandBreadcrumbSeparator className="text-text-tertiary" />
          <BrandBreadcrumbItem>
            <BrandBreadcrumbPage className="text-foreground">
              {shopBreadcrumb.currentLabel}
            </BrandBreadcrumbPage>
          </BrandBreadcrumbItem>
        </BrandBreadcrumbList>
      </BrandBreadcrumb>
    </div>
  )
}

export { ShopBreadcrumb }
