import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type BrandButtonProps = ComponentProps<typeof Button>

function BrandButton({
  className,
  variant = "default",
  ...props
}: BrandButtonProps) {
  const variantClassName =
    variant === "default" || variant == null
      ? "border-transparent bg-primary text-primary-foreground hover:bg-primary/90"
      : variant === "secondary"
        ? "border-transparent bg-secondary text-sage-dark hover:bg-secondary/80"
        : variant === "outline"
          ? "border-border bg-card text-foreground hover:bg-background hover:text-foreground"
          : variant === "ghost"
            ? "border-transparent bg-transparent text-text-secondary hover:bg-secondary/60 hover:text-foreground"
            : undefined

  return (
    <Button
      className={cn(
        "h-11 rounded-[10px] px-[22px] text-[13px] font-semibold shadow-none",
        variantClassName,
        className
      )}
      variant={variant}
      {...props}
    />
  )
}

export { BrandButton }
