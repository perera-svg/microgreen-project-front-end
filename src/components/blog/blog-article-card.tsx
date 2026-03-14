import { Link } from "@tanstack/react-router"
import ArrowRightIcon from "lucide-react/dist/esm/icons/arrow-right"

import { BrandBadge } from "@/components/brand/brand-badge"
import { BrandCard, BrandCardContent } from "@/components/brand/brand-card"

import type { BlogArticleData } from "./content"

type BlogArticleCardProps = {
  article: BlogArticleData
}

function BlogArticleCard({ article }: BlogArticleCardProps) {
  return (
    <BrandCard className="gap-0 overflow-hidden py-0">
      <Link
        className="text-left"
        params={{ articleId: article.id }}
        to="/blog/$articleId"
      >
        <img
          alt={article.imageAlt}
          className="h-44 w-full object-cover"
          decoding="async"
          loading="lazy"
          src={article.image}
        />
        <BrandCardContent className="flex flex-col gap-3 px-5 py-5">
          <BrandBadge
            className="self-start normal-case tracking-normal"
            variant={article.tagVariant ?? "secondary"}
          >
            {article.tag}
          </BrandBadge>
          <h3 className="font-serif text-[1.2rem] leading-tight text-foreground transition-colors hover:text-primary">
            {article.title}
          </h3>
          <p className="text-sm leading-6 text-text-secondary">{article.excerpt}</p>
          <div className="flex items-center justify-between gap-3 text-[13px]">
            <span className="font-meta text-[11px] tracking-[0.08em] text-text-tertiary uppercase">
              {article.date}
            </span>
            <span className="inline-flex items-center gap-1 font-medium text-primary">
              <span>Read</span>
              <ArrowRightIcon aria-hidden className="size-3.5" />
            </span>
          </div>
        </BrandCardContent>
      </Link>
    </BrandCard>
  )
}

export { BlogArticleCard }
