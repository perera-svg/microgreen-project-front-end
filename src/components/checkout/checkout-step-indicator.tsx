import { Fragment } from "react"

import CheckIcon from "lucide-react/dist/esm/icons/check"

import { cn } from "@/lib/utils"

import { BrandSeparator } from "@/components/brand/brand-separator"

import { checkoutSteps, type CheckoutFlowStep } from "./content"

type CheckoutStepIndicatorProps = {
  currentStep: CheckoutFlowStep
}

function getStepState(
  stepId: (typeof checkoutSteps)[number]["id"],
  currentStep: CheckoutFlowStep
) {
  if (stepId === currentStep) {
    return "current"
  }

  if (
    stepId === "details" &&
    (currentStep === "delivery" || currentStep === "payment")
  ) {
    return "complete"
  }

  if (stepId === "delivery" && currentStep === "payment") {
    return "complete"
  }

  return "upcoming"
}

function CheckoutStepIndicator({ currentStep }: CheckoutStepIndicatorProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        {checkoutSteps.map((step, index) => {
          const stepState = getStepState(step.id, currentStep)

          return (
            <Fragment key={step.label}>
              {index > 0 ? (
                <BrandSeparator className="hidden flex-1 sm:block" />
              ) : null}

              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full border text-[11px] font-semibold",
                    stepState === "current" &&
                      "border-primary bg-primary text-primary-foreground",
                    stepState === "complete" &&
                      "border-primary/30 bg-secondary text-sage-dark",
                    stepState === "upcoming" &&
                      "border-border bg-background text-text-tertiary"
                  )}
                >
                  {stepState === "complete" ? (
                    <CheckIcon className="size-4" />
                  ) : (
                    step.number
                  )}
                </span>
                <div className="flex min-w-0 flex-col">
                  <span className="font-meta text-[10px] tracking-[0.18em] text-text-tertiary uppercase">
                    Step {step.number}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      stepState === "current" && "text-foreground",
                      stepState === "complete" && "text-sage-dark",
                      stepState === "upcoming" && "text-text-secondary"
                    )}
                  >
                    {step.label}
                  </span>
                </div>
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export { CheckoutStepIndicator }
