import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

import { CART_DELIVERY_FEE, CART_DISCOUNT, CART_STORAGE_KEY, formatCartCurrency } from "./content"
import {
  getDefaultProductVariant,
  getProductCartMeta,
  getProductVariantById,
} from "@/components/product-detail/content"
import { getShopProductById } from "@/components/shop/content"

type CartItemInput = {
  productId: string
  quantity: number
  variantId: string
}

type CartItemIdentity = Pick<CartItemInput, "productId" | "variantId">

type StoredCartItem = CartItemInput

type CartItem = StoredCartItem & {
  id: string
  image: string
  imageAlt: string
  lineTotal: number
  lineTotalLabel: string
  name: string
  subtitle: string
  unitPrice: number
  unitPriceLabel: string
  variantLabel: string
}

type CartContextValue = {
  addItem: (item: CartItemInput) => void
  clearCart: () => void
  decrementItem: (identity: CartItemIdentity) => void
  deliveryFee: number
  deliveryFeeLabel: string
  discount: number
  discountLabel: string
  hasItems: boolean
  incrementItem: (identity: CartItemIdentity) => void
  itemCount: number
  items: CartItem[]
  lineCount: number
  removeItem: (identity: CartItemIdentity) => void
  subtotal: number
  subtotalLabel: string
  total: number
  totalLabel: string
}

const MAX_CART_QUANTITY = 99

const CartContext = createContext<CartContextValue | null>(null)

function getCartItemId({ productId, variantId }: CartItemIdentity) {
  return `${productId}::${variantId}`
}

function clampQuantity(quantity: number) {
  if (!Number.isFinite(quantity)) {
    return 1
  }

  return Math.max(1, Math.min(MAX_CART_QUANTITY, Math.floor(quantity)))
}

function sanitizeCartItems(items: unknown): StoredCartItem[] {
  if (!Array.isArray(items)) {
    return []
  }

  const mergedItems = new Map<string, StoredCartItem>()

  for (const candidate of items) {
    if (
      !candidate ||
      typeof candidate !== "object" ||
      !("productId" in candidate) ||
      !("variantId" in candidate) ||
      !("quantity" in candidate)
    ) {
      continue
    }

    const productId =
      typeof candidate.productId === "string" ? candidate.productId : ""
    const variantId =
      typeof candidate.variantId === "string" ? candidate.variantId : ""
    const quantity =
      typeof candidate.quantity === "number" ? candidate.quantity : Number.NaN

    if (!getShopProductById(productId) || !getProductVariantById(productId, variantId)) {
      continue
    }

    const cartId = getCartItemId({ productId, variantId })
    const current = mergedItems.get(cartId)
    const nextQuantity = clampQuantity((current?.quantity ?? 0) + quantity)

    mergedItems.set(cartId, { productId, quantity: nextQuantity, variantId })
  }

  return Array.from(mergedItems.values())
}

function readStoredCartItems() {
  if (typeof window === "undefined") {
    return []
  }

  try {
    const rawValue = window.localStorage.getItem(CART_STORAGE_KEY)

    if (!rawValue) {
      return []
    }

    return sanitizeCartItems(JSON.parse(rawValue))
  } catch {
    return []
  }
}

function resolveCartItem(item: StoredCartItem): CartItem | null {
  const product = getShopProductById(item.productId)
  const variant = getProductVariantById(item.productId, item.variantId)
  const cartMeta = getProductCartMeta(item.productId)

  if (!product || !variant || !cartMeta) {
    return null
  }

  const lineTotal = variant.price * item.quantity

  return {
    ...item,
    id: getCartItemId(item),
    image: cartMeta.image,
    imageAlt: cartMeta.imageAlt,
    lineTotal,
    lineTotalLabel: formatCartCurrency(lineTotal),
    name: product.name,
    subtitle: cartMeta.subtitle,
    unitPrice: variant.price,
    unitPriceLabel: variant.priceLabel,
    variantLabel: variant.label,
  }
}

function CartProvider({ children }: { children: ReactNode }) {
  const [storedItems, setStoredItems] = useState<StoredCartItem[]>(() =>
    readStoredCartItems()
  )

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(storedItems))
  }, [storedItems])

  const items = storedItems
    .map(resolveCartItem)
    .filter((item): item is CartItem => Boolean(item))
  const lineCount = items.length
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce((total, item) => total + item.lineTotal, 0)
  const deliveryFee = lineCount > 0 ? CART_DELIVERY_FEE : 0
  const discount = lineCount > 0 ? CART_DISCOUNT : 0
  const total = subtotal + deliveryFee - discount

  function addItem(item: CartItemInput) {
    const fallbackVariant = getDefaultProductVariant(item.productId)
    const nextItem = {
      productId: item.productId,
      quantity: clampQuantity(item.quantity),
      variantId: item.variantId || fallbackVariant?.id || "",
    }

    setStoredItems((current) => sanitizeCartItems([...current, nextItem]))
  }

  function incrementItem(identity: CartItemIdentity) {
    setStoredItems((current) =>
      current.map((item) =>
        item.productId === identity.productId && item.variantId === identity.variantId
          ? { ...item, quantity: clampQuantity(item.quantity + 1) }
          : item
      )
    )
  }

  function decrementItem(identity: CartItemIdentity) {
    setStoredItems((current) =>
      current.map((item) =>
        item.productId === identity.productId && item.variantId === identity.variantId
          ? { ...item, quantity: clampQuantity(item.quantity - 1) }
          : item
      )
    )
  }

  function removeItem(identity: CartItemIdentity) {
    setStoredItems((current) =>
      current.filter(
        (item) =>
          item.productId !== identity.productId ||
          item.variantId !== identity.variantId
      )
    )
  }

  function clearCart() {
    setStoredItems([])
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        clearCart,
        decrementItem,
        deliveryFee,
        deliveryFeeLabel: formatCartCurrency(deliveryFee),
        discount,
        discountLabel: formatCartCurrency(discount),
        hasItems: lineCount > 0,
        incrementItem,
        itemCount,
        items,
        lineCount,
        removeItem,
        subtotal,
        subtotalLabel: formatCartCurrency(subtotal),
        total,
        totalLabel: formatCartCurrency(total),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used within a CartProvider.")
  }

  return context
}

export { CartProvider, useCart }
export type { CartItem, CartItemIdentity, CartItemInput }
