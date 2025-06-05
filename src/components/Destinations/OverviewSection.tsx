import React from 'react';
import { ImageAsset } from '@/lib/api/destinations/types';
import Image from 'next/image';

interface Props {
  overview: {
    title: string;
    fullDescription: string;
    image: ImageAsset;
  };
}

export default function OverviewSection({ overview }: Props) {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-4">{overview.title}</h2>
      <p className="text-lg mb-6">{overview.fullDescription}</p>
      <Image src={overview.image.medium} alt={overview.image.alt} width={800} height={500} className="rounded-lg" />
    </div>
  );
}
import React from 'react';
import { DestinationDetailDto } from '@/lib/api/destinations/types';

interface Props {
  destination: DestinationDetailDto;
}

export default function OverviewSection({ destination }: Props) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              About {destination.name}
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>{destination.fullDescription || destination.shortDescription}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {destination.gallery.slice(0, 4).map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={image.medium || image.baseUrl} 
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
