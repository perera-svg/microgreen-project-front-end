import { SectionHeading } from "@/components/landing/section-heading"

import {
  subscriptionProcessSection,
  subscriptionProcessSteps,
} from "./content"
import { SubscriptionProcessStep } from "./subscription-process-step"

function SubscriptionProcessSection() {
  return (
    <section className="py-10 sm:py-12" id="how-it-works">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <SectionHeading
            description={subscriptionProcessSection.description}
            title={subscriptionProcessSection.title}
          />

          <div className="grid w-full gap-4 md:grid-cols-2 xl:grid-cols-4">
            {subscriptionProcessSteps.map((step) => (
              <SubscriptionProcessStep
                key={step.id}
                description={step.description}
                step={step.step}
                title={step.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { SubscriptionProcessSection }
