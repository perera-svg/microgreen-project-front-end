import { BrandButton } from "@/components/brand/brand-button"

import {
  landingProducts,
  landingProductsCta,
  landingProductsHeading,
} from "./content"
import { ProductCard } from "./product-card"
import { SectionHeading } from "./section-heading"

function LandingProductShowcaseSection() {
  return (
    <section className="py-16 sm:py-20" id="shop">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description={landingProductsHeading.description}
          title={landingProductsHeading.title}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {landingProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="flex justify-center">
          <BrandButton
            nativeButton={false}
            render={<a href={landingProductsCta.href} />}
            variant="outline"
          >
            {landingProductsCta.label}
          </BrandButton>
        </div>
      </div>
    </section>
  )
}

export { LandingProductShowcaseSection }
