import { toast } from "sonner"

import { ShopNav } from "@/components/shop/shop-nav"

import { ContactFaqSection } from "./contact-faq-section"
import { ContactFooterSection } from "./contact-footer-section"
import { ContactFormSection } from "./contact-form-section"
import { ContactInfoCard } from "./contact-info-card"
import { ContactMapSection } from "./contact-map-section"
import { contactFormSection, contactInfoItems, contactPageHeader } from "./content"
import { useContactForm } from "./use-contact-form"

function ContactPage() {
  const { draft, errors, handleFieldBlur, handleFieldChange, submissionState, submitForm } =
    useContactForm()

  return (
    <main className="min-h-screen bg-background">
      <ShopNav
        activeHref={null}
        onPlaceholderAction={(message) => {
          toast.info(message)
        }}
      />

      <section className="pt-12 sm:pt-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl leading-tight text-foreground sm:text-5xl">
            {contactPageHeader.title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-text-secondary">
            {contactPageHeader.description}
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start lg:px-8">
          <ContactFormSection
            draft={draft}
            errors={errors}
            submissionState={submissionState}
            submitForm={submitForm}
            onFieldBlur={handleFieldBlur}
            onFieldChange={handleFieldChange}
            onSubmitSuccess={() => {
              toast.success(contactFormSection.successToastTitle, {
                description: contactFormSection.successToastDescription,
              })
            }}
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {contactInfoItems.map((item) => (
              <ContactInfoCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <ContactMapSection />
      <ContactFaqSection />
      <ContactFooterSection />
    </main>
  )
}

export { ContactPage }
