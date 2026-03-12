import { LandingExportSection } from "./landing-export-section"
import { LandingFooterSection } from "./landing-footer-section"
import { LandingHeroSection } from "./landing-hero-section"
import { LandingJournalSection } from "./landing-journal-section"
import { LandingNavSection } from "./landing-nav-section"
import { LandingProcessSection } from "./landing-process-section"
import { LandingProductShowcaseSection } from "./landing-product-showcase-section"
import { LandingStatsSection } from "./landing-stats-section"
import { LandingSubscriptionSection } from "./landing-subscription-section"
import { LandingTestimonialsSection } from "./landing-testimonials-section"
import { LandingWhySection } from "./landing-why-section"

function LandingPage() {
  return (
    <main className="overflow-x-clip bg-background">
      <LandingNavSection />
      <LandingHeroSection />
      <LandingStatsSection />
      <LandingProductShowcaseSection />
      <LandingWhySection />
      <LandingProcessSection />
      <LandingExportSection />
      <LandingTestimonialsSection />
      <LandingSubscriptionSection />
      <LandingJournalSection />
      <LandingFooterSection />
    </main>
  )
}

export { LandingPage }
