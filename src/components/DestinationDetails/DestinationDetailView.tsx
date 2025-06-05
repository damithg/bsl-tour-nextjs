import React from 'react';
import Image from 'next/image';
import Highlights from './Highlights';
import Inclusions from './Inclusions';
import WhatToBring from './WhatToBring';
import LocationBlock from './LocationBlock';
import GalleryCarousel from './GalleryCarousel';
import { ExperienceDto } from '@/lib/types';

interface DestinationDetailViewProps {
  destination: ExperienceDto;
}

const DestinationDetailView: React.FC<DestinationDetailViewProps> = ({ destination }) => {
  const { Name, ShortSummary, Card, GalleryImages, Highlights: highlights, Inclusions: inclusions, WhatToBring: whatToBring, Location } = destination;

  return (
    <div className="flex flex-col">
      <div className="relative h-[60vh] w-full">
        <Image
          src={Card?.Image?.url || '/placeholder.jpg'}
          alt={Name}
          layout="fill"
          objectFit="cover"
          className="rounded-b-3xl"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">{Name}</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-4 md:p-8">
        <p className="text-lg text-gray-700">{ShortSummary}</p>
      </div>

      {GalleryImages?.length > 0 && (
        <div className="max-w-5xl mx-auto mb-10">
          <GalleryCarousel images={GalleryImages} />
        </div>
      )}

      {highlights?.length > 0 && (
        <div className="max-w-5xl mx-auto p-4 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          <Highlights highlights={highlights} />
        </div>
      )}

      {inclusions?.length > 0 && (
        <div className="max-w-5xl mx-auto p-4 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">Inclusions</h2>
          <Inclusions inclusions={inclusions} />
        </div>
      )}

      {whatToBring?.length > 0 && (
        <div className="max-w-5xl mx-auto p-4 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">What to Bring</h2>
          <WhatToBring items={whatToBring} />
        </div>
      )}

      {Location && (
        <div className="max-w-5xl mx-auto p-4 md:p-8">
          <LocationBlock location={Location} />
        </div>
      )}
    </div>
  );
};

export default DestinationDetailView;
