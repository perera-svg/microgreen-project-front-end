import {
  BrandAccordion,
  BrandAccordionContent,
  BrandAccordionItem,
  BrandAccordionTrigger,
} from "@/components/brand/brand-accordion"
import { BrandSeparator } from "@/components/brand/brand-separator"

import { orderConfirmationSummary } from "./content"
import type { OrderConfirmationSnapshot } from "./order-confirmation-snapshot"

type OrderConfirmationSummaryCardProps = {
  snapshot: OrderConfirmationSnapshot
}

function getItemCountLabel(itemCount: number) {
  return `${itemCount} ${itemCount === 1 ? "item" : "items"}`
}

function OrderConfirmationSummaryCard({
  snapshot,
}: OrderConfirmationSummaryCardProps) {
  return (
    <BrandAccordion
      className="rounded-[16px] border-border bg-card shadow-soft"
      defaultValue={["summary"]}
      multiple
    >
      <BrandAccordionItem className="border-none bg-transparent" value="summary">
        <BrandAccordionTrigger className="px-5 py-5 hover:no-underline sm:px-6 sm:py-6">
          <div className="flex w-full items-center justify-between gap-4 pr-3">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-sm font-medium text-foreground">
                {orderConfirmationSummary.summaryTitle} (
                {getItemCountLabel(snapshot.itemCount)})
              </span>
            </div>
            <span className="font-meta text-sm font-semibold text-foreground sm:text-base">
              {snapshot.totalLabel}
            </span>
          </div>
        </BrandAccordionTrigger>

        <BrandAccordionContent className="pb-0">
          <div className="flex flex-col gap-4 pb-5 sm:pb-6">
            <BrandSeparator />

            <div className="flex flex-col gap-4 px-1">
              {snapshot.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 text-sm"
                >
                  <span className="text-text-secondary">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="font-meta text-foreground">
                    {item.lineTotalLabel}
                  </span>
                </div>
              ))}
            </div>

            <BrandSeparator />

            <div className="flex items-center justify-between gap-4 px-1 text-sm">
              <span className="text-text-secondary">
                {orderConfirmationSummary.deliveryLabel}
              </span>
              <span className="font-meta text-foreground">
                {snapshot.deliveryFeeLabel}
              </span>
            </div>
          </div>
        </BrandAccordionContent>
      </BrandAccordionItem>
    </BrandAccordion>
  )
}

export { OrderConfirmationSummaryCard }
