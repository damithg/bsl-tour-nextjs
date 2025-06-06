import type { RawDestinationCard, DestinationCardDto } from './types';

export function mapRawDestinationCardToDto(raw: RawDestinationCard): DestinationCardDto {
  const imageUrl = raw.card?.image?.publicId 
    ? `https://res.cloudinary.com/your-cloud-name/image/upload/w_800,h_600,c_fill/${raw.card.image.publicId}.jpg` 
    : '';

  return {
    id: raw.id,
    slug: raw.slug,
    name: raw.card?.header || '',
    description: raw.card?.body || '',
    tags: raw.card?.tags || [],
    imageUrl,
  };
}
