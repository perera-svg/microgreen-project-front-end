import {
  ArrowRight,
  Download,
  Leaf,
  ShoppingCart,
  Sprout,
} from "lucide-react"

import { BrandButton } from "@/components/brand/brand-button"

const palette = [
  { name: "Sage Primary", value: "#7C9070", className: "bg-primary" },
  { name: "Sage Dark", value: "#4A5D43", className: "bg-sage-dark" },
  { name: "Terracotta", value: "#D4845E", className: "bg-destructive" },
  { name: "Soft Blue", value: "#5B9BD5", className: "bg-soft-blue" },
]

const typeScale = [
  {
    label: "Display Serif",
    sample: "Fraunces",
    className: "font-serif text-[2rem] text-foreground sm:text-4xl",
  },
  {
    label: "Body Sans",
    sample: "Plus Jakarta Sans",
    className: "text-xl font-semibold text-foreground",
  },
  {
    label: "Data Mono",
    sample: "+24.5% active",
    className: "font-mono text-sm text-sage-dark",
  },
]

function App() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="rounded-surface border border-border bg-card px-5 py-4 shadow-soft sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-[0.8125rem] font-semibold text-sage-dark">
                <Leaf className="size-4" />
                Light Mode
              </span>
              <span className="text-sm text-text-tertiary">
                Ceylon Greens Design System
              </span>
            </div>
            <span className="font-meta text-[0.8125rem] text-text-tertiary">
              Node ID: L1ROF
            </span>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.9fr)]">
          <article className="rounded-surface border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sage-tint px-3 py-1.5 text-[0.8125rem] font-semibold text-sage-dark">
              <Sprout className="size-4" />
              Premium Microgreens from Sri Lanka
            </div>
            <h1 className="max-w-3xl text-4xl text-foreground sm:text-5xl">
              Editorial warmth for a storefront built on clean shadcn
              primitives.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 sm:text-base">
              The new theme maps the app onto the Ceylon Greens palette,
              typography, and radii without modifying the generated component
              files. Brand wrappers stay local to the app, so shadcn remains a
              clean upgrade path.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BrandButton>
                <ShoppingCart className="size-4" />
                Add to Cart
              </BrandButton>
              <BrandButton variant="secondary">
                <ArrowRight className="size-4" />
                Learn More
              </BrandButton>
              <BrandButton variant="outline">
                <Download className="size-4" />
                Download CSV
              </BrandButton>
              <BrandButton
                variant="ghost"
                className="text-destructive hover:bg-terracotta-tint hover:text-destructive"
              >
                Archive
              </BrandButton>
            </div>
          </article>

          <aside className="rounded-surface border border-border bg-card p-6 shadow-soft">
            <p className="text-xs font-semibold tracking-[0.16em] text-text-tertiary uppercase">
              Palette
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {palette.map((swatch) => (
                <div
                  key={swatch.name}
                  className="rounded-surface border border-border bg-background p-3"
                >
                  <div
                    className={`${swatch.className} h-16 rounded-[10px] border border-white/30`}
                  />
                  <div className="mt-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {swatch.name}
                      </p>
                      <p className="text-xs text-text-tertiary">{swatch.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <article className="rounded-surface border border-border bg-card p-6 shadow-soft">
            <p className="text-xs font-semibold tracking-[0.16em] text-text-tertiary uppercase">
              Typography
            </p>
            <div className="mt-5 space-y-5">
              {typeScale.map((item) => (
                <div
                  key={item.label}
                  className="rounded-surface border border-border bg-background p-4"
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-text-tertiary uppercase">
                    {item.label}
                  </p>
                  <p className={`mt-3 ${item.className}`}>{item.sample}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-surface border border-border bg-card p-6 shadow-soft">
            <p className="text-xs font-semibold tracking-[0.16em] text-text-tertiary uppercase">
              Theme Notes
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-surface border border-border bg-background p-4">
                <p className="font-serif text-xl text-foreground">Global tokens</p>
                <p className="mt-2 text-sm leading-6">
                  Semantic shadcn colors now point at the parchment, sage, and
                  terracotta palette from the design file.
                </p>
              </div>
              <div className="rounded-surface border border-border bg-background p-4">
                <p className="font-serif text-xl text-foreground">
                  App-owned wrappers
                </p>
                <p className="mt-2 text-sm leading-6">
                  Brand-specific shape and color decisions live outside
                  generated UI components so the base library stays untouched.
                </p>
              </div>
              <div className="rounded-surface border border-border bg-background p-4">
                <p className="font-serif text-xl text-foreground">
                  Flexible accents
                </p>
                <p className="mt-2 text-sm leading-6">
                  Extra brand variables expose sage dark, soft blue, lavender,
                  warm beige, and tint surfaces for future screens.
                </p>
              </div>
              <div className="rounded-surface border border-border bg-background p-4">
                <p className="font-serif text-xl text-foreground">Dark fallback</p>
                <p className="mt-2 text-sm leading-6">
                  Dark mode stays functional and readable, but the source of
                  truth remains the provided light-mode design system.
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}

export default App
