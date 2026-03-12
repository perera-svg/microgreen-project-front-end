import type { ComponentProps } from "react"
import { cva } from "class-variance-authority"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const BrandNavigationMenu = NavigationMenu
const BrandNavigationMenuItem = NavigationMenuItem
const BrandNavigationMenuPositioner = NavigationMenuPositioner

const brandNavigationMenuTriggerStyle = cva(
  "rounded-[10px] bg-transparent px-4 py-2.5 text-[13px] font-semibold text-text-secondary shadow-none hover:bg-secondary hover:text-sage-dark focus:bg-secondary focus:text-sage-dark data-open:bg-secondary data-open:text-sage-dark data-popup-open:bg-secondary data-popup-open:text-sage-dark"
)

type BrandNavigationMenuListProps = ComponentProps<typeof NavigationMenuList>
type BrandNavigationMenuTriggerProps = ComponentProps<typeof NavigationMenuTrigger>
type BrandNavigationMenuContentProps = ComponentProps<typeof NavigationMenuContent>
type BrandNavigationMenuLinkProps = ComponentProps<typeof NavigationMenuLink>
type BrandNavigationMenuIndicatorProps = ComponentProps<typeof NavigationMenuIndicator>

function BrandNavigationMenuList({
  className,
  ...props
}: BrandNavigationMenuListProps) {
  return <NavigationMenuList className={cn("gap-1", className)} {...props} />
}

function BrandNavigationMenuTrigger({
  className,
  ...props
}: BrandNavigationMenuTriggerProps) {
  return (
    <NavigationMenuTrigger
      className={cn(brandNavigationMenuTriggerStyle(), className)}
      {...props}
    />
  )
}

function BrandNavigationMenuContent({
  className,
  ...props
}: BrandNavigationMenuContentProps) {
  return (
    <NavigationMenuContent
      className={cn(
        "rounded-[16px] border border-border bg-card p-2 shadow-soft ring-0",
        className
      )}
      {...props}
    />
  )
}

function BrandNavigationMenuLink({
  className,
  ...props
}: BrandNavigationMenuLinkProps) {
  return (
    <NavigationMenuLink
      className={cn(
        "rounded-[12px] p-3 text-[13px] leading-5 text-foreground hover:bg-secondary hover:text-sage-dark focus:bg-secondary focus:text-sage-dark data-[active=true]:bg-secondary data-[active=true]:text-sage-dark",
        className
      )}
      {...props}
    />
  )
}

function BrandNavigationMenuIndicator({
  className,
  ...props
}: BrandNavigationMenuIndicatorProps) {
  return (
    <NavigationMenuIndicator
      className={cn("text-border", className)}
      {...props}
    />
  )
}

export {
  BrandNavigationMenu,
  BrandNavigationMenuContent,
  BrandNavigationMenuIndicator,
  BrandNavigationMenuItem,
  BrandNavigationMenuLink,
  BrandNavigationMenuList,
  BrandNavigationMenuPositioner,
  BrandNavigationMenuTrigger,
  brandNavigationMenuTriggerStyle,
}

