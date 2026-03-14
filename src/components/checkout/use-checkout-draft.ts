import { useEffect, useState } from "react"

import {
  CHECKOUT_DRAFT_STORAGE_KEY,
  checkoutCities,
  checkoutDistricts,
  checkoutValidationMessages,
  type CheckoutDeliveryMethod,
  type CheckoutFlowStep,
  type CheckoutPaymentMethod,
} from "./content"

type CheckoutDraft = {
  addressLine1: string
  addressLine2: string
  billingAddress: string
  cardNumber: string
  cardholderName: string
  city: string
  couponCode: string
  currentStep: CheckoutFlowStep
  cvv: string
  deliveryDate: string
  deliveryInstructionAccess: string
  deliveryInstructionDropoff: string
  deliveryInstructionSpecial: string
  deliveryMethod: CheckoutDeliveryMethod
  deliveryWindow: string
  district: string
  email: string
  expiryDate: string
  fullName: string
  paymentMethod: CheckoutPaymentMethod
  phone: string
  postalCode: string
}

type CheckoutDraftField = Exclude<keyof CheckoutDraft, "currentStep">
type CheckoutDraftErrors = Partial<Record<CheckoutDraftField, string>>
type CheckoutDraftChangeHandler = <Field extends CheckoutDraftField>(
  field: Field,
  value: CheckoutDraft[Field]
) => void

type CheckoutDraftSubmitResult =
  | { ok: true }
  | {
      errors: CheckoutDraftErrors
      firstInvalidField: CheckoutDraftField
      ok: false
    }

const CHECKOUT_CARD_FIELDS = [
  "billingAddress",
  "cardNumber",
  "cardholderName",
  "cvv",
  "expiryDate",
] as const satisfies CheckoutDraftField[]
const CHECKOUT_CITY_SET = new Set<string>(checkoutCities)
const CHECKOUT_DISTRICT_SET = new Set<string>(checkoutDistricts)
const CHECKOUT_DELIVERY_METHOD_SET = new Set<CheckoutDeliveryMethod>([
  "standard",
  "express",
  "pickup",
])
const CHECKOUT_PAYMENT_METHOD_SET = new Set<CheckoutPaymentMethod>([
  "card",
  "cashOnDelivery",
  "bankTransfer",
])
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMPTY_CHECKOUT_DRAFT: CheckoutDraft = {
  addressLine1: "",
  addressLine2: "",
  billingAddress: "",
  cardNumber: "",
  cardholderName: "",
  city: "",
  couponCode: "",
  currentStep: "details",
  cvv: "",
  deliveryDate: "",
  deliveryInstructionAccess: "",
  deliveryInstructionDropoff: "",
  deliveryInstructionSpecial: "",
  deliveryMethod: "",
  deliveryWindow: "",
  district: "",
  email: "",
  expiryDate: "",
  fullName: "",
  paymentMethod: "",
  phone: "",
  postalCode: "",
}

function sanitizeDraftValue(value: unknown) {
  return typeof value === "string" ? value : ""
}

function composeBillingAddress(draft: CheckoutDraft) {
  return [draft.addressLine1, draft.addressLine2].filter(Boolean).join(", ")
}

function isCheckoutFlowStep(value: unknown): value is CheckoutFlowStep {
  return value === "details" || value === "delivery" || value === "payment"
}

function isCheckoutDeliveryMethod(value: string): value is CheckoutDeliveryMethod {
  return value === "" || CHECKOUT_DELIVERY_METHOD_SET.has(value as CheckoutDeliveryMethod)
}

function isCheckoutPaymentMethod(value: string): value is CheckoutPaymentMethod {
  return value === "" || CHECKOUT_PAYMENT_METHOD_SET.has(value as CheckoutPaymentMethod)
}

function validateDetails(draft: CheckoutDraft) {
  const errors: CheckoutDraftErrors = {}
  const trimmedEmail = draft.email.trim()

  if (!trimmedEmail) {
    errors.email = checkoutValidationMessages.emailRequired
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = checkoutValidationMessages.emailInvalid
  }

  if (!draft.phone.trim()) {
    errors.phone = checkoutValidationMessages.phone
  }

  if (!draft.fullName.trim()) {
    errors.fullName = checkoutValidationMessages.fullName
  }

  if (!draft.addressLine1.trim()) {
    errors.addressLine1 = checkoutValidationMessages.addressLine1
  }

  if (!draft.city.trim()) {
    errors.city = checkoutValidationMessages.city
  }

  if (!draft.district.trim()) {
    errors.district = checkoutValidationMessages.district
  }

  if (!draft.postalCode.trim()) {
    errors.postalCode = checkoutValidationMessages.postalCode
  }

  return errors
}

