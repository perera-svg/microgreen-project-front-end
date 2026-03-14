import { Link } from "@tanstack/react-router"

import { BrandBadge } from "@/components/brand/brand-badge"
import { BrandSeparator } from "@/components/brand/brand-separator"

import {
  blogBrand,
  blogFooterColumns,
  blogFooterMeta,
  blogFooterMetaLinks,
  blogPaymentBadges,
  blogSocialLinks,
} from "./content"
import { BlogFooterLinkColumn } from "./blog-footer-link-column"

function BlogFooter() {
  const BrandIcon = blogBrand.icon

  return (
    <footer className="bg-[#2d2d2d] py-12 text-white sm:py-14" id="footer">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="flex flex-col gap-4">
            <Link className="flex items-center gap-3 text-white" to="/">
              <span className="grid size-11 place-items-center rounded-full bg-white/10 text-white">
                <BrandIcon aria-hidden className="size-5" />
              </span>
              <span className="font-serif text-2xl italic leading-none">
                {blogBrand.name}
              </span>
            </Link>

            <p className="max-w-[14rem] whitespace-pre-line text-base leading-7 text-white/65">
              {blogBrand.tagline}
            </p>

            <div className="flex items-center gap-4">
              {blogSocialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    className="text-white/60 transition-colors hover:text-white"
                    href={link.href}
                  >
                    <Icon aria-hidden className="size-5" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {blogFooterColumns.map((column) => (
              <BlogFooterLinkColumn key={column.title} {...column} />
            ))}
          </div>
        </div>

        <BrandSeparator className="bg-white/10" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <p className="text-xs text-white/45">{blogFooterMeta.copyright}</p>
            <div className="flex flex-wrap gap-4">
              {blogFooterMetaLinks.map((link) => (
                <a
                  key={link.label}
                  className="text-xs text-white/45 transition-colors hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {blogPaymentBadges.map((badge) => (
              <BrandBadge
                key={badge}
                className="h-8 border border-white/10 bg-white/5 px-3 text-[10px] tracking-[0.08em] text-white/82"
                variant="outline"
              >
                {badge}
              </BrandBadge>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export { BlogFooter }
