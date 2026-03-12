import type { ComponentProps } from "react"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type BrandCardProps = ComponentProps<typeof Card>
type BrandCardActionProps = ComponentProps<typeof CardAction>
type BrandCardContentProps = ComponentProps<typeof CardContent>
type BrandCardDescriptionProps = ComponentProps<typeof CardDescription>
type BrandCardFooterProps = ComponentProps<typeof CardFooter>
type BrandCardHeaderProps = ComponentProps<typeof CardHeader>
type BrandCardTitleProps = ComponentProps<typeof CardTitle>

function BrandCard({ className, ...props }: BrandCardProps) {
  return (
    <Card
      className={cn(
        "rounded-[16px] border border-border bg-card text-foreground shadow-soft ring-0",
        className
      )}
      {...props}
    />
  )
}

function BrandCardHeader({ className, ...props }: BrandCardHeaderProps) {
  return <CardHeader className={cn("gap-3 px-6", className)} {...props} />
}

function BrandCardTitle({ className, ...props }: BrandCardTitleProps) {
  return (
    <CardTitle
      className={cn(
        "font-serif text-[1.4rem] leading-tight text-foreground",
        className
      )}
      {...props}
    />
  )
}

function BrandCardDescription({
  className,
  ...props
}: BrandCardDescriptionProps) {
  return (
    <CardDescription
      className={cn("text-sm leading-6 text-text-secondary", className)}
      {...props}
    />
  )
}

function BrandCardAction({ className, ...props }: BrandCardActionProps) {
  return <CardAction className={cn("self-start", className)} {...props} />
}

function BrandCardContent({ className, ...props }: BrandCardContentProps) {
  return <CardContent className={cn("px-6", className)} {...props} />
}

function BrandCardFooter({ className, ...props }: BrandCardFooterProps) {
  return (
    <CardFooter
      className={cn("items-center gap-3 px-6", className)}
      {...props}
    />
  )
}

export {
  BrandCard,
  BrandCardAction,
  BrandCardContent,
  BrandCardDescription,
  BrandCardFooter,
  BrandCardHeader,
  BrandCardTitle,
}

