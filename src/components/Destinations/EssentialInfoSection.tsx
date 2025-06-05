import React from 'react';
import { EssentialInfoDto } from '@/lib/api/destinations/types';

interface Props {
  info: EssentialInfoDto;
}

export default function EssentialInfoSection({ info }: Props) {
  return (
    <div className="max-w-6xl mx-auto py-10 space-y-6">
      <h2 className="text-3xl font-semibold">Essential Info</h2>
      <p><strong>Best time to visit:</strong> {info.bestTimeToVisit}</p>
      <p><strong>Nearest airport:</strong> {info.nearestAirport}</p>
      <p><strong>Transport options:</strong> {info.transportOptions.join(', ')}</p>
      <p><strong>Highlights:</strong> {info.highlights.join(', ')}</p>
    </div>
  );
}
