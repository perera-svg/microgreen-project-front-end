import {
  BrandAccordion,
  BrandAccordionContent,
  BrandAccordionItem,
  BrandAccordionTrigger,
} from "@/components/brand/brand-accordion"

import { subscriptionFaqItems, subscriptionFaqSection } from "./content"

function SubscriptionFaqSection() {
  return (
    <section className="py-10 sm:py-12" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-center text-4xl leading-tight text-foreground sm:text-5xl">
            {subscriptionFaqSection.title}
          </h2>

          <BrandAccordion
            className="w-full rounded-none border-0 bg-transparent shadow-none"
            defaultValue={[subscriptionFaqItems[0]?.id ?? ""]}
            multiple
          >
            {subscriptionFaqItems.map((item) => (
              <BrandAccordionItem
                key={item.id}
                className="bg-transparent data-open:bg-transparent"
                value={item.id}
              >
                <BrandAccordionTrigger className="px-0 py-5 text-base font-medium text-foreground hover:no-underline">
                  <span className="pr-4">{item.question}</span>
                </BrandAccordionTrigger>
                <BrandAccordionContent className="px-0 pb-1">
                  <p className="max-w-3xl text-sm leading-7 text-text-secondary">
                    {item.answer}
                  </p>
                </BrandAccordionContent>
              </BrandAccordionItem>
            ))}
          </BrandAccordion>
        </div>
      </div>
    </section>
  )
}

export { SubscriptionFaqSection }
