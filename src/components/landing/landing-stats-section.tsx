import { BrandSeparator } from "@/components/brand/brand-separator"

import { landingStats } from "./content"
import { StatItem } from "./stat-item"

function LandingStatsSection() {
  return (
    <section aria-label="Ceylon Greens metrics" className="py-2">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] bg-card/45 px-4 py-4 sm:px-6">
          <BrandSeparator />
          <div className="grid gap-5 divide-y divide-border py-6 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {landingStats.map((stat) => (
              <div key={stat.label} className="px-4 py-4 lg:py-1">
                <StatItem {...stat} />
              </div>
            ))}
          </div>
          <BrandSeparator />
        </div>
      </div>
    </section>
  )
}

export { LandingStatsSection }
