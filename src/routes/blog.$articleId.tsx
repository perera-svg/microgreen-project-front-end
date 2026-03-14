import { createFileRoute } from "@tanstack/react-router"

import { BlogDetailPage } from "@/components/blog-detail/blog-detail-page"

function BlogArticleRoute() {
  const { articleId } = Route.useParams()

  return <BlogDetailPage key={articleId} articleId={articleId} />
}

export const Route = createFileRoute("/blog/$articleId")({
  component: BlogArticleRoute,
})
