import { Link } from "@tanstack/react-router"

import {
  BrandNavigationMenu,
  BrandNavigationMenuItem,
  BrandNavigationMenuLink,
  BrandNavigationMenuList,
} from "@/components/brand/brand-navigation-menu"

import { signInBrand, signInNav } from "./content"

function SignInNav() {
  const BrandIcon = signInBrand.icon

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a className="flex items-center gap-2 text-sage-dark" href="/">
          <BrandIcon aria-hidden className="size-5" />
          <span className="font-serif text-lg italic leading-none">
            {signInBrand.name}
          </span>
        </a>

        <BrandNavigationMenu className="w-auto justify-end">
          <BrandNavigationMenuList className="gap-3">
            <BrandNavigationMenuItem>
              <BrandNavigationMenuLink
                className="rounded-none p-0 text-text-secondary hover:bg-transparent hover:text-text-secondary focus:bg-transparent focus:text-text-secondary"
                render={<a href={signInNav.helpHref} />}
              >
                {signInNav.helpLabel}
              </BrandNavigationMenuLink>
            </BrandNavigationMenuItem>
            <BrandNavigationMenuItem>
              <BrandNavigationMenuLink
                className="rounded-none p-0 text-primary hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary"
                render={<Link to={signInNav.shopTo} />}
              >
                {signInNav.shopLabel}
              </BrandNavigationMenuLink>
            </BrandNavigationMenuItem>
          </BrandNavigationMenuList>
        </BrandNavigationMenu>
      </div>
    </header>
  )
}

export { SignInNav }
