import type { ValuePropData } from "./content"

function ValuePropItem({ description, icon: Icon, title }: ValuePropData) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid size-12 shrink-0 place-items-center rounded-full bg-secondary text-primary">
        <Icon aria-hidden className="size-5" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-6 text-text-secondary">{description}</p>
      </div>
    </div>
  )
}

export { ValuePropItem }
