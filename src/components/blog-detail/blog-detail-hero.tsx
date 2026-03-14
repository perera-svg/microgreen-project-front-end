type BlogDetailHeroProps = {
  imageAlt: string
  imageSrc: string
}

function BlogDetailHero({ imageAlt, imageSrc }: BlogDetailHeroProps) {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[800px] overflow-hidden rounded-[16px] shadow-soft">
        <img
          alt={imageAlt}
          className="h-[18rem] w-full object-cover sm:h-[24rem] lg:h-[26.25rem]"
          decoding="async"
          loading="eager"
          src={imageSrc}
        />
      </div>
    </section>
  )
}

export { BlogDetailHero }
