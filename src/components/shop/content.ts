import type { ComponentType, SVGProps } from "react"

import SproutIcon from "lucide-react/dist/esm/icons/sprout"

import ShopBeetrootImage from "@/assets/shop/shop-beetroot.png"
import ShopBroccoliImage from "@/assets/shop/shop-broccoli.png"
import ShopCorianderImage from "@/assets/shop/shop-coriander.png"
import ShopMixedSaladImage from "@/assets/shop/shop-mixed-salad.png"
import ShopMustardImage from "@/assets/shop/shop-mustard.png"
import ShopPeaShootsImage from "@/assets/shop/shop-pea-shoots.png"
import ShopRadishImage from "@/assets/shop/shop-radish.png"
import ShopSunflowerImage from "@/assets/shop/shop-sunflower.png"
import ShopWheatgrassImage from "@/assets/shop/shop-wheatgrass.png"

export type ShopIcon = ComponentType<SVGProps<SVGSVGElement>>

export type ShopQuickFilterValue =
  | "all"
  | "organic"
  | "spicy"
  | "superfood"
  | "new"

export type ShopCategory = "all" | "leafy-greens" | "sprouts" | "microgreens"

export type ShopTag = "organic" | "spicy" | "superfood" | "vegan"

export type ShopSort = "featured" | "newest" | "price-asc" | "price-desc"

export type ShopLink = {
  href: string
  label: string
}

export type ShopQuickFilter = {
  label: string
  value: ShopQuickFilterValue
}

export type ShopCategoryOption = {
  label: string
  value: ShopCategory
}

export type ShopTagOption = {
  label: string
  value: ShopTag
}

export type ShopSortOption = {
  label: string
  value: ShopSort
}

export type ShopFooterLinkColumn = {
  links: ShopLink[]
  title: string
}

export type ShopProduct = {
  badgeLabel: string
  category: Exclude<ShopCategory, "all">
  categoryLabel: string
  description: string
  featuredRank: number
  id: string
  image: string
  imageAlt: string
  inStock: boolean
  isNew: boolean
  name: string
  price: number
  priceLabel: string
  releaseOrder: number
  tags: ShopTag[]
}

export const SHOP_PAGE_SIZE = 9

export const shopBrand = {
  icon: SproutIcon,
  name: "Ceylon Greens",
}

export const shopNavLinks: ShopLink[] = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/#export", label: "Export" },
  { href: "/blog", label: "Blog" },
]

export const shopNav = {
  orderCtaLabel: "Order Now",
  orderCtaTo: "/sign-up",
}

export const shopBreadcrumb = {
  currentLabel: "Shop",
  homeLabel: "Home",
  homeTo: "/",
}

const shopHeaderBase = {
  subtitle: "24 varieties · Harvested daily · Certified organic",
  title: "Our Microgreens",
}

export const shopHeader = {
  ...shopHeaderBase,
  subtitle: "24 varieties · Harvested daily · Certified organic",
}

export const shopQuickFilters: ShopQuickFilter[] = [
  { label: "All", value: "all" },
  { label: "Organic", value: "organic" },
  { label: "Spicy", value: "spicy" },
  { label: "Superfood", value: "superfood" },
  { label: "New", value: "new" },
]

export const shopSidebar = {
  availabilityLabel: "In Stock Only",
  categoriesTitle: "Categories",
  clearFiltersLabel: "Clear Filters",
  priceTitle: "Price Range",
  tagsTitle: "Tags",
}

export const shopCategoryOptions: ShopCategoryOption[] = [
  { label: "All", value: "all" },
  { label: "Leafy Greens", value: "leafy-greens" },
  { label: "Sprouts", value: "sprouts" },
  { label: "Microgreens", value: "microgreens" },
]

export const shopTagOptions: ShopTagOption[] = [
  { label: "Organic", value: "organic" },
  { label: "Spicy", value: "spicy" },
  { label: "Superfood", value: "superfood" },
  { label: "Vegan", value: "vegan" },
]

