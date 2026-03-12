import { toast } from "sonner"

import { shopPlaceholderMessages } from "./content"
import { ShopBreadcrumb } from "./shop-breadcrumb"
import { ShopCatalogSection } from "./shop-catalog-section"
import { ShopFooter } from "./shop-footer"
import { ShopHeader } from "./shop-header"
import { ShopNav } from "./shop-nav"
import { useShopCatalog } from "./use-shop-catalog"

function ShopPage() {
  const catalog = useShopCatalog()

  function handlePlaceholderAction(message: string) {
    toast(message, {
      description: "This catalog is intentionally UI-only in this pass.",
    })
  }

  function handleAddToCart(productName: string) {
    toast(shopPlaceholderMessages.cart, {
      description: `${productName} will be available once checkout is connected.`,
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
