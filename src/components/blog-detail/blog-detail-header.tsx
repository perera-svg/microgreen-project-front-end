import {
  BrandAvatar,
  BrandAvatarFallback,
  BrandAvatarImage,
} from "@/components/brand/brand-avatar"
import { BrandBadge } from "@/components/brand/brand-badge"

import type { BlogArticleDetail } from "./content"
import type { BlogArticleSummary } from "@/components/blog/content"

type BlogDetailHeaderProps = {
  detail: BlogArticleDetail
  summary: BlogArticleSummary
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

function BlogDetailHeader({ detail, summary }: BlogDetailHeaderProps) {
  return (
    <section className="px-4 pb-10 pt-8 sm:px-6 sm:pb-12 lg:px-8">
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-5 text-center">
        <BrandBadge className="normal-case tracking-normal" variant="secondary">
          {summary.tag}
        </BrandBadge>
        <h1 className="font-serif text-[2.3rem] leading-[1.15] text-foreground sm:text-[2.75rem]">
          {summary.title}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-3 text-[13px] text-text-secondary">
          <BrandAvatar className="size-10 bg-secondary">
            {detail.author.avatarSrc ? (
              <BrandAvatarImage
                alt={detail.author.avatarAlt ?? detail.author.name}
                src={detail.author.avatarSrc}
              />
            ) : null}
            <BrandAvatarFallback>{getInitials(detail.author.name)}</BrandAvatarFallback>
          </BrandAvatar>
          <span className="font-medium text-foreground">{detail.author.name}</span>
          <span aria-hidden className="text-text-tertiary">
            ·
          </span>
          <span className="font-meta text-[11px] tracking-[0.08em] uppercase">
            {summary.date}
          </span>
          <span aria-hidden className="text-text-tertiary">
            ·
          </span>
          <span className="font-meta text-[11px] tracking-[0.08em] uppercase">
            {summary.readTime}
          </span>
        </div>
      </div>
    </section>
  )
}

export { BlogDetailHeader }
