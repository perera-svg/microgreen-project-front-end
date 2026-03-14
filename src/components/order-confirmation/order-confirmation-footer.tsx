import ShieldCheckIcon from "lucide-react/dist/esm/icons/shield-check"

import { orderConfirmationFooter } from "./content"

function OrderConfirmationFooter() {
  return (
    <footer className="border-t border-border bg-card/90">
      <div className="mx-auto hidden max-w-7xl items-center justify-between gap-4 px-4 py-4 text-xs text-text-tertiary sm:flex sm:px-6 lg:px-8">
        <p>{orderConfirmationFooter.copyrightDesktop}</p>

        <div className="flex items-center gap-4">
          <a
            className="transition-colors hover:text-foreground"
            href={orderConfirmationFooter.privacyHref}
          >
            {orderConfirmationFooter.privacyLabel}
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href={orderConfirmationFooter.termsHref}
          >
            {orderConfirmationFooter.termsLabel}
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href={orderConfirmationFooter.helpHref}
          >
            {orderConfirmationFooter.helpLabel}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-center text-[11px] text-text-tertiary sm:hidden">
        <div className="inline-flex items-center justify-center gap-2">
          <ShieldCheckIcon aria-hidden className="size-3.5 text-primary" />
          <span>{orderConfirmationFooter.secureNote}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <span>{orderConfirmationFooter.copyrightMobile}</span>
          <a href={orderConfirmationFooter.privacyHref}>
            {orderConfirmationFooter.privacyLabel}
          </a>
          <a href={orderConfirmationFooter.termsHref}>
            {orderConfirmationFooter.termsLabel}
          </a>
        </div>
      </div>
    </footer>
  )
}

export { OrderConfirmationFooter }
