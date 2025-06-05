import React from 'react';
import { FeatureItem } from '@/lib/api/destinations/types';
import Image from 'next/image';

interface Props {
  features: FeatureItem[];
}

export default function FeaturesSection({ features }: Props) {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-8">What to Explore</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {features.map(feature => (
          <div key={feature.id} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="mb-4">{feature.description}</p>
            <Image src={feature.image.medium} alt={feature.image.alt} width={600} height={400} className="rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
