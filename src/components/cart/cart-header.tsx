import { cartLabels } from "./content"

type CartHeaderProps = {
  lineCount: number
}

function CartHeader({ lineCount }: CartHeaderProps) {
  const itemLabel =
    lineCount === 1 ? cartLabels.itemSingular : cartLabels.itemPlural

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="font-serif text-[2.2rem] leading-tight text-foreground sm:text-[2.75rem]">
        {cartLabels.title} ({lineCount} {itemLabel})
      </h1>
    </section>
  )
}

export { CartHeader }
