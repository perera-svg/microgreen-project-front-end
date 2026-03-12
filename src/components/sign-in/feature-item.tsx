import { cn } from "@/lib/utils"

import type { SignInFeature } from "./content"

type FeatureItemProps = SignInFeature & {
  className?: string
}

function FeatureItem({ className, icon: Icon, text }: FeatureItemProps) {
  return (
    <li className={cn("flex items-start gap-3", className)}>
      <span className="mt-1 grid size-4 shrink-0 place-items-center text-primary">
        <Icon aria-hidden className="size-4" />
      </span>
      <span className="text-sm leading-6 text-[#4a4a4a]">{text}</span>
    </li>
  )
}

export { FeatureItem }
