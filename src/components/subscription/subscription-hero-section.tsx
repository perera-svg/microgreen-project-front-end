import { BrandBadge } from "@/components/brand/brand-badge"

import { subscriptionHero } from "./content"

function SubscriptionHeroSection() {
  const BadgeIcon = subscriptionHero.badgeIcon

  return (
    <section className="border-b border-border bg-secondary/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 py-14 text-center sm:py-16">
          <BrandBadge className="h-9 px-4" variant="secondary">
            <BadgeIcon aria-hidden />
            {subscriptionHero.badgeLabel}
          </BrandBadge>
          <h1 className="max-w-4xl text-4xl leading-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            {subscriptionHero.title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-text-secondary">
            {subscriptionHero.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export { SubscriptionHeroSection }
