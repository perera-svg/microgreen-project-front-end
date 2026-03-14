import { useState } from "react"
import { toast } from "sonner"

import { useCart } from "@/components/cart/cart-provider"
import { LandingFooterSection } from "@/components/landing/landing-footer-section"
import { getDefaultProductVariant } from "@/components/product-detail/content"

import {
  getSubscriptionPlanById,
  subscriptionBuildBoxItems,
  subscriptionDefaultPlanId,
  type SubscriptionPlanId,
} from "./content"
import { SubscriptionBuildBoxSection } from "./subscription-build-box-section"
import { SubscriptionFaqSection } from "./subscription-faq-section"
import { SubscriptionHeroSection } from "./subscription-hero-section"
import { SubscriptionNavSection } from "./subscription-nav-section"
import { SubscriptionPlansSection } from "./subscription-plans-section"
import { SubscriptionProcessSection } from "./subscription-process-section"
import { SubscriptionTestimonialSection } from "./subscription-testimonial-section"

function SubscriptionPage() {
  const [selectedPlanId, setSelectedPlanId] =
    useState<SubscriptionPlanId>(subscriptionDefaultPlanId)
  const [selectedBuildBoxProductIds, setSelectedBuildBoxProductIds] = useState<
    string[]
  >([])
  const { addItem } = useCart()

  function handlePlaceholderAction(message: string) {
    toast(message, {
      description: "This action is intentionally UI-only in this pass.",
    })
  }

  function handlePlanSelect(planId: SubscriptionPlanId) {
    if (planId === selectedPlanId) {
      return
    }

    setSelectedPlanId(planId)

    const plan = getSubscriptionPlanById(planId)

    if (!plan) {
      return
    }

    toast(`${plan.title} selected`, {
      description: plan.toastDescription,
    })
  }

  function handleBuildBoxSubmit() {
    if (selectedBuildBoxProductIds.length === 0) {
      return
    }

    const selectedItems = subscriptionBuildBoxItems.filter((item) =>
      selectedBuildBoxProductIds.includes(item.productId)
    )
    const addedLabels: string[] = []

    for (const item of selectedItems) {
      const defaultVariant = getDefaultProductVariant(item.productId)

      if (!defaultVariant) {
        continue
      }

      addItem({
        productId: item.productId,
        quantity: 1,
        variantId: defaultVariant.id,
      })
      addedLabels.push(item.title)
    }

    if (addedLabels.length === 0) {
      return
    }

    toast("Custom box added to cart", {
      description: `${addedLabels.join(", ")} added with default pack sizes.`,
    })
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-background">
      <SubscriptionNavSection onPlaceholderAction={handlePlaceholderAction} />
      <SubscriptionHeroSection />
      <SubscriptionPlansSection
        selectedPlanId={selectedPlanId}
        onSelectPlan={handlePlanSelect}
      />
      <SubscriptionBuildBoxSection
        selectedProductIds={selectedBuildBoxProductIds}
        onSelectionChange={setSelectedBuildBoxProductIds}
        onSubmit={handleBuildBoxSubmit}
      />
      <SubscriptionProcessSection />
      <SubscriptionFaqSection />
      <SubscriptionTestimonialSection />
      <LandingFooterSection />
    </main>
  )
}

export { SubscriptionPage }