function validateDelivery(draft: CheckoutDraft) {
  const errors: CheckoutDraftErrors = {}

  if (!draft.deliveryMethod) {
    errors.deliveryMethod = checkoutValidationMessages.deliveryMethod
  }

  if (!draft.deliveryDate.trim()) {
    errors.deliveryDate = checkoutValidationMessages.deliveryDate
  }

  if (!draft.deliveryWindow.trim()) {
    errors.deliveryWindow = checkoutValidationMessages.deliveryWindow
  }

  return errors
}

function validatePayment(draft: CheckoutDraft) {
  const errors: CheckoutDraftErrors = {}

  if (!draft.paymentMethod) {
    errors.paymentMethod = checkoutValidationMessages.paymentMethod
  }

  if (draft.paymentMethod !== "card") {
    return errors
  }

  if (!draft.cardholderName.trim()) {
    errors.cardholderName = checkoutValidationMessages.cardholderName
  }

  if (!draft.cardNumber.trim()) {
    errors.cardNumber = checkoutValidationMessages.cardNumber
  }

  if (!draft.billingAddress.trim()) {
    errors.billingAddress = checkoutValidationMessages.billingAddress
  }

  if (!draft.expiryDate.trim()) {
    errors.expiryDate = checkoutValidationMessages.expiryDate
  }

  if (!draft.cvv.trim()) {
    errors.cvv = checkoutValidationMessages.cvv
  }

  return errors
}

function sanitizeStoredDraft(candidate: unknown): CheckoutDraft {
  if (!candidate || typeof candidate !== "object") {
    return EMPTY_CHECKOUT_DRAFT
  }

  const storedDraft = candidate as Partial<Record<keyof CheckoutDraft, unknown>>

  const nextDraft: CheckoutDraft = {
    addressLine1: sanitizeDraftValue(storedDraft.addressLine1),
    addressLine2: sanitizeDraftValue(storedDraft.addressLine2),
    billingAddress: sanitizeDraftValue(storedDraft.billingAddress),
    cardNumber: sanitizeDraftValue(storedDraft.cardNumber),
    cardholderName: sanitizeDraftValue(storedDraft.cardholderName),
    city: sanitizeDraftValue(storedDraft.city),
    couponCode: sanitizeDraftValue(storedDraft.couponCode),
    currentStep: isCheckoutFlowStep(storedDraft.currentStep)
      ? storedDraft.currentStep
      : "details",
    cvv: sanitizeDraftValue(storedDraft.cvv),
    deliveryDate: sanitizeDraftValue(storedDraft.deliveryDate),
    deliveryInstructionAccess: sanitizeDraftValue(
      storedDraft.deliveryInstructionAccess
    ),
    deliveryInstructionDropoff: sanitizeDraftValue(
      storedDraft.deliveryInstructionDropoff
    ),
    deliveryInstructionSpecial: sanitizeDraftValue(
      storedDraft.deliveryInstructionSpecial
    ),
    deliveryMethod: sanitizeDraftValue(
      storedDraft.deliveryMethod
    ) as CheckoutDeliveryMethod,
    deliveryWindow: sanitizeDraftValue(storedDraft.deliveryWindow),
    district: sanitizeDraftValue(storedDraft.district),
    email: sanitizeDraftValue(storedDraft.email),
    expiryDate: sanitizeDraftValue(storedDraft.expiryDate),
    fullName: sanitizeDraftValue(storedDraft.fullName),
    paymentMethod: sanitizeDraftValue(
      storedDraft.paymentMethod
    ) as CheckoutPaymentMethod,
    phone: sanitizeDraftValue(storedDraft.phone),
    postalCode: sanitizeDraftValue(storedDraft.postalCode),
  }

  if (!CHECKOUT_CITY_SET.has(nextDraft.city)) {
    nextDraft.city = ""
  }

  if (!CHECKOUT_DISTRICT_SET.has(nextDraft.district)) {
    nextDraft.district = ""
  }

  if (!isCheckoutDeliveryMethod(nextDraft.deliveryMethod)) {
    nextDraft.deliveryMethod = ""
  }

  if (!isCheckoutPaymentMethod(nextDraft.paymentMethod)) {
    nextDraft.paymentMethod = ""
  }

  if (Object.keys(validateDetails(nextDraft)).length > 0) {
    nextDraft.currentStep = "details"
    return nextDraft
  }

  if (
    (nextDraft.currentStep === "delivery" || nextDraft.currentStep === "payment") &&
    Object.keys(validateDelivery(nextDraft)).length > 0
  ) {
    nextDraft.currentStep = "delivery"
    return nextDraft
  }

  if (nextDraft.currentStep === "payment" && !nextDraft.paymentMethod) {
    nextDraft.paymentMethod = "card"
  }

  return nextDraft
}

