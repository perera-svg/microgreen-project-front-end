import { BrandCard } from "@/components/brand/brand-card"

import { landingValueProps, landingWhySection } from "./content"
import { SectionHeading } from "./section-heading"
import { ValuePropItem } from "./value-prop-item"

function LandingWhySection() {
  return (
    <section className="py-16 sm:py-20" id="about">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:px-8">
        <BrandCard className="overflow-hidden rounded-[28px] border-none bg-[#dde4d5] p-0 shadow-[0_16px_60px_rgb(74_93_67_/_0.16)]">
          <img
            alt={landingWhySection.imageAlt}
            className="h-full min-h-[24rem] w-full object-cover"
            decoding="async"
            loading="lazy"
            src={landingWhySection.image}
          />
        </BrandCard>

        <div className="flex flex-col gap-8">
          <SectionHeading align="left" title={landingWhySection.title} />
          <div className="grid gap-6">
            {landingValueProps.map((valueProp) => (
              <ValuePropItem key={valueProp.id} {...valueProp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { LandingWhySection }
