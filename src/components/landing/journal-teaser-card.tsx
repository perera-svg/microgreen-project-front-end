import ArrowRightIcon from "lucide-react/dist/esm/icons/arrow-right"

import { BrandBadge } from "@/components/brand/brand-badge"
import { BrandCard } from "@/components/brand/brand-card"
import { BrandCardContent } from "@/components/brand/brand-card"
import { cn } from "@/lib/utils"

import { landingJournalReadLabel } from "./content"
import type { JournalArticleData } from "./content"

function JournalTeaserCard({
  date,
  href,
  image,
  imageAlt,
  tag,
  tagClassName,
  title,
}: JournalArticleData) {
  return (
    <BrandCard className="gap-0 py-0">
      <BrandCardContent className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center">
        <img
          alt={imageAlt}
          className="h-36 w-full rounded-[12px] object-cover sm:w-40"
          decoding="async"
          loading="lazy"
          src={image}
        />
        <div className="flex flex-1 flex-col gap-3">
          <BrandBadge
            className={cn("self-start", tagClassName)}
            variant="secondary"
          >
            {tag}
          </BrandBadge>
          <h3 className="font-serif text-[1.2rem] leading-tight text-foreground">
            {title}
          </h3>
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
        </div>
      </BrandCardContent>
    </BrandCard>
  )
}

export { JournalTeaserCard }
