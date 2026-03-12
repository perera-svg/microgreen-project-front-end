import type { ComponentProps } from "react"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

type BrandRadioGroupItemProps = ComponentProps<typeof RadioGroupItem>

type BrandRadioGroupProps = ComponentProps<typeof RadioGroup>

function BrandRadioGroupRoot({
  className,
  ...props
}: BrandRadioGroupProps) {
  return <RadioGroup className={cn("gap-2.5", className)} {...props} />
}

function BrandRadioGroupItem({
  className,
  ...props
}: BrandRadioGroupItemProps) {
  return (
    <RadioGroupItem
      className={cn(
        "size-5 border-border bg-card text-primary data-checked:border-primary data-checked:bg-primary focus-visible:border-primary focus-visible:ring-primary/15",
        className
      )}
      {...props}
    />
  )
}

export {
  BrandRadioGroupRoot as BrandRadioGroup,
  BrandRadioGroupItem,
}
