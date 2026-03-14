import { toast } from "sonner"

import { AboutCtaSection } from "./about-cta-section"
import { AboutFarmSection } from "./about-farm-section"
import { AboutFooter } from "./about-footer"
import { AboutHeroSection } from "./about-hero-section"
import { AboutNav } from "./about-nav"
import { AboutStatsSection } from "./about-stats-section"
import { AboutSustainabilitySection } from "./about-sustainability-section"
import { AboutTeamSection } from "./about-team-section"
import { AboutValuesSection } from "./about-values-section"
import { aboutPlaceholderMessages, type AboutPlaceholderMessage } from "./content"

function AboutPage() {
  function handlePlaceholderAction(message: AboutPlaceholderMessage) {
    toast(message.title, {
      description: message.description,
    })
  }

  function handleContactAction() {
    handlePlaceholderAction(aboutPlaceholderMessages.contact)
  }

  return (
    <main className="min-h-screen bg-background">
      <AboutNav onPlaceholderAction={handlePlaceholderAction} />
      <AboutHeroSection />
      <AboutValuesSection />
      <AboutFarmSection />
      <AboutStatsSection />
      <AboutTeamSection />
      <AboutSustainabilitySection />
      <AboutCtaSection onContactAction={handleContactAction} />
      <AboutFooter />
    </main>
  )
}

export { AboutPage }
