import SproutIcon from "lucide-react/dist/esm/icons/sprout"
import LockIcon from "lucide-react/dist/esm/icons/lock"

import { orderConfirmationNav } from "./content"

function OrderConfirmationNav() {
  return (
    <header className="border-b border-border bg-card/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-foreground">
          <span className="grid size-10 place-items-center rounded-full bg-secondary text-primary">
            <SproutIcon aria-hidden className="size-[18px]" />
          </span>
          <span className="font-serif text-lg leading-none sm:text-xl">
            {orderConfirmationNav.brandLabel}
          </span>
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-[11px] font-medium text-text-secondary sm:inline-flex">
          <LockIcon aria-hidden className="size-3.5 text-primary" />
          <span>{orderConfirmationNav.secureLabel}</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-text-tertiary sm:hidden">
          <span>{orderConfirmationNav.trackLabel}</span>
          <span className="font-semibold text-primary">
            {orderConfirmationNav.supportLabel}
          </span>
        </div>
      </div>
    </header>
  )
}

export { OrderConfirmationNav }
