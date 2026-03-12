import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  align?: "center" | "left"
  className?: string
  description?: string
  descriptionClassName?: string
  eyebrow?: string
  eyebrowClassName?: string
  title: string
  titleClassName?: string
}

function SectionHeading({
  align = "center",
  className,
  description,
  descriptionClassName,
  eyebrow,
  eyebrowClassName,
  title,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "font-meta text-[11px] tracking-[0.18em] text-primary uppercase",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "max-w-3xl text-4xl leading-tight text-foreground sm:text-5xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-7 text-text-secondary",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export { SectionHeading }
