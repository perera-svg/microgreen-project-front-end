import type { LandingStat } from "./content"

function StatItem({ change, label, value }: LandingStat) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <p className="font-meta text-4xl font-bold tracking-[-0.06em] text-foreground">
        {value}
      </p>
      <p className="text-[13px] text-text-secondary">{label}</p>
      <p className="text-[11px] text-primary">{change}</p>
    </div>
  )
}

export { StatItem }
