import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const brandButtonVariants = cva(
  "rounded-[10px] border shadow-none font-semibold tracking-[0.01em] transition-colors active:translate-y-0",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-sage-dark hover:bg-secondary/80",
        outline:
          "border-border bg-card text-foreground hover:bg-background hover:text-foreground",
        ghost:
          "border-transparent bg-transparent text-text-secondary hover:bg-secondary/70 hover:text-sage-dark",
        destructive:
          "border-transparent bg-destructive text-primary-foreground hover:bg-destructive/90",
        link: "border-transparent px-0 text-sage-dark underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 gap-2 px-[22px] text-[13px]",
        xs: "h-7 gap-1 px-2.5 text-[11px]",
        sm: "h-9 gap-1.5 px-4 text-[12px]",
        lg: "h-12 gap-2 px-6 text-[13px]",
        icon: "size-11 p-0",
        "icon-xs": "size-7 p-0",
        "icon-sm": "size-9 p-0",
        "icon-lg": "size-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type BrandButtonProps = Omit<
  ComponentProps<typeof Button>,
  "className" | "variant" | "size"
> &
  VariantProps<typeof brandButtonVariants> & {
    className?: string
  }

function BrandButton({
  className,
  variant = "default",
  size = "default",
  ...props
}: BrandButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(brandButtonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { BrandButton, brandButtonVariants }

