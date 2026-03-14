import type { ComponentType, SVGProps } from "react"

import MailIcon from "lucide-react/dist/esm/icons/mail"
import MapPinIcon from "lucide-react/dist/esm/icons/map-pin"
import MessageCircleIcon from "lucide-react/dist/esm/icons/message-circle"
import PhoneIcon from "lucide-react/dist/esm/icons/phone"
import SproutIcon from "lucide-react/dist/esm/icons/sprout"

export type ContactIcon = ComponentType<SVGProps<SVGSVGElement>>

export type ContactTopicOption = {
  label: string
  value: string
}

export type ContactInfoDetail = {
  href?: string
  label: string
}

export type ContactInfoAction = {
  external?: boolean
  href: string
  label: string
}

export type ContactInfoItem = {
  action?: ContactInfoAction
  actionClassName?: string
  details: ContactInfoDetail[]
  icon: ContactIcon
  iconClassName?: string
  iconWrapperClassName?: string
  id: string
  title: string
}

export type ContactFaqItem = {
  answer: string
  id: string
  question: string
}

export type ContactFooterLink = {
  href: string
  label: string
}

export type ContactFooterColumn = {
  links: ContactFooterLink[]
  title: string
}

export const contactBrand = {
  icon: SproutIcon,
  name: "Ceylon Greens",
  tagline: "Premium Microgreens. Sri Lankan Heart.",
}

export const contactPageHeader = {
  description: "We're a small team - we read every message.",
  title: "Get in Touch",
}

export const contactFieldIds = {
  email: "contact-email",
  fullName: "contact-full-name",
  message: "contact-message",
  topic: "contact-topic",
} as const

export const contactFormSection = {
  emailError: "Enter a valid email address.",
  emailLabel: "Email Address",
  emailPlaceholder: "you@example.com",
  fullNameLabel: "Full Name",
  fullNamePlaceholder: "Enter your full name",
  messageError: "Tell us how we can help.",
  messageLabel: "Message",
  messagePlaceholder: "Tell us how we can help...",
  submitLabel: "Send Message",
  successMessage:
    "Message queued locally. We'll follow up from the contact inbox workflow.",
  successToastDescription:
    "This contact form is wired for polished client-side behavior only in this pass.",
  successToastTitle: "Message saved locally",
  title: "Send us a message",
  topicError: "Choose an inquiry topic.",
  topicLabel: "Topic",
}

export const contactTopicOptions: ContactTopicOption[] = [
  { label: "General Inquiry", value: "general-inquiry" },
  { label: "Wholesale Inquiry", value: "wholesale-inquiry" },
  { label: "Delivery Support", value: "delivery-support" },
  { label: "Export Inquiry", value: "export-inquiry" },
]

export const contactInfoItems: ContactInfoItem[] = [
  {
    action: {
      external: true,
      href: "https://www.google.com/maps/search/?api=1&query=42+Galle+Road,+Malabe,+Colombo,+Sri+Lanka",
      label: "Get Directions",
    },
    actionClassName: "text-primary",
    details: [
      { label: "42 Galle Road, Malabe" },
      { label: "Colombo, Sri Lanka" },
    ],
    icon: MapPinIcon,
    iconWrapperClassName: "bg-secondary text-primary",
    id: "visit-our-farm",
    title: "Visit Our Farm",
  },
  {
    details: [
      { href: "tel:+94771234567", label: "+94 77 123 4567" },
      { label: "Mon-Sat, 8AM-5PM" },
    ],
    icon: PhoneIcon,
    iconWrapperClassName: "bg-secondary text-primary",
    id: "call-us",
    title: "Call Us",
  },
  {
    action: {
      external: true,
      href: "https://wa.me/94771234567?text=Hi%20Ceylon%20Greens,%20I%20have%20a%20question.",
      label: "Chat Now",
    },
    actionClassName: "text-[#25D366]",
    details: [
      { label: "Quick responses for orders" },
      { label: "and delivery questions." },
    ],
    icon: MessageCircleIcon,
    iconClassName: "text-[#25D366]",
    iconWrapperClassName: "bg-[#25D36620]",
    id: "whatsapp",
    title: "WhatsApp",
  },
  {
    details: [
      { href: "mailto:hello@ceylongreens.lk", label: "hello@ceylongreens.lk" },
      {
        href: "mailto:export@ceylongreens.lk",
        label: "Export: export@ceylongreens.lk",
      },
    ],
    icon: MailIcon,
    iconWrapperClassName: "bg-soft-blue-tint text-soft-blue",
    id: "email-us",
    title: "Email Us",
  },
]

