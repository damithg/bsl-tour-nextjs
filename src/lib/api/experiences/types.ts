export interface RawExperienceCard {
  id: number;
  slug: string;
  duration?: string;
  price?: number;
  currency?: string;
  card: {
    header?: string;
    body?: string;
    tags?: string[];
    image?: { publicId?: string; };
  };
}
export interface ExperienceCardDto {
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