export const CART_STORAGE_KEY = "ceylon-greens-cart/v1"
export const CART_DELIVERY_FEE = 350
export const CART_DISCOUNT = 0

export const cartLinks = {
  checkoutTo: "/sign-in",
  continueShoppingTo: "/shop",
}

export const cartLabels = {
  applyPromo: "Apply",
  checkout: "Proceed to Checkout",
  continueShopping: "Continue Shopping",
  delivery: "Delivery",
  discount: "Discount",
  itemPlural: "items",
  itemSingular: "item",
  orderSummary: "Order Summary",
  promoPlaceholder: "Promo code",
  secureCheckout: "Secure checkout",
  subtotal: "Subtotal",
  title: "Your Cart",
  total: "Total",
}

export const cartEmptyState = {
  actionLabel: "Browse Shop",
  description:
    "Your cart is empty right now. Add a few fresh trays from the catalog and come back here to review the order.",
  title: "Start building your weekly harvest",
}

export const cartPaymentMethods = ["VISA", "MC", "LankaQR", "iPay"]

export const cartToastMessages = {
  addToCartTitle: "Added to cart",
  promoDescription:
    "This cart is fully local for now, but discount codes are not wired in yet.",
  promoTitle: "Promo codes coming soon",
  removedTitle: "Removed from cart",
}

const cartCurrencyFormatter = new Intl.NumberFormat("en-LK")

function formatCartCurrency(value: number) {
  return `Rs. ${cartCurrencyFormatter.format(value)}`
}

export { formatCartCurrency }
