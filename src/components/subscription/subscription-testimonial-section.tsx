import { BrandCard, BrandCardContent } from "@/components/brand/brand-card"

import { subscriptionTestimonial } from "./content"

function SubscriptionTestimonialSection() {
  const QuoteIcon = subscriptionTestimonial.quoteIcon
  const StarIcon = subscriptionTestimonial.starIcon

  return (
    <section className="py-10 sm:py-12" id="testimonial">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <BrandCard className="border-0 bg-secondary/70 py-0">
          <BrandCardContent className="flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-12 sm:py-12">
            <div className="grid size-12 place-items-center rounded-full bg-card text-primary">
              <QuoteIcon aria-hidden className="size-6" />
            </div>

            <blockquote className="max-w-4xl font-serif text-2xl leading-10 text-foreground italic sm:text-[2rem]">
              {subscriptionTestimonial.quote}
            </blockquote>

            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-semibold text-foreground">
                {subscriptionTestimonial.name}
              </p>
              <p className="text-sm text-text-tertiary">
                {subscriptionTestimonial.role}
              </p>
            </div>

            <div className="flex items-center gap-1 text-destructive">
              {Array.from({ length: subscriptionTestimonial.stars }, (_, index) => (
                <StarIcon
                  key={index}
                  aria-hidden
                  className="size-4 fill-current"
                />
              ))}
            </div>
          </BrandCardContent>
        </BrandCard>
      </div>
    </section>
  )
}

export { SubscriptionTestimonialSection }
