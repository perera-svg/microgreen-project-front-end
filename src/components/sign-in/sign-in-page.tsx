import { SignInBottomNote } from "./sign-in-bottom-note"
import { SignInFooterBar } from "./sign-in-footer-bar"
import { SignInFormCard } from "./sign-in-form-card"
import { SignInNav } from "./sign-in-nav"
import { SignInPromoPanel } from "./sign-in-promo-panel"

function SignInPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex min-h-screen flex-col">
        <SignInNav />

        <section className="flex-1">
          <div className="mx-auto flex h-full max-w-7xl flex-col justify-center gap-8 px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_27.5rem] lg:items-center lg:justify-between lg:gap-[4.5rem]">
              <SignInPromoPanel />
              <div className="flex justify-center lg:justify-start">
                <SignInFormCard />
              </div>
            </div>
            <SignInBottomNote />
          </div>
        </section>

        <SignInFooterBar />
      </div>
    </main>
  )
}

export { SignInPage }
