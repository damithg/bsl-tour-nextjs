import React from 'react';
import { NearbyAttractionDto } from '@/lib/api/destinations/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  attractions: NearbyAttractionDto[];
}

export default function NearbyAttractionsSection({ attractions }: Props) {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-8">Nearby Attractions</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {attractions.map(attraction => (
          <Link key={attraction.id} href={attraction.link} className="block">
            <Image src={attraction.image.medium} alt={attraction.image.alt} width={600} height={400} className="rounded-lg" />
            <div className="mt-2">
              <h3 className="text-xl font-semibold">{attraction.name}</h3>
              <p>{attraction.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
