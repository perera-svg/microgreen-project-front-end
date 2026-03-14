import type { ComponentType, SVGProps } from "react"

import FacebookIcon from "lucide-react/dist/esm/icons/facebook"
import InstagramIcon from "lucide-react/dist/esm/icons/instagram"
import MailIcon from "lucide-react/dist/esm/icons/mail"
import MessageCircleIcon from "lucide-react/dist/esm/icons/message-circle"
import SearchIcon from "lucide-react/dist/esm/icons/search"
import SproutIcon from "lucide-react/dist/esm/icons/sprout"

import BlogCardExportNewsImage from "@/assets/blog/card-export-news.png"
import BlogCardFarmDayImage from "@/assets/blog/card-farm-day.png"
import BlogCardNutrientsImage from "@/assets/blog/card-nutrients.png"
import BlogCardSmoothiesImage from "@/assets/blog/card-smoothies.png"
import BlogCardStorageImage from "@/assets/blog/card-storage.png"
import BlogCardWinterGuideImage from "@/assets/blog/card-winter-guide.png"
import BlogArticleNutritionHeroImage from "@/assets/blog-detail/article-nutrition-hero.png"
import BlogMorePeaRecipesImage from "@/assets/blog-detail/more-pea-recipes.png"
import BlogMoreSunflowerGuideImage from "@/assets/blog-detail/more-sunflower-guide.png"
import BlogMoreZeroWasteFarmImage from "@/assets/blog-detail/more-zero-waste-farm.png"
import JournalDubaiImage from "@/assets/landing/journal-dubai.png"
import JournalFeaturedImage from "@/assets/landing/journal-featured.png"
import JournalStorageImage from "@/assets/landing/journal-storage.png"
import ProductBroccoliImage from "@/assets/landing/product-broccoli.png"
import ProductMixedBoxImage from "@/assets/landing/product-mixed-box.png"
import ProductPeaShootsImage from "@/assets/landing/product-pea-shoots.png"
import ProductRadishImage from "@/assets/landing/product-radish.png"
import ProductSunflowerImage from "@/assets/landing/product-sunflower.png"
import ProductWheatgrassImage from "@/assets/landing/product-wheatgrass.png"

export type BlogIcon = ComponentType<SVGProps<SVGSVGElement>>

export type BlogCategory = "all" | "nutrition" | "farm-stories" | "recipes" | "news"
export type BlogFilterCategory = Exclude<BlogCategory, "all">

export type BlogArticleId =
  | "microgreens-40x-more-nutritious"
  | "microgreen-nutrient-guide"
  | "store-microgreens-freshness"
  | "day-at-ceylon-greens-farm"
  | "microgreen-smoothie-recipes"
  | "uae-australia-expansion"
  | "winter-growing-guide"
  | "choosing-the-right-format"
  | "weekly-microgreens-meal-plan"
  | "why-we-harvest-before-sunrise"
  | "packing-line-routine"
  | "planning-with-the-monsoon"
  | "weekday-lunch-bowls"
  | "restaurant-plating-ideas"
  | "breakfast-combos-with-greens"
  | "new-packaging-standard"
  | "chef-workshop-series"
  | "delivery-pilot-results"
  | "spring-milestones-roundup"
  | "growing-sunflower-microgreens-guide"
  | "chef-approved-pea-shoot-recipes"
  | "zero-waste-microgreen-farm"
  | "easy-recipes-with-microgreens"
  | "growing-your-first-tray-at-home"

export type BlogLink = {
  href: string
  label: string
}

export type BlogCategoryOption = {
  label: string
  value: BlogCategory
}

export type BlogArticleSummary = {
  category: BlogFilterCategory
  date: string
  excerpt: string
  id: BlogArticleId
  image: string
  imageAlt: string
  readTime: string
  tag: string
  tagVariant?: "destructive" | "outline" | "secondary"
  title: string
}

export type BlogArticleData = BlogArticleSummary

export type BlogFeaturedArticleData = {
  authorAvatar?: string
  authorAvatarAlt?: string
  authorName: string
  category: BlogFilterCategory
  date: string
  excerpt: string
  featuredBadge: string
  id: BlogArticleId
  image: string
  imageAlt: string
  readLabel: string
  readTime: string
  tag: string
  title: string
}

export type BlogLandingArticleData = {
  date: string
  excerpt?: string
  href: string
  image: string
  imageAlt: string
  tag: string
  tagClassName?: string
  title: string
}

export type BlogFooterColumnData = {
  links: BlogLink[]
  title: string
}

export type BlogSocialLink = {
  href: string
  icon: BlogIcon
  label: string
}

