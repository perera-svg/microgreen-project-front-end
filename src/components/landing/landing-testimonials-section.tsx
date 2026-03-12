import {
  landingTestimonials,
  landingTestimonialsHeading,
} from "./content"
import { SectionHeading } from "./section-heading"
import { TestimonialCard } from "./testimonial-card"

function LandingTestimonialsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading title={landingTestimonialsHeading.title} />
        <div className="grid gap-6 lg:grid-cols-3">
          {landingTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { LandingTestimonialsSection }
