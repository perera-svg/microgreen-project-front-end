import StarIcon from "lucide-react/dist/esm/icons/star"

import { BrandAvatar } from "@/components/brand/brand-avatar"
import { BrandAvatarFallback } from "@/components/brand/brand-avatar"
import { BrandCard } from "@/components/brand/brand-card"
import { BrandCardContent } from "@/components/brand/brand-card"
import { BrandSeparator } from "@/components/brand/brand-separator"

import type { TestimonialData } from "./content"

function TestimonialCard({
  initials,
  location,
  name,
  quote,
  role,
}: TestimonialData) {
  return (
    <BrandCard className="h-full gap-0 py-0">
      <BrandCardContent className="flex h-full flex-col gap-4 px-6 py-6">
        <div className="flex gap-1 text-destructive">
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon
              key={`${name}-${index}`}
              aria-hidden
              className="size-4 fill-current"
            />
          ))}
        </div>
        <blockquote className="font-serif text-lg leading-8 text-foreground italic">
          {quote}
        </blockquote>
        <BrandSeparator />
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <BrandAvatar className="size-10 border border-border bg-secondary">
              <BrandAvatarFallback className="bg-secondary font-serif text-base text-primary">
                {initials}
              </BrandAvatarFallback>
            </BrandAvatar>
            <div className="space-y-0.5">
              <p className="text-sm font-semibold text-foreground">{name}</p>
              <p className="text-xs text-text-secondary">{role}</p>
            </div>
          </div>
          <p className="text-xs text-text-tertiary">{location}</p>
        </div>
      </BrandCardContent>
    </BrandCard>
  )
}

export { TestimonialCard }
