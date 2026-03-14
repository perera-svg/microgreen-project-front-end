import { cn } from "@/lib/utils"

import { blogDetailLabels } from "./content"

type BlogDetailTocItem = {
  id: string
  title: string
}

type BlogDetailTocProps = {
  items: BlogDetailTocItem[]
}

function BlogDetailToc({ items }: BlogDetailTocProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-semibold tracking-[0.08em] text-text-tertiary uppercase">
        {blogDetailLabels.inThisArticle}
      </p>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <a
            key={item.id}
            className={cn(
              "text-sm leading-6 text-text-secondary transition-colors hover:text-primary",
              item.id === items[0]?.id ? "font-medium text-primary" : undefined
            )}
            href={`#${item.id}`}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export { BlogDetailToc }
