import { API_BASE_URL } from './queryClient';

// Raw API type matching your Strapi JSON response
export interface RawTourPackage {
  id: number;
  name: string;
  slug: string;
  summary: string;
  duration: string;
  startingFrom: number;
  currency: string;
  featured: boolean;
  card?: {
    header?: string;
    heading?: string;
    body?: string;
    tags?: string[];
    image?: {
      publicId?: string;
      alt?: string;
      caption?: string;
      orientation?: string;
      baseUrl?: string;
      small?: string;
      medium?: string;
      large?: string;
    };
  };
}

// Flattened DTO your frontend will consume
export interface TourCardDto {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  price: number;
  duration: number;
  destinations?: string | null;
  rating?: number | null;
  reviewCount?: number | null;
  isFeatured: boolean;
}

// Utility function for handling API errors
export interface ApiError extends Error {
  status?: number;
  code?: string;
}

async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = new Error(`API Error: ${response.status} ${response.statusText}`) as ApiError;
    error.status = response.status;
    throw error;
  }
  return response.json();
}

// Mapping function: converts raw API to clean DTO
function mapTourToDto(rawTour: RawTourPackage): TourCardDto {
  return {
    id: rawTour.id,
    title: rawTour.card?.header || rawTour.name || '',
    slug: rawTour.slug,
    description: rawTour.card?.body || rawTour.summary || '',
    shortDescription: rawTour.card?.body || rawTour.summary || '',
    imageUrl: rawTour.card?.image?.small || '',
    price: rawTour.startingFrom,
    duration: parseInt(rawTour.duration) || 0,
    destinations: undefined, // You can map this if you expose destinations later
    rating: null,
    reviewCount: null,
    isFeatured: rawTour.featured ?? false,
  };
}

// Fetchers

export async function getFeaturedTours(): Promise<TourCardDto[]> {
  const response = await fetch(`${API_BASE_URL}/api/tours/featured`);
  const rawTours = await handleApiResponse<RawTourPackage[]>(response);
  return rawTours.map(mapTourToDto);
}

export async function getAllTours(): Promise<TourCardDto[]> {
  const response = await fetch(`${API_BASE_URL}/api/tours`);
  const rawTours = await handleApiResponse<RawTourPackage[]>(response);
  return rawTours.map(mapTourToDto);
}

export async function getTourById(id: number): Promise<TourCardDto> {
  const response = await fetch(`${API_BASE_URL}/api/tours/${id}`);
  const rawTour = await handleApiResponse<RawTourPackage>(response);
  return mapTourToDto(rawTour);
}

export async function getTourBySlug(slug: string): Promise<TourCardDto> {
  const response = await fetch(`${API_BASE_URL}/api/tours/slug/${slug}`);
  const rawTour = await handleApiResponse<RawTourPackage>(response);
  return mapTourToDto(rawTour);
}

// Example endpoints for destinations & testimonials
export async function getFeaturedDestinations() {
  const response = await fetch(`${API_BASE_URL}/api/destinations/featured`);
  return handleApiResponse(response);
}

export async function getTestimonials() {
  const response = await fetch(`${API_BASE_URL}/api/testimonials`);
  return handleApiResponse(response);
}
