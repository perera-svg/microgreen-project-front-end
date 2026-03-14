import CheckIcon from "lucide-react/dist/esm/icons/check"

import { orderConfirmationHero } from "./content"
import type { OrderConfirmationSnapshot } from "./order-confirmation-snapshot"

type OrderConfirmationHeroProps = {
  snapshot: OrderConfirmationSnapshot
}

function OrderConfirmationHero({ snapshot }: OrderConfirmationHeroProps) {
  return (
    <section className="flex flex-col items-center gap-3 text-center sm:gap-4">
      <div className="grid size-[4.5rem] place-items-center rounded-full bg-accent text-primary sm:size-20">
        <CheckIcon aria-hidden className="size-8 sm:size-9" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-serif text-[2rem] leading-tight text-foreground sm:text-[2.25rem]">
          {orderConfirmationHero.title}
        </h1>
        <p className="font-meta text-[13px] text-text-secondary">
          {orderConfirmationHero.orderPrefix}
          {snapshot.orderNumber}
        </p>
      </div>
    </section>
  )
}

export { OrderConfirmationHero }
