import {
  BrandAccordion,
  BrandAccordionContent,
  BrandAccordionItem,
  BrandAccordionTrigger,
} from "@/components/brand/brand-accordion"

import { contactFaqHeading, contactFaqItems } from "./content"

function ContactFaqSection() {
  return (
    <section className="pb-14 sm:pb-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl leading-tight text-foreground sm:text-4xl">
          {contactFaqHeading.title}
        </h2>

        <BrandAccordion
          className="w-full max-w-3xl rounded-none border-x-0 border-t-0 border-border bg-transparent shadow-none"
          defaultValue={[contactFaqItems[0]?.id]}
        >
          {contactFaqItems.map((item) => (
            <BrandAccordionItem
              key={item.id}
              className="border-border bg-transparent data-open:bg-transparent"
              value={item.id}
            >
              <BrandAccordionTrigger className="px-0 py-5 text-[15px] font-medium text-foreground hover:no-underline">
                <span className="pr-3 text-left">{item.question}</span>
              </BrandAccordionTrigger>
              <BrandAccordionContent className="px-0 pb-0">
                <p className="max-w-3xl pb-5 text-sm leading-7 text-text-secondary">
                  {item.answer}
                </p>
              </BrandAccordionContent>
            </BrandAccordionItem>
          ))}
        </BrandAccordion>
      </div>
    </section>
  )
}

export { ContactFaqSection }
