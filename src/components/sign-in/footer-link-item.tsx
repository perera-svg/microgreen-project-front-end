import { cn } from "@/lib/utils"

import type { SignInFooterLink } from "./content"

type FooterLinkItemProps = SignInFooterLink & {
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
