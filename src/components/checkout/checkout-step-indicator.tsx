import { Fragment } from "react"

import { cn } from "@/lib/utils"

import { BrandSeparator } from "@/components/brand/brand-separator"

import { checkoutSteps } from "./content"

function CheckoutStepIndicator() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        {checkoutSteps.map((step, index) => (
          <Fragment key={step.label}>
            {index > 0 ? (
              <BrandSeparator className="hidden flex-1 sm:block" />
            ) : null}

            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "grid size-8 shrink-0 place-items-center rounded-full border text-[11px] font-semibold",
                  step.state === "current"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-text-tertiary"
                )}
              >
                {step.number}
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="font-meta text-[10px] tracking-[0.18em] text-text-tertiary uppercase">
                  Step {step.number}
                </span>
                <span
                  className={cn(
                    "text-sm font-medium",
                    step.state === "current"
                      ? "text-foreground"
                      : "text-text-secondary"
                  )}
                >
                  {step.label}
                </span>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export { CheckoutStepIndicator }
