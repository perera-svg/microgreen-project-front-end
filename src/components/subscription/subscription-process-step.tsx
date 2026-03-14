type SubscriptionProcessStepProps = {
  description: string
  step: number
  title: string
}

function SubscriptionProcessStep({
  description,
  step,
  title,
}: SubscriptionProcessStepProps) {
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-6 text-center">
      <div className="grid size-12 place-items-center rounded-full bg-secondary font-serif text-xl text-primary">
        {step}
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="max-w-[18rem] text-sm leading-6 text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  )
}

export { SubscriptionProcessStep }
