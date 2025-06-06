export interface TourCardDto {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  price: number;
  duration: number;
  isFeatured: boolean;
  tags: string[];
  rating: number | null;
  reviewCount: number;
}