import { toast } from "sonner"

import { useCart } from "@/components/cart/cart-provider"
import { getDefaultProductVariant } from "@/components/product-detail/content"
import { ShopBreadcrumb } from "./shop-breadcrumb"
import { ShopCatalogSection } from "./shop-catalog-section"
import { ShopFooter } from "./shop-footer"
import { ShopHeader } from "./shop-header"
import { ShopNav } from "./shop-nav"
import { useShopCatalog } from "./use-shop-catalog"
import type { ShopProduct } from "./content"

function ShopPage() {
  const catalog = useShopCatalog()
  const { addItem } = useCart()

  function handlePlaceholderAction(message: string) {
    toast(message, {
      description: "This catalog is intentionally UI-only in this pass.",
    })
  }

  function handleAddToCart(product: ShopProduct) {
    const defaultVariant = getDefaultProductVariant(product.id)

    if (!defaultVariant) {
      return
    }

    addItem({
      productId: product.id,
      quantity: 1,
      variantId: defaultVariant.id,
    })

    toast("Added to cart", {
      description: `${product.name} (${defaultVariant.label}) was added to your cart.`,
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <ShopNav onPlaceholderAction={handlePlaceholderAction} />
      <ShopBreadcrumb />
      <ShopHeader
        quickFilter={catalog.quickFilter}
        setQuickFilter={catalog.setQuickFilter}
      />
      <ShopCatalogSection catalog={catalog} onAddToCart={handleAddToCart} />
      <ShopFooter />
    </main>
  )
}

export { ShopPage }
