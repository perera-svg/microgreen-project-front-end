import type { ComponentType, SVGProps } from "react"

import FacebookIcon from "lucide-react/dist/esm/icons/facebook"
import InstagramIcon from "lucide-react/dist/esm/icons/instagram"
import LeafIcon from "lucide-react/dist/esm/icons/leaf"
import MailIcon from "lucide-react/dist/esm/icons/mail"
import MessageCircleIcon from "lucide-react/dist/esm/icons/message-circle"
import PackageIcon from "lucide-react/dist/esm/icons/package"
import SearchIcon from "lucide-react/dist/esm/icons/search"
import SproutIcon from "lucide-react/dist/esm/icons/sprout"
import TruckIcon from "lucide-react/dist/esm/icons/truck"

import FarmTeamImage from "@/assets/landing/farm-team.png"
import HeroMicrogreensImage from "@/assets/landing/hero-microgreens.png"
import JournalDubaiImage from "@/assets/landing/journal-dubai.png"
import JournalFeaturedImage from "@/assets/landing/journal-featured.png"
import JournalStorageImage from "@/assets/landing/journal-storage.png"
import ProductBroccoliImage from "@/assets/landing/product-broccoli.png"
import ProductMixedBoxImage from "@/assets/landing/product-mixed-box.png"
import ProductPeaShootsImage from "@/assets/landing/product-pea-shoots.png"
import ProductRadishImage from "@/assets/landing/product-radish.png"
import ProductSunflowerImage from "@/assets/landing/product-sunflower.png"
import ProductWheatgrassImage from "@/assets/landing/product-wheatgrass.png"

export type LandingIcon = ComponentType<SVGProps<SVGSVGElement>>

export type LandingNavLink = {
  href: string
  label: string
}

export type HeroTrustPoint = {
  icon: LandingIcon
  label: string
}

export type LandingStat = {
  change: string
  label: string
  value: string
}

export type ProductCardData = {
  badge: string
  badgeClassName?: string
  category: string
  description: string
  id: string
  image: string
  imageAlt: string
  name: string
  price: string
}

export type ValuePropData = {
  description: string
  icon: LandingIcon
  id: string
  title: string
}

export type ProcessStepData = {
  description: string
  icon: LandingIcon
  id: string
  label: string
  timeline: string
}

export type TestimonialData = {
  initials: string
  location: string
  name: string
  quote: string
  role: string
}

export type JournalArticleData = {
  date: string
  excerpt?: string
  href: string
  image: string
  imageAlt: string
  tag: string
  tagClassName?: string
  title: string
}

export type FooterLink = {
  href: string
  label: string
}

export type FooterLinkColumnData = {
  links: FooterLink[]
  title: string
}

export type SocialLinkData = {
  href: string
  icon: LandingIcon
  label: string
}

export const landingNavLinks: LandingNavLink[] = [
  { href: "#shop", label: "Shop" },
  { href: "#about", label: "About" },
  { href: "#export", label: "Export" },
  { href: "#journal", label: "Blog" },
]

export const landingNavCta = {
  href: "#shop",
  label: "Order Now",
}

export const landingNavUtilityIcon = SearchIcon
export const landingNavUtilityLabel = "Search"

export const landingBrand = {
  icon: SproutIcon,
  name: "Ceylon Greens",
  tagline: "Premium Microgreens.\nSri Lankan Heart.",
}

export const landingHero = {
  description:
    "Premium microgreens, harvested daily - for health-conscious families, top restaurants, and global export markets.",
  eyebrow: "FARM-FRESH / COLOMBO",
  image: HeroMicrogreensImage,
  imageAlt: "Fresh trays of microgreens ready for harvest.",
  primaryCta: {
    href: "#shop",
    label: "Shop Fresh Harvests",
  },
  secondaryCta: {
    href: "#export",
    label: "Explore Export Program",
  },
  title: "Microgreens\nGrown in the Heart\nof Sri Lanka.",
}

