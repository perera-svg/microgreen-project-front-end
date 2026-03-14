import { Link } from "@tanstack/react-router"

import { BrandCard, BrandCardContent } from "@/components/brand/brand-card"
import type { BlogArticleSummary } from "@/components/blog/content"

type BlogDetailMoreCardProps = {
  article: BlogArticleSummary
}

function BlogDetailMoreCard({ article }: BlogDetailMoreCardProps) {
  return (
    <Link className="block" params={{ articleId: article.id }} to="/blog/$articleId">
      <BrandCard className="gap-0 overflow-hidden py-0 transition-transform hover:-translate-y-0.5">
        <img
          alt={article.imageAlt}
          className="h-44 w-full object-cover"
          decoding="async"
          loading="lazy"
          src={article.image}
        />
        <BrandCardContent className="flex flex-col gap-2 px-5 py-5">
          <p className="text-[11px] font-semibold tracking-[0.08em] text-primary uppercase">
            {article.tag}
          </p>
          <h3 className="text-[15px] font-semibold leading-6 text-foreground">
            {article.title}
          </h3>
          <p className="font-meta text-[11px] tracking-[0.08em] text-text-tertiary uppercase">
            {article.date}
            <span aria-hidden> · </span>
            {article.readTime}
          </p>
        </BrandCardContent>
      </BrandCard>
    </Link>
  )
}

export { BlogDetailMoreCard }
