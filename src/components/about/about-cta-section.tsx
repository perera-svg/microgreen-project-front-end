import { Link } from "@tanstack/react-router"

import { BrandButton } from "@/components/brand/brand-button"

import { aboutCta } from "./content"

type AboutCtaSectionProps = {
  onContactAction: () => void
}

function AboutCtaSection({ onContactAction }: AboutCtaSectionProps) {
  return (
    <section className="bg-[#D4845E] py-8 sm:py-10 lg:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:gap-6 lg:px-8">
        <h2 className="max-w-[18ch] font-serif text-[1.6rem] leading-tight text-white sm:text-[1.8rem] lg:text-[2rem]">
          {aboutCta.title}
        </h2>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <BrandButton
            className="w-full rounded-full border-white/55 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
            nativeButton={false}
            render={<Link to={aboutCta.primaryAction.href} />}
            variant="outline"
          >
            {aboutCta.primaryAction.label}
          </BrandButton>
          <BrandButton
            className="w-full rounded-full bg-white text-destructive hover:bg-white/90 sm:w-auto"
            type="button"
            variant="secondary"
            onClick={onContactAction}
          >
            {aboutCta.secondaryActionLabel}
          </BrandButton>
        </div>
      </div>
    </section>
  )
}

export { AboutCtaSection }
