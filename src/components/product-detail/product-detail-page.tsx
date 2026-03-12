import { useState } from "react"

import { toast } from "sonner"

import { useCart } from "@/components/cart/cart-provider"
import {
  getShopProductById,
  shopPlaceholderMessages,
} from "@/components/shop/content"
import { ShopFooter } from "@/components/shop/shop-footer"
import { ShopNav } from "@/components/shop/shop-nav"
import {
  getProductDetailById,
  getRelatedProducts,
  productDetailPlaceholderMessages,
} from "./content"
import { ProductDetailBreadcrumb } from "./product-detail-breadcrumb"
import { ProductDetailGallery } from "./product-detail-gallery"
import { ProductDetailNotFound } from "./product-detail-not-found"
import { ProductDetailPurchasePanel } from "./product-detail-purchase-panel"
import { ProductDetailRelatedSection } from "./product-detail-related-section"
import { ProductDetailSummary } from "./product-detail-summary"
import { ProductDetailTabs } from "./product-detail-tabs"

type ProductDetailPageProps = {
  productId: string
}

function ProductDetailPage({ productId }: ProductDetailPageProps) {
  const product = getShopProductById(productId)
  const detail = getProductDetailById(productId)
  const { addItem } = useCart()

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedVariantId, setSelectedVariantId] = useState(
    detail?.variants[0]?.id ?? ""
  )
  const [quantity, setQuantity] = useState(1)

  function handlePlaceholderAction(message: string) {
    toast(message, {
      description: "This commerce flow is intentionally UI-only in this pass.",
    })
  }

  if (!product || !detail) {
    return (
      <main className="min-h-screen bg-background">
        <ShopNav onPlaceholderAction={handlePlaceholderAction} />
        <ProductDetailBreadcrumb currentLabel="Product" />
        <ProductDetailNotFound />
        <ShopFooter />
      </main>
    )
  }

  const currentProduct = product
  const currentDetail = detail
  const selectedVariant =
    currentDetail.variants.find((variant) => variant.id === selectedVariantId) ??
    currentDetail.variants[0]

  const relatedProducts = getRelatedProducts(currentProduct.id)

  function handleAddToCart() {
    if (!currentProduct.inStock) {
      toast("Currently unavailable", {
        description: `${currentProduct.name} is marked as out of stock right now.`,
      })
      return
    }

    addItem({
      productId: currentProduct.id,
      quantity,
      variantId: selectedVariant.id,
    })

    toast("Added to cart", {
      description: `${quantity} x ${currentProduct.name} (${selectedVariant.label}) was added to your cart.`,
    })
  }

  function handleAddToWishlist() {
    toast(shopPlaceholderMessages.wishlist, {
      description: `${currentProduct.name} saved state is still placeholder-only. ${productDetailPlaceholderMessages.addToWishlistDescription}`,
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <ShopNav onPlaceholderAction={handlePlaceholderAction} />
      <ProductDetailBreadcrumb currentLabel={currentProduct.name} />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:px-8">
        <ProductDetailGallery
          images={currentDetail.gallery}
          selectedImageIndex={selectedImageIndex}
          onSelectImage={setSelectedImageIndex}
        />

        <div className="flex flex-col gap-6 lg:pt-4">
          <ProductDetailSummary
            detail={currentDetail}
            product={currentProduct}
          />
          <ProductDetailPurchasePanel
            detail={currentDetail}
            quantity={quantity}
            selectedVariant={selectedVariant}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onDecrementQuantity={() => setQuantity((current) => Math.max(1, current - 1))}
            onIncrementQuantity={() => setQuantity((current) => Math.min(12, current + 1))}
            onSelectVariant={setSelectedVariantId}
          />
        </div>
      </section>

      <ProductDetailTabs detail={currentDetail} />
      <ProductDetailRelatedSection products={relatedProducts} />
      <ShopFooter />
    </main>
  )
}

export { ProductDetailPage }