export const BLOG_PAGE_SIZE = 6

export const blogRoute = "/blog"
export const blogFeaturedArticleId: BlogArticleId =
  "microgreens-40x-more-nutritious"

export const blogBrand = {
  icon: SproutIcon,
  name: "Ceylon Greens",
  tagline: "Premium Microgreens.\nSri Lankan Heart.",
}

export const blogNavLinks: BlogLink[] = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/#export", label: "Export" },
  { href: blogRoute, label: "Blog" },
]

export const blogNav = {
  orderCtaLabel: "Order Now",
  orderCtaTo: "/shop",
}

export const blogPlaceholderMessages = {
  search: "Search is coming soon",
  social: "Direct social sharing is coming soon",
  wishlist: "Saved items are coming soon",
}

export const blogCopyMessages = {
  failureDescription: "Copy the URL manually from the address bar.",
  failureTitle: "Copy failed",
  successDescription: "The article URL is ready to share.",
  successTitle: "Link copied",
}

export const blogHeader = {
  subtitle: "Stories, recipes, and insights from our farm to your table",
  title: "The Green Journal",
}

export const blogCategoryOptions: BlogCategoryOption[] = [
  { label: "All", value: "all" },
  { label: "Nutrition", value: "nutrition" },
  { label: "Farm Stories", value: "farm-stories" },
  { label: "Recipes", value: "recipes" },
  { label: "News", value: "news" },
]

const featuredArticleSummary: BlogArticleSummary = {
  category: "nutrition",
  date: "Feb 12, 2025",
  excerpt:
    "New research shows just how concentrated microgreens can be. We break down the USDA-backed findings, compare key nutrients side by side, and show how to get the most from every handful.",
  id: blogFeaturedArticleId,
  image: BlogArticleNutritionHeroImage,
  imageAlt: "Freshly harvested purple and green microgreens arranged in a shallow tray.",
  readTime: "5 min read",
  tag: "Nutrition",
  tagVariant: "secondary",
  title: "Why Microgreens Are 40x More Nutritious Than Full-Grown Plants",
}

