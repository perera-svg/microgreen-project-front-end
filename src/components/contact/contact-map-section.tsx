import MapPinIcon from "lucide-react/dist/esm/icons/map-pin"

import { contactMap } from "./content"

function ContactMapSection() {
  return (
    <section className="pb-12 sm:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <a
          className="group relative block overflow-hidden rounded-[24px] bg-[#e8e6e1] px-6 py-16 text-center transition-colors hover:bg-[#e1ddd5] sm:px-10 sm:py-20"
          href={contactMap.href}
          rel="noreferrer"
          target="_blank"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

          <div className="relative mx-auto flex max-w-md flex-col items-center gap-3">
            <span className="grid size-12 place-items-center rounded-full bg-white/60 text-primary shadow-soft">
              <MapPinIcon aria-hidden className="size-5" />
            </span>
            <p className="font-meta text-[11px] tracking-[0.18em] text-primary uppercase">
              {contactMap.eyebrow}
            </p>
            <p className="text-base font-medium text-foreground">
              {contactMap.title}
            </p>
            <p className="text-sm leading-6 text-text-secondary">
              {contactMap.subtitle}
            </p>
          </div>
        </a>
      </div>
    </section>
  )
}

export { ContactMapSection }
