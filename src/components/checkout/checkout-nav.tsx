import { Link } from "@tanstack/react-router"
import LeafIcon from "lucide-react/dist/esm/icons/leaf"
import LockIcon from "lucide-react/dist/esm/icons/lock"

import { checkoutNav } from "./content"

function CheckoutNav() {
  return (
    <header className="border-b border-border bg-card/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          className="flex items-center gap-3 text-foreground transition-opacity hover:opacity-80"
          to={checkoutNav.homeTo}
        >
          <span className="grid size-10 place-items-center rounded-full bg-secondary text-primary">
            <LeafIcon aria-hidden className="size-[18px]" />
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-lg leading-none">
              {checkoutNav.brandLabel}
            </span>
            <span className="font-meta text-[10px] tracking-[0.22em] text-text-tertiary uppercase">
              Checkout
            </span>
          </div>
        </Link>

        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-[11px] font-medium text-text-secondary">
          <LockIcon aria-hidden className="size-3.5 text-primary" />
          <span>{checkoutNav.secureLabel}</span>
        </div>
      </div>
    </header>
  )
}

export { CheckoutNav }
