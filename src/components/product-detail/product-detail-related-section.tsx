import { type ShopProduct } from "@/components/shop/content"
import { productDetailLabels } from "./content"
import { RelatedProductCard } from "./related-product-card"

type ProductDetailRelatedSectionProps = {
  products: ShopProduct[]
}

function ProductDetailRelatedSection({
  products,
}: ProductDetailRelatedSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="font-meta text-[11px] tracking-[0.18em] text-primary uppercase">
            Fresh Pairings
          </p>
          <h2 className="font-serif text-[2rem] leading-tight text-foreground sm:text-[2.4rem]">
            {productDetailLabels.relatedHeading}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <RelatedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { ProductDetailRelatedSection }
