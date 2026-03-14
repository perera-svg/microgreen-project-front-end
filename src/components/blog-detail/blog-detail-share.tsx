import FacebookIcon from "lucide-react/dist/esm/icons/facebook"
import Link2Icon from "lucide-react/dist/esm/icons/link-2"
import MessageCircleIcon from "lucide-react/dist/esm/icons/message-circle"

import { BrandButton } from "@/components/brand/brand-button"
import { cn } from "@/lib/utils"

import { blogDetailLabels } from "./content"

type BlogDetailShareProps = {
  actionsClassName?: string
  className?: string
  label: string
  labelClassName?: string
  onCopyLink: () => void
  onFacebookShare: () => void
  onWhatsAppShare: () => void
}

function BlogDetailShare({
  actionsClassName,
  className,
  label,
  labelClassName,
  onCopyLink,
  onFacebookShare,
  onWhatsAppShare,
}: BlogDetailShareProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <p className={cn("text-xs font-semibold tracking-[0.08em] text-text-tertiary uppercase", labelClassName)}>
        {label}
      </p>
      <div className={cn("flex flex-wrap items-center gap-3", actionsClassName)}>
        <BrandButton
          aria-label={blogDetailLabels.whatsapp}
          size="icon-sm"
          type="button"
          variant="outline"
          onClick={onWhatsAppShare}
        >
          <MessageCircleIcon aria-hidden />
        </BrandButton>
        <BrandButton
          aria-label={blogDetailLabels.facebook}
          size="icon-sm"
          type="button"
          variant="outline"
          onClick={onFacebookShare}
        >
          <FacebookIcon aria-hidden />
        </BrandButton>
        <BrandButton
          aria-label={blogDetailLabels.copyLink}
          size="icon-sm"
          type="button"
          variant="outline"
          onClick={onCopyLink}
        >
          <Link2Icon aria-hidden />
        </BrandButton>
      </div>
    </div>
  )
}

export { BlogDetailShare }
