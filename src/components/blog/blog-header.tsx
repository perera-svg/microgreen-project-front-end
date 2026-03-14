import { blogHeader } from "./content"

function BlogHeader() {
  return (
    <section className="px-4 py-10 text-center sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        <h1 className="font-serif text-[2.35rem] leading-tight text-foreground sm:text-[2.8rem]">
          {blogHeader.title}
        </h1>
        <p className="text-sm leading-6 text-text-secondary sm:text-base">
          {blogHeader.subtitle}
        </p>
      </div>
    </section>
  )
}

export { BlogHeader }
