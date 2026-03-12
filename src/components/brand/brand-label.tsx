import type { ComponentProps } from "react"

import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type BrandLabelProps = ComponentProps<typeof Label>

function BrandLabel({ className, ...props }: BrandLabelProps) {
  return (
    <Label
      className={cn(
        "text-[13px] font-semibold text-sage-dark",
        className
      )}
      {...props}
    />
  )
}

export { BrandLabel }

