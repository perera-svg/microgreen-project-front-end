import { Link } from "@tanstack/react-router"
import ArrowLeftIcon from "lucide-react/dist/esm/icons/arrow-left"
import DownloadIcon from "lucide-react/dist/esm/icons/download"
import MessageCircleIcon from "lucide-react/dist/esm/icons/message-circle"
import TruckIcon from "lucide-react/dist/esm/icons/truck"
import { toast } from "sonner"

import { BrandButton } from "@/components/brand/brand-button"

import {
  orderConfirmationActions,
  orderConfirmationLinks,
  orderConfirmationReceipt,
} from "./content"
import {
  buildOrderConfirmationReceipt,
  buildOrderConfirmationWhatsAppUrl,
  type OrderConfirmationSnapshot,
} from "./order-confirmation-snapshot"

type OrderConfirmationActionsProps = {
  snapshot: OrderConfirmationSnapshot
}

function OrderConfirmationActions({
  snapshot,
}: OrderConfirmationActionsProps) {
  function handleTrackOrder() {
    toast(orderConfirmationActions.placeHolderTrackTitle, {
      description: `${orderConfirmationActions.placeHolderTrackDescriptionPrefix} ${snapshot.orderNumber} will be available soon.`,
    })
  }

  function handleDownloadReceipt() {
    const receiptText = buildOrderConfirmationReceipt(snapshot)
    const receiptBlob = new Blob([receiptText], {
      type: "text/plain;charset=utf-8",
    })
    const downloadUrl = URL.createObjectURL(receiptBlob)
    const downloadLink = document.createElement("a")

    downloadLink.href = downloadUrl
    downloadLink.download = `${orderConfirmationReceipt.filePrefix}-${snapshot.orderNumber.toLowerCase()}.txt`
    downloadLink.click()

    URL.revokeObjectURL(downloadUrl)
  }

  function handleWhatsAppShare() {
    window.open(
      buildOrderConfirmationWhatsAppUrl(snapshot),
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <section className="flex flex-col gap-3">
      <BrandButton
        className="h-12 w-full rounded-full"
        type="button"
        variant="destructive"
        onClick={handleTrackOrder}
      >
        {orderConfirmationActions.trackOrderLabel}
        <TruckIcon data-icon="inline-end" />
      </BrandButton>

      <BrandButton
        className="h-12 w-full rounded-full"
        type="button"
        variant="outline"
        onClick={handleDownloadReceipt}
      >
        {orderConfirmationActions.downloadReceiptLabel}
        <DownloadIcon data-icon="inline-end" />
      </BrandButton>

      <BrandButton
        className="h-auto justify-center px-0 text-sm text-text-secondary hover:bg-transparent hover:text-sage-dark"
        nativeButton={false}
        render={<Link to={orderConfirmationLinks.continueShoppingTo} />}
        variant="link"
      >
        <ArrowLeftIcon data-icon="inline-start" />
        {orderConfirmationActions.continueShoppingLabel}
      </BrandButton>

      <BrandButton
        className="h-auto justify-center px-0 text-primary hover:bg-transparent"
        type="button"
        variant="ghost"
        onClick={handleWhatsAppShare}
      >
        <MessageCircleIcon data-icon="inline-start" />
        {orderConfirmationActions.shareOnWhatsappLabel}
      </BrandButton>
    </section>
  )
}

export { OrderConfirmationActions }
