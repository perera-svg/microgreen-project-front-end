import { cartPaymentMethods } from "./content"

function CartPaymentPills() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {cartPaymentMethods.map((method) => (
        <span
          key={method}
          className="rounded-[4px] bg-muted px-3 py-1 text-[10px] font-semibold tracking-[0.08em] text-text-tertiary uppercase"
        >
          {method}
        </span>
      ))}
    </div>
  )
}

export { CartPaymentPills }
