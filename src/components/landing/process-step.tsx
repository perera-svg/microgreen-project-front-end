import type { ProcessStepData } from "./content"

function ProcessStep({ description, icon: Icon, label, timeline }: ProcessStepData) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="grid size-16 place-items-center rounded-full bg-secondary text-primary shadow-soft">
        <Icon aria-hidden className="size-7" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="font-meta text-xs text-primary">{timeline}</p>
      </div>
      <p className="max-w-[16rem] text-sm leading-6 text-text-secondary">
        {description}
      </p>
    </div>
  )
}

export { ProcessStep }
