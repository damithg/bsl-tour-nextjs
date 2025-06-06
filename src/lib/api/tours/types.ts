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

// src/lib/api/tours/types.ts

export interface TourData {
  id: number;
  documentId?: string;
  name: string;
  title?: string;
  slug: string;
  summary: string;
  description?: string;
  duration: string;
  startingFrom: number;
  currency: string;
  inclusions: string[];
  exclusions: string[];
  accommodationInfo?: string;
  operatedBy?: string;
  category?: string;
  tags?: string[];
  minGroupSize?: number;
  maxGroupSize?: number;
  heroImage?: {
    publicId?: string;
    alt?: string;
    medium?: string;
    small?: string;
    large?: string;
    baseUrl?: string;
  };
  cardImage?: {
    publicId?: string;
    alt?: string;
    medium?: string;
    small?: string;
    large?: string;
    baseUrl?: string;
  };
  galleryImages?: Array<{
    publicId?: string;
    alt?: string;
    medium?: string;
    small?: string;
    large?: string;
    baseUrl?: string;
  }>;
  itineraryDays?: Array<{
    day: number;
    title: string;
    description: string;
    accommodation?: string;
    imageUrl?: string;
  }>;
  tourHighlights?: string[];
  reviews?: Array<{
    id: number;
    reviewer: string;
    country: string;
    comment: string;
    rating: number;
  }>;
}
