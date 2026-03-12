import type { ComponentType, SVGProps } from "react"

import CheckIcon from "lucide-react/dist/esm/icons/check"
import EyeOffIcon from "lucide-react/dist/esm/icons/eye-off"
import ShieldCheckIcon from "lucide-react/dist/esm/icons/shield-check"
import SproutIcon from "lucide-react/dist/esm/icons/sprout"
import UserPlusIcon from "lucide-react/dist/esm/icons/user-plus"

export type SignUpIcon = ComponentType<SVGProps<SVGSVGElement>>

export type SignUpFeature = {
  icon: SignUpIcon
  id: string
  text: string
}

export type SignUpFooterLink = {
  href: string
  label: string
}

export const signUpBrand = {
  icon: SproutIcon,
  name: "Ceylon Greens",
}

export const signUpNav = {
  helpHref: "#",
  helpLabel: "Need help?",
  shopLabel: "Back to Shop",
  shopTo: "/shop",
}

export const signUpPromo = {
  badgeIcon: SproutIcon,
  badgeLabel: "Fresh start",
  body:
    "Join to schedule deliveries, save home or restaurant preferences, and unlock recurring harvest reminders.",
  title: "Create your account and plan weekly greens around your routine.",
}

export const signUpFeatures: SignUpFeature[] = [
  {
    icon: CheckIcon,
    id: "preferences",
    text: "Choose personal, chef, or export-ready preferences from day one.",
  },
  {
    icon: CheckIcon,
    id: "schedule",
    text: "Pause, resume, or reschedule weekly plans from one calm dashboard.",
  },
  {
    icon: CheckIcon,
    id: "documents",
    text: "See invoices, delivery notes, and compliance docs instantly.",
  },
]

export const signUpStatusCard = {
  label: "Starter perk",
  value: "New members get 15% off their first scheduled weekly plan this month.",
}

export const signUpForm = {
  accountCopy: "Already have an account?",
  confirmPasswordLabel: "Confirm Password",
  confirmPasswordPlaceholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
  createAccountLabel: "Create Account",
  dividerLabel: "or",
  emailLabel: "Email Address",
  emailPlaceholder: "you@example.com",
  fullNameLabel: "Full Name",
  fullNamePlaceholder: "Nadeesha Perera",
  googleLabel: "Continue with Google",
  passwordLabel: "Create Password",
  passwordPlaceholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
  privacyHref: "#",
  privacyLabel: "Privacy Policy",
  signInHref: "/sign-in",
  signInLabel: "Sign in",
  subtitle: "Set up your Ceylon Greens profile in under two minutes.",
  termsCopy: "I agree to the Terms of Service",
  title: "Create Account",
  visibilityIcon: EyeOffIcon,
  visibilityLabel: "Hide password",
}

export const signUpBottomNote = {
  icon: ShieldCheckIcon,
  text: "Your data is encrypted and secure",
}

export const signUpFooterLinks: SignUpFooterLink[] = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
]

export const signUpFooterMeta = {
  copyright: "\u00A9 2025 Ceylon Greens",
}

export const signUpGoogleMark = {
  label: "G",
}

export const signUpActions = {
  createAccountIcon: UserPlusIcon,
}
