import type { ComponentProps } from "react"

import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type BrandTextareaProps = ComponentProps<typeof Textarea>

function BrandTextarea({ className, ...props }: BrandTextareaProps) {
  return (
    <Textarea
      className={cn(
        "min-h-28 rounded-[16px] border-border bg-input px-4 py-3.5 text-[13px] text-foreground shadow-none placeholder:text-text-tertiary focus-visible:border-primary focus-visible:ring-primary/15",
        className
      )}
      {...props}
    />
  )
}

export { BrandTextarea }

