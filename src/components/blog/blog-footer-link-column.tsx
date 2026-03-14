import { Link } from "@tanstack/react-router"

import { isPureAppRouteHref } from "@/lib/utils"

import type { BlogFooterColumnData } from "./content"

function BlogFooterLinkColumn({ links, title }: BlogFooterColumnData) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <div className="flex flex-col gap-3">
        {links.map((link) =>
          isPureAppRouteHref(link.href) ? (
            <Link
              key={`${title}-${link.label}`}
              className="text-sm text-white/65 transition-colors hover:text-white"
              to={link.href}
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={`${title}-${link.label}`}
              className="text-sm text-white/65 transition-colors hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          )
        )}
      </div>
    </div>
  )
}

export { BlogFooterLinkColumn }
