import StarIcon from "lucide-react/dist/esm/icons/star"

import {
  BrandCard,
  BrandCardContent,
  BrandCardTitle,
} from "@/components/brand/brand-card"
import { BrandSeparator } from "@/components/brand/brand-separator"
import { type ProductDetailReview } from "./content"

type ReviewCardProps = {
  review: ProductDetailReview
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <BrandCard className="gap-0 p-0">
      <BrandCardContent className="flex flex-col gap-4 px-5 py-5">
        <div className="flex items-center gap-1 text-destructive">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon
              key={index}
              aria-hidden
              className="size-4 fill-current"
            />
          ))}
        </div>
        <p className="text-sm leading-6 text-text-secondary">{review.body}</p>
        <BrandSeparator />
        <div className="flex flex-col gap-1">
          <BrandCardTitle className="text-lg">{review.author}</BrandCardTitle>
          <p className="font-meta text-[11px] tracking-[0.14em] text-text-tertiary uppercase">
            {review.location}
          </p>
        </div>
      </BrandCardContent>
    </BrandCard>
  )
}

export { ReviewCard }
