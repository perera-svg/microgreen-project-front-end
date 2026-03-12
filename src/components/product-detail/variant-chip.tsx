import { cn } from "@/lib/utils"

type VariantChipProps = {
  isSelected: boolean
  label: string
  onSelect: () => void
}

function VariantChip({ isSelected, label, onSelect }: VariantChipProps) {
  return (
    <button
      className={cn(
        "rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors",
        isSelected
          ? "border-transparent bg-secondary text-sage-dark"
          : "border-border bg-card text-text-secondary hover:border-primary/40 hover:text-sage-dark"
      )}
      type="button"
      onClick={onSelect}
    >
      {label}
    </button>
  )
}

export { VariantChip }
