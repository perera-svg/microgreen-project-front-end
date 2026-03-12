import type { ComponentProps } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

type BrandCheckboxProps = ComponentProps<typeof Checkbox>

function BrandCheckbox({ className, ...props }: BrandCheckboxProps) {
  return (
    <Checkbox
      className={cn(
        "size-5 rounded-[6px] border-border bg-card text-primary data-checked:border-primary data-checked:bg-primary focus-visible:border-primary focus-visible:ring-primary/15",
        className
      )}
      {...props}
    />
  )
}

export { BrandCheckbox }

