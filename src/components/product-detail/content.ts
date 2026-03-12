import type { ComponentType, SVGProps } from "react"

import ShieldCheckIcon from "lucide-react/dist/esm/icons/shield-check"
import SproutIcon from "lucide-react/dist/esm/icons/sprout"
import TruckIcon from "lucide-react/dist/esm/icons/truck"

import RelatedBroccoliImage from "@/assets/product-detail/related-broccoli.png"
import RelatedMixedSaladImage from "@/assets/product-detail/related-mixed-salad.png"
import RelatedPeaShootsImage from "@/assets/product-detail/related-pea-shoots.png"
import RelatedRadishImage from "@/assets/product-detail/related-radish.png"
import SunflowerMainImage from "@/assets/product-detail/sunflower-main.png"
import SunflowerThumb1Image from "@/assets/product-detail/sunflower-thumb-1.png"
import SunflowerThumb2Image from "@/assets/product-detail/sunflower-thumb-2.png"
import SunflowerThumb3Image from "@/assets/product-detail/sunflower-thumb-3.png"
import SunflowerThumb4Image from "@/assets/product-detail/sunflower-thumb-4.png"
import {
  getShopProductById,
  shopProducts,
  type ShopProduct,
} from "@/components/shop/content"

type ProductDetailIcon = ComponentType<SVGProps<SVGSVGElement>>

export type ProductDetailGalleryImage = {
  alt: string
  src: string
}

export type ProductDetailVariant = {
  id: string
  label: string
  price: number
  priceLabel: string
}

export type ProductDetailTrustItem = {
  icon: ProductDetailIcon
  label: string
}

export type ProductDetailNutritionStat = {
  label: string
  value: string
}

export type ProductDetailNutrition = {
  description: string
  stats: ProductDetailNutritionStat[]
}

export type ProductDetailReview = {
  author: string
  body: string
  location: string
  rating: number
}

export type ProductDetailRecord = {
  descriptionParagraphs: string[]
  gallery: ProductDetailGalleryImage[]
  nutrition: ProductDetailNutrition
  rating: number
  relatedProductIds: string[]
  reviewCount: number
  reviews: ProductDetailReview[]
  stockLabel: string
  trustItems: ProductDetailTrustItem[]
  variants: ProductDetailVariant[]
}

export const productDetailBreadcrumb = {
  homeLabel: "Home",
  homeTo: "/",
  shopLabel: "Shop",
  shopTo: "/shop",
}

export const productDetailLabels = {
  addToCart: "Add to Cart",
  addToWishlist: "Add to Wishlist",
  notFoundAction: "Back to Shop",
  notFoundDescription:
    "The product you opened is not available in the current local catalog.",
  notFoundTitle: "Product not found",
  quantity: "Quantity",
  relatedHeading: "You May Also Like",
  reviews: "Reviews",
  sectionDescription: "Description",
  sectionNutrition: "Nutrition",
  selectVariant: "Select size",
}

export const productDetailPlaceholderMessages = {
  addToWishlistDescription:
    "Saved items will be available once wishlist sync is connected.",
  cartDescription: "Checkout is still UI-only in this pass.",
}

const currencyFormatter = new Intl.NumberFormat("en-LK")

function formatCurrency(price: number) {
  return `Rs. ${currencyFormatter.format(price)}`
}

function roundToNearestTen(value: number) {
  return Math.round(value / 10) * 10
}

function createDefaultGallery(product: ShopProduct): ProductDetailGalleryImage[] {
  return Array.from({ length: 4 }, (_, index) => ({
    alt:
      index === 0
        ? product.imageAlt
        : `${product.name} detail view ${index + 1}`,
    src: product.image,
  }))
}

function createDefaultVariants(product: ShopProduct): ProductDetailVariant[] {
  const threePackPrice = roundToNearestTen(product.price * 2.8)
  const bulkPrice = roundToNearestTen(product.price * 7.6)

  return [
    {
      id: "pack-1",
      label: "1 Pack",
      price: product.price,
      priceLabel: `${formatCurrency(product.price)} / pack`,
    },
    {
      id: "pack-3",
      label: "3 Pack",
      price: threePackPrice,
      priceLabel: `${formatCurrency(threePackPrice)} / 3 packs`,
    },
    {
      id: "bulk-1kg",
      label: "1kg Bulk",
      price: bulkPrice,
      priceLabel: `${formatCurrency(bulkPrice)} / 1kg bulk`,
    },
  ]
}

function createDefaultDescription(product: ShopProduct) {
  return [
    `${product.name} is grown from carefully selected organic seed in our climate-controlled indoor farm in Kandy, Sri Lanka. Each tray is harvested young to capture peak flavor, color, and texture while the greens are still tender and vibrant.`,
    `${product.description} Every harvest is washed, chilled, and packed within hours so it arrives crisp for salads, sandwiches, grain bowls, juices, and restaurant plating.`,
    "Keep refrigerated and enjoy within 5-7 days for the best texture. Bulk formats are packed to order on harvest day to support home subscriptions, cafés, and chef service.",
  ]
}

