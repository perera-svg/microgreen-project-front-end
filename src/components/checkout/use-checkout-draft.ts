import { useEffect, useState } from "react"

import {
  CHECKOUT_DRAFT_STORAGE_KEY,
  checkoutCities,
  checkoutDistricts,
  checkoutValidationMessages,
} from "./content"

type CheckoutDraft = {
  addressLine1: string
  addressLine2: string
  city: string
  district: string
  email: string
  fullName: string
  phone: string
  postalCode: string
}

type CheckoutDraftField = keyof CheckoutDraft
type CheckoutDraftErrors = Partial<Record<CheckoutDraftField, string>>

type CheckoutDraftSubmitResult =
  | { ok: true }
  | {
      errors: CheckoutDraftErrors
      firstInvalidField: CheckoutDraftField
      ok: false
    }

const CHECKOUT_CITY_SET = new Set<string>(checkoutCities)
const CHECKOUT_DISTRICT_SET = new Set<string>(checkoutDistricts)
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMPTY_CHECKOUT_DRAFT: CheckoutDraft = {
  addressLine1: "",
  addressLine2: "",
  city: "",
  district: "",
  email: "",
  fullName: "",
  phone: "",
  postalCode: "",
}

function sanitizeDraftValue(value: unknown) {
  return typeof value === "string" ? value : ""
}

function sanitizeStoredDraft(candidate: unknown): CheckoutDraft {
  if (!candidate || typeof candidate !== "object") {
    return EMPTY_CHECKOUT_DRAFT
  }

  const storedDraft = candidate as Partial<Record<CheckoutDraftField, unknown>>

  const nextDraft = {
    addressLine1: sanitizeDraftValue(storedDraft.addressLine1),
    addressLine2: sanitizeDraftValue(storedDraft.addressLine2),
    city: sanitizeDraftValue(storedDraft.city),
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

function validateDraft(draft: CheckoutDraft) {
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

  function updateField<Field extends CheckoutDraftField>(
    field: Field,
    value: CheckoutDraft[Field]
  ) {
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

  function submitDraft(): CheckoutDraftSubmitResult {
    const nextErrors = validateDraft(draft)
    const invalidFields = Object.keys(nextErrors) as CheckoutDraftField[]

    setErrors(nextErrors)

    if (invalidFields.length > 0) {
      return {
        errors: nextErrors,
        firstInvalidField: invalidFields[0],
        ok: false,
      }
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        CHECKOUT_DRAFT_STORAGE_KEY,
        JSON.stringify(draft)
      )
    }

    return { ok: true }
  }

  return {
    draft,
    errors,
    submitDraft,
    updateField,
  }
}

export { useCheckoutDraft }
export type { CheckoutDraft, CheckoutDraftErrors, CheckoutDraftField }
