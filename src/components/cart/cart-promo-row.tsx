import { useState } from "react"

import { BrandButton } from "@/components/brand/brand-button"
import { BrandInput } from "@/components/brand/brand-input"
import { cartLabels } from "./content"

type CartPromoRowProps = {
  onApplyPromo: (promoCode: string) => void
}

function CartPromoRow({ onApplyPromo }: CartPromoRowProps) {
  const [promoCode, setPromoCode] = useState("")

  return (
    <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center">
      <BrandInput
        placeholder={cartLabels.promoPlaceholder}
        value={promoCode}
        onChange={(event) => setPromoCode(event.target.value)}
      />
      <BrandButton
        className="h-11 px-5"
        type="button"
        variant="outline"
        onClick={() => onApplyPromo(promoCode)}
      >
        {cartLabels.applyPromo}
      </BrandButton>
    </div>
  )
}

export { CartPromoRow }