function createDefaultNutrition(product: ShopProduct): ProductDetailNutrition {
  const accentStat = product.tags.includes("superfood")
    ? { label: "Phytonutrients", value: "High" }
    : product.tags.includes("spicy")
      ? { label: "Antioxidants", value: "Bright" }
      : { label: "Vitamin C", value: "Rich" }

  const proteinValue =
    product.category === "sprouts"
      ? "4.1g / 50g"
      : product.category === "leafy-greens"
        ? "2.8g / 50g"
        : "3.3g / 50g"

  const fiberValue =
    product.category === "sprouts"
      ? "2.4g / 50g"
      : product.category === "leafy-greens"
        ? "1.9g / 50g"
        : "2.2g / 50g"

  return {
    description: `${product.name} is harvested at the cotyledon stage, when nutrient density is concentrated and the leaves are at their freshest. Exact values vary slightly by seed lot and harvest date, but every tray is grown without synthetic inputs and packed within hours of cutting.`,
    stats: [
      accentStat,
      { label: "Protein", value: proteinValue },
      { label: "Fiber", value: fiberValue },
      { label: "Shelf Life", value: "5-7 days" },
    ],
  }
}

function createDefaultReviews(
  product: ShopProduct,
  rating: number
): ProductDetailReview[] {
  return [
    {
      author: "Nimali Perera",
      body: `${product.name} arrived vibrant, crisp, and exactly as pictured. We used it across breakfast bowls and salads all week.`,
      location: "Colombo 05",
      rating,
    },
    {
      author: "Kasun Jayawardena",
      body: `The flavor stayed clean and fresh, and the tray held up beautifully in the fridge. This has become a regular order for our kitchen.`,
      location: "Kandy",
      rating: Math.min(5, Number((rating + 0.1).toFixed(1))),
    },
    {
      author: "Ayesha Fernando",
      body: `Fast delivery, careful packing, and a really polished harvest. ${product.name} adds immediate texture and color to simple meals.`,
      location: "Mount Lavinia",
      rating,
    },
  ]
}

function createDefaultTrustItems(product: ShopProduct): ProductDetailTrustItem[] {
  return [
    { icon: ShieldCheckIcon, label: "Certified Organic" },
    { icon: TruckIcon, label: "24hr Delivery" },
    {
      icon: SproutIcon,
      label: product.inStock ? "Harvested Today" : "Packed to Order",
    },
  ]
}

function inferRating(product: ShopProduct) {
  if (product.id === "sunflower-microgreens") {
    return 4.8
  }

  const seed = 46 + ((product.featuredRank + product.releaseOrder) % 4)
  return Number((seed / 10).toFixed(1))
}

function inferReviewCount(product: ShopProduct) {
  if (product.id === "sunflower-microgreens") {
    return 24
  }

  return 16 + ((product.featuredRank * 3 + product.releaseOrder) % 17)
}

function createDefaultRelatedProductIds(product: ShopProduct) {
  const candidates = [
    ...shopProducts
      .filter(
        (candidate) =>
          candidate.id !== product.id && candidate.category === product.category
      )
      .sort((left, right) => left.featuredRank - right.featuredRank),
    ...shopProducts
      .filter(
        (candidate) =>
          candidate.id !== product.id &&
          candidate.tags.some((tag) => product.tags.includes(tag))
      )
      .sort((left, right) => left.featuredRank - right.featuredRank),
    ...shopProducts
      .filter((candidate) => candidate.id !== product.id)
      .sort((left, right) => left.featuredRank - right.featuredRank),
  ]

  const relatedIds: string[] = []
  const seen = new Set<string>()

  for (const candidate of candidates) {
    if (seen.has(candidate.id)) {
      continue
    }

    seen.add(candidate.id)
    relatedIds.push(candidate.id)

    if (relatedIds.length === 4) {
      return relatedIds
    }
  }

  return relatedIds
}

function createDefaultDetail(product: ShopProduct): ProductDetailRecord {
  const rating = inferRating(product)

  return {
    descriptionParagraphs: createDefaultDescription(product),
    gallery: createDefaultGallery(product),
    nutrition: createDefaultNutrition(product),
    rating,
    relatedProductIds: createDefaultRelatedProductIds(product),
    reviewCount: inferReviewCount(product),
    reviews: createDefaultReviews(product, rating),
    stockLabel: product.inStock ? "In Stock" : "Available Soon",
    trustItems: createDefaultTrustItems(product),
    variants: createDefaultVariants(product),
  }
}

const sunflowerDescriptionParagraphs = [
  "Our sunflower microgreens are grown from premium organic seeds in our climate-controlled indoor farm in Kandy, Sri Lanka. Harvested at peak nutrition on day 10-12, these tender shoots offer a delightful nutty flavor with a satisfying crunch.",
  "Sunflower microgreens are among the most nutrient-dense foods available. They contain up to 40 times more nutrients than their mature counterparts, including high levels of vitamins E, B-complex, zinc, and essential amino acids. Perfect for adding to salads, sandwiches, smoothies, or as a beautiful garnish.",
  "Each pack is carefully harvested, washed, and packed in eco-friendly containers to ensure maximum freshness. Store in refrigerator and consume within 5-7 days for best quality.",
]

