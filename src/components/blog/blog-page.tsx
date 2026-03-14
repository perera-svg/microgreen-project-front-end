import { toast } from "sonner"

import { BlogArticleGrid } from "./blog-article-grid"
import { BlogCategoryPills } from "./blog-category-pills"
import { BlogFeaturedArticle } from "./blog-featured-article"
import { BlogFooter } from "./blog-footer"
import { BlogHeader } from "./blog-header"
import { BlogNav } from "./blog-nav"
import { BlogPagination } from "./blog-pagination"
import { blogPlaceholderMessages } from "./content"
import { useBlogIndex } from "./use-blog-index"

function BlogPage() {
  const {
    currentPage,
    goToNextPage,
    goToPage,
    goToPreviousPage,
    hasResults,
    paginatedArticles,
    resetCategory,
    selectedCategory,
    setCategory,
    totalPages,
  } = useBlogIndex()

  function handlePlaceholderAction(message: string) {
    toast(message, {
      description: "These actions stay lightweight and local in this pass.",
    })
  }

  function handleArticleSelect(title: string) {
    toast(blogPlaceholderMessages.articleTitle, {
      description: `${title}. ${blogPlaceholderMessages.articleDescription}`,
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <BlogNav onPlaceholderAction={handlePlaceholderAction} />
      <BlogHeader />
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl justify-center">
          <BlogCategoryPills
            selectedCategory={selectedCategory}
            setCategory={setCategory}
          />
        </div>
      </section>
      <div className="pt-8 sm:pt-10">
        <BlogFeaturedArticle onArticleSelect={handleArticleSelect} />
      </div>
      <BlogArticleGrid
        articles={paginatedArticles}
        hasResults={hasResults}
        onArticleSelect={handleArticleSelect}
        onResetCategory={resetCategory}
      />
      <BlogPagination
        currentPage={currentPage}
        goToNextPage={goToNextPage}
        goToPage={goToPage}
        goToPreviousPage={goToPreviousPage}
        totalPages={totalPages}
      />
      <BlogFooter />
    </main>
  )
}

export { BlogPage }
