import { Link } from "@tanstack/react-router"
import ArrowRightIcon from "lucide-react/dist/esm/icons/arrow-right"

import { BrandBadge } from "@/components/brand/brand-badge"
import { BrandButton } from "@/components/brand/brand-button"
import { BrandCard } from "@/components/brand/brand-card"

import { landingHero, landingHeroTrustPoints } from "./content"

function LandingHeroSection() {
  return (
    <section className="pb-14 pt-8 sm:pb-16 lg:pb-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:items-center lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <p className="font-meta text-[11px] tracking-[0.24em] text-primary uppercase">
              {landingHero.eyebrow}
            </p>
            <h1 className="max-w-[11ch] whitespace-pre-line text-5xl leading-[0.92] text-foreground sm:text-6xl lg:text-[4.5rem]">
              {landingHero.title}
            </h1>
            <p className="max-w-xl text-base leading-7 text-text-secondary sm:text-lg">
              {landingHero.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <BrandButton
              nativeButton={false}
              render={
                landingHero.primaryCta.href === "/shop" ? (
                  <Link to={landingHero.primaryCta.href} />
                ) : (
                  <a href={landingHero.primaryCta.href} />
                )
              }
            >
              {landingHero.primaryCta.label}
              <ArrowRightIcon aria-hidden className="size-4" />
            </BrandButton>
            <BrandButton
              nativeButton={false}
              render={<a href={landingHero.secondaryCta.href} />}
              variant="outline"
            >
              {landingHero.secondaryCta.label}
            </BrandButton>
          </div>

          <div className="flex flex-wrap gap-3">
            {landingHeroTrustPoints.map(({ icon: Icon, label }) => (
              <BrandBadge
                key={label}
                className="h-10 gap-2 rounded-full bg-card/75 px-4 text-[12px] font-medium tracking-normal normal-case text-text-secondary"
                variant="outline"
              >
                <Icon aria-hidden className="size-4 text-primary" />
                {label}
              </BrandBadge>
            ))}
          </div>
        </div>

        <BrandCard className="overflow-hidden rounded-[28px] border-none bg-[#dbe4d7] p-0 shadow-[0_18px_60px_rgb(74_93_67_/_0.18)]">
          <div className="aspect-[0.92]">
            {landingHero.video ? (
              <video
                aria-label={landingHero.imageAlt}
                autoPlay
                className="h-full w-full object-cover"
                loop
                muted
                playsInline
                poster={landingHero.image}
                preload="metadata"
                src={landingHero.video}
              />
            ) : (
              <img
                alt={landingHero.imageAlt}
                className="h-full w-full object-cover"
                decoding="async"
                fetchPriority="high"
                src={landingHero.image}
              />
            )}
          </div>
        </BrandCard>
      </div>
    </section>
  )
}

export { LandingHeroSection }