export const landingHeroTrustPoints: HeroTrustPoint[] = [
  { icon: LeafIcon, label: "Certified Organic" },
  { icon: TruckIcon, label: "Daily Harvest" },
  { icon: PackageIcon, label: "Island-wide Delivery" },
]

export const landingStats: LandingStat[] = [
  { change: "+18% \u2191", label: "Orders / Month", value: "2,847" },
  { change: "+8% \u2191", label: "Active Customers", value: "1,204" },
  { change: "+3 new", label: "Varieties", value: "24" },
  { change: "Growing \u2191", label: "Export Countries", value: "6" },
]

export const landingProductsHeading = {
  description:
    "Browse our full range of certified microgreens, harvested to order.",
  title: "Fresh From the Farm",
}

export const landingProductsCta = {
  href: "#shop",
  label: "View All 24 Varieties",
}

export const landingProductCardCtaLabel = "Add to Cart"

export const landingProducts: ProductCardData[] = [
  {
    badge: "Bestseller",
    badgeClassName: "bg-secondary text-sage-dark",
    category: "Leafy Greens",
    description:
      "Nutty, crunchy shoots packed with vitamins. Perfect for salads and sandwiches.",
    id: "sunflower-microgreens",
    image: ProductSunflowerImage,
    imageAlt: "Sunflower microgreens in a fresh harvest tray.",
    name: "Sunflower Microgreens",
    price: "Rs. 650 / pack",
  },
  {
    badge: "Export Favourite",
    badgeClassName: "bg-secondary text-sage-dark",
    category: "Leafy Greens",
    description:
      "Tender, sweet tendrils with a fresh pea flavour. A chef's favourite garnish.",
    id: "pea-shoots",
    image: ProductPeaShootsImage,
    imageAlt: "Pea shoots bundled for export.",
    name: "Pea Shoots",
    price: "Rs. 580 / pack",
  },
  {
    badge: "New Arrival",
    badgeClassName: "bg-secondary text-sage-dark",
    category: "Spicy Greens",
    description:
      "Peppery and vibrant, these microgreens add a spicy kick to any dish.",
    id: "radish-microgreens",
    image: ProductRadishImage,
    imageAlt: "Radish microgreens with deep green leaves.",
    name: "Radish Microgreens",
    price: "Rs. 620 / pack",
  },
  {
    badge: "Organic",
    badgeClassName: "bg-secondary text-sage-dark",
    category: "Superfood",
    description:
      "Packed with sulforaphane and antioxidants. The ultimate superfood microgreen.",
    id: "broccoli-microgreens",
    image: ProductBroccoliImage,
    imageAlt: "Broccoli microgreens in a dense green tray.",
    name: "Broccoli Microgreens",
    price: "Rs. 750 / pack",
  },
  {
    badge: "Organic",
    badgeClassName: "bg-secondary text-sage-dark",
    category: "Wellness",
    description:
      "Fresh-cut wheatgrass for juicing. Rich in chlorophyll and essential nutrients.",
    id: "wheatgrass",
    image: ProductWheatgrassImage,
    imageAlt: "Fresh wheatgrass in a shallow tray.",
    name: "Wheatgrass",
    price: "Rs. 480 / pack",
  },
  {
    badge: "Bestseller",
    badgeClassName: "bg-secondary text-sage-dark",
    category: "Bundle",
    description:
      "A curated mix of our top microgreens. Perfect for everyday healthy meals.",
    id: "mixed-salad-box",
    image: ProductMixedBoxImage,
    imageAlt: "A mixed salad box of curated microgreens.",
    name: "Mixed Salad Box",
    price: "Rs. 1,200 / box",
  },
]

export const landingWhySection = {
  image: FarmTeamImage,
  imageAlt: "Ceylon Greens team working on the farm.",
  title: "Why Ceylon Greens",
}

