import type { TourCardDto } from './types';

export function mapTourToDto(raw: any): TourCardDto {
  const cardImage = raw?.card?.image;
  let imageUrl = cardImage?.medium || cardImage?.small || cardImage?.large || cardImage?.baseUrl || '';

  return {
    id: raw.id,
    title: raw.name ?? '',
    slug: raw.slug,
    description: raw.summary ?? '',
    shortDescription: raw.summary ?? '',
    imageUrl: imageUrl,
    price: raw.startingFrom ?? 0,
    duration: parseInt(raw.duration ?? '0', 10),
    isFeatured: raw.featured ?? false,
    tags: raw.card?.tags || raw.tags || [],
    rating: null,  // Populate if your API returns reviews
    reviewCount: 0,
  };
}
