
import React from 'react';
import { DestinationDetailDto } from '@/lib/api/destinations/types';
import Image from 'next/image';

interface Props {
  destination: DestinationDetailDto;
}

export default function OverviewSection({ destination }: Props) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Overview
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {destination.shortDescription}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {destination.fullDescription}
            </p>
          </div>
          <div className="relative">
            {destination.heroImage && (
              <Image
                src={destination.heroImage.medium || destination.heroImage.baseUrl}
                alt={destination.heroImage.alt || destination.name}
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
