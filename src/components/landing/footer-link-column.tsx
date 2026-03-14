import { Link } from "@tanstack/react-router"

import type { FooterLinkColumnData } from "./content"
import { isPureAppRouteHref } from "@/lib/utils"

function FooterLinkColumn({ links, title }: FooterLinkColumnData) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
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
  )
}

export { FooterLinkColumn }
