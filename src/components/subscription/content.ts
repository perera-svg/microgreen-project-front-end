import type { ComponentType, SVGProps } from "react"

import BoxIcon from "lucide-react/dist/esm/icons/box"
import HeartIcon from "lucide-react/dist/esm/icons/heart"
import LeafIcon from "lucide-react/dist/esm/icons/leaf"
import QuoteIcon from "lucide-react/dist/esm/icons/quote"
import RepeatIcon from "lucide-react/dist/esm/icons/repeat"
import SearchIcon from "lucide-react/dist/esm/icons/search"
import ShoppingCartIcon from "lucide-react/dist/esm/icons/shopping-cart"
import SproutIcon from "lucide-react/dist/esm/icons/sprout"
import StarIcon from "lucide-react/dist/esm/icons/star"

type SubscriptionIcon = ComponentType<SVGProps<SVGSVGElement>>

export type SubscriptionPlanId = "starter" | "family" | "chefs"

export type SubscriptionNavLink = {
  href: string
  label: string
}

export type SubscriptionUtilityAction = {
  icon: SubscriptionIcon
  id: "search" | "wishlist"
  label: string
  message: string
}

export type SubscriptionPlan = {
  badgeLabel?: string
  buttonLabel: string
  cadence: string
  description: string
  displayPrice: string
  featured?: boolean
  features: string[]
  id: SubscriptionPlanId
  title: string
  toastDescription: string
}

export type SubscriptionBuildBoxItem = {
  displayPrice: string
  icon: SubscriptionIcon
  productId: string
  title: string
}

export type SubscriptionProcessStep = {
  description: string
  id: string
  step: number
  title: string
}

export type SubscriptionFaqItem = {
  answer: string
  id: string
  question: string
}

export type SubscriptionTestimonial = {
  name: string
  quote: string
  quoteIcon: SubscriptionIcon
  role: string
  starIcon: SubscriptionIcon
  stars: number
}

export const subscriptionBrand = {
  icon: SproutIcon,
  name: "Ceylon Greens",
}

export const subscriptionNavLinks: SubscriptionNavLink[] = [
  { href: "/shop", label: "Shop" },
  { href: "/#about", label: "About" },
  { href: "/#export", label: "Export" },
  { href: "/blog", label: "Blog" },
]

export const subscriptionUtilityActions: SubscriptionUtilityAction[] = [
  {
    icon: SearchIcon,
    id: "search",
    label: "Search",
    message: "Search is coming soon",
  },
  {
    icon: HeartIcon,
    id: "wishlist",
    label: "Wishlist",
    message: "Saved items are coming soon",
  },
]

export const subscriptionCartAction = {
  href: "/cart",
  icon: ShoppingCartIcon,
  label: "Cart",
}

export const subscriptionOrderAction = {
  href: "/shop",
  label: "Order Now",
}

export const subscriptionHero = {
  badgeIcon: RepeatIcon,
  badgeLabel: "Subscribe & Save",
  description:
    "Choose a plan that fits your lifestyle. Skip, pause, or cancel anytime — freshness guaranteed.",
  title: "Fresh Greens, Delivered Weekly",
}

export const subscriptionDefaultPlanId: SubscriptionPlanId = "family"

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    buttonLabel: "Choose Starter",
    cadence: "/week",
    description: "Perfect for individuals exploring microgreens",
    displayPrice: "Rs. 1,200",
    features: [
      "3 varieties per delivery",
      "150g total weight",
      "Free recipe cards",
      "Weekly or bi-weekly delivery",
    ],
    id: "starter",
    title: "Starter Box",
    toastDescription:
      "A light weekly mix for solo routines and smaller households.",
  },
  {
    badgeLabel: "Most Popular",
    buttonLabel: "Choose Family",
    cadence: "/week",
    description: "Ideal for families who love fresh, healthy meals",
    displayPrice: "Rs. 2,400",
    featured: true,
    features: [
      "5 varieties per delivery",
      "350g total weight",
      "Free recipe cards + storage tips",
      "Priority delivery slot",
    ],
    id: "family",
    title: "Family Box",
    toastDescription:
      "The balanced weekly plan with more volume and family-friendly variety.",
  },
  {
    buttonLabel: "Choose Chef's",
    cadence: "/week",
    description: "For culinary enthusiasts and professional chefs",
    displayPrice: "Rs. 4,500",
    features: [
      "8 premium varieties",
      "500g total weight",
      "Chef's guide + pairing notes",
      "Exclusive seasonal varieties",
      "Same-day harvest guarantee",
    ],
    id: "chefs",
    title: "Chef's Box",
    toastDescription:
      "A larger premium assortment built for entertaining and service.",
  },
]

