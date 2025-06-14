import type { RawDestinationCard, DestinationCardDto } from './types';
import { getOptimizedImage } from '@/lib/api/shared/imageUtils';

export function mapRawDestinationCardToDto(raw: RawDestinationCard): DestinationCardDto {
  const imageUrl = getOptimizedImage(raw.card?.image);
  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.card?.header || '',
    description: raw.card?.body || '',
    imageUrl,
    tags: raw.card?.tags || [],
  };
}