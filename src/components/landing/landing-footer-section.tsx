import { BrandBadge } from "@/components/brand/brand-badge"
import { BrandSeparator } from "@/components/brand/brand-separator"

import {
  landingBrand,
  landingFooterColumns,
  landingFooterMeta,
  landingFooterMetaLinks,
  landingPaymentBadges,
} from "./content"
import { FooterLinkColumn } from "./footer-link-column"

function LandingFooterSection() {
  const BrandIcon = landingBrand.icon

  return (
    <footer className="mt-16 bg-[#1f221d] pt-14 text-white sm:pt-16" id="footer">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="flex flex-col gap-6">
            <a className="flex items-center gap-3 text-white" href="#">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-white">
                <BrandIcon aria-hidden className="size-5" />
              </span>
              <span className="font-serif text-2xl leading-none">
                {landingBrand.name}
              </span>
            </a>

            <p className="max-w-[14rem] whitespace-pre-line text-3xl leading-tight text-white">
              {landingBrand.tagline}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {landingFooterColumns.map((column) => (
              <FooterLinkColumn key={column.title} {...column} />
            ))}
          </div>
        </div>

        <BrandSeparator className="bg-white/10" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <p className="text-sm text-white/65">{landingFooterMeta.copyright}</p>
            <div className="flex flex-wrap gap-4">
              {landingFooterMetaLinks.map((link) => (
                <a
                  key={link.label}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {landingPaymentBadges.map((badge) => (
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

export { LandingFooterSection }
