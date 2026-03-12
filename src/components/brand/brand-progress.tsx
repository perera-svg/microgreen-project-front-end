import type { ComponentProps } from "react"

import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress"
import { cn } from "@/lib/utils"

const BrandProgress = Progress

type BrandProgressTrackProps = ComponentProps<typeof ProgressTrack>
type BrandProgressIndicatorProps = ComponentProps<typeof ProgressIndicator>
type BrandProgressLabelProps = ComponentProps<typeof ProgressLabel>
type BrandProgressValueProps = ComponentProps<typeof ProgressValue>

function BrandProgressTrack({
  className,
  ...props
}: BrandProgressTrackProps) {
  return (
    <ProgressTrack
      className={cn("h-3 rounded-full bg-secondary", className)}
      {...props}
    />
  )
}

function BrandProgressIndicator({
  className,
  ...props
}: BrandProgressIndicatorProps) {
  return (
    <ProgressIndicator className={cn("bg-primary", className)} {...props} />
  )
}

function BrandProgressLabel({
  className,
  ...props
}: BrandProgressLabelProps) {
  return (
    <ProgressLabel
      className={cn("text-[13px] font-semibold text-sage-dark", className)}
      {...props}
    />
  )
}

function BrandProgressValue({
  className,
  ...props
}: BrandProgressValueProps) {
  return (
    <ProgressValue
      className={cn("font-mono text-[12px] text-text-tertiary", className)}
      {...props}
    />
  )
}

export {
  BrandProgress,
  BrandProgressIndicator,
  BrandProgressLabel,
  BrandProgressTrack,
  BrandProgressValue,
}

