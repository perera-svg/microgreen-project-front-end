import { subscriptionPlans, type SubscriptionPlanId } from "./content"
import { SubscriptionPlanCard } from "./subscription-plan-card"

type SubscriptionPlansSectionProps = {
  onSelectPlan: (planId: SubscriptionPlanId) => void
  selectedPlanId: SubscriptionPlanId
}

function SubscriptionPlansSection({
  onSelectPlan,
  selectedPlanId,
}: SubscriptionPlansSectionProps) {
  return (
    <section className="py-8 sm:py-10" id="plans">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {subscriptionPlans.map((plan) => (
            <SubscriptionPlanCard
              key={plan.id}
              plan={plan}
              selected={plan.id === selectedPlanId}
              onSelect={onSelectPlan}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { SubscriptionPlansSection }
