import { BrandBadge } from "@/components/brand/brand-badge"
import {
  BrandCard,
  BrandCardContent,
  BrandCardTitle,
} from "@/components/brand/brand-card"
import { BrandSeparator } from "@/components/brand/brand-separator"
import {
  BrandAvatar,
  BrandAvatarFallback,
  BrandAvatarImage,
} from "@/components/brand/brand-avatar"
import type { BlogArticleDetail } from "./content"
import { blogDetailLabels } from "./content"
import { BlogDetailShare } from "./blog-detail-share"

type BlogDetailBodyProps = {
  detail: BlogArticleDetail
  onCopyLink: () => void
  onFacebookShare: () => void
  onWhatsAppShare: () => void
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

function BlogDetailBody({
  detail,
  onCopyLink,
  onFacebookShare,
  onWhatsAppShare,
}: BlogDetailBodyProps) {
  return (
    <div className="flex flex-col gap-8 py-10 sm:py-12">
      <p className="text-base leading-8 text-text-secondary">{detail.intro}</p>

      {detail.sections.map((section) => (
        <section
          key={section.id}
          className="flex scroll-mt-28 flex-col gap-6"
          id={section.id}
        >
          <h2 className="font-serif text-[1.55rem] leading-tight text-foreground">
            {section.title}
          </h2>

          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-text-secondary">
              {paragraph}
            </p>
          ))}

          {section.callout ? (
            <div className="rounded-[10px] bg-secondary px-6 py-6 text-sm leading-7 text-sage-dark italic">
              {section.callout}
            </div>
          ) : null}

          {section.table ? (
            <div className="overflow-hidden rounded-[10px] border border-border bg-card">
              <table className="w-full border-collapse text-left">
                <thead className="border-b border-border">
                  <tr>
                    {section.table.columns.map((column) => (
                      <th
                        key={column}
                        className="px-5 py-3 text-xs font-semibold tracking-[0.08em] text-text-tertiary uppercase"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row) => (
                    <tr key={row.nutrient} className="border-b border-border last:border-b-0">
                      <td className="px-5 py-3 text-sm text-foreground">{row.nutrient}</td>
                      <td className="px-5 py-3 text-sm font-semibold text-sage-dark">
                        {row.microgreenValue}
                      </td>
                      <td className="px-5 py-3 text-sm text-text-secondary">
                        {row.matureValue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          {section.tips ? (
            <div className="flex flex-col gap-4">
              {section.tips.map((tip, index) => (
                <div key={tip} className="flex items-start gap-3">
                  <span className="font-serif text-lg text-primary">{index + 1}.</span>
                  <p className="flex-1 text-base leading-8 text-text-secondary">{tip}</p>
                </div>
              ))}
            </div>
          ) : null}
        </section>
      ))}

      {detail.quote ? (
        <blockquote className="border-l-4 border-primary pl-6">
          <p className="font-serif text-lg leading-8 text-text-secondary italic">
            {detail.quote.content}
          </p>
          <p className="mt-3 text-sm text-text-tertiary">{`- ${detail.quote.attribution}`}</p>
        </blockquote>
      ) : null}

      <p className="text-base leading-8 text-text-secondary">{detail.closing}</p>

      <BrandSeparator />

      <BrandCard className="py-0">
        <BrandCardContent className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center">
          <BrandAvatar className="size-14 bg-secondary">
            {detail.author.avatarSrc ? (
              <BrandAvatarImage
                alt={detail.author.avatarAlt ?? detail.author.name}
                src={detail.author.avatarSrc}
              />
            ) : null}
            <BrandAvatarFallback>{getInitials(detail.author.name)}</BrandAvatarFallback>
          </BrandAvatar>
          <div className="flex flex-1 flex-col gap-2">
            <BrandCardTitle className="text-[1.1rem]">{detail.author.name}</BrandCardTitle>
            <p className="text-[13px] leading-6 text-text-secondary">
              {detail.author.bio}
            </p>
          </div>
        </BrandCardContent>
      </BrandCard>

      <div className="flex flex-wrap items-center gap-2 text-sm text-text-tertiary">
        <span>{blogDetailLabels.tags}</span>
        {detail.tags.map((tag) => (
          <BrandBadge
            key={tag}
            className="normal-case tracking-normal"
            variant="secondary"
          >
            {tag}
          </BrandBadge>
        ))}
      </div>

      <BlogDetailShare
        actionsClassName="justify-start"
        className="gap-4"
        label={blogDetailLabels.shareThisArticle}
        labelClassName="text-[13px] font-normal tracking-normal normal-case"
        onCopyLink={onCopyLink}
        onFacebookShare={onFacebookShare}
        onWhatsAppShare={onWhatsAppShare}
      />
    </div>
  )
}

export { BlogDetailBody }
