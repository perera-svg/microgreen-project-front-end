import { createFileRoute } from "@tanstack/react-router"

import { ProductDetailPage } from "@/components/product-detail/product-detail-page"

function ShopProductDetailRoute() {
  const { productId } = Route.useParams()

  return <ProductDetailPage key={productId} productId={productId} />
}

export const Route = createFileRoute("/shop/$productId")({
  component: ShopProductDetailRoute,
})