export const landingValueProps: ValuePropData[] = [
  {
    description:
      "Sri Lanka's tropical conditions enable year-round cultivation without greenhouses",
    icon: SproutIcon,
    id: "ideal-climate",
    title: "Grown in Ideal Climate",
  },
  {
    description:
      "No pesticides, no synthetic fertilizers - just pure, traceable growing methods",
    icon: LeafIcon,
    id: "certified-organic",
    title: "Certified Organic",
  },
  {
    description:
      "Colombo to Kandy to Galle - fresh delivered within 24hrs of harvest",
    icon: TruckIcon,
    id: "island-delivery",
    title: "Island-wide Delivery",
  },
  {
    description:
      "Modified atmosphere packaging meets EU, UAE, and AU import standards",
    icon: PackageIcon,
    id: "export-packaging",
    title: "Export-Grade Packaging",
  },
]

export const landingProcessHeading = {
  title: "From Seed to Your Plate in 7 Days",
}

export const landingProcessSteps: ProcessStepData[] = [
  {
    description: "We sow fresh seeds daily in our farm",
    icon: SproutIcon,
    id: "seeding",
    label: "Seeding",
    timeline: "Day 1",
  },
  {
    description: "Under natural Sri Lankan light & water",
    icon: LeafIcon,
    id: "growing",
    label: "Growing",
    timeline: "Days 3-7",
  },
  {
    description: "Hygienically sealed, same day harvest",
    icon: PackageIcon,
    id: "packing",
    label: "Packing",
    timeline: "Day 7 AM",
  },
  {
    description: "Door-to-door in temperature-controlled vans",
    icon: TruckIcon,
    id: "delivery",
    label: "Delivery",
    timeline: "Day 7 PM",
  },
]

export const landingExportSection = {
  backgroundImage:
    "https://images.unsplash.com/photo-1657547909537-a41f4ecf11d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5OTQyNTV8&ixlib=rb-4.1.0&q=80&w=1080",
  description:
    "We supply premium microgreens to importers, health food retailers, and restaurant groups across the UK, UAE, Australia, and Southeast Asia. MOQ from 50kg/week.",
  eyebrow: "GLOBAL EXPORT PROGRAM",
  primaryCta: {
    href: "#footer",
    label: "Request Export Quote",
  },
  secondaryCta: {
    label: "Download Product Catalogue",
  },
  title: "Taking Sri Lanka's Best\nto the World.",
}

export const landingCertifications = [
  "HACCP Certified Processing",
  "Cold Chain Logistics Partner",
  "Custom Label & Packaging",
  "Phytosanitary Certified",
]

export const landingTestimonialsHeading = {
  title: "Trusted by Chefs, Families & Importers",
}

export const landingTestimonials: TestimonialData[] = [
  {
    initials: "R",
    location: "Colombo, Sri Lanka",
    name: "Ravindu Silva",
    quote:
      "\"The freshness is unmatched. We've completely switched our microgreen supplier to Ceylon Greens. Our guests notice the difference.\"",
    role: "Head Chef, The Kingsbury Hotel",
  },
  {
    initials: "A",
    location: "Dubai, UAE",
    name: "Aisha Al-Rashid",
    quote:
      "\"Reliable export partner. The packaging quality and cold chain logistics are world-class. Our Dubai customers love the product.\"",
    role: "Health Store Owner",
  },
  {
    initials: "N",
    location: "Kandy, Sri Lanka",
    name: "Nimal Perera",
    quote:
      "\"We subscribed 6 months ago and haven't looked back. The weekly delivery is always on time, and the greens are incredibly fresh.\"",
    role: "Home Subscriber",
  },
]

export const landingSubscriptionSection = {
  badgeLabel: "Subscribe & Save 15%",
  cadenceHint: "choose your cadence",
  cadenceLabel: "Delivery cadence",
  description:
    "Subscribe & save 15% on weekly, bi-weekly, or monthly deliveries. Pause or cancel anytime.",
  emailHelp: "Fresh harvest updates land in your inbox before dispatch.",
  emailLabel: "Email address",
  emailPlaceholder: "you@example.com",
  submitLabel: "Subscribe",
  title: "Never Run Out of Greens.",
}

