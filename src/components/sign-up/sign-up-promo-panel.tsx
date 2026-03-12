import { BrandBadge } from "@/components/brand/brand-badge"

import { signUpPromo } from "./content"
import { SignUpFeatureList } from "./sign-up-feature-list"
import { SignUpStatusCard } from "./sign-up-status-card"

function SignUpPromoPanel() {
  const BadgeIcon = signUpPromo.badgeIcon

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
        {signUpPromo.badgeLabel}
      </BrandBadge>

      <div className="space-y-5">
        <h1 className="max-w-[10ch] text-[2.9rem] leading-[0.95] text-foreground sm:text-[3.25rem]">
          {signUpPromo.title}
        </h1>
        <p className="max-w-[27rem] text-[15px] leading-[1.6] text-text-secondary">
          {signUpPromo.body}
        </p>
      </div>

      <SignUpFeatureList />
      <SignUpStatusCard />
    </section>
  )
}

export { SignUpPromoPanel }
