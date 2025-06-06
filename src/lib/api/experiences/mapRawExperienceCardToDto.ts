import type { RawExperienceCard, ExperienceCardDto } from './types';
import { getOptimizedImage } from '@/lib/api/shared/imageUtils';

export function mapRawExperienceCardToDto(raw: RawExperienceCard): ExperienceCardDto {
  const imageUrl = getOptimizedImage(raw.card?.image);
  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.card?.header || '',
    description: raw.card?.body || '',
    imageUrl,
    duration: raw.duration || '',
    price: raw.price ?? 0,
    currency: raw.currency ?? '',
    tags: raw.card?.tags || [],
  };
}