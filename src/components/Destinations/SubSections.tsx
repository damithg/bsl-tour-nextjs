import React from 'react';
import { SubSectionItem } from '@/lib/api/destinations/types';
import Image from 'next/image';

interface Props {
  subSections: SubSectionItem[];
}

export default function SubSections({ subSections }: Props) {
  return (
    <div className="max-w-6xl mx-auto py-10">
      {subSections.map(sub => (
        <div key={sub.id} className="mb-10">
          <h3 className="text-2xl font-semibold mb-2">{sub.title}</h3>
          <p className="mb-4">{sub.fullDescription}</p>
          <Image src={sub.image.medium} alt={sub.image.alt} width={800} height={500} className="rounded-lg" />
        </div>
      ))}
    </div>
  );
}
