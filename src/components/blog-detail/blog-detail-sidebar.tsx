import { BrandSeparator } from "@/components/brand/brand-separator"
import type { BlogArticleSummary } from "@/components/blog/content"

import { blogDetailLabels } from "./content"
import { BlogDetailRelated } from "./blog-detail-related"
import { BlogDetailShare } from "./blog-detail-share"
import { BlogDetailToc } from "./blog-detail-toc"

type BlogDetailSidebarProps = {
  onCopyLink: () => void
  onFacebookShare: () => void
  onWhatsAppShare: () => void
  relatedArticles: BlogArticleSummary[]
  tocItems: Array<{
    id: string
    title: string
  }>
}

function BlogDetailSidebar({
  onCopyLink,
  onFacebookShare,
  onWhatsAppShare,
  relatedArticles,
  tocItems,
}: BlogDetailSidebarProps) {
  return (
    <aside className="flex flex-col gap-8 lg:sticky lg:top-24">
      <BlogDetailToc items={tocItems} />
      <BrandSeparator />
      <BlogDetailShare
        label={blogDetailLabels.share}
        onCopyLink={onCopyLink}
        onFacebookShare={onFacebookShare}
        onWhatsAppShare={onWhatsAppShare}
      />
      <BrandSeparator />
      <BlogDetailRelated articles={relatedArticles} />
    </aside>
  )
}

export { BlogDetailSidebar }
