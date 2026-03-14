import type { ComponentType, SVGProps } from "react"

import DropletsIcon from "lucide-react/dist/esm/icons/droplets"
import FacebookIcon from "lucide-react/dist/esm/icons/facebook"
import FlaskConicalIcon from "lucide-react/dist/esm/icons/flask-conical"
import HeartIcon from "lucide-react/dist/esm/icons/heart"
import InstagramIcon from "lucide-react/dist/esm/icons/instagram"
import LeafIcon from "lucide-react/dist/esm/icons/leaf"
import MailIcon from "lucide-react/dist/esm/icons/mail"
import MessageCircleIcon from "lucide-react/dist/esm/icons/message-circle"
import RecycleIcon from "lucide-react/dist/esm/icons/recycle"
import SearchIcon from "lucide-react/dist/esm/icons/search"
import ShoppingCartIcon from "lucide-react/dist/esm/icons/shopping-cart"
import SproutIcon from "lucide-react/dist/esm/icons/sprout"
import UsersIcon from "lucide-react/dist/esm/icons/users"

import AboutFarm1Image from "@/assets/about/about-farm-1.png"
import AboutFarm2Image from "@/assets/about/about-farm-2.png"
import AboutFarm3Image from "@/assets/about/about-farm-3.png"
import AboutFarm4Image from "@/assets/about/about-farm-4.png"
import AboutFounderImage from "@/assets/about/about-founder.png"
import AboutTeamChamaraImage from "@/assets/about/about-team-chamara.png"
import AboutTeamKavindaImage from "@/assets/about/about-team-kavinda.png"
import AboutTeamNadeeshaImage from "@/assets/about/about-team-nadeesha.png"
import AboutTeamRuwanImage from "@/assets/about/about-team-ruwan.png"

type AboutIcon = ComponentType<SVGProps<SVGSVGElement>>

type AboutLink = {
  href: string
  label: string
}

type AboutNavLink = AboutLink & {
  isActive?: boolean
}

type AboutQuickLink = AboutLink & {
  isEmphasized?: boolean
}

type AboutImage = {
  alt: string
  src: string
}

type AboutValue = {
  description: string
  icon: AboutIcon
  id: string
  title: string
}

type AboutStat = {
  label: string
  value: string
}

type AboutTeamMember = {
  image: AboutImage
  name: string
  role: string
}

type AboutCommitment = {
  description: string
  icon: AboutIcon
  title: string
}

type AboutProgressMetric = {
  label: string
  value: number
}

type AboutSocialLink = AboutLink & {
  icon: AboutIcon
}

type AboutFooterColumn = {
  links: AboutLink[]
  title: string
}

type AboutPlaceholderMessage = {
  description: string
  title: string
}

type AboutNavUtilityAction = {
  icon: AboutIcon
  label: string
  message: AboutPlaceholderMessage
}

export type {
  AboutCommitment,
  AboutFooterColumn,
  AboutIcon,
  AboutImage,
  AboutLink,
  AboutNavLink,
  AboutNavUtilityAction,
  AboutPlaceholderMessage,
  AboutProgressMetric,
  AboutQuickLink,
  AboutSocialLink,
  AboutStat,
  AboutTeamMember,
  AboutValue,
}

export const aboutBrand = {
  icon: SproutIcon,
  name: "Ceylon Greens",
  tagline: "Premium Microgreens.\nSri Lankan Heart.",
}

export const aboutNavLinks: AboutNavLink[] = [
  { href: "/shop", label: "Shop" },
  { href: "/about", isActive: true, label: "About" },
  { href: "/#export", label: "Export" },
  { href: "/#journal", label: "Blog" },
]

export const aboutMobileQuickLinks: AboutQuickLink[] = [
  { href: "#about-story", label: "About" },
  { href: "#farm", isEmphasized: true, label: "Farm" },
]

export const aboutNav = {
  cartLabel: "Cart",
  orderCtaLabel: "Order Now",
  orderCtaTo: "/sign-up",
}

export const aboutPlaceholderMessages = {
  contact: {
    description: "A dedicated contact route is not live yet in this pass.",
    title: "Contact is coming soon",
  },
  search: {
    description: "This marketing page keeps search as a placeholder for now.",
    title: "Search is coming soon",
  },
  wishlist: {
    description: "Saved items stay placeholder-only on this page in this pass.",
    title: "Saved items are coming soon",
  },
} satisfies Record<string, AboutPlaceholderMessage>

export const aboutNavUtilityActions: AboutNavUtilityAction[] = [
  {
    icon: SearchIcon,
    label: "Search",
    message: aboutPlaceholderMessages.search,
  },
  {
    icon: HeartIcon,
    label: "Saved items",
    message: aboutPlaceholderMessages.wishlist,
  },
]

export const aboutHero = {
  description:
    "What started as a small experiment on a rooftop in Colombo has grown into Sri Lanka's most trusted microgreens brand. In 2020, our founder discovered the extraordinary nutritional power of microgreens and set out to make them accessible to every Sri Lankan kitchen.",
  foundedLabel: "Founded 2020 \u00b7 Colombo",
  image: {
    alt: "Ceylon Greens founder standing in the farm greenhouse with a fresh harvest.",
    src: AboutFounderImage,
  },
  overline: "OUR STORY",
  secondaryDescription:
    "Today, Ceylon Greens supplies over 45 restaurants, 8,000 home customers, and exports to three continents \u2014 all while staying true to our roots: sustainable farming, zero chemicals, and a deep love for the land.",
  title: "Growing Goodness\nin Sri Lanka",
}

