import MapPinIcon from "lucide-react/dist/esm/icons/map-pin"
import TruckIcon from "lucide-react/dist/esm/icons/truck"

import {
  BrandCard,
  BrandCardContent,
} from "@/components/brand/brand-card"
import { BrandSeparator } from "@/components/brand/brand-separator"

import { orderConfirmationInfoCard } from "./content"
import {
  getAddressLines,
  type OrderConfirmationSnapshot,
} from "./order-confirmation-snapshot"

type OrderConfirmationInfoCardProps = {
  snapshot: OrderConfirmationSnapshot
}

function OrderConfirmationInfoCard({
  snapshot,
}: OrderConfirmationInfoCardProps) {
  const addressLines = getAddressLines(snapshot)

  return (
    <BrandCard className="gap-0 px-0 py-0">
      <BrandCardContent className="flex flex-col gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-primary">
            <TruckIcon aria-hidden className="size-4" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-foreground">
              {orderConfirmationInfoCard.deliveryTitle}:{" "}
              {snapshot.deliveryDateLabel}
            </p>
            <p className="text-sm leading-6 text-text-secondary">
              {snapshot.deliveryMethodLabel} • {orderConfirmationInfoCard.windowPrefix}{" "}
              {snapshot.deliveryWindowLabel}
            </p>
          </div>
        </div>

        <BrandSeparator />

        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-primary">
            <MapPinIcon aria-hidden className="size-4" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-foreground">
              {orderConfirmationInfoCard.addressTitle}
            </p>
            <div className="flex flex-col text-sm leading-6 text-text-secondary">
              {addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </div>
        </div>
      </BrandCardContent>
    </BrandCard>
  )
}

export { OrderConfirmationInfoCard }
