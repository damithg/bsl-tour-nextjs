
// src/app/destinations/[slug]/page.tsx

import { Metadata } from 'next';
import DestinationDetailView from '@/components/Destinations/DestinationDetailView';
import { getDestinationDetailBySlug } from '@/lib/api/destinations/getDestinationDetailBySlug';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getDestinationDetailBySlug(slug);
  return {
    title: destination?.name,
    description: destination?.shortDescription,
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = await getDestinationDetailBySlug(slug);
  if (!destination) return <div>Destination not found</div>;

  return <DestinationDetailView destination={destination} />;
}
