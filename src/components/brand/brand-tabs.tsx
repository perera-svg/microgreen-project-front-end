import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const BrandTabs = Tabs

type BrandTabsContentProps = ComponentProps<typeof TabsContent>
type BrandTabsTriggerProps = ComponentProps<typeof TabsTrigger>

const brandTabsListVariants = cva(
  "inline-flex w-fit items-center gap-1 rounded-[16px] border border-border bg-background p-1 text-text-secondary shadow-none",
  {
    variants: {
      variant: {
        default: "",
        line: "rounded-none border-0 bg-transparent p-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type BrandTabsListProps = ComponentProps<typeof TabsList> &
  VariantProps<typeof brandTabsListVariants>

function BrandTabsList({
  className,
  variant = "default",
  ...props
}: BrandTabsListProps) {
  return (
    <TabsList
      variant={variant}
      className={cn(brandTabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function BrandTabsTrigger({ className, ...props }: BrandTabsTriggerProps) {
  return (
    <TabsTrigger
      className={cn(
        "h-10 rounded-[10px] px-4 text-[13px] font-semibold text-text-secondary shadow-none hover:text-sage-dark data-active:bg-card data-active:text-sage-dark",
        className
      )}
      {...props}
    />
  )
}

function BrandTabsContent({ className, ...props }: BrandTabsContentProps) {
  return <TabsContent className={cn("pt-4", className)} {...props} />
}

export {
  BrandTabs,
  BrandTabsContent,
  BrandTabsList,
  BrandTabsTrigger,
  brandTabsListVariants,
}

