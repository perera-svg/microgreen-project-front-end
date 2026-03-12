import ArrowRightIcon from "lucide-react/dist/esm/icons/arrow-right"

import { BrandBadge } from "@/components/brand/brand-badge"
import { BrandCard } from "@/components/brand/brand-card"
import { BrandCardContent } from "@/components/brand/brand-card"
import { cn } from "@/lib/utils"

import { landingJournalReadLabel } from "./content"
import type { JournalArticleData } from "./content"

function JournalFeaturedCard({
  date,
  excerpt,
  href,
  image,
  imageAlt,
  tag,
  tagClassName,
  title,
}: JournalArticleData) {
  return (
    <BrandCard className="gap-0 overflow-hidden py-0">
      <img
        alt={imageAlt}
        className="h-72 w-full object-cover"
        decoding="async"
        loading="lazy"
        src={image}
      />
      <BrandCardContent className="flex flex-col gap-4 px-5 py-5">
        <BrandBadge
          className={cn("self-start", tagClassName)}
          variant="secondary"
        >
          {tag}
        </BrandBadge>
        <h3 className="font-serif text-[1.55rem] leading-tight text-foreground">
          {title}
        </h3>
        {excerpt ? (
          <p className="text-sm leading-6 text-text-secondary">{excerpt}</p>
        ) : null}
        <a
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] text-primary uppercase"
          href={href}
        >
          <span>{date}</span>
          <span aria-hidden>-</span>
          <span className="inline-flex items-center gap-1">
            {landingJournalReadLabel}
            <ArrowRightIcon aria-hidden className="size-3.5" />
          </span>
        </a>
      </BrandCardContent>
    </BrandCard>
  )
}

export { JournalFeaturedCard }
