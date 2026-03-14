import { Link } from "@tanstack/react-router"

import {
  BrandBreadcrumb,
  BrandBreadcrumbItem,
  BrandBreadcrumbLink,
  BrandBreadcrumbList,
  BrandBreadcrumbPage,
  BrandBreadcrumbSeparator,
} from "@/components/brand/brand-breadcrumb"

import { blogDetailLabels } from "./content"

type BlogDetailBreadcrumbProps = {
  currentLabel: string
}

function BlogDetailBreadcrumb({ currentLabel }: BlogDetailBreadcrumbProps) {
  return (
    <section className="px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <BrandBreadcrumb>
          <BrandBreadcrumbList className="text-xs text-text-tertiary">
            <BrandBreadcrumbItem>
              <BrandBreadcrumbLink
                className="text-text-tertiary hover:text-foreground"
                render={<Link to="/" />}
              >
                {blogDetailLabels.breadcrumbHome}
              </BrandBreadcrumbLink>
            </BrandBreadcrumbItem>
            <BrandBreadcrumbSeparator />
            <BrandBreadcrumbItem>
              <BrandBreadcrumbLink
                className="text-text-tertiary hover:text-foreground"
                render={<Link to="/blog" />}
              >
                {blogDetailLabels.breadcrumbBlog}
              </BrandBreadcrumbLink>
            </BrandBreadcrumbItem>
            <BrandBreadcrumbSeparator />
            <BrandBreadcrumbItem className="min-w-0">
              <BrandBreadcrumbPage className="truncate text-text-tertiary">
                {currentLabel}
              </BrandBreadcrumbPage>
            </BrandBreadcrumbItem>
          </BrandBreadcrumbList>
        </BrandBreadcrumb>
      </div>
    </section>
  )
}

export { BlogDetailBreadcrumb }
