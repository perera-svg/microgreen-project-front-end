import { BrandButton } from "@/components/brand/brand-button"
import { BrandToggleGroup } from "@/components/brand/brand-toggle-group"
import { SectionHeading } from "@/components/landing/section-heading"

import {
  subscriptionBuildBoxItems,
  subscriptionBuildBoxSection,
} from "./content"
import { SubscriptionBuildBoxItem } from "./subscription-build-box-item"

type SubscriptionBuildBoxSectionProps = {
  onSelectionChange: (productIds: string[]) => void
  onSubmit: () => void
  selectedProductIds: string[]
}

function SubscriptionBuildBoxSection({
  onSelectionChange,
  onSubmit,
  selectedProductIds,
}: SubscriptionBuildBoxSectionProps) {
  const CtaIcon = subscriptionBuildBoxSection.ctaIcon
  const helperText =
    selectedProductIds.length > 0
      ? `${selectedProductIds.length} greens selected`
      : subscriptionBuildBoxSection.helperText

  return (
    <section className="py-10 sm:py-12" id="build-your-own">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <SectionHeading
            description={subscriptionBuildBoxSection.description}
            title={subscriptionBuildBoxSection.title}
          />

          <BrandToggleGroup
            className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5"
            multiple
            value={selectedProductIds}
            onValueChange={onSelectionChange}
          >
            {subscriptionBuildBoxItems.map((item) => (
              <SubscriptionBuildBoxItem
                key={item.productId}
                item={item}
                selected={selectedProductIds.includes(item.productId)}
              />
            ))}
          </BrandToggleGroup>

          <div className="flex flex-col items-center gap-3">
            <BrandButton
              className="rounded-full px-8"
              disabled={selectedProductIds.length === 0}
              type="button"
              onClick={onSubmit}
            >
              <CtaIcon aria-hidden data-icon="inline-start" />
              {subscriptionBuildBoxSection.ctaLabel}
            </BrandButton>
            <p className="font-meta text-xs text-text-tertiary">{helperText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { SubscriptionBuildBoxSection }
