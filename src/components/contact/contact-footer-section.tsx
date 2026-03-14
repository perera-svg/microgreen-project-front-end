import { Link } from "@tanstack/react-router"

import { BrandBadge } from "@/components/brand/brand-badge"
import { BrandSeparator } from "@/components/brand/brand-separator"
import { FooterLinkColumn } from "@/components/landing/footer-link-column"

import {
  contactBrand,
  contactFooterColumns,
  contactFooterMeta,
  contactFooterMetaLinks,
  contactFooterPaymentBadges,
} from "./content"

function ContactFooterSection() {
  const BrandIcon = contactBrand.icon

  return (
    <footer className="bg-[#1f221d] py-10 text-white sm:py-12" id="footer">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="flex max-w-sm flex-col gap-4">
            <Link className="flex items-center gap-3 text-white" to="/">
              <span className="grid size-11 place-items-center rounded-full bg-white/10 text-white">
                <BrandIcon aria-hidden className="size-5" />
              </span>
              <span className="font-serif text-2xl italic leading-none">
                {contactBrand.name}
              </span>
            </Link>

            <p className="max-w-[18rem] text-sm leading-6 text-white/60">
              {contactBrand.tagline}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactFooterColumns.map((column) => (
              <FooterLinkColumn key={column.title} {...column} />
            ))}
          </div>
        </div>

        <BrandSeparator className="bg-white/10" />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <p className="text-xs text-white/45">{contactFooterMeta.copyright}</p>
            <div className="flex flex-wrap gap-4">
              {contactFooterMetaLinks.map((link) => (
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
            {contactFooterPaymentBadges.map((badge) => (
              <BrandBadge
                key={badge}
                className="h-8 border border-white/10 bg-white/5 px-3 text-[11px] tracking-[0.08em] text-white/82"
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

export { ContactFooterSection }
