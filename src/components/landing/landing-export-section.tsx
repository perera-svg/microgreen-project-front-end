import { BrandButton } from "@/components/brand/brand-button"

import { landingCertifications, landingExportSection } from "./content"
import { CertificationItem } from "./certification-item"
import { SectionHeading } from "./section-heading"

function LandingExportSection() {
  return (
    <section className="py-8 sm:py-10" id="export">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-[32px] bg-[#20241f] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgb(23 29 22 / 0.36), rgb(23 29 22 / 0.84)), url("${landingExportSection.backgroundImage}")`,
          }}
        >
          <div className="bg-[#171d16]/40 px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
              <SectionHeading
                description={landingExportSection.description}
                descriptionClassName="max-w-3xl text-white/78"
                eyebrow={landingExportSection.eyebrow}
                eyebrowClassName="text-[#d7e0d0]"
                title={landingExportSection.title}
                titleClassName="max-w-[13ch] whitespace-pre-line text-white"
              />

              <ul className="grid w-full gap-4 sm:grid-cols-2">
                {landingCertifications.map((certification) => (
                  <CertificationItem key={certification} label={certification} />
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row">
                <BrandButton
                  nativeButton={false}
                  render={<a href={landingExportSection.primaryCta.href} />}
                >
                  {landingExportSection.primaryCta.label}
                </BrandButton>
                <BrandButton
                  className="border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                  type="button"
                  variant="outline"
                >
                  {landingExportSection.secondaryCta.label}
                </BrandButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { LandingExportSection }
