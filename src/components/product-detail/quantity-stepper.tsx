import MinusIcon from "lucide-react/dist/esm/icons/minus"
import PlusIcon from "lucide-react/dist/esm/icons/plus"

import { BrandButton } from "@/components/brand/brand-button"

type QuantityStepperProps = {
  onDecrement: () => void
  onIncrement: () => void
  quantity: number
}

function QuantityStepper({
  onDecrement,
  onIncrement,
  quantity,
}: QuantityStepperProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card p-1">
      <BrandButton
        aria-label="Decrease quantity"
        size="icon-sm"
        type="button"
        variant="ghost"
        onClick={onDecrement}
      >
        <MinusIcon aria-hidden />
      </BrandButton>
      <span className="min-w-8 text-center font-meta text-sm text-foreground">
        {quantity}
      </span>
      <BrandButton
        aria-label="Increase quantity"
        size="icon-sm"
        type="button"
        variant="ghost"
        onClick={onIncrement}
      >
        <PlusIcon aria-hidden />
      </BrandButton>
    </div>
  )
}

export { QuantityStepper }
