import type { ComponentProps } from "react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type BrandInputProps = ComponentProps<typeof Input>

function BrandInput({ className, ...props }: BrandInputProps) {
  return (
    <Input
      className={cn(
        "h-11 rounded-[10px] border-border bg-input px-4 text-[13px] text-foreground shadow-none placeholder:text-text-tertiary focus-visible:border-primary focus-visible:ring-primary/15",
        className
      )}
      {...props}
    />
  )
}

export { BrandInput }

