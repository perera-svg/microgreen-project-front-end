import type { ComponentType, SVGProps } from "react"

import CheckIcon from "lucide-react/dist/esm/icons/check"
import EyeOffIcon from "lucide-react/dist/esm/icons/eye-off"
import LogInIcon from "lucide-react/dist/esm/icons/log-in"
import ShieldCheckIcon from "lucide-react/dist/esm/icons/shield-check"
import SproutIcon from "lucide-react/dist/esm/icons/sprout"

export type SignInIcon = ComponentType<SVGProps<SVGSVGElement>>

export type SignInFeature = {
  icon: SignInIcon
  id: string
  text: string
}

export type SignInFooterLink = {
  href: string
  label: string
}

export const signInBrand = {
  icon: SproutIcon,
  name: "Ceylon Greens",
}

export const signInNav = {
  helpLabel: "Need help?",
  helpHref: "#",
  shopLabel: "Back to Shop",
  shopTo: "/",
}

export const signInPromo = {
  badgeIcon: SproutIcon,
  badgeLabel: "Members access",
  body:
    "Access upcoming deliveries, invoice history, and export paperwork from the same calm dashboard you use to order.",
  title:
    "Manage subscriptions, repeat orders, and harvest schedules in one place.",
}

export const signInFeatures: SignInFeature[] = [
  {
    icon: CheckIcon,
    id: "delivery-windows",
    text: "Review and edit weekly delivery windows before they ship.",
  },
  {
    icon: CheckIcon,
    id: "plan-management",
    text: "Pause, resume, or swap microgreen plans without calling support.",
  },
  {
    icon: CheckIcon,
    id: "paperwork",
    text: "Download invoices and export paperwork the moment they are ready.",
  },
]

export const signInStatusCard = {
  label: "This week",
  value: "12 fresh trays are already scheduled for Friday delivery.",
}

export const signInForm = {
  createAccountHref: "/sign-up",
  createAccountLabel: "Create one",
  dividerLabel: "or",
  emailLabel: "Email Address",
  emailPlaceholder: "you@example.com",
  forgotPasswordHref: "#",
  forgotPasswordLabel: "Forgot password?",
  googleLabel: "Continue with Google",
  keepSignedInLabel: "Keep me signed in",
  oneTimeCodeHref: "#",
  oneTimeCodeLabel: "Use one-time code",
  passwordLabel: "Password",
  passwordPlaceholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
  placeholderAccountCopy: "Don't have an account?",
  signInLabel: "Sign In",
  subtitle: "Sign in to your Ceylon Greens account",
  title: "Welcome Back",
  visibilityIcon: EyeOffIcon,
  visibilityLabel: "Hide password",
}

export const signInBottomNote = {
  icon: ShieldCheckIcon,
  text: "Your data is encrypted and secure",
}

export const signInFooterLinks: SignInFooterLink[] = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
]

export const signInFooterMeta = {
  copyright: "\u00A9 2025 Ceylon Greens",
}

export const signInGoogleMark = {
  label: "G",
}

export const signInActions = {
  signInIcon: LogInIcon,
}
