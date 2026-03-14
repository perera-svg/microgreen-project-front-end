import {
  BrandToggleGroup,
  BrandToggleGroupItem,
} from "@/components/brand/brand-toggle-group"
import { cn } from "@/lib/utils"

import { blogCategoryOptions, type BlogCategory } from "./content"

type BlogCategoryPillsProps = {
  selectedCategory: BlogCategory
  setCategory: (category: BlogCategory) => void
}

function BlogCategoryPills({
  selectedCategory,
  setCategory,
}: BlogCategoryPillsProps) {
  return (
    <BrandToggleGroup
      className="flex w-full flex-wrap justify-center gap-2"
      value={[selectedCategory]}
      onValueChange={(value) => {
        const nextCategory = value[0]

        if (nextCategory) {
          setCategory(nextCategory as BlogCategory)
        }
      }}
    >
      {blogCategoryOptions.map((option) => (
        <BrandToggleGroupItem
          key={option.value}
          className={cn(
            "rounded-full border border-border bg-card px-4 py-2 text-[12px] font-medium text-text-secondary shadow-none hover:border-border hover:bg-background hover:text-foreground",
            option.value === selectedCategory
              ? "border-primary bg-secondary text-sage-dark hover:bg-secondary"
              : undefined
          )}
          value={option.value}
        >
          {option.label}
        </BrandToggleGroupItem>
      ))}
    </BrandToggleGroup>
  )
}

export { BlogCategoryPills }