const sunflowerReviews: ProductDetailReview[] = [
  {
    author: "Nimali Perera",
    body: "The crunch and nutty flavor are exactly what we wanted for salads and breakfast bowls. It arrived immaculate and fresh.",
    location: "Colombo 05",
    rating: 5,
  },
  {
    author: "Ravin Senanayake",
    body: "Beautifully packed and harvested at the right stage. The tray stayed crisp for days and worked brilliantly in sandwiches.",
    location: "Kandy",
    rating: 4.8,
  },
  {
    author: "Ayesha Fernando",
    body: "This is the most consistent sunflower microgreens order we have found locally. Clean taste, excellent texture, and very chef-friendly.",
    location: "Negombo",
    rating: 4.7,
  },
]

const relatedCardImageByProductId = new Map<string, string>([
  ["pea-shoots", RelatedPeaShootsImage],
  ["radish-microgreens", RelatedRadishImage],
  ["broccoli-microgreens", RelatedBroccoliImage],
  ["mixed-salad-greens", RelatedMixedSaladImage],
])

const relatedCardDescriptionByProductId = new Map<string, string>([
  [
    "pea-shoots",
    "Sweet, tender shoots with a fresh pea flavor. Rich in protein and fiber.",
  ],
  [
    "radish-microgreens",
    "Peppery, bold flavor with a beautiful purple-red color.",
  ],
  [
    "broccoli-microgreens",
    "Mild, slightly bitter with concentrated sulforaphane.",
  ],
  [
    "mixed-salad-greens",
    "A curated blend of 6 microgreen varieties.",
  ],
])

const productDetailsById = new Map(
  shopProducts.map((product) => [product.id, createDefaultDetail(product)] as const)
)

productDetailsById.set("sunflower-microgreens", {
  descriptionParagraphs: sunflowerDescriptionParagraphs,
  gallery: [
    {
      alt: "Sunflower microgreens gathered in a ceramic bowl.",
      src: SunflowerMainImage,
    },
    {
      alt: "A close crop of sunflower microgreens in natural light.",
      src: SunflowerThumb1Image,
    },
    {
      alt: "Sunflower microgreens viewed from above with tight green leaves.",
      src: SunflowerThumb2Image,
    },
    {
      alt: "Harvested sunflower microgreens styled on a pale plate.",
      src: SunflowerThumb3Image,
    },
    {
      alt: "Fresh sunflower microgreens ready for packing after harvest.",
      src: SunflowerThumb4Image,
    },
  ],
  nutrition: {
    description:
      "Sunflower microgreens are harvested at day 10-12 to keep their nutty flavor, crisp texture, and concentrated nutrient profile intact. Every pack is rinsed, chilled, and packed within hours so the greens stay vibrant from farm to plate.",
    stats: [
      { label: "Vitamin E", value: "High" },
      { label: "B-Complex", value: "Rich" },
      { label: "Protein", value: "3.4g / 50g" },
      { label: "Shelf Life", value: "5-7 days" },
    ],
  },
  rating: 4.8,
  relatedProductIds: [
    "pea-shoots",
    "radish-microgreens",
    "broccoli-microgreens",
    "mixed-salad-greens",
  ],
  reviewCount: 24,
  reviews: sunflowerReviews,
  stockLabel: "In Stock",
  trustItems: [
    { icon: ShieldCheckIcon, label: "Certified Organic" },
    { icon: TruckIcon, label: "24hr Delivery" },
    { icon: SproutIcon, label: "Harvested Today" },
  ],
  variants: [
    {
      id: "pack-1",
      label: "1 Pack",
      price: 650,
      priceLabel: "Rs. 650 / pack",
    },
    {
      id: "pack-3",
      label: "3 Pack",
      price: 1850,
      priceLabel: "Rs. 1,850 / 3 packs",
    },
    {
      id: "bulk-1kg",
      label: "1kg Bulk",
      price: 4950,
      priceLabel: "Rs. 4,950 / 1kg bulk",
    },
  ],
})

function getProductDetailById(productId: string) {
  return productDetailsById.get(productId)
}

function getProductDetailCardImage(productId: string, fallbackImage: string) {
  return relatedCardImageByProductId.get(productId) ?? fallbackImage
}

function getProductDetailCardDescription(product: ShopProduct) {
  return relatedCardDescriptionByProductId.get(product.id) ?? product.description
}

function getRelatedProducts(productId: string) {
  const detail = getProductDetailById(productId)

  if (!detail) {
    return []
  }

  return detail.relatedProductIds
    .map((relatedId) => getShopProductById(relatedId))
    .filter((product): product is ShopProduct => Boolean(product))
}

export {
  getProductDetailById,
  getProductDetailCardDescription,
  getProductDetailCardImage,
  getRelatedProducts,
  productDetailsById,
}
