import { Link } from "@tanstack/react-router"
import HeartIcon from "lucide-react/dist/esm/icons/heart"
import SearchIcon from "lucide-react/dist/esm/icons/search"
import ShoppingCartIcon from "lucide-react/dist/esm/icons/shopping-cart"

import { useCart } from "@/components/cart/cart-provider"
import { BrandButton } from "@/components/brand/brand-button"
import {
  BrandNavigationMenu,
  BrandNavigationMenuItem,
  BrandNavigationMenuLink,
  BrandNavigationMenuList,
} from "@/components/brand/brand-navigation-menu"

import { shopBrand, shopNav, shopNavLinks, shopPlaceholderMessages } from "./content"

type ShopNavProps = {
  onPlaceholderAction: (message: string) => void
}

function ShopNav({ onPlaceholderAction }: ShopNavProps) {
  const BrandIcon = shopBrand.icon
  const { itemCount } = useCart()

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2 text-sage-dark" to="/">
          <BrandIcon aria-hidden className="size-5" />
          <span className="font-serif text-lg italic leading-none">
            {shopBrand.name}
          </span>
        </Link>

        <BrandNavigationMenu className="order-3 w-full justify-start md:order-2 md:w-auto md:justify-center">
          <BrandNavigationMenuList className="flex-wrap justify-start gap-3 md:gap-5">
            {shopNavLinks.map((link) => (
              <BrandNavigationMenuItem key={link.label}>
                <BrandNavigationMenuLink
                  className={
                    link.href === "/shop"
                      ? "bg-secondary text-sage-dark"
                      : "text-text-secondary"
                  }
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

        <div className="order-2 flex items-center gap-2 md:order-3">
          <BrandButton
            aria-label="Search products"
            size="icon-sm"
            type="button"
            variant="ghost"
            onClick={() => onPlaceholderAction(shopPlaceholderMessages.search)}
          >
            <SearchIcon aria-hidden />
          </BrandButton>
          <BrandButton
            aria-label="Saved items"
            size="icon-sm"
            type="button"
            variant="ghost"
            onClick={() => onPlaceholderAction(shopPlaceholderMessages.wishlist)}
          >
            <HeartIcon aria-hidden />
          </BrandButton>
          <BrandButton
            aria-label={itemCount > 0 ? `Cart (${itemCount})` : "Cart"}
            className="relative"
            nativeButton={false}
            render={<Link to="/cart" />}
            size="icon-sm"
            variant="ghost"
          >
            <span className="relative">
              <ShoppingCartIcon aria-hidden />
              {itemCount > 0 ? (
                <span className="absolute -top-1.5 -right-1.5 grid min-h-4 min-w-4 place-items-center rounded-full bg-destructive px-1 text-[9px] font-semibold text-white">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              ) : null}
            </span>
          </BrandButton>
          <BrandButton
            className="rounded-full px-4"
            nativeButton={false}
            render={<Link to={shopNav.orderCtaTo} />}
            size="sm"
            variant="destructive"
          >
            {shopNav.orderCtaLabel}
          </BrandButton>
        </div>
      </div>
    </header>
  )
}

export { ShopNav }
