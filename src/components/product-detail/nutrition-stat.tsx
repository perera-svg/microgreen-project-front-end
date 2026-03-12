import {
  BrandCard,
  BrandCardContent,
  BrandCardTitle,
} from "@/components/brand/brand-card"
import { type ProductDetailNutritionStat } from "./content"

type NutritionStatProps = ProductDetailNutritionStat

function NutritionStat({ label, value }: NutritionStatProps) {
  return (
    <BrandCard className="gap-0 p-0">
      <BrandCardContent className="flex flex-col gap-2 px-5 py-4">
        <p className="font-meta text-[11px] tracking-[0.16em] text-text-tertiary uppercase">
          {label}
        </p>
        <BrandCardTitle className="text-[1.5rem]">{value}</BrandCardTitle>
      </BrandCardContent>
    </BrandCard>
  )
}

export { NutritionStat }