export const shopPriceBounds = {
  max: 1500,
  min: 0,
  step: 10,
}

export const shopSort = {
  label: "Sort by:",
}

export const shopSortOptions: ShopSortOption[] = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
]

export const shopViewControls = {
  gridLabel: "Grid view",
  listLabel: "List view",
}

export const shopEmptyState = {
  actionLabel: "Clear Filters",
  description:
    "Try clearing one or more filters to bring the full harvest back into view.",
  title: "No products match those filters",
}

export const shopPaginationLabels = {
  next: "Next",
  previous: "Previous",
}

export const shopPlaceholderMessages = {
  cart: "Cart is coming soon",
  search: "Search is coming soon",
  wishlist: "Saved items are coming soon",
}

export const shopProductCardCtaLabel = "Add to Cart"

const shopFooterBase = {
  copyright: "© 2026 Ceylon Greens. All rights reserved.",
  description:
    "Premium microgreens grown sustainably in the heart of Sri Lanka. Farm to table in 24 hours.",
}

export const shopFooter = {
  ...shopFooterBase,
  copyright: "© 2026 Ceylon Greens. All rights reserved.",
}

export const shopFooterColumns: ShopFooterLinkColumn[] = [
  {
    links: [
      { href: "/shop", label: "All Products" },
      { href: "/shop", label: "Bundles" },
      { href: "/subscription", label: "Subscriptions" },
    ],
    title: "Shop",
  },
  {
    links: [
      { href: "/about", label: "About Us" },
      { href: "/about#farm", label: "Our Farm" },
      { href: "/contact", label: "Contact" },
    ],
    title: "Company",
  },
  {
    links: [
      { href: "#", label: "FAQ" },
      { href: "#", label: "Shipping" },
      { href: "#", label: "Returns" },
    ],
    title: "Support",
  },
]

export const shopFooterSocialLinks: ShopLink[] = [
  { href: "#", label: "Facebook" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "Twitter" },
]

