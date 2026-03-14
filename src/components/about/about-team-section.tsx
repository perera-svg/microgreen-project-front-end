import {
  BrandCard,
  BrandCardContent,
  BrandCardHeader,
  BrandCardTitle,
} from "@/components/brand/brand-card"

import { aboutTeamSection } from "./content"

function AboutTeamSection() {
  return (
    <section className="py-7 sm:py-9 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:gap-8 lg:px-8">
        <h2 className="text-center font-serif text-[1.75rem] text-foreground sm:text-[2rem]">
          {aboutTeamSection.heading}
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {aboutTeamSection.members.map((member) => (
            <BrandCard className="gap-0" key={member.name}>
              <BrandCardHeader className="items-center gap-3 px-6 pb-0 pt-6 text-center">
                <div className="size-20 overflow-hidden rounded-full border border-border/70">
                  <img
                    alt={member.image.alt}
                    className="h-full w-full object-cover"
                    decoding="async"
                    loading="lazy"
                    src={member.image.src}
                  />
                </div>
                <BrandCardTitle className="text-center text-[1.2rem]">
                  {member.name}
                </BrandCardTitle>
              </BrandCardHeader>
              <BrandCardContent className="px-6 pb-6 pt-3 text-center">
                <p className="text-sm text-text-secondary">{member.role}</p>
              </BrandCardContent>
            </BrandCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export { AboutTeamSection }