const blogGridArticlesData: BlogArticleSummary[] = [
  {
    category: "nutrition",
    date: "Jan 28, 2026",
    excerpt:
      "Breaking down the vitamin and mineral profiles of our top 10 microgreen varieties.",
    id: "microgreen-nutrient-guide",
    image: BlogCardNutrientsImage,
    imageAlt: "Assorted microgreens laid out in a nutrient comparison guide.",
    readTime: "6 min read",
    tag: "Nutrition",
    tagVariant: "secondary",
    title: "The Complete Guide to Microgreen Nutrients",
  },
  {
    category: "nutrition",
    date: "Jan 15, 2026",
    excerpt:
      "Simple storage hacks that keep your microgreens crisp and nutritious for up to two weeks.",
    id: "store-microgreens-freshness",
    image: BlogCardStorageImage,
    imageAlt: "Microgreens stored in glass jars on a bright kitchen counter.",
    readTime: "4 min read",
    tag: "Tips",
    tagVariant: "outline",
    title: "How to Store Microgreens for Maximum Freshness",
  },
  {
    category: "farm-stories",
    date: "Jan 3, 2026",
    excerpt:
      "Follow our team through a typical day from pre-dawn harvesting to afternoon packing.",
    id: "day-at-ceylon-greens-farm",
    image: BlogCardFarmDayImage,
    imageAlt: "Freshly harvested microgreens on a farm worktable.",
    readTime: "5 min read",
    tag: "Farm Stories",
    tagVariant: "secondary",
    title: "A Day in the Life at Ceylon Greens Farm",
  },
  {
    category: "recipes",
    date: "Dec 20, 2025",
    excerpt:
      "Blend your way to better health with these easy, delicious microgreen smoothie combinations.",
    id: "microgreen-smoothie-recipes",
    image: BlogCardSmoothiesImage,
    imageAlt: "Green smoothie bowl topped with berries and microgreens.",
    readTime: "4 min read",
    tag: "Recipes",
    tagVariant: "secondary",
    title: "5 Microgreen Smoothie Recipes for Morning Energy",
  },
  {
    category: "news",
    date: "Dec 5, 2025",
    excerpt:
      "Our export programme hits a milestone with new partnerships in Dubai and Melbourne.",
    id: "uae-australia-expansion",
    image: BlogCardExportNewsImage,
    imageAlt: "Shipping containers and logistics lanes at sunset.",
    readTime: "3 min read",
    tag: "News",
    tagVariant: "destructive",
    title: "Ceylon Greens Expands to UAE and Australian Markets",
  },
  {
    category: "nutrition",
    date: "Nov 18, 2025",
    excerpt:
      "Which varieties thrive in cooler temperatures and how to adjust your growing setup.",
    id: "winter-growing-guide",
    image: BlogCardWinterGuideImage,
    imageAlt: "Rows of microgreens growing in a cool-season greenhouse.",
    readTime: "5 min read",
    tag: "Seasonal",
    tagVariant: "outline",
    title: "Winter Growing Guide: Best Microgreens for the Cool Season",
  },
  {
    category: "nutrition",
    date: "Nov 4, 2025",
    excerpt:
      "Understanding the difference between raw trays, cut packs, and chef-ready blends.",
    id: "choosing-the-right-format",
    image: ProductMixedBoxImage,
    imageAlt: "A curated box of microgreens photographed from above.",
    readTime: "4 min read",
    tag: "Guide",
    tagVariant: "outline",
    title: "How to Choose the Right Microgreen Format for Your Kitchen",
  },
  {
    category: "nutrition",
    date: "Oct 22, 2025",
    excerpt:
      "A practical breakdown of how often to add microgreens to breakfast, lunch, and dinner.",
    id: "weekly-microgreens-meal-plan",
    image: ProductSunflowerImage,
    imageAlt: "Sunflower microgreens prepared as part of a weekly meal plan.",
    readTime: "5 min read",
    tag: "Wellness",
    tagVariant: "secondary",
    title: "Building a Weekly Meal Plan Around Fresh Microgreens",
  },
  {
    category: "farm-stories",
    date: "Oct 8, 2025",
    excerpt:
      "Why our harvest schedule starts before sunrise and how timing changes flavor and shelf life.",
    id: "why-we-harvest-before-sunrise",
    image: JournalFeaturedImage,
    imageAlt: "Harvest trays lined up before sunrise on the farm.",
    readTime: "4 min read",
    tag: "Farm Stories",
    tagVariant: "secondary",
    title: "Why We Harvest Before Sunrise",
  },
  {
    category: "farm-stories",
    date: "Sep 26, 2025",
    excerpt:
      "Inside the cleaning, packing, and cold-chain routine that keeps every tray export ready.",
    id: "packing-line-routine",
    image: ProductBroccoliImage,
    imageAlt: "Broccoli microgreens prepared for packing.",
    readTime: "4 min read",
    tag: "Behind the Scenes",
    tagVariant: "outline",
    title: "Inside Our Daily Packing and Cold-Chain Routine",
  },
  {
    category: "farm-stories",
    date: "Sep 10, 2025",
    excerpt:
      "How seasonal rainfall shapes sowing plans, tray rotation, and crop planning across the farm.",
    id: "planning-with-the-monsoon",
    image: ProductWheatgrassImage,
    imageAlt: "A lush wheatgrass tray under diffused monsoon light.",
    readTime: "5 min read",
    tag: "Field Notes",
    tagVariant: "outline",
    title: "Planning a Harvest Calendar Around Sri Lanka's Monsoon",
  },
  {
    category: "recipes",
    date: "Aug 24, 2025",
    excerpt:
      "Fast lunch bowls that pair sunflower, pea shoots, and radish microgreens with local pantry staples.",
    id: "weekday-lunch-bowls",
    image: ProductRadishImage,
    imageAlt: "Radish microgreens plated as a lunch bowl garnish.",
    readTime: "4 min read",
    tag: "Recipes",
    tagVariant: "secondary",
    title: "Weekday Lunch Bowls Built Around Microgreens",
  },
  {
    category: "recipes",
    date: "Aug 8, 2025",
    excerpt:
      "Simple plating ideas chefs use to make a single tray of greens feel premium and intentional.",
    id: "restaurant-plating-ideas",
    image: ProductPeaShootsImage,
    imageAlt: "Pea shoots styled on a plated restaurant dish.",
    readTime: "3 min read",
    tag: "Chef Notes",
    tagVariant: "outline",
    title: "Restaurant Plating Ideas Using Pea Shoots and Radish Tops",
  },
  {
    category: "recipes",
    date: "Jul 19, 2025",
    excerpt:
      "Three easy breakfast combinations that turn a small tray of greens into a daily ritual.",
    id: "breakfast-combos-with-greens",
    image: JournalStorageImage,
    imageAlt: "Fresh microgreens arranged beside breakfast ingredients.",
    readTime: "3 min read",
    tag: "Breakfast",
    tagVariant: "outline",
    title: "3 Easy Breakfast Combinations with Microgreens",
  },
  {
    category: "news",
    date: "Jul 2, 2025",
    excerpt:
      "What changed in our farm packaging after feedback from restaurant and retail partners.",
    id: "new-packaging-standard",
    image: JournalDubaiImage,
    imageAlt: "Export-ready microgreens packaged for overseas delivery.",
    readTime: "3 min read",
    tag: "Update",
    tagVariant: "destructive",
    title: "The Packaging Upgrade Behind Our New Retail Launches",
  },
  {
    category: "news",
    date: "Jun 14, 2025",
    excerpt:
      "A look at the chef workshops and tasting events that helped shape our latest harvest planning.",
    id: "chef-workshop-series",
    image: BlogCardExportNewsImage,
    imageAlt: "Restaurant and export logistics imagery for a workshop update.",
    readTime: "4 min read",
    tag: "Community",
    tagVariant: "outline",
    title: "How Our Chef Workshop Series Is Shaping New Harvest Plans",
  },
  {
    category: "news",
    date: "May 29, 2025",
    excerpt:
      "What we learned from testing new route windows and packaging timings across Colombo deliveries.",
    id: "delivery-pilot-results",
    image: BlogCardFarmDayImage,
    imageAlt: "Farm logistics and delivery preparation photographed at golden hour.",
    readTime: "4 min read",
    tag: "Operations",
    tagVariant: "outline",
    title: "Results from Our Latest Colombo Delivery Pilot",
  },
  {
    category: "news",
    date: "May 12, 2025",
    excerpt:
      "A milestone round-up from our grow room upgrades, new B2B accounts, and export-readiness checks.",
    id: "spring-milestones-roundup",
    image: BlogCardNutrientsImage,
    imageAlt: "A bright assortment of microgreens photographed as part of a milestone roundup.",
    readTime: "4 min read",
    tag: "Roundup",
    tagVariant: "outline",
    title: "Quarterly Roundup: New Clients, New Trays, New Capacity",
  },
]