export const aboutValues: AboutValue[] = [
  {
    description:
      "Every decision we make prioritises the health of our soil, water, and community. Zero chemicals, 80% solar-powered operations.",
    icon: LeafIcon,
    id: "sustainability",
    title: "Sustainability",
  },
  {
    description:
      "Our microgreens contain up to 40x more nutrients than mature plants. We test every batch to guarantee peak nutrition.",
    icon: FlaskConicalIcon,
    id: "nutrition-science",
    title: "Nutrition Science",
  },
  {
    description:
      "We partner with 15 local farming families, providing training, fair wages, and a sustainable livelihood through microgreen cultivation.",
    icon: UsersIcon,
    id: "community",
    title: "Community",
  },
]

export const aboutFarmSection = {
  images: [
    {
      alt: "Sunlit rows of Ceylon Greens microgreens inside the farm house.",
      src: AboutFarm1Image,
    },
    {
      alt: "Young microgreens growing in stacked trays ready for harvest.",
      src: AboutFarm2Image,
    },
    {
      alt: "Fresh produce and packaging station inside the Ceylon Greens farm.",
      src: AboutFarm3Image,
    },
    {
      alt: "Harvested microgreens staged in warm afternoon light at the farm.",
      src: AboutFarm4Image,
    },
  ] satisfies AboutImage[],
  title: "Our Farm",
}

export const aboutStats: AboutStat[] = [
  { label: "Growing Excellence", value: "4 Years" },
  { label: "Harvested Annually", value: "12,000 kg" },
  { label: "Local Partners", value: "15 Farmers" },
  { label: "Under Cultivation", value: "3 Hectares" },
  { label: "Served Weekly", value: "45 Restaurants" },
  { label: "Happy Customers", value: "8,000+" },
]

export const aboutTeamSection = {
  heading: "The People Behind the Greens",
  members: [
    {
      image: {
        alt: "Portrait of Chamara Silva.",
        src: AboutTeamChamaraImage,
      },
      name: "Chamara Silva",
      role: "Founder & CEO",
    },
    {
      image: {
        alt: "Portrait of Nadeesha Perera.",
        src: AboutTeamNadeeshaImage,
      },
      name: "Nadeesha Perera",
      role: "Head of Operations",
    },
    {
      image: {
        alt: "Portrait of Dr. Kavinda Raj.",
        src: AboutTeamKavindaImage,
      },
      name: "Dr. Kavinda Raj",
      role: "Nutrition Scientist",
    },
    {
      image: {
        alt: "Portrait of Ruwan Fernando.",
        src: AboutTeamRuwanImage,
      },
      name: "Ruwan Fernando",
      role: "Farm Manager",
    },
  ] satisfies AboutTeamMember[],
}

export const aboutSustainabilitySection = {
  commitments: [
    {
      description: "100% organic farming practices",
      icon: DropletsIcon,
      title: "Zero Chemical Runoff",
    },
    {
      description: "Transitioning to 100% by 2026",
      icon: RecycleIcon,
      title: "Compostable Packaging",
    },
    {
      description: "Offsetting through reforestation",
      icon: LeafIcon,
      title: "Carbon Neutral by 2027",
    },
  ] satisfies AboutCommitment[],
  metrics: [
    { label: "Water Recycled", value: 90 },
    { label: "Chemical Free", value: 100 },
    { label: "Solar Powered", value: 80 },
  ] satisfies AboutProgressMetric[],
  title: "Our Green Pledge",
}

export const aboutCta = {
  primaryAction: {
    href: "/shop",
    label: "Shop Now",
  },
  secondaryActionLabel: "Contact Us",
  title: "Ready to taste the difference?",
}

export const aboutFooter = {
  description: "Premium Microgreens.\nSri Lankan Heart.",
}

export const aboutFooterColumns: AboutFooterColumn[] = [
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
      { href: "/#subscribe", label: "Newsletter" },
    ],
    title: "Connect",
  },
]

export const aboutFooterSocialLinks: AboutSocialLink[] = [
  { href: "#footer", icon: InstagramIcon, label: "Instagram" },
  { href: "#footer", icon: FacebookIcon, label: "Facebook" },
  { href: "#footer", icon: MessageCircleIcon, label: "WhatsApp" },
  { href: "/#subscribe", icon: MailIcon, label: "Newsletter" },
]

export const aboutFooterMeta = {
  copyright: "\u00A9 2025 Ceylon Greens Pvt Ltd",
}

export const aboutFooterMetaLinks: AboutLink[] = [
  { href: "#footer", label: "Privacy" },
  { href: "#footer", label: "Terms" },
  { href: "#footer", label: "Made in Sri Lanka" },
]

export const aboutPaymentBadges = ["Visa", "MC", "LankaQR", "iPay"]

export const aboutCartIcon = ShoppingCartIcon
