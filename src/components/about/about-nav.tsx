import { Link } from "@tanstack/react-router"

import { useCart } from "@/components/cart/cart-provider"
import { BrandButton } from "@/components/brand/brand-button"
import {
  BrandNavigationMenu,
  BrandNavigationMenuItem,
  BrandNavigationMenuLink,
  BrandNavigationMenuList,
} from "@/components/brand/brand-navigation-menu"
import { isPureAppRouteHref } from "@/lib/utils"

import {
  aboutBrand,
  aboutCartIcon,
  aboutMobileQuickLinks,
  aboutNav,
  aboutNavLinks,
  aboutNavUtilityActions,
  type AboutPlaceholderMessage,
} from "./content"

type AboutNavProps = {
  onPlaceholderAction: (message: AboutPlaceholderMessage) => void
}

function AboutNav({ onPlaceholderAction }: AboutNavProps) {
  const BrandIcon = aboutBrand.icon
  const CartIcon = aboutCartIcon
  const { itemCount } = useCart()

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2 text-sage-dark" to="/about">
          <BrandIcon aria-hidden className="size-5" />
          <span className="font-serif text-lg italic leading-none">
            {aboutBrand.name}
          </span>
        </Link>

        <div className="flex items-center gap-3 md:hidden">
          {aboutMobileQuickLinks.map((link) => (
            <a
              className={
                link.isEmphasized
                  ? "text-xs font-semibold text-primary"
                  : "text-xs font-medium text-text-secondary"
              }
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>

        <BrandNavigationMenu className="hidden w-auto justify-center md:flex">
          <BrandNavigationMenuList className="gap-3">
            {aboutNavLinks.map((link) => (
              <BrandNavigationMenuItem key={link.label}>
                <BrandNavigationMenuLink
                  className={
                    link.isActive ? "bg-secondary text-sage-dark" : "text-text-secondary"
                  }
                  render={
                    isPureAppRouteHref(link.href) ? (
                      <Link to={link.href} />
                    ) : (
                      <a href={link.href} />
                    )
                  }
                >
                  {link.label}
                </BrandNavigationMenuLink>
              </BrandNavigationMenuItem>
            ))}
          </BrandNavigationMenuList>
        </BrandNavigationMenu>

        <div className="hidden items-center gap-2 md:flex">
          {aboutNavUtilityActions.map((action) => {
            const ActionIcon = action.icon

            return (
              <BrandButton
                aria-label={action.label}
                key={action.label}
                size="icon-sm"
                type="button"
                variant="ghost"
                onClick={() => onPlaceholderAction(action.message)}
              >
                <ActionIcon aria-hidden />
              </BrandButton>
            )
          })}

          <BrandButton
            aria-label={
              itemCount > 0 ? `${aboutNav.cartLabel} (${itemCount})` : aboutNav.cartLabel
            }
            className="relative"
            nativeButton={false}
            render={<Link to="/cart" />}
            size="icon-sm"
            variant="ghost"
          >
            <span className="relative">
              <CartIcon aria-hidden />
              {itemCount > 0 ? (
                <span className="absolute -right-1.5 -top-1.5 grid min-h-4 min-w-4 place-items-center rounded-full bg-destructive px-1 text-[9px] font-semibold text-white">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              ) : null}
            </span>
          </BrandButton>

          <BrandButton
            className="rounded-full px-4"
            nativeButton={false}
            render={<Link to={aboutNav.orderCtaTo} />}
            size="sm"
            variant="destructive"
          >
            {aboutNav.orderCtaLabel}
          </BrandButton>
        </div>
      </div>
    </header>
  )
}

export { AboutNav }
