import { cn } from "@/lib/utils"

import type { SignUpFooterLink } from "./content"

type FooterLinkItemProps = SignUpFooterLink & {
  className?: string
}

function FooterLinkItem({ className, href, label }: FooterLinkItemProps) {
  return (
    <a
      className={cn(
        "text-xs text-text-tertiary transition-colors hover:text-sage-dark",
        className
      )}
      href={href}
    >
      {label}
    </a>
  )
}

export { FooterLinkItem }
