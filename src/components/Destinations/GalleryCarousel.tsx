import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

interface GalleryCarouselProps {
  images: { url: string }[];
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Image src={img.url} alt={`Gallery image ${index + 1}`} width={1200} height={800} className="rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
