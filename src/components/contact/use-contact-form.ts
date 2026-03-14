import * as React from "react"

type ContactFormField = "topic" | "fullName" | "email" | "message"

export type ContactFormDraft = Record<ContactFormField, string>

export type ContactFormErrors = Partial<Record<ContactFormField, string>>

export type ContactFormSubmissionState = "idle" | "success"

const contactFormFields: ContactFormField[] = [
  "topic",
  "fullName",
  "email",
  "message",
]

const defaultContactFormDraft: ContactFormDraft = {
  email: "",
  fullName: "",
  message: "",
  topic: "general-inquiry",
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getContactFormValidationErrors(
  draft: ContactFormDraft
): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!draft.topic.trim()) {
    errors.topic = "Choose an inquiry topic."
  }

  if (!draft.fullName.trim()) {
    errors.fullName = "Enter your full name."
  }

  if (!draft.email.trim()) {
    errors.email = "Enter your email address."
  } else if (!emailPattern.test(draft.email.trim())) {
    errors.email = "Enter a valid email address."
  }

  if (!draft.message.trim()) {
    errors.message = "Tell us how we can help."
  }

  return errors
}

function getVisibleContactFormErrors(
  validationErrors: ContactFormErrors,
  touched: Partial<Record<ContactFormField, boolean>>,
  hasSubmitted: boolean
) {
  return contactFormFields.reduce<ContactFormErrors>((errors, field) => {
    if (hasSubmitted || touched[field]) {
      errors[field] = validationErrors[field]
    }

    return errors
  }, {})
}

function useContactForm() {
  const [draft, setDraft] = React.useState<ContactFormDraft>(
    defaultContactFormDraft
  )
  const [touched, setTouched] = React.useState<
    Partial<Record<ContactFormField, boolean>>
  >({})
  const [hasSubmitted, setHasSubmitted] = React.useState(false)
  const [submissionState, setSubmissionState] =
    React.useState<ContactFormSubmissionState>("idle")

  const validationErrors = getContactFormValidationErrors(draft)
  const errors = getVisibleContactFormErrors(
    validationErrors,
    touched,
    hasSubmitted
  )

  function handleFieldChange(field: ContactFormField, value: string) {
    setDraft((currentDraft) => ({
      ...currentDraft,
      [field]: value,
    }))

    if (submissionState === "success") {
      setSubmissionState("idle")
    }
  }

  function handleFieldBlur(field: ContactFormField) {
    setTouched((currentTouched) => ({
      ...currentTouched,
      [field]: true,
    }))
  }

  function submitForm() {
    setHasSubmitted(true)

    const hasErrors = contactFormFields.some((field) =>
      Boolean(validationErrors[field])
    )

    if (hasErrors) {
      return false
    }

    setDraft(defaultContactFormDraft)
    setTouched({})
    setHasSubmitted(false)
    setSubmissionState("success")

    return true
  }

  return {
    draft,
    errors,
    handleFieldBlur,
    handleFieldChange,
    submissionState,
    submitForm,
  }
}

export { useContactForm }
