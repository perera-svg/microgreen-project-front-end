import {
  BrandCard,
  BrandCardContent,
} from "@/components/brand/brand-card"
import { BrandToggleGroupItem } from "@/components/brand/brand-toggle-group"
import { cn } from "@/lib/utils"

import type { SubscriptionBuildBoxItem as SubscriptionBuildBoxItemData } from "./content"

type SubscriptionBuildBoxItemProps = {
  item: SubscriptionBuildBoxItemData
  selected: boolean
}

function SubscriptionBuildBoxItem({
  item,
  selected,
}: SubscriptionBuildBoxItemProps) {
  const Icon = item.icon

  return (
    <BrandToggleGroupItem
      aria-label={`${item.title} ${item.displayPrice}`}
      className="h-auto min-w-0 rounded-[18px] border-0 bg-transparent p-0 shadow-none hover:bg-transparent data-[state=on]:bg-transparent"
      size="lg"
      value={item.productId}
      variant="outline"
    >
      <BrandCard
        className={cn(
          "w-full gap-0 py-0 text-center shadow-none transition-colors",
          selected
            ? "border-primary bg-secondary"
            : "border-border/70 bg-muted hover:border-primary/35"
        )}
      >
        <BrandCardContent className="flex flex-col items-center gap-3 px-4 py-5">
          <div
            className={cn(
              "grid size-20 place-items-center rounded-full text-primary",
              selected ? "bg-card" : "bg-secondary"
            )}
          >
            <Icon aria-hidden className="size-7" />
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <span className="text-sm font-semibold text-foreground">
              {item.title}
            </span>
            <span className="font-meta text-xs text-text-tertiary">
              {item.displayPrice}
            </span>
          </div>
        </BrandCardContent>
      </BrandCard>
    </BrandToggleGroupItem>
  )
}

export { SubscriptionBuildBoxItem }
