import {
  checkoutDeliveryDateOptions,
  checkoutDeliveryMethods,
  checkoutDeliveryWindowOptions,
} from "@/components/checkout/content"
import type { CheckoutDraft } from "@/components/checkout/use-checkout-draft"
import type { CartItem } from "@/components/cart/cart-provider"

import {
  ORDER_CONFIRMATION_STORAGE_KEY,
  orderConfirmationReceipt,
} from "./content"

type OrderConfirmationSnapshotItem = {
  id: string
  lineTotalLabel: string
  name: string
  quantity: number
}

type OrderConfirmationSnapshot = {
  addressLine1: string
  addressLine2: string
  city: string
  deliveryDateLabel: string
  deliveryFeeLabel: string
  deliveryMethodLabel: string
  deliveryWindowLabel: string
  discountLabel: string
  district: string
  itemCount: number
  items: OrderConfirmationSnapshotItem[]
  orderNumber: string
  placedAt: string
  postalCode: string
  recipientName: string
  subtotalLabel: string
  totalLabel: string
}

type BuildOrderConfirmationSnapshotInput = {
  deliveryFeeLabel: string
  discountLabel: string
  draft: CheckoutDraft
  items: CartItem[]
  subtotalLabel: string
  totalLabel: string
}

function sanitizeString(value: unknown) {
  return typeof value === "string" ? value : ""
}

function sanitizeNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0
}

function resolveOptionLabel(
  options: ReadonlyArray<{ label: string; value: string }>,
  value: string
) {
  return options.find((option) => option.value === value)?.label ?? ""
}

function createOrderNumber(date: Date) {
  return `CG-${String(date.getTime() % 100000).padStart(5, "0")}`
}

function formatPlacedAt(value: string) {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return ""
  }

  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date)
}

function getAddressLines(snapshot: OrderConfirmationSnapshot) {
  const middleLine = [snapshot.addressLine1, snapshot.addressLine2]
    .filter(Boolean)
    .join(", ")
  const bottomLine = [snapshot.city, snapshot.postalCode, snapshot.district]
    .filter(Boolean)
    .join(", ")

  return [snapshot.recipientName, middleLine, bottomLine].filter(Boolean)
}

function buildOrderConfirmationSnapshot({
  deliveryFeeLabel,
  discountLabel,
  draft,
  items,
  subtotalLabel,
  totalLabel,
}: BuildOrderConfirmationSnapshotInput): OrderConfirmationSnapshot {
  const placedAt = new Date()

  return {
    addressLine1: draft.addressLine1,
    addressLine2: draft.addressLine2,
    city: draft.city,
    deliveryDateLabel: resolveOptionLabel(
      checkoutDeliveryDateOptions,
      draft.deliveryDate
    ),
    deliveryFeeLabel,
    deliveryMethodLabel:
      checkoutDeliveryMethods.find((method) => method.value === draft.deliveryMethod)
        ?.label ?? "",
    deliveryWindowLabel: resolveOptionLabel(
      checkoutDeliveryWindowOptions,
      draft.deliveryWindow
    ),
    discountLabel,
    district: draft.district,
    itemCount: items.length,
    items: items.map((item) => ({
      id: item.id,
      lineTotalLabel: item.lineTotalLabel,
      name: item.name,
      quantity: item.quantity,
    })),
    orderNumber: createOrderNumber(placedAt),
    placedAt: placedAt.toISOString(),
    postalCode: draft.postalCode,
    recipientName: draft.fullName,
    subtotalLabel,
    totalLabel,
  }
}

function sanitizeSnapshotItem(
  candidate: unknown
): OrderConfirmationSnapshotItem | null {
  if (!candidate || typeof candidate !== "object") {
    return null
  }

  const item = candidate as Partial<Record<keyof OrderConfirmationSnapshotItem, unknown>>
  const sanitizedItem = {
    id: sanitizeString(item.id),
    lineTotalLabel: sanitizeString(item.lineTotalLabel),
    name: sanitizeString(item.name),
    quantity: sanitizeNumber(item.quantity),
  }

  if (!sanitizedItem.id || !sanitizedItem.name || !sanitizedItem.lineTotalLabel) {
    return null
  }

  return sanitizedItem
}

