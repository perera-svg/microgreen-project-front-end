import { Link } from "@tanstack/react-router"
import ShoppingCartIcon from "lucide-react/dist/esm/icons/shopping-cart"

import { BrandButton } from "@/components/brand/brand-button"
import {
  BrandEmpty,
  BrandEmptyContent,
  BrandEmptyDescription,
  BrandEmptyHeader,
  BrandEmptyMedia,
  BrandEmptyTitle,
} from "@/components/brand/brand-empty"
import { cartEmptyState, cartLinks } from "./content"

function CartEmptyState() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <BrandEmpty className="rounded-[24px] border border-border bg-card shadow-soft">
        <BrandEmptyHeader>
          <BrandEmptyMedia variant="icon">
            <ShoppingCartIcon aria-hidden />
          </BrandEmptyMedia>
          <BrandEmptyTitle>{cartEmptyState.title}</BrandEmptyTitle>
          <BrandEmptyDescription>{cartEmptyState.description}</BrandEmptyDescription>
        </BrandEmptyHeader>
        <BrandEmptyContent className="max-w-none">
          <BrandButton
            nativeButton={false}
            render={<Link to={cartLinks.continueShoppingTo} />}
            variant="destructive"
          >
            {cartEmptyState.actionLabel}
          </BrandButton>
        </BrandEmptyContent>
      </BrandEmpty>
    </section>
  )
}

export { CartEmptyState }
