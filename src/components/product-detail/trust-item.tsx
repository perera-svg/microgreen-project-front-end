import { type ProductDetailTrustItem } from "./content"

type TrustItemProps = ProductDetailTrustItem

function TrustItem({ icon: Icon, label }: TrustItemProps) {
  return (
    <div className="flex items-center gap-2 rounded-[14px] bg-background px-3 py-3 text-sm text-text-secondary">
      <span className="grid size-8 place-items-center rounded-full bg-secondary text-sage-dark">
        <Icon aria-hidden className="size-4" />
      </span>
      <span>{label}</span>
    </div>
  )
}

export { TrustItem }
