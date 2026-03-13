export const CHECKOUT_DRAFT_STORAGE_KEY = "ceylon-greens-checkout-draft/v1"

export type CheckoutFlowStep = "details" | "delivery"
export type CheckoutDeliveryMethod = "" | "standard" | "express" | "pickup"

export const checkoutNav = {
  brandLabel: "Ceylon Greens",
  homeTo: "/",
  secureLabel: "Secure Checkout",
}

export const checkoutSteps = [
  { id: "details", label: "Details", number: "1" },
  { id: "delivery", label: "Delivery", number: "2" },
  { id: "payment", label: "Payment", number: "3" },
] as const

export const checkoutFieldIds = {
  addressLine1: "checkout-address-line-1",
  addressLine2: "checkout-address-line-2",
  city: "checkout-city",
  deliveryDate: "checkout-delivery-date",
  deliveryInstructionAccess: "checkout-delivery-instruction-access",
  deliveryInstructionDropoff: "checkout-delivery-instruction-dropoff",
  deliveryInstructionSpecial: "checkout-delivery-instruction-special",
  deliveryMethod: "checkout-delivery-method-standard",
  deliveryMethodExpress: "checkout-delivery-method-express",
  deliveryMethodPickup: "checkout-delivery-method-pickup",
  deliveryMethodStandard: "checkout-delivery-method-standard",
  deliveryWindow: "checkout-delivery-window",
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

export const checkoutDeliveryStep = {
  description:
    "Pick the delivery method and schedule for your first harvest. You can still review these details before payment.",
  title: "Choose your delivery",
}

export const checkoutDeliveryMethodSection = {
  assistiveLabel: "Delivery method",
  description: "Select the service level that fits your schedule best.",
}

export const checkoutDeliveryMethods = [
  {
    badge: "Best Value",
    description:
      "Fresh harvest delivered on our chilled route within the next available daytime slot.",
    fieldId: checkoutFieldIds.deliveryMethodStandard,
    label: "Standard Delivery",
    priceLabel: "Rs. 350",
    value: "standard",
  },
  {
    badge: "Fastest",
    description:
      "Priority drop-off for Colombo area orders when you need a same-day window.",
    fieldId: checkoutFieldIds.deliveryMethodExpress,
    label: "Express Delivery",
    priceLabel: "Rs. 650",
    value: "express",
  },
  {
    badge: "Collect",
    description:
      "Pick up your order directly from the farm hub and skip the delivery fee.",
    fieldId: checkoutFieldIds.deliveryMethodPickup,
    label: "Farm Pickup",
    priceLabel: "Free",
    value: "pickup",
  },
] as const

export const checkoutDeliveryScheduleSection = {
  dateLabel: "Preferred Delivery Date",
  datePlaceholder: "Select date",
  description: "Choose the day and arrival window for the first order drop.",
  title: "Delivery Schedule",
  windowLabel: "Arrival Window",
  windowPlaceholder: "Select time window",
}

export const checkoutDeliveryDateOptions = [
  { label: "Next available", value: "next-available" },
  { label: "Saturday delivery", value: "saturday" },
  { label: "Sunday delivery", value: "sunday" },
  { label: "Monday delivery", value: "monday" },
  { label: "Tuesday delivery", value: "tuesday" },
] as const

export const checkoutDeliveryWindowOptions = [
  { label: "7:00 AM - 10:00 AM", value: "7-10" },
  { label: "10:00 AM - 1:00 PM", value: "10-13" },
  { label: "1:00 PM - 4:00 PM", value: "13-16" },
  { label: "4:00 PM - 7:00 PM", value: "16-19" },
] as const

export const checkoutDeliveryInstructionsSection = {
  accessLabel: "Building / Gate Access",
  accessPlaceholder: "Gate code, apartment, or reception notes",
  description: "Add anything the rider should know before arriving.",
  dropoffLabel: "Preferred Drop-off Spot",
  dropoffPlaceholder: "Front desk, porch table, side entrance",
  specialLabel: "Special Instructions",
  specialPlaceholder: "Leave in shade, call on arrival, or other notes",
  title: "Delivery Instructions",
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
  backToDetailsLabel: "Back to Details",
  continueToDeliveryLabel: "Continue to Delivery",
  continueToPaymentLabel: "Continue to Payment",
}

export const checkoutFooter = {
  copyright: "(c) 2025 Ceylon Greens Pvt Ltd",
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
  deliveryDate: "Select a delivery date.",
  deliveryMethod: "Choose a delivery method.",
  deliveryWindow: "Select an arrival window.",
  district: "Select your district.",
  emailInvalid: "Enter a valid email address.",
  emailRequired: "Enter your email address.",
  fullName: "Enter the recipient's full name.",
  phone: "Enter your phone number.",
  postalCode: "Enter your postal code.",
}

export const checkoutToastMessages = {
  paymentStepDescription:
    "Your delivery preferences were saved locally. Payment will be added in the next step.",
  paymentStepTitle: "Payment step coming soon",
}
