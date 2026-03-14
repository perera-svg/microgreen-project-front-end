import type { BlogArticleData } from "./content"
import { BlogArticleCard } from "./blog-article-card"
import { BlogEmptyState } from "./blog-empty-state"

type BlogArticleGridProps = {
  articles: BlogArticleData[]
  hasResults: boolean
  onResetCategory: () => void
}

function BlogArticleGrid({
  articles,
  hasResults,
  onResetCategory,
}: BlogArticleGridProps) {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-14" id="blog-grid">
      <div className="mx-auto max-w-7xl">
        {hasResults ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <BlogArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <BlogEmptyState onReset={onResetCategory} />
        )}
      </div>
    </section>
  )
}

export { BlogArticleGrid }
