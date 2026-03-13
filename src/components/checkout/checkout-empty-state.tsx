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

import { checkoutEmptyState } from "./content"

function CheckoutEmptyState() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <BrandEmpty className="rounded-[24px] border border-border bg-card shadow-soft">
        <BrandEmptyHeader>
          <BrandEmptyMedia variant="icon">
            <ShoppingCartIcon aria-hidden />
          </BrandEmptyMedia>
          <BrandEmptyTitle>{checkoutEmptyState.title}</BrandEmptyTitle>
          <BrandEmptyDescription>
            {checkoutEmptyState.description}
          </BrandEmptyDescription>
        </BrandEmptyHeader>
        <BrandEmptyContent className="max-w-none">
          <BrandButton
            nativeButton={false}
            render={<Link to={checkoutEmptyState.actionTo} />}
          >
            {checkoutEmptyState.actionLabel}
          </BrandButton>
        </BrandEmptyContent>
      </BrandEmpty>
    </section>
  )
}

export { CheckoutEmptyState }
