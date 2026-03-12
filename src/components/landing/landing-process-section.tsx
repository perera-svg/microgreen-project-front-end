import { BrandSeparator } from "@/components/brand/brand-separator"

import { landingProcessHeading, landingProcessSteps } from "./content"
import { ProcessStep } from "./process-step"
import { SectionHeading } from "./section-heading"

function LandingProcessSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading title={landingProcessHeading.title} />

        <div className="relative">
          <BrandSeparator className="absolute left-[12%] right-[12%] top-8 hidden lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {landingProcessSteps.map((step) => (
              <ProcessStep key={step.id} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { LandingProcessSection }
