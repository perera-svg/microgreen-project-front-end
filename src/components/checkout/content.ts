export const CHECKOUT_DRAFT_STORAGE_KEY = "ceylon-greens-checkout-draft/v1"

export type CheckoutFlowStep = "details" | "delivery" | "payment"
export type CheckoutDeliveryMethod = "" | "standard" | "express" | "pickup"
export type CheckoutPaymentMethod = "" | "card" | "cashOnDelivery" | "bankTransfer"

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
  billingAddress: "checkout-billing-address",
  cardNumber: "checkout-card-number",
  cardholderName: "checkout-cardholder-name",
  city: "checkout-city",
  couponCode: "checkout-coupon-code",
  cvv: "checkout-cvv",
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
  expiryDate: "checkout-expiry-date",
  fullName: "checkout-full-name",
  paymentMethod: "checkout-payment-method-card",
  paymentMethodBankTransfer: "checkout-payment-method-bank-transfer",
  paymentMethodCard: "checkout-payment-method-card",
  paymentMethodCashOnDelivery: "checkout-payment-method-cash-on-delivery",
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

export const checkoutPaymentStep = {
  description:
    "Choose how you want to settle this order and confirm the final payment details before placing it.",
  title: "Choose your payment",
}

export const checkoutPaymentMethodSection = {
  assistiveLabel: "Payment method",
  description: "Select the payment method that fits this order.",
}

export const checkoutPaymentMethods = [
  {
    description: "Visa, Mastercard, and Amex accepted",
    fieldId: checkoutFieldIds.paymentMethodCard,
    icon: "credit-card",
    label: "Credit or Debit Card",
    value: "card",
  },
  {
    description: "Pay at your doorstep with cash or card",
    fieldId: checkoutFieldIds.paymentMethodCashOnDelivery,
    icon: "wallet",
    label: "Cash on Delivery",
    value: "cashOnDelivery",
  },
  {
    description: "Best for restaurant and wholesale orders",
    fieldId: checkoutFieldIds.paymentMethodBankTransfer,
    icon: "landmark",
    label: "Bank Transfer",
    value: "bankTransfer",
  },
] as const

export const checkoutPaymentCardSection = {
  billingAddressLabel: "Billing Address",
  billingAddressPlaceholder: "42 Temple Road, Nawala",
  cardNumberLabel: "Card Number",
  cardNumberPlaceholder: "4242 4242 4242 4242",
  cardholderNameLabel: "Cardholder Name",
  cardholderNamePlaceholder: "Chamara Weerasinghe",
  couponCodeLabel: "Coupon Code",
  couponCodePlaceholder: "FRESH10",
  cvvLabel: "CVV",
  cvvPlaceholder: "123",
  expiryDateLabel: "Expiry Date",
  expiryDatePlaceholder: "12 / 28",
  title: "Payment Details",
}

export const checkoutPaymentAlternativePanels = {
  bankTransfer: {
    description:
      "We will send your transfer instructions by email after you place the order.",
    note: "Reply to that email with your remittance slip if you need manual verification.",
    title: "Bank Transfer",
  },
  cashOnDelivery: {
    description:
      "You can settle this order with cash or card when the rider arrives.",
    note: "Keep the exact amount ready if you plan to pay with cash at the doorstep.",
    title: "Cash on Delivery",
  },
}

export const checkoutPaymentSecurityNote = {
  text: "SSL encrypted payment. Your card is never stored on this device.",
}

export const checkoutDeliveryRecap = {
  title: "Delivery",
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
  backToDeliveryLabel: "Back to Delivery",
  backToDetailsLabel: "Back to Details",
  continueToDeliveryLabel: "Continue to Delivery",
  continueToPaymentLabel: "Continue to Payment",
  placeOrderLabel: "Place Order",
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
  billingAddress: "Enter the billing address for this payment.",
  cardNumber: "Enter your card number.",
  cardholderName: "Enter the name shown on the card.",
  city: "Select your city.",
  cvv: "Enter the card security code.",
  deliveryDate: "Select a delivery date.",
  deliveryMethod: "Choose a delivery method.",
  deliveryWindow: "Select an arrival window.",
  district: "Select your district.",
  emailInvalid: "Enter a valid email address.",
  emailRequired: "Enter your email address.",
  expiryDate: "Enter the card expiry date.",
  fullName: "Enter the recipient's full name.",
  paymentMethod: "Choose a payment method.",
  phone: "Enter your phone number.",
  postalCode: "Enter your postal code.",
}

export const checkoutToastMessages = {
  orderStepDescription:
    "Your payment details were saved locally. Order confirmation can be added next.",
  orderStepTitle: "Order submission coming soon",
}
