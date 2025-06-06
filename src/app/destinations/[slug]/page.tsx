
// src/app/destinations/[slug]/page.tsx

import { getDestinationDetailBySlug } from '@/lib/api/destinations/getDestinationDetailBySlug';
import DestinationDetailView from '@/components/Destinations/DestinationDetailView';
import { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const destination = await getDestinationDetailBySlug(params.slug);
  return {
    title: destination?.name,
    description: destination?.shortDescription,
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  console.log('Slug value:', params.slug); 
  const destination = await getDestinationDetailBySlug(params.slug);
  if (!destination) return <div>Destination not found</div>;

  return <DestinationDetailView destination={destination} />;
}
