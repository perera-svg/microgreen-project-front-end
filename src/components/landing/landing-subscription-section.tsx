import { BrandBadge } from "@/components/brand/brand-badge"
import { BrandCard } from "@/components/brand/brand-card"
import { BrandCardContent } from "@/components/brand/brand-card"
import {
  BrandField,
  BrandFieldDescription,
  BrandFieldGroup,
  BrandFieldLabel,
  BrandFieldTitle,
} from "@/components/brand/brand-field"
import {
  BrandInputGroup,
  BrandInputGroupAddon,
  BrandInputGroupButton,
  BrandInputGroupInput,
} from "@/components/brand/brand-input-group"
import {
  BrandToggleGroup,
  BrandToggleGroupItem,
} from "@/components/brand/brand-toggle-group"

import {
  landingCadenceOptions,
  landingSubscriptionSection,
} from "./content"

function LandingSubscriptionSection() {
  return (
    <section className="py-8 sm:py-10" id="subscribe">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <BrandCard className="overflow-hidden bg-[linear-gradient(135deg,rgb(124_144_112_/_0.16),rgb(255_255_255_/_0.96))] py-0">
          <BrandCardContent className="grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] lg:items-center lg:px-10">
            <div className="flex flex-col gap-5">
              <BrandBadge
                className="h-9 self-start rounded-full px-4 text-[12px] tracking-[0.12em]"
                variant="secondary"
              >
                {landingSubscriptionSection.badgeLabel}
              </BrandBadge>
              <h2 className="max-w-[12ch] text-4xl leading-tight text-foreground sm:text-5xl">
                {landingSubscriptionSection.title}
              </h2>
              <p className="max-w-xl text-base leading-7 text-text-secondary">
                {landingSubscriptionSection.description}
              </p>
            </div>

            <form
              className="rounded-[24px] border border-border bg-card p-5 shadow-soft sm:p-6"
              onSubmit={(event) => {
                event.preventDefault()
              }}
            >
              <BrandFieldGroup className="gap-6">
                <BrandField>
                  <BrandFieldLabel htmlFor="landing-email">
                    {landingSubscriptionSection.emailLabel}
                  </BrandFieldLabel>
                  <BrandInputGroup className="h-11">
                    <BrandInputGroupInput
                      id="landing-email"
                      placeholder={landingSubscriptionSection.emailPlaceholder}
                      type="email"
                    />
                    <BrandInputGroupAddon align="inline-end">
                      <BrandInputGroupButton
                        className="h-9 rounded-[8px] px-4"
                        size="sm"
                        type="submit"
                        variant="default"
                      >
                        {landingSubscriptionSection.submitLabel}
                      </BrandInputGroupButton>
                    </BrandInputGroupAddon>
                  </BrandInputGroup>
                  <BrandFieldDescription>
                    {landingSubscriptionSection.emailHelp}
                  </BrandFieldDescription>
                </BrandField>

                <BrandField>
                  <BrandFieldTitle>
                    {landingSubscriptionSection.cadenceLabel}
                  </BrandFieldTitle>
                  <BrandToggleGroup
                    className="w-full flex-wrap gap-2"
                    defaultValue={["weekly"]}
                  >
                    {landingCadenceOptions.map((option) => (
                      <BrandToggleGroupItem
                        key={option.value}
                        className="h-11 flex-1 rounded-[10px] border-border bg-background px-4 font-semibold text-text-secondary data-[state=on]:bg-secondary data-[state=on]:text-sage-dark"
                        size="lg"
                        value={option.value}
                        variant="outline"
                      >
                        {option.label}
                      </BrandToggleGroupItem>
                    ))}
                  </BrandToggleGroup>
                  <BrandFieldDescription>
                    {landingSubscriptionSection.cadenceHint}
                  </BrandFieldDescription>
                </BrandField>
              </BrandFieldGroup>
            </form>
          </BrandCardContent>
        </BrandCard>
      </div>
    </section>
  )
}

export { LandingSubscriptionSection }
