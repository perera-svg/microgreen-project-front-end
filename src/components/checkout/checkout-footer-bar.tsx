import LockIcon from "lucide-react/dist/esm/icons/lock"

import { checkoutFooter } from "./content"

function CheckoutFooterBar() {
  return (
    <footer className="border-t border-border bg-card/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-text-tertiary sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>{checkoutFooter.copyright}</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            className="transition-colors hover:text-foreground"
            href={checkoutFooter.privacyHref}
          >
            {checkoutFooter.privacyLabel}
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href={checkoutFooter.termsHref}
          >
            {checkoutFooter.termsLabel}
          </a>
          <span className="inline-flex items-center gap-2">
            <LockIcon aria-hidden className="size-3.5 text-primary" />
            <span>{checkoutFooter.securityLabel}</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export { CheckoutFooterBar }
