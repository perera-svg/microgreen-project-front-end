import { BrandCard, BrandCardContent } from "@/components/brand/brand-card"
import { cn } from "@/lib/utils"

import type { ContactInfoItem } from "./content"

function ContactInfoCard({
  action,
  actionClassName,
  details,
  icon: Icon,
  iconClassName,
  iconWrapperClassName,
  title,
}: ContactInfoItem) {
  return (
    <BrandCard className="gap-0 px-0 py-0 shadow-none">
      <BrandCardContent className="flex items-start gap-4 px-6 py-6">
        <span
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-[10px]",
            iconWrapperClassName
          )}
        >
          <Icon aria-hidden className={cn("size-5", iconClassName)} />
        </span>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <h3 className="text-[15px] font-semibold text-foreground">{title}</h3>

          <div className="flex flex-col gap-1 text-[13px] leading-6 text-text-secondary">
            {details.map((detail) =>
              detail.href ? (
                <a
                  key={`${title}-${detail.label}`}
                  className="w-fit transition-colors hover:text-primary"
                  href={detail.href}
                >
                  {detail.label}
                </a>
              ) : (
                <p key={`${title}-${detail.label}`} className="text-[13px] leading-6">
                  {detail.label}
                </p>
              )
            )}
          </div>

          {action ? (
            <a
              className={cn(
                "w-fit text-xs font-semibold transition-colors hover:text-sage-dark",
                actionClassName ?? "text-primary"
              )}
              href={action.href}
              rel={action.external ? "noreferrer" : undefined}
              target={action.external ? "_blank" : undefined}
            >
              {action.label} →
            </a>
          ) : null}
        </div>
      </BrandCardContent>
    </BrandCard>
  )
}

export { ContactInfoCard }
