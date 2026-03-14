import { BrandBadge } from "@/components/brand/brand-badge"
import { BrandButton } from "@/components/brand/brand-button"
import {
  BrandCard,
  BrandCardContent,
  BrandCardDescription,
  BrandCardFooter,
  BrandCardHeader,
  BrandCardTitle,
} from "@/components/brand/brand-card"
import { BrandSeparator } from "@/components/brand/brand-separator"
import { cn } from "@/lib/utils"

import { SubscriptionFeatureRow } from "./subscription-feature-row"
import type { SubscriptionPlan, SubscriptionPlanId } from "./content"

type SubscriptionPlanCardProps = {
  onSelect: (planId: SubscriptionPlanId) => void
  plan: SubscriptionPlan
  selected: boolean
}

function SubscriptionPlanCard({
  onSelect,
  plan,
  selected,
}: SubscriptionPlanCardProps) {
  return (
    <BrandCard
      className={cn(
        "h-full gap-0 py-0 transition-colors",
        selected
          ? "border-primary bg-sage-dark shadow-soft"
          : "bg-card",
        plan.featured && !selected && "border-destructive/35"
      )}
    >
      <BrandCardHeader className="px-6 pt-6 pb-0">
        {plan.badgeLabel ? (
          <BrandBadge
            className="self-start border-transparent bg-destructive text-white"
            variant="destructive"
          >
            {plan.badgeLabel}
          </BrandBadge>
        ) : null}

        <div className="flex flex-col gap-2">
          <BrandCardTitle className={cn(selected && "text-white")}>
            {plan.title}
          </BrandCardTitle>
          <BrandCardDescription className={cn(selected && "text-white/72")}>
            {plan.description}
          </BrandCardDescription>
        </div>
      </BrandCardHeader>

      <BrandCardContent className="flex flex-1 flex-col gap-6 px-6 pt-6">
        <div className="flex items-end justify-between gap-4">
          <p
            className={cn(
              "font-serif text-4xl leading-none tracking-[-0.04em]",
              selected ? "text-white" : "text-foreground"
            )}
          >
            {plan.displayPrice}
          </p>
          <p className={cn("pb-1 text-sm", selected ? "text-white/60" : "text-text-tertiary")}>
            {plan.cadence}
          </p>
        </div>

        <BrandSeparator className={cn(selected && "bg-white/12")} />

        <div className="flex flex-1 flex-col gap-3">
          {plan.features.map((feature) => (
            <SubscriptionFeatureRow
              key={feature}
              inverted={selected}
            >
              {feature}
            </SubscriptionFeatureRow>
          ))}
        </div>
      </BrandCardContent>

      <BrandCardFooter className="px-6 pt-6 pb-6">
        <BrandButton
          aria-pressed={selected}
          className="w-full rounded-full"
          type="button"
          variant={selected ? "destructive" : "outline"}
          onClick={() => onSelect(plan.id)}
        >
          {plan.buttonLabel}
        </BrandButton>
      </BrandCardFooter>
    </BrandCard>
  )
}

export { SubscriptionPlanCard }
