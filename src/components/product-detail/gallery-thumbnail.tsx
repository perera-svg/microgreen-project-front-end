import { cn } from "@/lib/utils"

type GalleryThumbnailProps = {
  alt: string
  isSelected: boolean
  onSelect: () => void
  src: string
}

function GalleryThumbnail({
  alt,
  isSelected,
  onSelect,
  src,
}: GalleryThumbnailProps) {
  return (
    <button
      className={cn(
        "overflow-hidden rounded-[14px] border bg-card transition-all",
        isSelected
          ? "border-primary shadow-soft"
          : "border-border hover:border-primary/40"
      )}
      type="button"
      onClick={onSelect}
    >
      <img
        alt={alt}
        className="aspect-square h-full w-full object-cover"
        decoding="async"
        loading="lazy"
        src={src}
      />
    </button>
  )
}

export { GalleryThumbnail }
