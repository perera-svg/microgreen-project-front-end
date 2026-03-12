import { Link } from "@tanstack/react-router"

import { BrandSeparator } from "@/components/brand/brand-separator"

import {
  shopBrand,
  shopFooter,
  shopFooterColumns,
  shopFooterSocialLinks,
} from "./content"
import { FooterLinkColumn } from "./footer-link-column"

function ShopFooter() {
  const BrandIcon = shopBrand.icon

  return (
    <footer className="mt-16 bg-[#1f221d] py-12 text-white sm:py-14" id="footer">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="flex max-w-sm flex-col gap-4">
            <Link className="flex items-center gap-3 text-white" to="/">
              <span className="grid size-11 place-items-center rounded-full bg-white/10 text-white">
                <BrandIcon aria-hidden className="size-5" />
              </span>
              <span className="font-serif text-2xl italic leading-none">
                {shopBrand.name}
              </span>
            </Link>

            <p className="text-sm leading-6 text-white/65">{shopFooter.description}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {shopFooterColumns.map((column) => (
              <FooterLinkColumn key={column.title} {...column} />
            ))}
          </div>
        </div>

        <BrandSeparator className="bg-white/10" />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs text-white/45">{shopFooter.copyright}</p>
          <div className="flex flex-wrap gap-4">
            {shopFooterSocialLinks.map((link) => (
              <a
                key={link.label}
                className="text-xs text-white/55 transition-colors hover:text-white"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export { ShopFooter }
