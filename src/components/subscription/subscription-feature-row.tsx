import CheckIcon from "lucide-react/dist/esm/icons/check"

import { cn } from "@/lib/utils"

type SubscriptionFeatureRowProps = {
  children: string
  inverted?: boolean
}

function SubscriptionFeatureRow({
  children,
  inverted = false,
}: SubscriptionFeatureRowProps) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-primary",
          inverted && "bg-white/12 text-primary"
        )}
      >
        <CheckIcon aria-hidden className="size-3.5" />
      </span>
      <span
        className={cn(
          "text-sm leading-6",
          inverted ? "text-white/78" : "text-text-secondary"
        )}
      >
        {children}
      </span>
    </div>
  )
}

export { SubscriptionFeatureRow }
