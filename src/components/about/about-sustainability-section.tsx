import {
  BrandProgress,
  BrandProgressLabel,
} from "@/components/brand/brand-progress"

import { aboutSustainabilitySection } from "./content"

function AboutSustainabilitySection() {
  return (
    <section className="bg-secondary/55 py-7 sm:py-9 lg:py-16" id="sustainability">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16 lg:px-8">
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-[1.65rem] text-foreground sm:text-[1.85rem] lg:text-[2rem]">
            {aboutSustainabilitySection.title}
          </h2>

          <div className="flex flex-col gap-5">
            {aboutSustainabilitySection.commitments.map(({ description, icon: Icon, title }) => (
              <div className="flex items-start gap-3" key={title}>
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full border border-primary/25 bg-card/70 text-primary">
                  <Icon aria-hidden className="size-4.5" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-foreground">{title}</p>
                  <p className="text-sm leading-6 text-text-secondary">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {aboutSustainabilitySection.metrics.map((metric) => (
            <BrandProgress className="gap-2" key={metric.label} value={metric.value}>
              <div className="flex items-center justify-between gap-4">
                <BrandProgressLabel>{metric.label}</BrandProgressLabel>
                <span className="font-mono text-[12px] text-text-tertiary">
                  {metric.value}%
                </span>
              </div>
            </BrandProgress>
          ))}
        </div>
      </div>
    </section>
  )
}

export { AboutSustainabilitySection }
