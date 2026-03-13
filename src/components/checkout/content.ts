export const CHECKOUT_DRAFT_STORAGE_KEY = "ceylon-greens-checkout-draft/v1"

export const checkoutNav = {
  brandLabel: "Ceylon Greens",
  homeTo: "/",
  secureLabel: "Secure Checkout",
}

export const checkoutSteps = [
  { label: "Details", number: "1", state: "current" },
  { label: "Delivery", number: "2", state: "upcoming" },
  { label: "Payment", number: "3", state: "upcoming" },
] as const

export const checkoutFieldIds = {
  addressLine1: "checkout-address-line-1",
  addressLine2: "checkout-address-line-2",
  city: "checkout-city",
  district: "checkout-district",
  email: "checkout-email",
  fullName: "checkout-full-name",
  phone: "checkout-phone",
  postalCode: "checkout-postal-code",
} as const

export const checkoutContactSection = {
  description: "We will use these details to confirm your order and delivery updates.",
  emailLabel: "Email Address",
  emailPlaceholder: "chamara@example.com",
  phoneLabel: "Phone Number",
  phonePlaceholder: "+94 77 123 4567",
  title: "Contact Information",
}

export const checkoutAddressSection = {
  addressLine1Label: "Address Line 1",
  addressLine1Placeholder: "42 Temple Road, Nawala",
  addressLine2Label: "Address Line 2 (Optional)",
  addressLine2Placeholder: "Rajagiriya",
  cityLabel: "City",
  cityPlaceholder: "Select city",
  description: "Use the address where you want the first delivery to arrive.",
  districtLabel: "District",
  districtPlaceholder: "Select district",
  fullNameLabel: "Full Name",
  fullNamePlaceholder: "Chamara Weerasinghe",
  postalCodeLabel: "Postal Code",
  postalCodePlaceholder: "10100",
  title: "Delivery Address",
}

export const checkoutSummary = {
  deliveryLabel: "Delivery",
  discountLabel: "Discount",
  orderSummaryLabel: "Order Summary",
  quantityPrefix: "Qty:",
  subtotalLabel: "Subtotal",
  totalLabel: "Total",
}

export const checkoutActions = {
  continueLabel: "Continue to Delivery",
}

export const checkoutFooter = {
  copyright: "© 2025 Ceylon Greens Pvt Ltd",
  privacyHref: "#",
  privacyLabel: "Privacy",
  securityLabel: "SSL Secured",
  termsHref: "#",
  termsLabel: "Terms",
}

export const checkoutEmptyState = {
  actionLabel: "Continue Shopping",
  actionTo: "/shop",
  description:
    "Your cart is empty right now. Add a few trays from the shop before moving into checkout.",
  title: "Nothing to check out yet",
}

export const checkoutCities = [
  "Colombo",
  "Dehiwala",
  "Nugegoda",
  "Rajagiriya",
  "Battaramulla",
  "Negombo",
  "Kandy",
  "Galle",
] as const

export const checkoutDistricts = [
  "Western",
  "Central",
  "Southern",
  "Northern",
  "North Western",
  "Sabaragamuwa",
  "Uva",
] as const

export const checkoutValidationMessages = {
  addressLine1: "Enter your delivery address.",
  city: "Select your city.",
  district: "Select your district.",
  emailInvalid: "Enter a valid email address.",
  emailRequired: "Enter your email address.",
  fullName: "Enter the recipient's full name.",
  phone: "Enter your phone number.",
  postalCode: "Enter your postal code.",
}

export const checkoutToastMessages = {
  nextStepDescription:
    "Your details were saved locally. Delivery scheduling will be added in the next step.",
  nextStepTitle: "Delivery step coming soon",
}
