import React from 'react';
import { RelatedTourDto } from '@/lib/api/destinations/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  tours: RelatedTourDto[];
}

export default function RelatedToursSection({ tours }: Props) {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-8">Related Tours</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map(tour => (
          <Link key={tour.id} href={tour.link} className="block bg-white shadow rounded-lg overflow-hidden">
            <Image src={tour.image.medium} alt={tour.image.alt} width={400} height={300} />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{tour.name}</h3>
              <p className="text-sm text-gray-500">{tour.duration}</p>
              <p className="mt-2 text-gray-700">{tour.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
