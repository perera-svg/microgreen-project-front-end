import type { BlogArticleSummary } from "@/components/blog/content"

import { blogDetailLabels } from "./content"
import { BlogDetailMoreCard } from "./blog-detail-more-card"

type BlogDetailMoreSectionProps = {
  articles: BlogArticleSummary[]
}

function BlogDetailMoreSection({ articles }: BlogDetailMoreSectionProps) {
  if (articles.length === 0) {
    return null
  }

  return (
    <section className="border-t border-border px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <h2 className="font-serif text-[1.85rem] leading-tight text-foreground">
          {blogDetailLabels.moreFromJournal}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <BlogDetailMoreCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { BlogDetailMoreSection }
