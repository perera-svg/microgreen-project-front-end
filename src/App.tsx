import {
  ArrowRight,
  CircleAlert,
  Download,
  Leaf,
  ShoppingCart,
  Sprout,
} from "lucide-react"

import {
  BrandAlert,
  BrandAlertDescription,
  BrandAlertTitle,
  BrandBadge,
  BrandButton,
  BrandCard,
  BrandCardContent,
  BrandCardDescription,
  BrandCardFooter,
  BrandCardHeader,
  BrandCardTitle,
  BrandCheckbox,
  BrandInput,
  BrandLabel,
  BrandNavigationMenu,
  BrandNavigationMenuItem,
  BrandNavigationMenuLink,
  BrandNavigationMenuList,
  BrandProgress,
  BrandProgressLabel,
  BrandProgressValue,
  BrandSelect,
  BrandSelectContent,
  BrandSelectItem,
  BrandSelectTrigger,
  BrandSelectValue,
  BrandSwitch,
  BrandTable,
  BrandTableBody,
  BrandTableCell,
  BrandTableHead,
  BrandTableHeader,
  BrandTableRow,
  BrandTabs,
  BrandTabsContent,
  BrandTabsList,
  BrandTabsTrigger,
} from "@/components/brand"

const inventory = [
  {
    name: "Sunflower Shoots",
    sku: "CGR-101",
    stock: "42 trays",
    status: "Ready",
  },
  {
    name: "Purple Radish",
    sku: "CGR-214",
    stock: "18 trays",
    status: "Harvesting",
  },
  {
    name: "Pea Tendrils",
    sku: "CGR-309",
    stock: "12 trays",
    status: "Allocated",
  },
]

const notes = [
  "Fraunces headlines for the editorial tone",
  "Plus Jakarta Sans for all controls and UI copy",
  "Space Mono reserved for meta text, SKUs, and utility labels",
]

