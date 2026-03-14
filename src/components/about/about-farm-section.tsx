import { BrandCard } from "@/components/brand/brand-card"

import { aboutFarmSection } from "./content"

function AboutFarmSection() {
  return (
    <section className="bg-card py-7 sm:py-9 lg:py-16" id="farm">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:gap-8 lg:px-8">
        <h2 className="text-center font-serif text-[1.75rem] text-foreground sm:text-[2rem]">
          {aboutFarmSection.title}
        </h2>

        <div className="grid gap-4 lg:grid-cols-4 lg:gap-5">
          {aboutFarmSection.images.map((image, index) => (
            <BrandCard
              className="overflow-hidden rounded-[24px] border-none bg-transparent p-0 shadow-none"
              key={image.alt}
            >
              <img
                alt={image.alt}
                className="h-45 w-full object-cover sm:h-56 lg:h-55"
                decoding="async"
                loading={index === 0 ? "eager" : "lazy"}
                src={image.src}
              />
            </BrandCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export { AboutFarmSection }