const blogAdditionalArticlesData: BlogArticleSummary[] = [
  {
    category: "farm-stories",
    date: "Jan 28, 2025",
    excerpt:
      "A practical step-by-step growing guide for sturdy stems, full cotyledons, and sweet sunflower flavor.",
    id: "growing-sunflower-microgreens-guide",
    image: BlogMoreSunflowerGuideImage,
    imageAlt: "Sunflower microgreens growing in a dense tray under soft daylight.",
    readTime: "7 min read",
    tag: "Growing",
    tagVariant: "outline",
    title: "The Complete Guide to Growing Sunflower Microgreens",
  },
  {
    category: "recipes",
    date: "Feb 3, 2025",
    excerpt:
      "A chef-led set of bright, fast dishes that let fresh pea shoots stay crisp and expressive.",
    id: "chef-approved-pea-shoot-recipes",
    image: BlogMorePeaRecipesImage,
    imageAlt: "A cook arranging fresh pea shoot microgreens on a plated dish.",
    readTime: "4 min read",
    tag: "Recipes",
    tagVariant: "secondary",
    title: "5 Chef-Approved Recipes with Pea Shoot Microgreens",
  },
  {
    category: "farm-stories",
    date: "Feb 8, 2025",
    excerpt:
      "Inside the systems, packaging choices, and harvest planning behind our lower-waste farm routine.",
    id: "zero-waste-microgreen-farm",
    image: BlogMoreZeroWasteFarmImage,
    imageAlt: "A greenhouse aisle showing organized trays and sunlight over a production bench.",
    readTime: "6 min read",
    tag: "Sustainability",
    tagVariant: "secondary",
    title: "How We're Building a Zero-Waste Microgreen Farm",
  },
  {
    category: "recipes",
    date: "Feb 4, 2025",
    excerpt:
      "Five quick dishes that turn one fresh tray into a week of bright salads, toast, and bowls.",
    id: "easy-recipes-with-microgreens",
    image: BlogCardSmoothiesImage,
    imageAlt: "Microgreens styled as part of a bright, ready-to-eat meal.",
    readTime: "3 min read",
    tag: "Recipes",
    tagVariant: "secondary",
    title: "5 Easy Recipes with Microgreens",
  },
  {
    category: "farm-stories",
    date: "Feb 6, 2025",
    excerpt:
      "The beginner-friendly tray setup, soaking rhythm, and harvest window we recommend for first-time growers.",
    id: "growing-your-first-tray-at-home",
    image: BlogCardFarmDayImage,
    imageAlt: "Hands arranging a fresh tray of microgreens on a work surface.",
    readTime: "4 min read",
    tag: "Growing",
    tagVariant: "outline",
    title: "Growing Your First Tray at Home",
  },
]

