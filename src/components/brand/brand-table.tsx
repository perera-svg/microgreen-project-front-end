import type { ComponentProps } from "react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

function BrandTable({ className, ...props }: ComponentProps<typeof Table>) {
  return <Table className={cn("text-sm", className)} {...props} />
}

function BrandTableHeader({
  className,
  ...props
}: ComponentProps<typeof TableHeader>) {
  return <TableHeader className={cn("[&_tr]:border-border", className)} {...props} />
}

function BrandTableBody({
  className,
  ...props
}: ComponentProps<typeof TableBody>) {
  return <TableBody className={cn(className)} {...props} />
}

function BrandTableFooter({
  className,
  ...props
}: ComponentProps<typeof TableFooter>) {
  return (
    <TableFooter
      className={cn("border-border bg-background text-sage-dark", className)}
      {...props}
    />
  )
}

function BrandTableRow({ className, ...props }: ComponentProps<typeof TableRow>) {
  return (
    <TableRow
      className={cn(
        "border-border hover:bg-secondary/70 data-[state=selected]:bg-secondary",
        className
      )}
      {...props}
    />
  )
}

function BrandTableHead({ className, ...props }: ComponentProps<typeof TableHead>) {
  return (
    <TableHead
      className={cn(
        "h-11 font-mono text-[11px] font-normal tracking-[0.16em] text-text-tertiary uppercase",
        className
      )}
      {...props}
    />
  )
}

function BrandTableCell({ className, ...props }: ComponentProps<typeof TableCell>) {
  return (
    <TableCell className={cn("py-3.5 text-sm text-foreground", className)} {...props} />
  )
}

function BrandTableCaption({
  className,
  ...props
}: ComponentProps<typeof TableCaption>) {
  return (
    <TableCaption
      className={cn("font-mono text-[12px] text-text-tertiary", className)}
      {...props}
    />
  )
}

export {
  BrandTable,
  BrandTableBody,
  BrandTableCaption,
  BrandTableCell,
  BrandTableFooter,
  BrandTableHead,
  BrandTableHeader,
  BrandTableRow,
}