export const subscriptionBuildBoxSection = {
  ctaIcon: BoxIcon,
  ctaLabel: "Start Building Your Box",
  description:
    "Mix and match your favourite microgreens to create a custom subscription box.",
  helperText: "Select one or more greens to enable your custom box.",
  title: "Build Your Own Box",
}

export const subscriptionBuildBoxItems: SubscriptionBuildBoxItem[] = [
  {
    displayPrice: "Rs. 350/100g",
    icon: LeafIcon,
    productId: "sunflower-microgreens",
    title: "Sunflower",
  },
  {
    displayPrice: "Rs. 400/100g",
    icon: LeafIcon,
    productId: "broccoli-microgreens",
    title: "Broccoli",
  },
  {
    displayPrice: "Rs. 300/100g",
    icon: LeafIcon,
    productId: "radish-microgreens",
    title: "Radish",
  },
  {
    displayPrice: "Rs. 320/100g",
    icon: LeafIcon,
    productId: "pea-shoots",
    title: "Pea Shoots",
  },
  {
    displayPrice: "Rs. 380/100g",
    icon: LeafIcon,
    productId: "amaranth-microgreens",
    title: "Amaranth",
  },
]

export const subscriptionProcessSection = {
  description: "Four simple steps to fresh greens at your doorstep",
  title: "How It Works",
}

export const subscriptionProcessSteps: SubscriptionProcessStep[] = [
  {
    description:
      "Pick a subscription box or build your own custom selection",
    id: "choose-plan",
    step: 1,
    title: "Choose Your Plan",
  },
  {
    description:
      "Weekly or bi-weekly deliveries to suit your lifestyle",
    id: "set-schedule",
    step: 2,
    title: "Set Your Schedule",
  },
  {
    description:
      "Your greens are harvested the same morning they are delivered",
    id: "harvest-fresh",
    step: 3,
    title: "We Harvest Fresh",
  },
  {
    description:
      "Skip, pause, or cancel anytime. No commitments, just fresh greens",
    id: "enjoy-repeat",
    step: 4,
    title: "Enjoy & Repeat",
  },
]

export const subscriptionFaqSection = {
  title: "Subscription FAQ",
}

export const subscriptionFaqItems: SubscriptionFaqItem[] = [
  {
    answer:
      "You can choose weekly or bi-weekly deliveries. Adjust your schedule anytime from your account dashboard.",
    id: "deliveries",
    question: "How often will I receive deliveries?",
  },
  {
    answer:
      "Yes. You can skip an upcoming harvest, pause the plan, or resume it whenever you're ready before the next delivery cutoff.",
    id: "skip-week",
    question: "Can I skip a week?",
  },
  {
    answer:
      "Add delivery notes during checkout and we'll coordinate a safe handoff or drop-off window where service coverage allows.",
    id: "delivery-not-home",
    question: "What if I'm not home for delivery?",
  },
  {
    answer:
      "Cancel anytime before your next billing cycle. There are no long-term contracts or hidden cancellation fees in this UI pass.",
    id: "cancel",
    question: "How do I cancel my subscription?",
  },
  {
    answer:
      "Yes. Colombo is our fastest route, and we also cover selected nearby areas with wider delivery options depending on the weekly harvest run.",
    id: "outside-colombo",
    question: "Do you deliver outside Colombo?",
  },
]

export const subscriptionTestimonial: SubscriptionTestimonial = {
  name: "Nadeesha Perera",
  quote:
    "\"The Family Box has transformed our meals. The freshness is unmatched — you can taste the difference when greens are harvested the same morning.\"",
  quoteIcon: QuoteIcon,
  role: "Family Box Subscriber, Colombo",
  starIcon: StarIcon,
  stars: 5,
}

const subscriptionPlansById = new Map(
  subscriptionPlans.map((plan) => [plan.id, plan] as const)
)

function getSubscriptionPlanById(planId: SubscriptionPlanId) {
  return subscriptionPlansById.get(planId)
}

export { getSubscriptionPlanById }
