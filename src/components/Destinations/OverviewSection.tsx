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
