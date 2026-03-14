import { aboutStats } from "./content"

function AboutStatsSection() {
  return (
    <section className="bg-secondary/55 py-7 sm:py-9 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-6 lg:gap-4 lg:px-8">
        {aboutStats.map((stat) => (
          <div className="flex flex-col items-center gap-1 text-center" key={stat.label}>
            <p className="font-serif text-[1.75rem] text-foreground">{stat.value}</p>
            <p className="text-xs tracking-[0.08em] text-text-secondary uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export { AboutStatsSection }
