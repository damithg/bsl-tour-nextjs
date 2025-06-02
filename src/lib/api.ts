import {
  API_BASE_URL,
  RawTourPackage,
  Destination,
  Testimonial,
} from "./queryClient";

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

// Destination DTO
export interface DestinationCardDto {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

// Utility function for handling API errors
export interface ApiError extends Error {
  status?: number;
  code?: string;
}

async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = new Error(
      `API Error: ${response.status} ${response.statusText}`,
    ) as ApiError;
    error.status = response.status;
    throw error;
  }
  return response.json();
}

// Mapping function: converts raw API to clean DTO
function mapTourToDto(rawTour: RawTourPackage): TourCardDto {
  return {
    id: rawTour.id,
    title: rawTour.card?.header || rawTour.name || "",
    slug: rawTour.slug,
    description: rawTour.card?.body || rawTour.summary || "",
    shortDescription: rawTour.card?.body || rawTour.summary || "",
    imageUrl: rawTour.card?.image?.medium || "",
    price: rawTour.startingFrom,
    duration: parseInt(rawTour.duration) || 0,
    destinations: undefined, // You can map this if you expose destinations later
    rating: null,
    reviewCount: null,
    isFeatured: rawTour.featured ?? false,
  };
}

function mapDestinationToDto(raw: Destination): DestinationCardDto {
  return {
    id: raw.id,
    name: raw.card?.header || raw.name || "", // Prefer card header
    slug: raw.slug,
    description: raw.card?.body || raw.shortDescription || raw.excerpt || "",
    imageUrl: raw.card?.image?.medium || "",
    tags: raw.card?.tags || [],
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

// Destination endpoints
// Fix this later to have /api/destinations/featured
export async function getFeaturedDestinations(): Promise<DestinationCardDto[]> {
  const response = await fetch(`${API_BASE_URL}/api/destinations`);
  const rawDestinations = await handleApiResponse<Destination[]>(response);
  return rawDestinations.map(mapDestinationToDto);
}

export async function getAllDestinations(): Promise<DestinationCardDto[]> {
  const response = await fetch(`${API_BASE_URL}/api/destinations`);
  const rawDestinations = await handleApiResponse<Destination[]>(response);
  return rawDestinations.map(mapDestinationToDto);
}
