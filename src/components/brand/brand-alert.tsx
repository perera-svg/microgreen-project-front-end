import type { ComponentProps } from "react"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

type BrandAlertProps = ComponentProps<typeof Alert>

function BrandAlert({
  className,
  variant = "default",
  ...props
}: BrandAlertProps) {
  const variantClassName =
    variant === "destructive"
      ? "border-destructive/20 bg-terracotta-tint text-destructive"
      : "border-border bg-card text-foreground"

  return (
    <Alert
      variant={variant}
      className={cn(
        "rounded-[16px] border shadow-none",
        variantClassName,
        className
      )}
      {...props}
    />
  )
}

function BrandAlertTitle({
  className,
  ...props
}: ComponentProps<typeof AlertTitle>) {
  return (
    <AlertTitle
      className={cn("font-serif text-lg leading-tight", className)}
      {...props}
    />
  )
}

function BrandAlertDescription({
  className,
  ...props
}: ComponentProps<typeof AlertDescription>) {
  return (
    <AlertDescription
      className={cn("text-sm leading-6 text-text-secondary", className)}
      {...props}
    />
  )
}

function BrandAlertAction({
  className,
  ...props
}: ComponentProps<typeof AlertAction>) {
  return <AlertAction className={cn("top-3.5 right-3.5", className)} {...props} />
}

export {
  BrandAlert,
  BrandAlertAction,
  BrandAlertDescription,
  BrandAlertTitle,
}

