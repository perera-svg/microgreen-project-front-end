import { useEffect, useState } from "react"

import {
  CHECKOUT_DRAFT_STORAGE_KEY,
  checkoutCities,
  checkoutDistricts,
  checkoutValidationMessages,
  type CheckoutDeliveryMethod,
  type CheckoutFlowStep,
} from "./content"

type CheckoutDraft = {
  addressLine1: string
  addressLine2: string
  city: string
  currentStep: CheckoutFlowStep
  deliveryDate: string
  deliveryInstructionAccess: string
  deliveryInstructionDropoff: string
  deliveryInstructionSpecial: string
  deliveryMethod: CheckoutDeliveryMethod
  deliveryWindow: string
  district: string
  email: string
  fullName: string
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

const CHECKOUT_CITY_SET = new Set<string>(checkoutCities)
const CHECKOUT_DISTRICT_SET = new Set<string>(checkoutDistricts)
const CHECKOUT_DELIVERY_METHOD_SET = new Set<CheckoutDeliveryMethod>([
  "standard",
  "express",
  "pickup",
])
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMPTY_CHECKOUT_DRAFT: CheckoutDraft = {
  addressLine1: "",
  addressLine2: "",
  city: "",
  currentStep: "details",
  deliveryDate: "",
  deliveryInstructionAccess: "",
  deliveryInstructionDropoff: "",
  deliveryInstructionSpecial: "",
  deliveryMethod: "",
  deliveryWindow: "",
  district: "",
  email: "",
  fullName: "",
  phone: "",
  postalCode: "",
}

function sanitizeDraftValue(value: unknown) {
  return typeof value === "string" ? value : ""
}

function isCheckoutFlowStep(value: unknown): value is CheckoutFlowStep {
  return value === "details" || value === "delivery"
}

function isCheckoutDeliveryMethod(value: string): value is CheckoutDeliveryMethod {
  return value === "" || CHECKOUT_DELIVERY_METHOD_SET.has(value as CheckoutDeliveryMethod)
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

function sanitizeStoredDraft(candidate: unknown): CheckoutDraft {
  if (!candidate || typeof candidate !== "object") {
    return EMPTY_CHECKOUT_DRAFT
  }

  const storedDraft = candidate as Partial<Record<keyof CheckoutDraft, unknown>>

  const nextDraft: CheckoutDraft = {
    addressLine1: sanitizeDraftValue(storedDraft.addressLine1),
    addressLine2: sanitizeDraftValue(storedDraft.addressLine2),
    city: sanitizeDraftValue(storedDraft.city),
    currentStep: isCheckoutFlowStep(storedDraft.currentStep)
      ? storedDraft.currentStep
      : "details",
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
    fullName: sanitizeDraftValue(storedDraft.fullName),
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

  if (
    nextDraft.currentStep === "delivery" &&
    Object.keys(validateDetails(nextDraft)).length > 0
  ) {
    nextDraft.currentStep = "details"
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
      if (!current[field]) {
        return current
      }

      const nextErrors = { ...current }
      delete nextErrors[field]
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

  return {
    draft,
    errors,
    goToStep,
    submitDelivery,
    submitDetails,
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
