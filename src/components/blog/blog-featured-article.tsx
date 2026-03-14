import ArrowRightIcon from "lucide-react/dist/esm/icons/arrow-right"

import {
  BrandAvatar,
  BrandAvatarFallback,
  BrandAvatarImage,
} from "@/components/brand/brand-avatar"
import { BrandBadge } from "@/components/brand/brand-badge"

import { blogFeaturedArticle } from "./content"

type BlogFeaturedArticleProps = {
  onArticleSelect: (title: string) => void
}

function BlogFeaturedArticle({ onArticleSelect }: BlogFeaturedArticleProps) {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
        <button
          className="overflow-hidden rounded-[16px] text-left"
          type="button"
          onClick={() => onArticleSelect(blogFeaturedArticle.title)}
        >
          <img
            alt={blogFeaturedArticle.imageAlt}
            className="h-[19rem] w-full object-cover sm:h-[24rem] lg:h-[25rem]"
            decoding="async"
            loading="lazy"
            src={blogFeaturedArticle.image}
          />
        </button>

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <BrandBadge className="normal-case tracking-normal" variant="secondary">
              {blogFeaturedArticle.tag}
            </BrandBadge>
            <BrandBadge className="normal-case tracking-normal" variant="destructive">
              {blogFeaturedArticle.featuredBadge}
            </BrandBadge>
          </div>

          <button
            className="text-left"
            type="button"
            onClick={() => onArticleSelect(blogFeaturedArticle.title)}
          >
            <h2 className="font-serif text-[2rem] leading-tight text-foreground transition-colors hover:text-primary sm:text-[2.2rem]">
              {blogFeaturedArticle.title}
            </h2>
          </button>

          <p className="text-sm leading-7 text-text-secondary">
            {blogFeaturedArticle.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-[13px] text-text-secondary">
            <BrandAvatar className="size-9">
              <BrandAvatarImage
                alt={blogFeaturedArticle.authorAvatarAlt}
                src={blogFeaturedArticle.authorAvatar}
              />
              <BrandAvatarFallback>
                {blogFeaturedArticle.authorName
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </BrandAvatarFallback>
            </BrandAvatar>
            <span className="font-medium text-foreground">
              {blogFeaturedArticle.authorName}
            </span>
            <span aria-hidden className="text-text-tertiary">
              ·
            </span>
            <span className="font-meta text-[11px] uppercase tracking-[0.08em]">
              {blogFeaturedArticle.date}
            </span>
            <span aria-hidden className="text-text-tertiary">
              ·
            </span>
            <span className="font-meta text-[11px] uppercase tracking-[0.08em]">
              {blogFeaturedArticle.readTime}
            </span>
          </div>

          <button
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-primary transition-colors hover:text-sage-dark"
            type="button"
            onClick={() => onArticleSelect(blogFeaturedArticle.title)}
          >
            {blogFeaturedArticle.readLabel}
            <ArrowRightIcon aria-hidden className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export { BlogFeaturedArticle }
