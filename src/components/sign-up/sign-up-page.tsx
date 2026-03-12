import { SignUpBottomNote } from "./sign-up-bottom-note"
import { SignUpFooterBar } from "./sign-up-footer-bar"
import { SignUpFormCard } from "./sign-up-form-card"
import { SignUpNav } from "./sign-up-nav"
import { SignUpPromoPanel } from "./sign-up-promo-panel"

function SignUpPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex min-h-screen flex-col">
        <SignUpNav />

        <section className="flex-1">
          <div className="mx-auto flex h-full max-w-7xl flex-col justify-center gap-8 px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_28.75rem] lg:items-center lg:justify-between lg:gap-[4.5rem]">
              <SignUpPromoPanel />
              <div className="flex justify-center lg:justify-start">
                <SignUpFormCard />
              </div>
            </div>
            <SignUpBottomNote />
          </div>
        </section>

        <SignUpFooterBar />
      </div>
    </main>
  )
}

export { SignUpPage }