export const blogArticles = blogGridArticlesData
export const blogAllArticles: BlogArticleSummary[] = [
  featuredArticleSummary,
  ...blogGridArticlesData,
  ...blogAdditionalArticlesData,
]

const blogArticlesById = new Map<string, BlogArticleSummary>(
  blogAllArticles.map((article) => [article.id, article] as const)
)

export function getBlogArticleById(articleId: string) {
  return blogArticlesById.get(articleId)
}

export function getBlogArticleHref(articleId: string) {
  return `${blogRoute}/${articleId}`
}

export const blogFeaturedArticle: BlogFeaturedArticleData = {
  authorName: "Dr. Kavinda Perera",
  category: featuredArticleSummary.category,
  date: featuredArticleSummary.date,
  excerpt: featuredArticleSummary.excerpt,
  featuredBadge: "Featured",
  id: featuredArticleSummary.id,
  image: featuredArticleSummary.image,
  imageAlt: featuredArticleSummary.imageAlt,
  readLabel: "Read Article",
  readTime: featuredArticleSummary.readTime,
  tag: featuredArticleSummary.tag,
  title: featuredArticleSummary.title,
}

export const blogEmptyState = {
  actionLabel: "Show All Articles",
  description:
    "That category does not have visible articles right now. Reset the filter to bring back the full journal.",
  title: "No articles match that category",
}

export const blogPaginationLabels = {
  next: "Next ->",
  previous: "<- Previous",
}

export const blogFooterColumns: BlogFooterColumnData[] = [
  {
    links: [
      { href: "/about", label: "About Us" },
      { href: "/about#farm", label: "Our Farm" },
      { href: "/about#sustainability", label: "Sustainability" },
      { href: "#footer", label: "Careers" },
    ],
    title: "Company",
  },
  {
    links: [
      { href: "/shop", label: "All Products" },
      { href: "/shop", label: "Bundles" },
      { href: "/shop", label: "Subscriptions" },
      { href: "/shop", label: "Gift Cards" },
    ],
    title: "Shop",
  },
  {
    links: [
      { href: "/#export", label: "Export Program" },
      { href: "/#export", label: "Certifications" },
      { href: "/#export", label: "MOQ & Pricing" },
      { href: "#footer", label: "Contact Agent" },
    ],
    title: "Export",
  },
  {
    links: [
      { href: "#footer", label: "Instagram" },
      { href: "#footer", label: "Facebook" },
      { href: "#footer", label: "WhatsApp" },
      { href: "#footer", label: "Newsletter" },
    ],
    title: "Connect",
  },
]

export const blogSocialLinks: BlogSocialLink[] = [
  { href: "#footer", icon: InstagramIcon, label: "Instagram" },
  { href: "#footer", icon: FacebookIcon, label: "Facebook" },
  { href: "#footer", icon: MessageCircleIcon, label: "WhatsApp" },
  { href: "#footer", icon: MailIcon, label: "Newsletter" },
]

export const blogFooterMetaLinks: BlogLink[] = [
  { href: "#footer", label: "Privacy" },
  { href: "#footer", label: "Terms" },
  { href: "#footer", label: "Made in Sri Lanka" },
]

export const blogPaymentBadges = ["VISA", "MC", "Lanka QR", "iPay"]

export const blogFooterMeta = {
  copyright: "© 2025 Ceylon Greens Pvt Ltd",
}

export const blogNavUtilityIcon = SearchIcon

export const blogLandingHeading = {
  description: "Stories, science, and tips from our farm to your table.",
  eyebrow: "FROM THE JOURNAL",
  title: "The Green Journal",
}

export const blogReadLabel = "Read"

function toLandingTeaser(article: BlogArticleSummary): BlogLandingArticleData {
  return {
    date: article.date,
    excerpt: article.excerpt,
    href: getBlogArticleHref(article.id),
    image: article.image,
    imageAlt: article.imageAlt,
    tag: article.tag,
    tagClassName:
      article.tagVariant === "destructive"
        ? "bg-terracotta-tint text-destructive"
        : article.tagVariant === "outline"
          ? "bg-soft-blue-tint text-soft-blue"
          : "bg-secondary text-sage-dark",
    title: article.title,
  }
}

export const blogLandingFeaturedArticle = toLandingTeaser(featuredArticleSummary)

export const blogLandingTeasers: BlogLandingArticleData[] = [
  toLandingTeaser(
    getBlogArticleById("chef-approved-pea-shoot-recipes") ??
      blogAdditionalArticlesData[1]
  ),
  toLandingTeaser(
    getBlogArticleById("zero-waste-microgreen-farm") ??
      blogAdditionalArticlesData[2]
  ),
]
