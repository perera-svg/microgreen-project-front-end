import { Link } from "@tanstack/react-router"

import { BrandButton } from "@/components/brand/brand-button"
import {
  BrandNavigationMenu,
  BrandNavigationMenuItem,
  BrandNavigationMenuLink,
  BrandNavigationMenuList,
} from "@/components/brand/brand-navigation-menu"

import {
  subscriptionBrand,
  subscriptionCartAction,
  subscriptionNavLinks,
  subscriptionOrderAction,
  subscriptionUtilityActions,
} from "./content"

type SubscriptionNavSectionProps = {
  onPlaceholderAction: (message: string) => void
}

function SubscriptionNavSection({
  onPlaceholderAction,
}: SubscriptionNavSectionProps) {
  const BrandIcon = subscriptionBrand.icon
  const CartIcon = subscriptionCartAction.icon

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
          <a className="flex items-center gap-3 text-foreground" href="/">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <BrandIcon aria-hidden className="size-5" />
            </span>
            <span className="font-serif text-xl leading-none text-foreground">
              {subscriptionBrand.name}
            </span>
          </a>

          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <BrandNavigationMenu className="w-full justify-start md:w-auto">
              <BrandNavigationMenuList className="flex-wrap justify-start">
                {subscriptionNavLinks.map((link) => (
                  <BrandNavigationMenuItem key={link.label}>
                    <BrandNavigationMenuLink
                      render={
                        link.href === "/shop" ? (
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

            <div className="flex flex-wrap items-center gap-2">
              {subscriptionUtilityActions.map((action) => {
                const Icon = action.icon

                return (
                  <BrandButton
                    key={action.id}
                    aria-label={action.label}
                    size="icon-sm"
                    type="button"
                    variant="ghost"
                    onClick={() => onPlaceholderAction(action.message)}
                  >
                    <Icon aria-hidden />
                  </BrandButton>
                )
              })}

              <BrandButton
                aria-label={subscriptionCartAction.label}
                nativeButton={false}
                render={<Link to={subscriptionCartAction.href} />}
                size="icon-sm"
                variant="ghost"
              >
                <CartIcon aria-hidden />
              </BrandButton>

              <BrandButton
                className="rounded-full"
                nativeButton={false}
                render={<Link to={subscriptionOrderAction.href} />}
                variant="destructive"
              >
                {subscriptionOrderAction.label}
              </BrandButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export { SubscriptionNavSection }
