import {
  BrandTabs,
  BrandTabsContent,
  BrandTabsList,
  BrandTabsTrigger,
} from "@/components/brand/brand-tabs"
import { type ProductDetailRecord, productDetailLabels } from "./content"
import { NutritionStat } from "./nutrition-stat"
import { ReviewCard } from "./review-card"

type ProductDetailTabsProps = {
  detail: ProductDetailRecord
}

function ProductDetailTabs({ detail }: ProductDetailTabsProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <BrandTabs defaultValue="description" className="flex flex-col gap-6">
        <BrandTabsList
          className="w-full justify-start gap-8 border-b border-border"
          variant="line"
        >
          <BrandTabsTrigger
            className="h-auto rounded-none border-b-2 border-transparent px-0 pb-4 text-sm data-active:border-primary data-active:bg-transparent"
            value="description"
          >
            {productDetailLabels.sectionDescription}
          </BrandTabsTrigger>
          <BrandTabsTrigger
            className="h-auto rounded-none border-b-2 border-transparent px-0 pb-4 text-sm data-active:border-primary data-active:bg-transparent"
            value="nutrition"
          >
            {productDetailLabels.sectionNutrition}
          </BrandTabsTrigger>
          <BrandTabsTrigger
            className="h-auto rounded-none border-b-2 border-transparent px-0 pb-4 text-sm data-active:border-primary data-active:bg-transparent"
            value="reviews"
          >
            {productDetailLabels.reviews}
          </BrandTabsTrigger>
        </BrandTabsList>

        <BrandTabsContent className="pt-0" value="description">
          <div className="grid gap-4 text-base leading-8 text-text-secondary">
            {detail.descriptionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </BrandTabsContent>

        <BrandTabsContent className="pt-0" value="nutrition">
          <div className="flex flex-col gap-6">
            <p className="max-w-3xl text-base leading-8 text-text-secondary">
              {detail.nutrition.description}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {detail.nutrition.stats.map((stat) => (
                <NutritionStat key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </BrandTabsContent>

        <BrandTabsContent className="pt-0" value="reviews">
          <div className="grid gap-4 lg:grid-cols-3">
            {detail.reviews.map((review) => (
              <ReviewCard key={`${review.author}-${review.location}`} review={review} />
            ))}
          </div>
        </BrandTabsContent>
      </BrandTabs>
    </section>
  )
}

export { ProductDetailTabs }
