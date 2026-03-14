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

import { blogEmptyState } from "./content"

type BlogEmptyStateProps = {
  onReset: () => void
}

function BlogEmptyState({ onReset }: BlogEmptyStateProps) {
  return (
    <BrandEmpty className="rounded-[24px] border border-border bg-card shadow-soft">
      <BrandEmptyHeader>
        <BrandEmptyMedia variant="icon">
          <LeafIcon aria-hidden />
        </BrandEmptyMedia>
        <BrandEmptyTitle>{blogEmptyState.title}</BrandEmptyTitle>
        <BrandEmptyDescription>{blogEmptyState.description}</BrandEmptyDescription>
      </BrandEmptyHeader>
      <BrandEmptyContent className="max-w-none">
        <BrandButton type="button" onClick={onReset}>
          {blogEmptyState.actionLabel}
        </BrandButton>
      </BrandEmptyContent>
    </BrandEmpty>
  )
}

export { BlogEmptyState }