function sanitizeSnapshot(
  candidate: unknown
): OrderConfirmationSnapshot | null {
  if (!candidate || typeof candidate !== "object") {
    return null
  }

  const snapshot = candidate as Partial<
    Record<keyof OrderConfirmationSnapshot, unknown>
  >
  const items = Array.isArray(snapshot.items)
    ? snapshot.items
        .map(sanitizeSnapshotItem)
        .filter((item): item is OrderConfirmationSnapshotItem => Boolean(item))
    : []

  if (items.length === 0) {
    return null
  }

  const sanitizedSnapshot: OrderConfirmationSnapshot = {
    addressLine1: sanitizeString(snapshot.addressLine1),
    addressLine2: sanitizeString(snapshot.addressLine2),
    city: sanitizeString(snapshot.city),
    deliveryDateLabel: sanitizeString(snapshot.deliveryDateLabel),
    deliveryFeeLabel: sanitizeString(snapshot.deliveryFeeLabel),
    deliveryMethodLabel: sanitizeString(snapshot.deliveryMethodLabel),
    deliveryWindowLabel: sanitizeString(snapshot.deliveryWindowLabel),
    discountLabel: sanitizeString(snapshot.discountLabel),
    district: sanitizeString(snapshot.district),
    itemCount: sanitizeNumber(snapshot.itemCount) || items.length,
    items,
    orderNumber: sanitizeString(snapshot.orderNumber),
    placedAt: sanitizeString(snapshot.placedAt),
    postalCode: sanitizeString(snapshot.postalCode),
    recipientName: sanitizeString(snapshot.recipientName),
    subtotalLabel: sanitizeString(snapshot.subtotalLabel),
    totalLabel: sanitizeString(snapshot.totalLabel),
  }

  if (!sanitizedSnapshot.orderNumber || !sanitizedSnapshot.totalLabel) {
    return null
  }

  return sanitizedSnapshot
}

function readStoredOrderConfirmationSnapshot() {
  if (typeof window === "undefined") {
    return null
  }

  try {
    const rawSnapshot = window.localStorage.getItem(
      ORDER_CONFIRMATION_STORAGE_KEY
    )

    if (!rawSnapshot) {
      return null
    }

    return sanitizeSnapshot(JSON.parse(rawSnapshot))
  } catch {
    return null
  }
}

function writeStoredOrderConfirmationSnapshot(
  snapshot: OrderConfirmationSnapshot
) {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(
    ORDER_CONFIRMATION_STORAGE_KEY,
    JSON.stringify(snapshot)
  )
}

function clearStoredOrderConfirmationSnapshot() {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.removeItem(ORDER_CONFIRMATION_STORAGE_KEY)
}

function buildOrderConfirmationReceipt(snapshot: OrderConfirmationSnapshot) {
  const lines = [
    orderConfirmationReceipt.title,
    `Order: ${snapshot.orderNumber}`,
    `Placed: ${formatPlacedAt(snapshot.placedAt)}`,
    "",
    "Delivery",
    `${snapshot.deliveryMethodLabel} | ${snapshot.deliveryDateLabel} | ${snapshot.deliveryWindowLabel}`,
    "",
    "Address",
    ...getAddressLines(snapshot),
    "",
    "Items",
    ...snapshot.items.map(
      (item) => `${item.name} x ${item.quantity} - ${item.lineTotalLabel}`
    ),
    "",
    `Subtotal: ${snapshot.subtotalLabel}`,
    `Discount: - ${snapshot.discountLabel}`,
    `Delivery: ${snapshot.deliveryFeeLabel}`,
    `Total: ${snapshot.totalLabel}`,
  ]

  return lines.join("\n")
}

function buildOrderConfirmationWhatsAppUrl(
  snapshot: OrderConfirmationSnapshot
) {
  const message = [
    `My Ceylon Greens order ${snapshot.orderNumber} is confirmed.`,
    `Delivery: ${snapshot.deliveryDateLabel} (${snapshot.deliveryWindowLabel})`,
    `Total: ${snapshot.totalLabel}`,
  ].join("\n")

  return `https://wa.me/?text=${encodeURIComponent(message)}`
}

export {
  buildOrderConfirmationReceipt,
  buildOrderConfirmationSnapshot,
  buildOrderConfirmationWhatsAppUrl,
  clearStoredOrderConfirmationSnapshot,
  getAddressLines,
  readStoredOrderConfirmationSnapshot,
  writeStoredOrderConfirmationSnapshot,
}
export type { OrderConfirmationSnapshot, OrderConfirmationSnapshotItem }
