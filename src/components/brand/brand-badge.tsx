import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const brandBadgeVariants = cva(
  "inline-flex h-7 items-center justify-center gap-1 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase shadow-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-sage-dark",
        destructive: "border-transparent bg-terracotta-tint text-destructive",
        outline: "border-border bg-card text-sage-dark",
        ghost:
          "border-transparent bg-transparent text-text-secondary hover:bg-secondary/70 hover:text-sage-dark",
        link: "h-auto border-transparent px-0 py-0 text-sage-dark underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type BrandBadgeProps = Omit<
  ComponentProps<typeof Badge>,
  "className" | "variant"
> &
  VariantProps<typeof brandBadgeVariants> & {
    className?: string
  }

function BrandBadge({
  className,
  variant = "default",
  ...props
}: BrandBadgeProps) {
  return (
    <Badge
      variant={variant}
      className={cn(brandBadgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { BrandBadge, brandBadgeVariants }

