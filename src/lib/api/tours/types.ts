export interface RawTourCard {
  id: number;
  slug: string;
  duration?: string;
  startingFrom?: number;
  currency?: string;
  card: {
    header?: string;
    body?: string;
    tags?: string[];
    image?: { publicId?: string; };
  };
}
export interface TourCardDto {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  price: number;
  currency: string;
  tags: string[];
}