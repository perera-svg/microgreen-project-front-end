import { BrandButton } from "@/components/brand/brand-button"
import {
  BrandNavigationMenu,
  BrandNavigationMenuItem,
  BrandNavigationMenuLink,
  BrandNavigationMenuList,
} from "@/components/brand/brand-navigation-menu"

import {
  landingBrand,
  landingNavCta,
  landingNavLinks,
  landingNavUtilityIcon,
  landingNavUtilityLabel,
} from "./content"

function LandingNavSection() {
  const BrandIcon = landingBrand.icon
  const UtilityIcon = landingNavUtilityIcon

  return (
    <header className="pt-4 sm:pt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-[22px] border border-border bg-card/95 px-4 py-4 shadow-soft backdrop-blur-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <a className="flex items-center gap-3 text-foreground" href="#">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <BrandIcon aria-hidden className="size-5" />
            </span>
            <span className="font-serif text-xl leading-none text-foreground">
              {landingBrand.name}
            </span>
          </a>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <BrandNavigationMenu className="w-full justify-start lg:w-auto">
              <BrandNavigationMenuList className="flex-wrap justify-start">
                {landingNavLinks.map((link) => (
                  <BrandNavigationMenuItem key={link.label}>
                    <BrandNavigationMenuLink render={<a href={link.href} />}>
                      {link.label}
                    </BrandNavigationMenuLink>
                  </BrandNavigationMenuItem>
                ))}
              </BrandNavigationMenuList>
            </BrandNavigationMenu>

            <div className="flex items-center gap-3">
              <BrandButton
                aria-label={landingNavUtilityLabel}
                size="icon-sm"
                type="button"
                variant="outline"
              >
                <UtilityIcon aria-hidden className="size-4" />
              </BrandButton>
              <BrandButton
                nativeButton={false}
                render={<a href={landingNavCta.href} />}
                variant="destructive"
              >
                {landingNavCta.label}
              </BrandButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export { LandingNavSection }
