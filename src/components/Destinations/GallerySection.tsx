import React from 'react';
import { ImageAsset } from '@/lib/api/destinations/types';
import Image from 'next/image';

interface Props {
  images: ImageAsset[];
}

export default function GallerySection({ images }: Props) {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-8">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <Image key={idx} src={img.medium} alt={img.alt} width={400} height={300} className="rounded-lg" />
        ))}
      </div>
    </div>
  );
}
