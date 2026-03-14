import ArrowRightIcon from "lucide-react/dist/esm/icons/arrow-right"

import { BrandButton } from "@/components/brand/brand-button"
import {
  BrandField,
  BrandFieldError,
  BrandFieldGroup,
  BrandFieldLabel,
} from "@/components/brand/brand-field"
import { BrandInput } from "@/components/brand/brand-input"
import {
  BrandSelect,
  BrandSelectContent,
  BrandSelectGroup,
  BrandSelectItem,
  BrandSelectTrigger,
  BrandSelectValue,
} from "@/components/brand/brand-select"
import { BrandTextarea } from "@/components/brand/brand-textarea"

import {
  contactFieldIds,
  contactFormSection,
  contactTopicOptions,
} from "./content"
import type {
  ContactFormDraft,
  ContactFormErrors,
  ContactFormSubmissionState,
} from "./use-contact-form"

type ContactFormSectionProps = {
  draft: ContactFormDraft
  errors: ContactFormErrors
  onFieldBlur: (field: keyof ContactFormDraft) => void
  onFieldChange: (field: keyof ContactFormDraft, value: string) => void
  onSubmitSuccess: () => void
  submissionState: ContactFormSubmissionState
  submitForm: () => boolean
}

function ContactFormSection({
  draft,
  errors,
  onFieldBlur,
  onFieldChange,
  onSubmitSuccess,
  submissionState,
  submitForm,
}: ContactFormSectionProps) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-[1.75rem] leading-tight text-foreground">
        {contactFormSection.title}
      </h2>

      <form
        className="flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault()

          if (submitForm()) {
            onSubmitSuccess()
          }
        }}
      >
        <BrandFieldGroup className="gap-4">
          <BrandField
            data-invalid={errors.topic ? "true" : undefined}
            className="gap-2"
          >
            <BrandFieldLabel htmlFor={contactFieldIds.topic}>
              {contactFormSection.topicLabel}
            </BrandFieldLabel>
            <BrandSelect
              value={draft.topic}
              onValueChange={(value) => onFieldChange("topic", value ?? "")}
            >
              <BrandSelectTrigger
                aria-invalid={Boolean(errors.topic)}
                className="w-full"
                id={contactFieldIds.topic}
                onBlur={() => onFieldBlur("topic")}
              >
                <BrandSelectValue placeholder={contactTopicOptions[0]?.label} />
              </BrandSelectTrigger>
              <BrandSelectContent>
                <BrandSelectGroup>
                  {contactTopicOptions.map((option) => (
                    <BrandSelectItem key={option.value} value={option.value}>
                      {option.label}
                    </BrandSelectItem>
                  ))}
                </BrandSelectGroup>
              </BrandSelectContent>
            </BrandSelect>
            <BrandFieldError>{errors.topic}</BrandFieldError>
          </BrandField>

          <BrandField
            data-invalid={errors.fullName ? "true" : undefined}
            className="gap-2"
          >
            <BrandFieldLabel htmlFor={contactFieldIds.fullName}>
              {contactFormSection.fullNameLabel}
            </BrandFieldLabel>
            <BrandInput
              aria-invalid={Boolean(errors.fullName)}
              id={contactFieldIds.fullName}
              placeholder={contactFormSection.fullNamePlaceholder}
              value={draft.fullName}
              onBlur={() => onFieldBlur("fullName")}
              onChange={(event) =>
                onFieldChange("fullName", event.target.value)
              }
            />
            <BrandFieldError>{errors.fullName}</BrandFieldError>
          </BrandField>

          <BrandField
            data-invalid={errors.email ? "true" : undefined}
            className="gap-2"
          >
            <BrandFieldLabel htmlFor={contactFieldIds.email}>
              {contactFormSection.emailLabel}
            </BrandFieldLabel>
            <BrandInput
              aria-invalid={Boolean(errors.email)}
              id={contactFieldIds.email}
              placeholder={contactFormSection.emailPlaceholder}
              type="email"
              value={draft.email}
              onBlur={() => onFieldBlur("email")}
              onChange={(event) => onFieldChange("email", event.target.value)}
            />
            <BrandFieldError>{errors.email}</BrandFieldError>
          </BrandField>

          <BrandField
            data-invalid={errors.message ? "true" : undefined}
            className="gap-2"
          >
            <BrandFieldLabel htmlFor={contactFieldIds.message}>
              {contactFormSection.messageLabel}
            </BrandFieldLabel>
            <BrandTextarea
              aria-invalid={Boolean(errors.message)}
              id={contactFieldIds.message}
              placeholder={contactFormSection.messagePlaceholder}
              value={draft.message}
              onBlur={() => onFieldBlur("message")}
              onChange={(event) => onFieldChange("message", event.target.value)}
            />
            <BrandFieldError>{errors.message}</BrandFieldError>
          </BrandField>
        </BrandFieldGroup>

        <div className="flex flex-col gap-3 pt-2">
          <BrandButton className="w-full sm:w-auto sm:min-w-[12.5rem]" type="submit">
            {contactFormSection.submitLabel}
            <ArrowRightIcon aria-hidden data-icon="inline-end" />
          </BrandButton>

          {submissionState === "success" ? (
            <p className="text-sm leading-6 text-primary">
              {contactFormSection.successMessage}
            </p>
          ) : null}
        </div>
      </form>
    </section>
  )
}

export { ContactFormSection }
