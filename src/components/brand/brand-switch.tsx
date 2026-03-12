import type { ComponentProps } from "react"

import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

type BrandSwitchProps = ComponentProps<typeof Switch>

function BrandSwitch({ className, ...props }: BrandSwitchProps) {
  return (
    <Switch
      className={cn(
        "data-[size=default]:h-6 data-[size=default]:w-11 data-[size=sm]:h-5 data-[size=sm]:w-9 data-unchecked:bg-warm-beige/35 data-checked:bg-primary focus-visible:border-primary focus-visible:ring-primary/15",
        className
      )}
      {...props}
    />
  )
}

export { BrandSwitch }

