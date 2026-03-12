import type { ComponentProps } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const BrandSelect = Select
const BrandSelectGroup = SelectGroup
const BrandSelectScrollDownButton = SelectScrollDownButton
const BrandSelectScrollUpButton = SelectScrollUpButton

type BrandSelectTriggerProps = ComponentProps<typeof SelectTrigger>
type BrandSelectContentProps = ComponentProps<typeof SelectContent>
type BrandSelectValueProps = ComponentProps<typeof SelectValue>
type BrandSelectItemProps = ComponentProps<typeof SelectItem>
type BrandSelectLabelProps = ComponentProps<typeof SelectLabel>
type BrandSelectSeparatorProps = ComponentProps<typeof SelectSeparator>

function BrandSelectTrigger({
  className,
  ...props
}: BrandSelectTriggerProps) {
  return (
    <SelectTrigger
      className={cn(
        "h-11 rounded-[10px] border-border bg-input px-4 text-[13px] text-foreground shadow-none data-placeholder:text-text-tertiary focus-visible:border-primary focus-visible:ring-primary/15",
        className
      )}
      {...props}
    />
  )
}

function BrandSelectContent({
  className,
  ...props
}: BrandSelectContentProps) {
  return (
    <SelectContent
      className={cn(
        "rounded-[16px] border border-border bg-card p-1.5 shadow-soft ring-0",
        className
      )}
      {...props}
    />
  )
}

function BrandSelectValue({ className, ...props }: BrandSelectValueProps) {
  return (
    <SelectValue
      className={cn("text-[13px] text-foreground", className)}
      {...props}
    />
  )
}

function BrandSelectItem({ className, ...props }: BrandSelectItemProps) {
  return (
    <SelectItem
      className={cn(
        "rounded-[10px] py-2.5 pr-8 pl-3 text-[13px] text-foreground focus:bg-secondary focus:text-sage-dark",
        className
      )}
      {...props}
    />
  )
}

function BrandSelectLabel({ className, ...props }: BrandSelectLabelProps) {
  return (
    <SelectLabel
      className={cn(
        "px-3 py-2 text-[11px] font-semibold tracking-[0.16em] text-text-tertiary uppercase",
        className
      )}
      {...props}
    />
  )
}

function BrandSelectSeparator({
  className,
  ...props
}: BrandSelectSeparatorProps) {
  return (
    <SelectSeparator
      className={cn("my-1 bg-border", className)}
      {...props}
    />
  )
}

export {
  BrandSelect,
  BrandSelectContent,
  BrandSelectGroup,
  BrandSelectItem,
  BrandSelectLabel,
  BrandSelectScrollDownButton,
  BrandSelectScrollUpButton,
  BrandSelectSeparator,
  BrandSelectTrigger,
  BrandSelectValue,
}