export const landingCadenceOptions = [
  { label: "Weekly", value: "weekly" },
  { label: "Bi-weekly", value: "bi-weekly" },
  { label: "Monthly", value: "monthly" },
]

export const landingJournalHeading = {
  description: "Stories, science, and tips from our farm to your table.",
  eyebrow: "FROM THE JOURNAL",
  title: "The Green Journal",
}

export const landingJournalReadLabel = "Read"

export const landingJournalFeaturedArticle: JournalArticleData = {
  date: "Feb 12, 2025",
  excerpt:
    "New research confirms what we've long known - these tiny greens pack an extraordinary nutritional punch that's changing how chefs and families think about food.",
  href: "#journal",
  image: JournalFeaturedImage,
  imageAlt: "A close-up of microgreens used in a nutrition story.",
  tag: "Nutrition",
  tagClassName: "bg-secondary text-sage-dark",
  title: "Why Microgreens Are 40x More Nutritious Than Full-Grown Plants",
}

export const landingJournalTeasers: JournalArticleData[] = [
  {
    date: "Jan 28, 2025",
    href: "#journal",
    image: JournalStorageImage,
    imageAlt: "A close-up of stored microgreens for a freshness guide.",
    tag: "Tips",
    tagClassName: "bg-terracotta-tint text-destructive",
    title: "How to Store Microgreens for Maximum Freshness",
  },
  {
    date: "Jan 15, 2025",
    href: "#export",
    image: JournalDubaiImage,
    imageAlt: "Packaged microgreens prepared for export.",
    tag: "Story",
    tagClassName: "bg-soft-blue-tint text-soft-blue",
    title: "Ceylon Greens' Journey from Colombo to Dubai Shelves",
  },
]

export const landingFooterColumns: FooterLinkColumnData[] = [
  {
    links: [
      { href: "#about", label: "About Us" },
      { href: "#about", label: "Our Farm" },
      { href: "#about", label: "Sustainability" },
      { href: "#footer", label: "Careers" },
    ],
    title: "Company",
  },
  {
    links: [
      { href: "#shop", label: "All Products" },
      { href: "#shop", label: "Bundles" },
      { href: "#subscribe", label: "Subscriptions" },
      { href: "#footer", label: "Gift Cards" },
    ],
    title: "Shop",
  },
  {
    links: [
      { href: "#export", label: "Export Program" },
      { href: "#export", label: "Certifications" },
      { href: "#export", label: "MOQ & Pricing" },
      { href: "#footer", label: "Contact Agent" },
    ],
    title: "Export",
  },
  {
    links: [
      { href: "#footer", label: "Instagram" },
      { href: "#footer", label: "Facebook" },
      { href: "#footer", label: "WhatsApp" },
      { href: "#subscribe", label: "Newsletter" },
    ],
    title: "Connect",
  },
]

export const landingSocialLinks: SocialLinkData[] = [
  { href: "#footer", icon: InstagramIcon, label: "Instagram" },
  { href: "#footer", icon: FacebookIcon, label: "Facebook" },
  { href: "#footer", icon: MessageCircleIcon, label: "WhatsApp" },
  { href: "#subscribe", icon: MailIcon, label: "Newsletter" },
]

export const landingFooterMetaLinks: FooterLink[] = [
  { href: "#footer", label: "Privacy" },
  { href: "#footer", label: "Terms" },
  { href: "#footer", label: "Made in Sri Lanka" },
]

export const landingPaymentBadges = ["Visa", "MC", "LankaQR", "iPay"]

export const landingFooterMeta = {
  copyright: "\u00A9 2025 Ceylon Greens Pvt Ltd",
}
