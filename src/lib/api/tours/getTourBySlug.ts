// src/lib/api/tours/getTourBySlug.ts

import type { TourData } from '@/lib/api/tours/types';

const API_BASE_URL = "https://bsl-tours-api-yqmyn.ondigitalocean.app";

export async function getTourBySlug(slug: string): Promise<TourData> {
  const response = await fetch(`${API_BASE_URL}/api/tours/${slug}`, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('Failed to fetch tour');
  }

  const raw = await response.json();

  // Map the new API format into your old TourData interface
  return {
    id: raw.id,
    slug: raw.slug,
    name: raw.card.header,
    title: raw.card.header,
    summary: raw.card.body,
    description: raw.card.body,
    duration: raw.duration,
    startingFrom: raw.startingFrom,
    currency: raw.currency,

    inclusions: [], // TODO: if provided
    exclusions: [], // TODO: if provided
    accommodationInfo: '',
    operatedBy: '',
    category: '',
    tags: raw.card.tags,

    heroImage: {
      publicId: raw.card.image?.publicId,
      alt: raw.card.image?.alt,
      baseUrl: raw.card.image?.baseUrl,
      small: raw.card.image?.small,
      medium: raw.card.image?.medium,
      large: raw.card.image?.large,
    },

    cardImage: undefined,
    galleryImages: [], // TODO: if provided
    itineraryDays: [],
    tourHighlights: [], // TODO: if provided
    reviews: [],
  };
}
