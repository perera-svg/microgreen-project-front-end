import { Link } from "@tanstack/react-router"

import type { BlogArticleSummary } from "@/components/blog/content"
import { blogDetailLabels } from "./content"

type BlogDetailRelatedProps = {
  articles: BlogArticleSummary[]
}

function BlogDetailRelated({ articles }: BlogDetailRelatedProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-semibold tracking-[0.08em] text-text-tertiary uppercase">
        {blogDetailLabels.relatedArticles}
      </p>
      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            className="flex items-center gap-3 rounded-[12px] transition-colors hover:bg-card"
            params={{ articleId: article.id }}
            to="/blog/$articleId"
          >
            <img
              alt={article.imageAlt}
              className="size-[60px] rounded-[6px] object-cover"
              decoding="async"
              loading="lazy"
              src={article.image}
            />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <p className="line-clamp-2 text-sm font-medium leading-5 text-foreground">
                {article.title}
              </p>
              <p className="font-meta text-[11px] tracking-[0.08em] text-text-tertiary uppercase">
                {article.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export { BlogDetailRelated }
