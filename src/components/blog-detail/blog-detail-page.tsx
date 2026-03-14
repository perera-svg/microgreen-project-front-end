import { toast } from "sonner"

import {
  blogCopyMessages,
  blogPlaceholderMessages,
  getBlogArticleById,
} from "@/components/blog/content"
import { BlogFooter } from "@/components/blog/blog-footer"
import { BlogNav } from "@/components/blog/blog-nav"

import {
  blogDetailMessages,
  getBlogArticleDetailById,
  getBlogMoreArticles,
  getBlogSidebarRelatedArticles,
} from "./content"
import { BlogDetailBody } from "./blog-detail-body"
import { BlogDetailBreadcrumb } from "./blog-detail-breadcrumb"
import { BlogDetailHeader } from "./blog-detail-header"
import { BlogDetailHero } from "./blog-detail-hero"
import { BlogDetailMoreSection } from "./blog-detail-more-section"
import { BlogDetailNotFound } from "./blog-detail-not-found"
import { BlogDetailSidebar } from "./blog-detail-sidebar"

type BlogDetailPageProps = {
  articleId: string
}

function BlogDetailPage({ articleId }: BlogDetailPageProps) {
  const summary = getBlogArticleById(articleId)
  const detail = getBlogArticleDetailById(articleId)

  function handlePlaceholderAction(message: string) {
    toast(message, {
      description: "These actions stay lightweight and local in this pass.",
    })
  }

  function handleSocialShare(network: string) {
    toast(blogPlaceholderMessages.social, {
      description: `${network} sharing stays lightweight in this pass. ${blogDetailMessages.sharePlaceholderDescription}`,
    })
  }

  async function handleCopyLink() {
    try {
      if (
        typeof window === "undefined" ||
        typeof navigator === "undefined" ||
        !navigator.clipboard
      ) {
        throw new Error("Clipboard API unavailable")
      }

      await navigator.clipboard.writeText(window.location.href)

      toast(blogCopyMessages.successTitle, {
        description: blogCopyMessages.successDescription,
      })
    } catch {
      toast(blogCopyMessages.failureTitle, {
        description: blogCopyMessages.failureDescription,
      })
    }
  }

  if (!summary || !detail) {
    return (
      <main className="min-h-screen bg-background">
        <BlogNav onPlaceholderAction={handlePlaceholderAction} />
        <BlogDetailBreadcrumb currentLabel="Article" />
        <BlogDetailNotFound />
        <BlogFooter />
      </main>
    )
  }

  const tocItems = detail.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }))
  const relatedArticles = getBlogSidebarRelatedArticles(summary.id)
  const moreArticles = getBlogMoreArticles(summary.id)

  return (
    <main className="min-h-screen bg-background">
      <BlogNav onPlaceholderAction={handlePlaceholderAction} />
      <BlogDetailBreadcrumb currentLabel={detail.breadcrumbTitle} />
      <BlogDetailHeader detail={detail} summary={summary} />
      <BlogDetailHero imageAlt={summary.imageAlt} imageSrc={summary.image} />

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1048px] gap-12 lg:grid-cols-[minmax(0,720px)_280px]">
          <BlogDetailBody
            detail={detail}
            onCopyLink={handleCopyLink}
            onFacebookShare={() => handleSocialShare("Facebook")}
            onWhatsAppShare={() => handleSocialShare("WhatsApp")}
          />
          <div className="py-10 sm:py-12">
            <BlogDetailSidebar
              onCopyLink={handleCopyLink}
              onFacebookShare={() => handleSocialShare("Facebook")}
              onWhatsAppShare={() => handleSocialShare("WhatsApp")}
              relatedArticles={relatedArticles}
              tocItems={tocItems}
            />
          </div>
        </div>
      </section>

      <BlogDetailMoreSection articles={moreArticles} />
      <BlogFooter />
    </main>
  )
}

export { BlogDetailPage }