function App() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <BrandCard className="overflow-visible">
          <BrandCardHeader className="gap-6 border-b border-border pb-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <BrandBadge variant="secondary">
                    <Leaf className="size-3.5" />
                    L1ROF Theme
                  </BrandBadge>
                  <span className="font-meta text-xs text-text-tertiary">
                    Ceylon Greens design system
                  </span>
                </div>
                <div className="space-y-4">
                  <BrandCardTitle className="max-w-3xl text-4xl sm:text-5xl">
                    Brand wrappers now sit on top of the untouched shadcn layer.
                  </BrandCardTitle>
                  <BrandCardDescription className="max-w-2xl text-base">
                    The app now has a full brand-owned component surface under
                    `src/components/brand`, while global slot styling keeps the
                    generated UI library clean and upgradeable.
                  </BrandCardDescription>
                </div>
              </div>

              <BrandNavigationMenu className="w-full justify-start lg:w-auto lg:justify-end">
                <BrandNavigationMenuList className="flex-wrap justify-start">
                  <BrandNavigationMenuItem>
                    <BrandNavigationMenuLink render={<a href="#overview" />}>
                      Overview
                    </BrandNavigationMenuLink>
                  </BrandNavigationMenuItem>
                  <BrandNavigationMenuItem>
                    <BrandNavigationMenuLink render={<a href="#controls" />}>
                      Controls
                    </BrandNavigationMenuLink>
                  </BrandNavigationMenuItem>
                  <BrandNavigationMenuItem>
                    <BrandNavigationMenuLink
                      render={<a href="#inventory" />}
                      className="bg-secondary text-sage-dark"
                    >
                      Inventory
                    </BrandNavigationMenuLink>
                  </BrandNavigationMenuItem>
                </BrandNavigationMenuList>
              </BrandNavigationMenu>
            </div>
          </BrandCardHeader>

          <BrandCardContent className="grid gap-6 pt-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.9fr)]">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <BrandButton>
                  <ShoppingCart className="size-4" />
                  Add to Cart
                </BrandButton>
                <BrandButton variant="secondary">
                  <ArrowRight className="size-4" />
                  View Catalog
                </BrandButton>
                <BrandButton variant="outline">
                  <Download className="size-4" />
                  Export Batch Sheet
                </BrandButton>
                <BrandButton
                  variant="ghost"
                  className="text-destructive hover:bg-terracotta-tint hover:text-destructive"
                >
                  Archive
                </BrandButton>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {notes.map((note) => (
                  <div
                    key={note}
                    className="rounded-surface border border-border bg-background p-4"
                  >
                    <p className="font-meta text-[11px] tracking-[0.16em] text-text-tertiary uppercase">
                      Detail
                    </p>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-surface border border-border bg-background p-5">
              <p className="font-meta text-[11px] tracking-[0.16em] text-text-tertiary uppercase">
                Palette anchors
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[12px] border border-border bg-card p-3">
                  <div className="h-16 rounded-[10px] bg-primary" />
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    Sage primary
                  </p>
                  <p className="font-meta text-xs text-text-tertiary">
                    #7C9070
                  </p>
                </div>
                <div className="rounded-[12px] border border-border bg-card p-3">
                  <div className="h-16 rounded-[10px] bg-sage-dark" />
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    Deep foliage
                  </p>
                  <p className="font-meta text-xs text-text-tertiary">
                    #4A5D43
                  </p>
                </div>
              </div>
            </div>
          </BrandCardContent>
        </BrandCard>

        <section
          id="controls"
          className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]"
        >
          <BrandCard>
            <BrandCardHeader>
              <BrandCardTitle>Forms and actions</BrandCardTitle>
              <BrandCardDescription>
                Inputs, labels, selects, check controls, and status messaging
                share the same parchment field treatment.
              </BrandCardDescription>
            </BrandCardHeader>
            <BrandCardContent className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <BrandLabel htmlFor="customer-name">Customer name</BrandLabel>
                  <BrandInput
                    id="customer-name"
                    placeholder="Restaurant or distributor"
                  />
                </div>
                <div className="space-y-2">
                  <BrandLabel htmlFor="fulfilment">Fulfilment mode</BrandLabel>
                  <BrandSelect defaultValue="retail">
                    <BrandSelectTrigger id="fulfilment" className="w-full">
                      <BrandSelectValue placeholder="Choose a channel" />
                    </BrandSelectTrigger>
                    <BrandSelectContent>
                      <BrandSelectItem value="retail">Retail</BrandSelectItem>
                      <BrandSelectItem value="wholesale">
                        Wholesale
                      </BrandSelectItem>
                      <BrandSelectItem value="chef">Chef sample</BrandSelectItem>
                    </BrandSelectContent>
                  </BrandSelect>
                </div>
              </div>

              <div className="grid gap-4 rounded-surface border border-border bg-background p-4 sm:grid-cols-2">
                <label className="flex items-center gap-3">
                  <BrandCheckbox defaultChecked />
                  <span className="text-sm text-foreground">
                    Include weekly harvest digest
                  </span>
                </label>
                <label className="flex items-center justify-between gap-3 rounded-[12px] border border-border bg-card px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Rush dispatch
                    </p>
                    <p className="text-xs text-text-tertiary">
                      Same-day handoff to courier
                    </p>
                  </div>
                  <BrandSwitch defaultChecked />
                </label>
              </div>

              <BrandAlert>
                <CircleAlert className="size-4" />
                <BrandAlertTitle>Brand layer only</BrandAlertTitle>
                <BrandAlertDescription>
                  All visual overrides live in `src/components/brand` and
                  `src/index.css`. The generated `src/components/ui` files stay
                  untouched.
                </BrandAlertDescription>
              </BrandAlert>
            </BrandCardContent>
          </BrandCard>

          <BrandCard id="overview">
            <BrandCardHeader>
              <BrandCardTitle>Signals and accents</BrandCardTitle>
              <BrandCardDescription>
                Surface tones, badges, and progress states all resolve through
                the same token set.
              </BrandCardDescription>
            </BrandCardHeader>
            <BrandCardContent className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <BrandBadge>Fresh batch</BrandBadge>
                <BrandBadge variant="secondary">Chef sample</BrandBadge>
                <BrandBadge variant="outline">Pre-order</BrandBadge>
                <BrandBadge variant="destructive">Low stock</BrandBadge>
              </div>

              <div className="rounded-surface border border-border bg-background p-4">
                <BrandProgress value={72}>
                  <div className="flex w-full items-center gap-3">
                    <BrandProgressLabel>Daily fulfilment</BrandProgressLabel>
                    <BrandProgressValue />
                  </div>
                </BrandProgress>
              </div>

              <div className="rounded-surface border border-border bg-background p-4">
                <p className="font-meta text-[11px] tracking-[0.16em] text-text-tertiary uppercase">
                  Type scale
                </p>
                <div className="mt-4 space-y-3">
                  <p className="font-serif text-3xl text-foreground">
                    Fraunces for editorial hierarchy
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    Plus Jakarta Sans for interface rhythm
                  </p>
                  <p className="font-meta text-sm text-sage-dark">
                    SKU CGR-214 · Batch closes 18:00
                  </p>
                </div>
              </div>
            </BrandCardContent>
          </BrandCard>
        </section>

        <section
          id="inventory"
          className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
        >
          <BrandCard>
            <BrandCardHeader>
              <BrandCardTitle>Token notes</BrandCardTitle>
              <BrandCardDescription>
                Tabs validate the wrapper barrel and the component-level
                styling applied through the slot system.
              </BrandCardDescription>
            </BrandCardHeader>
            <BrandCardContent>
              <BrandTabs defaultValue="catalog">
                <BrandTabsList>
                  <BrandTabsTrigger value="catalog">Catalog</BrandTabsTrigger>
                  <BrandTabsTrigger value="ops">Operations</BrandTabsTrigger>
                  <BrandTabsTrigger value="alerts">Alerts</BrandTabsTrigger>
                </BrandTabsList>

                <BrandTabsContent value="catalog" className="space-y-3">
                  <p className="text-sm leading-6 text-text-secondary">
                    Primary actions, form fields, cards, and menus all inherit
                    the same sage-and-parchment vocabulary without requiring
                    edits inside the base component library.
                  </p>
                </BrandTabsContent>
                <BrandTabsContent value="ops" className="space-y-3">
                  <p className="text-sm leading-6 text-text-secondary">
                    Wrapper modules now exist for the full UI surface, so app
                    screens can standardize on `@/components/brand`.
                  </p>
                </BrandTabsContent>
                <BrandTabsContent value="alerts" className="space-y-3">
                  <p className="text-sm leading-6 text-text-secondary">
                    Destructive accents stay terracotta and subdued rather than
                    collapsing into generic red-on-white defaults.
                  </p>
                </BrandTabsContent>
              </BrandTabs>
            </BrandCardContent>
            <BrandCardFooter>
              <BrandButton variant="secondary">
                <Sprout className="size-4" />
                Open brand barrel
              </BrandButton>
            </BrandCardFooter>
          </BrandCard>

          <BrandCard>
            <BrandCardHeader>
              <BrandCardTitle>Inventory snapshot</BrandCardTitle>
              <BrandCardDescription>
                The table wrapper uses serif headings for the page and mono
                metadata inside the grid.
              </BrandCardDescription>
            </BrandCardHeader>
            <BrandCardContent>
              <BrandTable>
                <BrandTableHeader>
                  <BrandTableRow>
                    <BrandTableHead>Product</BrandTableHead>
                    <BrandTableHead>SKU</BrandTableHead>
                    <BrandTableHead>Stock</BrandTableHead>
                    <BrandTableHead>Status</BrandTableHead>
                  </BrandTableRow>
                </BrandTableHeader>
                <BrandTableBody>
                  {inventory.map((row) => (
                    <BrandTableRow key={row.sku}>
                      <BrandTableCell>{row.name}</BrandTableCell>
                      <BrandTableCell className="font-meta text-xs text-text-tertiary">
                        {row.sku}
                      </BrandTableCell>
                      <BrandTableCell>{row.stock}</BrandTableCell>
                      <BrandTableCell>
                        <BrandBadge
                          variant={
                            row.status === "Ready"
                              ? "secondary"
                              : row.status === "Harvesting"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {row.status}
                        </BrandBadge>
                      </BrandTableCell>
                    </BrandTableRow>
                  ))}
                </BrandTableBody>
              </BrandTable>
            </BrandCardContent>
          </BrandCard>
        </section>
      </div>
    </main>
  )
}

export default App
