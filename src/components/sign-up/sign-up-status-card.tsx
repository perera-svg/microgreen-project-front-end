import {
  BrandCard,
  BrandCardContent,
  BrandCardDescription,
  BrandCardHeader,
  BrandCardTitle,
} from "@/components/brand/brand-card"

import { signUpStatusCard } from "./content"

function SignUpStatusCard() {
  return (
    <BrandCard className="max-w-[26.25rem] gap-0 shadow-none">
      <BrandCardHeader className="gap-1 px-5 pb-1 pt-5">
        <BrandCardDescription className="text-xs font-semibold text-primary">
          {signUpStatusCard.label}
        </BrandCardDescription>
      </BrandCardHeader>
      <BrandCardContent className="px-5 pb-5">
        <BrandCardTitle className="text-[1.6rem] leading-[1.25]">
          {signUpStatusCard.value}
        </BrandCardTitle>
      </BrandCardContent>
    </BrandCard>
  )
}

export { SignUpStatusCard }