function readStoredCheckoutDraft() {
  if (typeof window === "undefined") {
    return EMPTY_CHECKOUT_DRAFT
  }

  try {
    const rawDraft = window.localStorage.getItem(CHECKOUT_DRAFT_STORAGE_KEY)

    if (!rawDraft) {
      return EMPTY_CHECKOUT_DRAFT
    }

    return sanitizeStoredDraft(JSON.parse(rawDraft))
  } catch {
    return EMPTY_CHECKOUT_DRAFT
  }
}

function useCheckoutDraft() {
  const [draft, setDraft] = useState<CheckoutDraft>(() => readStoredCheckoutDraft())
  const [errors, setErrors] = useState<CheckoutDraftErrors>({})

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    window.localStorage.setItem(
      CHECKOUT_DRAFT_STORAGE_KEY,
      JSON.stringify(draft)
    )
  }, [draft])

  const updateField: CheckoutDraftChangeHandler = (field, value) => {
    setDraft((current) => {
      if (current[field] === value) {
        return current
      }

      return {
        ...current,
        [field]: value,
      }
    })

    setErrors((current) => {
      if (
        !current[field] &&
        !(field === "paymentMethod" && CHECKOUT_CARD_FIELDS.some((name) => current[name]))
      ) {
        return current
      }

      const nextErrors = { ...current }
      delete nextErrors[field]

      if (field === "paymentMethod") {
        for (const cardField of CHECKOUT_CARD_FIELDS) {
          delete nextErrors[cardField]
        }
      }

      return nextErrors
    })
  }

  function submitDetails(): CheckoutDraftSubmitResult {
    const nextErrors = validateDetails(draft)
    const invalidFields = Object.keys(nextErrors) as CheckoutDraftField[]

    if (invalidFields.length > 0) {
      setErrors(nextErrors)

      return {
        errors: nextErrors,
        firstInvalidField: invalidFields[0],
        ok: false,
      }
    }

    setErrors({})
    setDraft((current) => ({
      ...current,
      currentStep: "delivery",
    }))

    return { ok: true }
  }

  function submitDelivery(): CheckoutDraftSubmitResult {
    const nextErrors = validateDelivery(draft)
    const invalidFields = Object.keys(nextErrors) as CheckoutDraftField[]

    if (invalidFields.length > 0) {
      setErrors(nextErrors)

      return {
        errors: nextErrors,
        firstInvalidField: invalidFields[0],
        ok: false,
      }
    }

    setErrors({})
    setDraft((current) => ({
      ...current,
      billingAddress: current.billingAddress || composeBillingAddress(current),
      cardholderName: current.cardholderName || current.fullName,
      currentStep: "payment",
      paymentMethod: current.paymentMethod || "card",
    }))

    return { ok: true }
  }

  function submitPayment(): CheckoutDraftSubmitResult {
    const nextErrors = validatePayment(draft)
    const invalidFields = Object.keys(nextErrors) as CheckoutDraftField[]

    if (invalidFields.length > 0) {
      setErrors(nextErrors)

      return {
        errors: nextErrors,
        firstInvalidField: invalidFields[0],
        ok: false,
      }
    }

    setErrors({})
    return { ok: true }
  }

  function goToStep(step: CheckoutFlowStep) {
    setErrors({})
    setDraft((current) => {
      if (current.currentStep === step) {
        return current
      }

      return {
        ...current,
        currentStep: step,
      }
    })
  }

  function resetDraft() {
    const nextDraft = { ...EMPTY_CHECKOUT_DRAFT }

    setErrors({})
    setDraft(nextDraft)

    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        CHECKOUT_DRAFT_STORAGE_KEY,
        JSON.stringify(nextDraft)
      )
    }
  }

  return {
    draft,
    errors,
    goToStep,
    resetDraft,
    submitDelivery,
    submitDetails,
    submitPayment,
    updateField,
  }
}

export { useCheckoutDraft }
export type {
  CheckoutDraft,
  CheckoutDraftChangeHandler,
  CheckoutDraftErrors,
  CheckoutDraftField,
}
