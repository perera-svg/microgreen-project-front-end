import {
  landingJournalFeaturedArticle,
  landingJournalHeading,
  landingJournalTeasers,
} from "./content"
import { JournalFeaturedCard } from "./journal-featured-card"
import { JournalTeaserCard } from "./journal-teaser-card"
import { SectionHeading } from "./section-heading"

function LandingJournalSection() {
  return (
    <section className="py-16 sm:py-20" id="journal">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          description={landingJournalHeading.description}
          eyebrow={landingJournalHeading.eyebrow}
          title={landingJournalHeading.title}
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <JournalFeaturedCard {...landingJournalFeaturedArticle} />
          <div className="grid gap-6">
            {landingJournalTeasers.map((article) => (
              <JournalTeaserCard key={article.title} {...article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { LandingJournalSection }
