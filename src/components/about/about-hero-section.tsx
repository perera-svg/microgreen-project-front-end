import { BrandCard } from "@/components/brand/brand-card"

import { aboutHero } from "./content"

function AboutHeroSection() {
  return (
    <section className="py-7 sm:py-9 lg:py-16" id="about-story">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(380px,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-12 lg:px-8">
        <BrandCard className="overflow-hidden rounded-[24px] border-none bg-transparent p-0 shadow-none">
          <img
            alt={aboutHero.image.alt}
            className="h-[17.5rem] w-full object-cover sm:h-[24rem] lg:h-[30rem]"
            decoding="async"
            fetchPriority="high"
            src={aboutHero.image.src}
          />
        </BrandCard>

        <div className="flex flex-col justify-center gap-6">
          <p className="font-meta text-[11px] tracking-[0.24em] text-primary uppercase">
            {aboutHero.overline}
          </p>
          <h1 className="max-w-[12ch] whitespace-pre-line text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-[3.75rem]">
            {aboutHero.title}
          </h1>
          <p className="max-w-[40rem] text-[15px] leading-7 text-text-secondary sm:text-base">
            {aboutHero.description}
          </p>
          <p className="max-w-[40rem] text-[15px] leading-7 text-text-secondary sm:text-base">
            {aboutHero.secondaryDescription}
          </p>
          <p className="font-meta text-xs tracking-[0.12em] text-text-tertiary uppercase">
            {aboutHero.foundedLabel}
          </p>
        </div>
      </div>
    </section>
  )
}

export { AboutHeroSection }
