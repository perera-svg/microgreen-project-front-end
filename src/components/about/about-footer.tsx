import { Link } from "@tanstack/react-router"

import { BrandBadge } from "@/components/brand/brand-badge"
import { BrandButton } from "@/components/brand/brand-button"
import { BrandSeparator } from "@/components/brand/brand-separator"
import { isPureAppRouteHref } from "@/lib/utils"

import {
  aboutBrand,
  aboutFooter,
  aboutFooterColumns,
  aboutFooterMeta,
  aboutFooterMetaLinks,
  aboutFooterSocialLinks,
  aboutPaymentBadges,
} from "./content"

function AboutFooter() {
  const BrandIcon = aboutBrand.icon

  return (
    <footer className="bg-[#1f221d] pt-14 text-white sm:pt-16" id="footer">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="flex flex-col gap-6">
            <Link className="flex items-center gap-3 text-white" to="/">
              <span className="grid size-11 place-items-center rounded-full bg-white/10 text-white">
                <BrandIcon aria-hidden className="size-5" />
              </span>
              <span className="font-serif text-2xl italic leading-none">
                {aboutBrand.name}
              </span>
            </Link>

            <p className="max-w-[15rem] whitespace-pre-line font-serif text-3xl leading-tight text-white">
              {aboutFooter.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {aboutFooterSocialLinks.map((link) => {
                const SocialIcon = link.icon

                return (
                  <BrandButton
                    aria-label={link.label}
                    className="rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                    key={link.label}
                    nativeButton={false}
                    render={<a href={link.href} />}
                    size="icon-sm"
                    variant="outline"
                  >
                    <SocialIcon aria-hidden />
                  </BrandButton>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aboutFooterColumns.map((column) => (
              <div className="flex flex-col gap-3" key={column.title}>
                <h3 className="text-sm font-semibold text-white">{column.title}</h3>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      {isPureAppRouteHref(link.href) ? (
                        <Link
                          className="text-sm text-white/65 transition-colors hover:text-white"
                          to={link.href}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          className="text-sm text-white/65 transition-colors hover:text-white"
                          href={link.href}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <BrandSeparator className="bg-white/10" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <p className="text-sm text-white/65">{aboutFooterMeta.copyright}</p>
            <div className="flex flex-wrap gap-4">
              {aboutFooterMetaLinks.map((link) => (
                <a
                  className="text-sm text-white/65 transition-colors hover:text-white"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {aboutPaymentBadges.map((badge) => (
              <BrandBadge
                className="h-8 border border-white/10 bg-white/5 px-3 text-[11px] tracking-[0.08em] text-white/82"
                key={badge}
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

export { AboutFooter }
