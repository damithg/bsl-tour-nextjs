
import { API_BASE_URL, TourPackage } from './queryClient';

// Enhanced type definitions for better type safety
export interface TourCardDto {
  id: number;
  title: string;
  slug: string | null;
  description: string;
  shortDescription: string | null;
  imageUrl: string;
  price: number;
  duration: number;
  destinations: string | null;
  rating?: number;
  reviewCount?: number;
  isFeatured: boolean;
}

export interface ApiError extends Error {
  status?: number;
  code?: string;
}

// Utility function to handle API errors
async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = new Error(`API Error: ${response.status} ${response.statusText}`) as ApiError;
    error.status = response.status;
    throw error;
  }
  
  return response.json();
}

// Map raw API response to standardized DTO
function mapTourToDto(rawTour: TourPackage): TourCardDto {
  return {
    id: rawTour.id,
    title: rawTour.title,
    slug: rawTour.slug,
    description: rawTour.description,
    shortDescription: rawTour.shortDescription || rawTour.excerpt || rawTour.description,
    imageUrl: rawTour.imageUrl,
    price: rawTour.price,
    duration: rawTour.duration,
    destinations: rawTour.destinations,
    rating: rawTour.rating,
    reviewCount: rawTour.reviewCount,
    isFeatured: rawTour.isFeatured || rawTour.featured || false,
  };
}

// API functions
export async function getFeaturedTours(): Promise<TourCardDto[]> {
  const response = await fetch(`${API_BASE_URL}/api/tours/featured`);
  const rawTours = await handleApiResponse<TourPackage[]>(response);
  return rawTours.map(mapTourToDto);
}

export async function getAllTours(): Promise<TourCardDto[]> {
  const response = await fetch(`${API_BASE_URL}/api/tours`);
  const rawTours = await handleApiResponse<TourPackage[]>(response);
  return rawTours.map(mapTourToDto);
}

export async function getTourById(id: number): Promise<TourCardDto> {
  const response = await fetch(`${API_BASE_URL}/api/tours/${id}`);
  const rawTour = await handleApiResponse<TourPackage>(response);
  return mapTourToDto(rawTour);
}

export async function getTourBySlug(slug: string): Promise<TourCardDto> {
  const response = await fetch(`${API_BASE_URL}/api/tours/slug/${slug}`);
  const rawTour = await handleApiResponse<TourPackage>(response);
  return mapTourToDto(rawTour);
}

// Additional API functions for destinations, testimonials, etc.
export async function getFeaturedDestinations() {
  const response = await fetch(`${API_BASE_URL}/api/destinations/featured`);
  return handleApiResponse(response);
}

export async function getTestimonials() {
  const response = await fetch(`${API_BASE_URL}/api/testimonials`);
  return handleApiResponse(response);
}
