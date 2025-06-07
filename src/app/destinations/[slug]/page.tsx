// src/app/destinations/[slug]/page.tsx

import { getDestinationDetailBySlug } from '@/lib/api/destinations/getDestinationDetailBySlug';
import DestinationDetailView from '@/components/Destinations/DestinationDetailView';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getDestinationDetailBySlug(slug);
  return {
    title: destination?.name,
    description: destination?.shortDescription,
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  console.log('Slug value:', slug); 
  const destination = await getDestinationDetailBySlug(slug);
  if (!destination) return <div>Destination not found</div>;

  return <DestinationDetailView destination={destination} />;
}