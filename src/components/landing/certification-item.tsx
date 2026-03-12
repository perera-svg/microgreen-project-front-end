import CheckIcon from "lucide-react/dist/esm/icons/check"

function CertificationItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-3 rounded-[14px] border border-white/12 bg-white/6 px-4 py-4 text-white/90 backdrop-blur-sm">
      <CheckIcon aria-hidden className="size-4 shrink-0 text-primary" />
      <span className="text-sm">{label}</span>
    </li>
  )
}

export { CertificationItem }
