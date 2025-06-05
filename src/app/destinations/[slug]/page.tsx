// src/app/destinations/[slug]/page.tsx

import { Metadata } from 'next';
import { fetchDestinationBySlug } from '@/lib/api';
import DestinationDetailView from '@/components/DestinationDetails/DestinationDetailView';

interface DestinationDetailPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: DestinationDetailPageProps): Promise<Metadata> {
  const destination = await fetchDestinationBySlug(params.slug);
  return {
    title: destination?.Seo?.MetaTitle || destination?.Name,
    description: destination?.Seo?.MetaDescription || destination?.ShortSummary,
  };
}

export default async function DestinationDetailPage({ params }: DestinationDetailPageProps) {
  const destination = await fetchDestinationBySlug(params.slug);

  if (!destination) {
    return <div className="p-8 text-center text-gray-500">Destination not found</div>;
  }

  return <DestinationDetailView destination={destination} />;
}