export const contactMap = {
  eyebrow: "Visit or open directions",
  href: "https://www.google.com/maps/search/?api=1&query=42+Galle+Road,+Malabe,+Colombo,+Sri+Lanka",
  subtitle: "42 Galle Road, Malabe, Colombo, Sri Lanka",
  title: "Open directions in Google Maps",
}

export const contactFaqHeading = {
  title: "Quick Answers",
}

export const contactFaqItems: ContactFaqItem[] = [
  {
    answer:
      "All our microgreens are harvested on the same day they are delivered. We grow to order, which keeps every tray fresh and nutrient-dense when it reaches your kitchen.",
    id: "freshness",
    question: "How fresh are your microgreens?",
  },
  {
    answer:
      "Yes. We deliver island-wide with temperature-aware handling, and we confirm the delivery window in advance for subscription and one-off orders.",
    id: "island-delivery",
    question: "Do you deliver island-wide?",
  },
  {
    answer:
      "Our export program starts from 50kg per week. We tailor packaging, cold-chain coordination, and paperwork around destination-market requirements.",
    id: "export-minimum",
    question: "What is your minimum order for export?",
  },
  {
    answer:
      "Farm visits can be arranged for wholesale, hospitality, and export partners. Send us a note with your preferred date and we will coordinate a guided visit.",
    id: "farm-visit",
    question: "Can I visit the farm?",
  },
  {
    answer:
      "For local orders, our team shares delivery updates directly once dispatch is confirmed. If you need a status update sooner, WhatsApp is the fastest channel.",
    id: "track-order",
    question: "How do I track my order?",
  },
  {
    answer:
      "Yes. We support bulk pricing for restaurants, hotels, and recurring buyers. Share your expected weekly volume and preferred varieties for a custom quote.",
    id: "bulk-pricing",
    question: "Do you offer bulk pricing for restaurants?",
  },
]

export const contactFooterColumns: ContactFooterColumn[] = [
  {
    links: [
      { href: "/about", label: "About Us" },
      { href: "/#about", label: "Our Farm" },
  { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Careers" },
    ],
    title: "Company",
  },
  {
    links: [
      { href: "/shop", label: "All Products" },
      { href: "/shop", label: "Subscriptions" },
      { href: "/shop", label: "Gift Boxes" },
      { href: "/shop", label: "Bulk Orders" },
    ],
    title: "Shop",
  },
  {
    links: [
      { href: "/#export", label: "Programs" },
      { href: "/#export", label: "Certifications" },
      { href: "/#export", label: "Partners" },
      { href: "/contact", label: "Contact Agent" },
    ],
    title: "Export",
  },
  {
    links: [
      { href: "/contact", label: "Contact" },
      {
        href: "https://wa.me/94771234567?text=Hi%20Ceylon%20Greens,%20I%20have%20a%20question.",
        label: "WhatsApp",
      },
      { href: "#footer", label: "Instagram" },
      { href: "#footer", label: "Facebook" },
    ],
    title: "Connect",
  },
]

export const contactFooterMeta = {
  copyright: "© 2025 Ceylon Greens. All rights reserved.",
}

export const contactFooterMetaLinks: ContactFooterLink[] = [
  { href: "#footer", label: "Privacy Policy" },
  { href: "#footer", label: "Terms of Service" },
  { href: "#footer", label: "Shipping Policy" },
]

export const contactFooterPaymentBadges = ["Visa", "MC", "Amex"]
