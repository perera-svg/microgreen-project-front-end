import { Link } from "@tanstack/react-router"
import LeafIcon from "lucide-react/dist/esm/icons/leaf"

import { BrandButton } from "@/components/brand/brand-button"
import {
  BrandEmpty,
  BrandEmptyContent,
  BrandEmptyDescription,
  BrandEmptyHeader,
  BrandEmptyMedia,
  BrandEmptyTitle,
} from "@/components/brand/brand-empty"

import { blogDetailLabels } from "./content"

function BlogDetailNotFound() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <BrandEmpty className="rounded-[24px] border border-border bg-card shadow-soft">
        <BrandEmptyHeader>
          <BrandEmptyMedia variant="icon">
            <LeafIcon aria-hidden />
          </BrandEmptyMedia>
          <BrandEmptyTitle>{blogDetailLabels.notFoundTitle}</BrandEmptyTitle>
          <BrandEmptyDescription>
            {blogDetailLabels.notFoundDescription}
          </BrandEmptyDescription>
        </BrandEmptyHeader>
        <BrandEmptyContent className="max-w-none">
          <BrandButton
            nativeButton={false}
            render={<Link to="/blog" />}
            variant="destructive"
          >
            {blogDetailLabels.backToJournal}
          </BrandButton>
        </BrandEmptyContent>
      </BrandEmpty>
    </section>
  )
}

export { BlogDetailNotFound }
