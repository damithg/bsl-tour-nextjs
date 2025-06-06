import type { RawTourCard, TourCardDto } from './types';
import { getOptimizedImage } from '@/lib/api/shared/imageUtils';

export function mapRawTourCardToDto(raw: RawTourCard): TourCardDto {
  const imageUrl = getOptimizedImage(raw.card?.image);
  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.card?.header || '',
    description: raw.card?.body || '',
    imageUrl,
    duration: raw.duration || '',
    price: raw.startingFrom ?? 0,
    currency: raw.currency ?? '',
    tags: raw.card?.tags || [],
  };
}