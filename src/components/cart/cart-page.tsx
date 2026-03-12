import { toast } from "sonner"

import { ShopFooter } from "@/components/shop/shop-footer"
import { ShopNav } from "@/components/shop/shop-nav"
import { CartEmptyState } from "./cart-empty-state"
import { CartHeader } from "./cart-header"
import { CartItemsSection } from "./cart-items-section"
import { useCart } from "./cart-provider"
import { CartSummaryCard } from "./cart-summary-card"
import { cartToastMessages } from "./content"

function CartPage() {
  const {
    decrementItem,
    deliveryFeeLabel,
    discountLabel,
    hasItems,
    incrementItem,
    items,
    lineCount,
    removeItem,
    subtotalLabel,
    totalLabel,
  } = useCart()

  function handlePlaceholderAction(message: string) {
    toast(message, {
      description: "These controls stay UI-only in this pass.",
    })
  }

  function handleApplyPromo() {
    toast(cartToastMessages.promoTitle, {
      description: cartToastMessages.promoDescription,
    })
  }

  function handleRemoveItem(itemName: string) {
    toast(cartToastMessages.removedTitle, {
      description: `${itemName} was removed from your cart.`,
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <ShopNav onPlaceholderAction={handlePlaceholderAction} />
      <CartHeader lineCount={lineCount} />

      {hasItems ? (
        <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8">
          <CartItemsSection
            items={items}
            onApplyPromo={handleApplyPromo}
            onDecrement={decrementItem}
            onIncrement={incrementItem}
            onRemove={(identity) => {
              const item = items.find(
                (entry) =>
                  entry.productId === identity.productId &&
                  entry.variantId === identity.variantId
              )

              removeItem(identity)

              if (item) {
                handleRemoveItem(item.name)
              }
            }}
          />
          <CartSummaryCard
            deliveryFeeLabel={deliveryFeeLabel}
            discountLabel={discountLabel}
            subtotalLabel={subtotalLabel}
            totalLabel={totalLabel}
          />
        </section>
      ) : (
        <CartEmptyState />
      )}

      <ShopFooter />
    </main>
  )
}

export { CartPage }
