import { BrandBadge } from "@/components/brand/brand-badge"

import { signInPromo } from "./content"
import { SignInFeatureList } from "./sign-in-feature-list"
import { SignInStatusCard } from "./sign-in-status-card"

function SignInPromoPanel() {
  const BadgeIcon = signInPromo.badgeIcon

  return (
    <section className="flex max-w-[33rem] flex-col gap-6">
      <BrandBadge
        className="h-10 self-start gap-2 rounded-full bg-secondary px-4 text-[13px] font-semibold tracking-normal normal-case text-sage-dark"
        variant="secondary"
      >
        <span className="grid size-7 place-items-center rounded-full bg-card text-primary">
          <span className="grid size-3.5 place-items-center">
            <BadgeIcon aria-hidden className="size-3.5" />
          </span>
        </span>
        {signInPromo.badgeLabel}
      </BrandBadge>

      <div className="space-y-5">
        <h1 className="max-w-[10ch] text-[2.9rem] leading-[0.95] text-foreground sm:text-[3.25rem]">
          {signInPromo.title}
        </h1>
        <p className="max-w-[27rem] text-[15px] leading-[1.6] text-text-secondary">
          {signInPromo.body}
        </p>
      </div>

      <SignInFeatureList />
      <SignInStatusCard />
    </section>
  )
}

export { SignInPromoPanel }