export const shopProducts: ShopProduct[] = [
  {
    badgeLabel: "Organic",
    category: "leafy-greens",
    categoryLabel: "LEAFY GREENS",
    description:
      "Nutty, crunchy shoots packed with vitamins E and B. Perfect for salads and sandwiches.",
    featuredRank: 1,
    id: "sunflower-microgreens",
    image: ShopSunflowerImage,
    imageAlt: "Sunflower microgreens growing in a white ceramic bowl.",
    inStock: true,
    isNew: false,
    name: "Sunflower Microgreens",
    price: 650,
    priceLabel: "Rs. 650",
    releaseOrder: 10,
    tags: ["organic", "vegan"],
  },
  {
    badgeLabel: "Superfood",
    category: "sprouts",
    categoryLabel: "SPROUTS",
    description:
      "Sweet, tender shoots with a fresh pea flavor. Rich in protein and fiber.",
    featuredRank: 2,
    id: "pea-shoots",
    image: ShopPeaShootsImage,
    imageAlt: "Fresh pea shoots arranged in a shallow wooden tray.",
    inStock: true,
    isNew: false,
    name: "Pea Shoots",
    price: 480,
    priceLabel: "Rs. 480",
    releaseOrder: 11,
    tags: ["organic", "superfood", "vegan"],
  },
  {
    badgeLabel: "Spicy",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Peppery, bold flavor with a beautiful purple-red color. Great for garnishing.",
    featuredRank: 3,
    id: "radish-microgreens",
    image: ShopRadishImage,
    imageAlt: "Radish microgreens plated on a white dish.",
    inStock: true,
    isNew: false,
    name: "Radish Microgreens",
    price: 550,
    priceLabel: "Rs. 550",
    releaseOrder: 12,
    tags: ["organic", "spicy", "vegan"],
  },
  {
    badgeLabel: "Superfood",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Mild, slightly bitter with concentrated sulforaphane. A true superfood powerhouse.",
    featuredRank: 4,
    id: "broccoli-microgreens",
    image: ShopBroccoliImage,
    imageAlt: "Dense broccoli microgreens photographed from above.",
    inStock: true,
    isNew: false,
    name: "Broccoli Microgreens",
    price: 720,
    priceLabel: "Rs. 720",
    releaseOrder: 13,
    tags: ["organic", "superfood", "vegan"],
  },
  {
    badgeLabel: "Organic",
    category: "sprouts",
    categoryLabel: "SPROUTS",
    description:
      "Sweet green juice staple. Loaded with chlorophyll, vitamins A, C, and E.",
    featuredRank: 5,
    id: "wheatgrass",
    image: ShopWheatgrassImage,
    imageAlt: "Wheatgrass tray with vivid green blades.",
    inStock: true,
    isNew: false,
    name: "Wheatgrass",
    price: 580,
    priceLabel: "Rs. 580",
    releaseOrder: 14,
    tags: ["organic", "vegan"],
  },
  {
    badgeLabel: "New",
    category: "leafy-greens",
    categoryLabel: "LEAFY GREENS",
    description:
      "A curated blend of 6 microgreen varieties. Perfect everyday salad base.",
    featuredRank: 6,
    id: "mixed-salad-greens",
    image: ShopMixedSaladImage,
    imageAlt: "Mixed salad greens gathered in a deep plate.",
    inStock: true,
    isNew: true,
    name: "Mixed Salad Greens",
    price: 890,
    priceLabel: "Rs. 890",
    releaseOrder: 24,
    tags: ["organic", "vegan"],
  },
  {
    badgeLabel: "Spicy",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Bold, wasabi-like kick. Adds exciting heat to any dish without overpowering.",
    featuredRank: 7,
    id: "mustard-microgreens",
    image: ShopMustardImage,
    imageAlt: "Mustard microgreens photographed as a bright green harvest tray.",
    inStock: true,
    isNew: false,
    name: "Mustard Microgreens",
    price: 520,
    priceLabel: "Rs. 520",
    releaseOrder: 15,
    tags: ["organic", "spicy", "vegan"],
  },
  {
    badgeLabel: "New",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Earthy and sweet with stunning magenta stems. Beautiful plating garnish.",
    featuredRank: 8,
    id: "beetroot-microgreens",
    image: ShopBeetrootImage,
    imageAlt: "Beetroot microgreens served on a white plate with magenta stems.",
    inStock: true,
    isNew: true,
    name: "Beetroot Microgreens",
    price: 680,
    priceLabel: "Rs. 680",
    releaseOrder: 23,
    tags: ["organic", "vegan"],
  },
  {
    badgeLabel: "Organic",
    category: "leafy-greens",
    categoryLabel: "LEAFY GREENS",
    description:
      "Intense citrusy herb flavor. Essential for Sri Lankan and Asian cuisines.",
    featuredRank: 9,
    id: "coriander-microgreens",
    image: ShopCorianderImage,
    imageAlt: "Coriander microgreens growing in a pale bowl.",
    inStock: true,
    isNew: false,
    name: "Coriander Microgreens",
    price: 1200,
    priceLabel: "Rs. 1,200",
    releaseOrder: 16,
    tags: ["organic", "vegan"],
  },
  {
    badgeLabel: "New",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Licorice-bright basil aroma in a compact leaf. Ideal for cocktails and burrata.",
    featuredRank: 10,
    id: "purple-basil-microgreens",
    image: ShopBeetrootImage,
    imageAlt: "Purple basil microgreens arranged on a white serving plate.",
    inStock: true,
    isNew: true,
    name: "Purple Basil Microgreens",
    price: 610,
    priceLabel: "Rs. 610",
    releaseOrder: 22,
    tags: ["organic", "vegan"],
  },
  {
    badgeLabel: "Superfood",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Crunchy red cabbage sprouts with anthocyanin-rich leaves and a clean finish.",
    featuredRank: 11,
    id: "red-cabbage-microgreens",
    image: ShopRadishImage,
    imageAlt: "Red cabbage microgreens plated with a deep green and purple mix.",
    inStock: true,
    isNew: false,
    name: "Red Cabbage Microgreens",
    price: 690,
    priceLabel: "Rs. 690",
    releaseOrder: 21,
    tags: ["organic", "superfood", "vegan"],
  },
  {
    badgeLabel: "Superfood",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Vivid amaranth stems bring mineral-rich crunch and dramatic plating color.",
    featuredRank: 12,
    id: "amaranth-microgreens",
    image: ShopBeetrootImage,
    imageAlt: "Amaranth microgreens with colorful stems on a white dish.",
    inStock: true,
    isNew: false,
    name: "Amaranth Microgreens",
    price: 760,
    priceLabel: "Rs. 760",
    releaseOrder: 20,
    tags: ["organic", "superfood", "vegan"],
  },
  {
    badgeLabel: "Spicy",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Peppery rocket leaf microgreens that wake up sandwiches, soups, and grilled fish.",
    featuredRank: 13,
    id: "arugula-microgreens",
    image: ShopMustardImage,
    imageAlt: "Arugula microgreens harvested into a vivid green tray.",
    inStock: true,
    isNew: false,
    name: "Arugula Microgreens",
    price: 560,
    priceLabel: "Rs. 560",
    releaseOrder: 19,
    tags: ["organic", "spicy", "vegan"],
  },
  {
    badgeLabel: "Superfood",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Tender kale shoots with a mellow brassica note and dense nutrient profile.",
    featuredRank: 14,
    id: "kale-microgreens",
    image: ShopBroccoliImage,
    imageAlt: "Kale microgreens growing in a lush green canopy.",
    inStock: true,
    isNew: false,
    name: "Kale Microgreens",
    price: 700,
    priceLabel: "Rs. 700",
    releaseOrder: 18,
    tags: ["organic", "superfood", "vegan"],
  },
  {
    badgeLabel: "Organic",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Fenugreek leaves with a gentle maple note that pair beautifully with local curries.",
    featuredRank: 15,
    id: "fenugreek-microgreens",
    image: ShopCorianderImage,
    imageAlt: "Fenugreek microgreens in a pale serving bowl.",
    inStock: true,
    isNew: false,
    name: "Fenugreek Microgreens",
    price: 540,
    priceLabel: "Rs. 540",
    releaseOrder: 17,
    tags: ["organic", "vegan"],
  },
  {
    badgeLabel: "Superfood",
    category: "sprouts",
    categoryLabel: "SPROUTS",
    description:
      "Delicate alfalfa strands with a clean, grassy taste and light crunch.",
    featuredRank: 16,
    id: "alfalfa-sprouts",
    image: ShopPeaShootsImage,
    imageAlt: "Alfalfa sprouts layered in a fresh harvest tray.",
    inStock: true,
    isNew: false,
    name: "Alfalfa Sprouts",
    price: 430,
    priceLabel: "Rs. 430",
    releaseOrder: 9,
    tags: ["organic", "superfood", "vegan"],
  },
  {
    badgeLabel: "Organic",
    category: "sprouts",
    categoryLabel: "SPROUTS",
    description:
      "Crunchy mung bean sprouts with a juicy bite for stir-fries and noodle bowls.",
    featuredRank: 17,
    id: "mung-bean-sprouts",
    image: ShopPeaShootsImage,
    imageAlt: "Mung bean sprouts layered in a shallow tray.",
    inStock: true,
    isNew: false,
    name: "Mung Bean Sprouts",
    price: 390,
    priceLabel: "Rs. 390",
    releaseOrder: 8,
    tags: ["organic", "vegan"],
  },
  {
    badgeLabel: "Superfood",
    category: "sprouts",
    categoryLabel: "SPROUTS",
    description:
      "Clover sprouts with a soft pea-like sweetness and refreshing snap.",
    featuredRank: 18,
    id: "clover-sprouts",
    image: ShopPeaShootsImage,
    imageAlt: "Clover sprouts piled in a shallow wooden tray.",
    inStock: true,
    isNew: false,
    name: "Clover Sprouts",
    price: 460,
    priceLabel: "Rs. 460",
    releaseOrder: 7,
    tags: ["organic", "superfood", "vegan"],
  },
  {
    badgeLabel: "New",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Tender bok choy leaves with a subtle mustard finish for dumplings and ramen.",
    featuredRank: 19,
    id: "bok-choy-microgreens",
    image: ShopSunflowerImage,
    imageAlt: "Bok choy microgreens in a rounded ceramic bowl.",
    inStock: true,
    isNew: true,
    name: "Bok Choy Microgreens",
    price: 640,
    priceLabel: "Rs. 640",
    releaseOrder: 6,
    tags: ["organic", "vegan"],
  },
  {
    badgeLabel: "Organic",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Fine dill fronds with bright aniseed aroma for seafood, pickles, and sauces.",
    featuredRank: 20,
    id: "dill-microgreens",
    image: ShopCorianderImage,
    imageAlt: "Dill microgreens collected in a pale bowl.",
    inStock: true,
    isNew: false,
    name: "Dill Microgreens",
    price: 740,
    priceLabel: "Rs. 740",
    releaseOrder: 5,
    tags: ["organic", "vegan"],
  },
  {
    badgeLabel: "Spicy",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Garlic chive shoots deliver savory heat and a restaurant-style finishing note.",
    featuredRank: 21,
    id: "garlic-chive-microgreens",
    image: ShopWheatgrassImage,
    imageAlt: "Garlic chive microgreens in a vivid green tray.",
    inStock: false,
    isNew: false,
    name: "Garlic Chive Microgreens",
    price: 830,
    priceLabel: "Rs. 830",
    releaseOrder: 4,
    tags: ["organic", "spicy", "vegan"],
  },
  {
    badgeLabel: "New",
    category: "microgreens",
    categoryLabel: "MICROGREENS",
    description:
      "Elegant sorrel leaves with a citrus finish and striking red veining for plated menus.",
    featuredRank: 22,
    id: "red-veined-sorrel",
    image: ShopBeetrootImage,
    imageAlt: "Red-veined sorrel microgreens plated on white ceramic.",
    inStock: false,
    isNew: true,
    name: "Red Veined Sorrel",
    price: 950,
    priceLabel: "Rs. 950",
    releaseOrder: 3,
    tags: ["organic", "vegan"],
  },
  {
    badgeLabel: "Spicy",
    category: "leafy-greens",
    categoryLabel: "LEAFY GREENS",
    description:
      "Chef-loved rocket mix with punchy greens that brighten wraps, salads, and brunch plates.",
    featuredRank: 23,
    id: "rocket-leaf-mix",
    image: ShopMixedSaladImage,
    imageAlt: "Rocket leaf mix presented in a serving bowl.",
    inStock: true,
    isNew: false,
    name: "Rocket Leaf Mix",
    price: 880,
    priceLabel: "Rs. 880",
    releaseOrder: 2,
    tags: ["organic", "spicy", "vegan"],
  },
  {
    badgeLabel: "New",
    category: "leafy-greens",
    categoryLabel: "LEAFY GREENS",
    description:
      "A premium chef box with micro basil, sorrel, amaranth, and garnish-ready trays.",
    featuredRank: 24,
    id: "chef-garnish-blend",
    image: ShopMixedSaladImage,
    imageAlt: "Chef garnish blend arranged as a mixed premium box.",
    inStock: false,
    isNew: true,
    name: "Chef Garnish Blend",
    price: 1450,
    priceLabel: "Rs. 1,450",
    releaseOrder: 1,
    tags: ["organic", "superfood", "vegan"],
  },
]

export const shopProductsById = new Map(
  shopProducts.map((product) => [product.id, product] as const)
)

function getShopProductById(productId: string) {
  return shopProductsById.get(productId)
}

export { getShopProductById }
