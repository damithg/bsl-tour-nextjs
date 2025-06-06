export interface ExperienceCardDto {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  duration: string;
  price: number;
  tags: string[];
}