import { BrandCard } from "@/components/brand/brand-card"
import { type ProductDetailGalleryImage } from "./content"
import { GalleryThumbnail } from "./gallery-thumbnail"

type ProductDetailGalleryProps = {
  images: ProductDetailGalleryImage[]
  selectedImageIndex: number
  onSelectImage: (index: number) => void
}

function ProductDetailGallery({
  images,
  selectedImageIndex,
  onSelectImage,
}: ProductDetailGalleryProps) {
  const selectedImage = images[selectedImageIndex] ?? images[0]

  return (
    <div className="flex flex-col gap-4">
      <BrandCard className="overflow-hidden p-0">
        <div className="aspect-[1.03] bg-secondary/40">
          <img
            alt={selectedImage.alt}
            className="h-full w-full object-cover"
            decoding="async"
            src={selectedImage.src}
          />
        </div>
      </BrandCard>

      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <GalleryThumbnail
            key={`${image.src}-${index}`}
            alt={image.alt}
            isSelected={selectedImageIndex === index}
            src={image.src}
            onSelect={() => onSelectImage(index)}
          />
        ))}
      </div>
    </div>
  )
}

export { ProductDetailGallery }
