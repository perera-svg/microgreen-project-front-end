import {
  BrandCard,
  BrandCardContent,
  BrandCardHeader,
  BrandCardTitle,
} from "@/components/brand/brand-card"

import { aboutValues } from "./content"

function AboutValuesSection() {
  return (
    <section className="pb-7 sm:pb-9 lg:pb-16">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-8">
        {aboutValues.map(({ description, icon: Icon, id, title }) => (
          <BrandCard className="gap-0" key={id}>
            <BrandCardHeader className="gap-4 px-8 pb-0 pt-8">
              <span className="grid size-12 place-items-center rounded-full bg-secondary text-primary">
                <Icon aria-hidden className="size-5" />
              </span>
              <BrandCardTitle className="text-[1.5rem]">{title}</BrandCardTitle>
            </BrandCardHeader>
            <BrandCardContent className="px-8 pb-8 pt-4">
              <p className="text-sm leading-7 text-text-secondary">{description}</p>
            </BrandCardContent>
          </BrandCard>
        ))}
      </div>
    </section>
  )
}

export { AboutValuesSection }
