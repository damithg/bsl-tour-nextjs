import { API_BASE_URL } from './queryClient';

// 🔧 Base raw types matching your real API response
export interface RawTour {
  id: number;
  slug: string;
  name?: string;
  summary?: string;
  startingFrom?: number;
  duration?: string;
  featured?: boolean;
  currency?: string;  // ✅ added
  tags?: string[];    // ✅ added (if sometimes top-level)
  reviews?: {
    id: number;
    reviewer: string;
    country: string;
    comment: string;
    rating: number;
  }[];                // ✅ added

  card?: {
    header?: string;
    body?: string;
    tags?: string[];
    image?: {
      baseUrl?: string;
      small?: string;
      medium?: string;
      large?: string;
      publicId?: string;
      alt?: string;
      caption?: string;
    };
  };
}


export interface RawDestination {
  id: number;
  slug: string;
  name?: string;
  shortDescription?: string;
  excerpt?: string;
  card?: {
    header?: string;
    body?: string;
    tags?: string[];
    image?: {
      baseUrl?: string;
      small?: string;
      medium?: string;
      large?: string;
      publicId?: string;
      alt?: string;
      caption?: string;
    };
  };
}

export interface RawExperience {
  id: number;
  slug: string;
  title?: string;
  description?: string;
  shortSummary?: string;
  price?: number;
  duration?: string;
  featured?: boolean;
  card?: {
    header?: string;
    body?: string;
    tags?: string[];
    image?: {
      baseUrl?: string;
      small?: string;
      medium?: string;
      large?: string;
      publicId?: string;
      alt?: string;
      caption?: string;
    };
  };
}

// 🔧 DTOs for frontend consumption
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

export interface DestinationCardDto {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

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

export interface ApiError extends Error {
  status?: number;
  code?: string;
}

// 🔧 Shared API error handler
async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = new Error(`API Error: ${response.status} ${response.statusText}`) as ApiError;
    error.status = response.status;
    throw error;
  }
  return response.json();
}

//
// 🔧 Mapping Functions
//

function mapTourToDto(rawTour: RawTour): TourCardDto {
  const cardImage = rawTour.card?.image;
  let imageUrl = cardImage?.medium || cardImage?.small || cardImage?.large || cardImage?.baseUrl || '';

  if (!imageUrl && cardImage?.publicId) {
    imageUrl = `https://res.cloudinary.com/best-sri-lanka-tours/image/upload/w_800,h_600,c_fill/${cardImage.publicId}`;
  }

  return {
    id: rawTour.id,
    title: rawTour.name ?? '',
    slug: rawTour.slug,
    description: rawTour.summary ?? '',
    shortDescription: rawTour.summary ?? '', 
    imageUrl: imageUrl,
    duration: parseInt(rawTour.duration ?? '0', 10),
    price: rawTour.startingFrom ?? 0,
    isFeatured: rawTour.featured ?? false,
    tags: rawTour.card?.tags || rawTour.tags || [],
    rating: rawTour.reviews?.length
      ? rawTour.reviews.reduce((sum, review) => sum + review.rating, 0) / rawTour.reviews.length
      : null,
    reviewCount: rawTour.reviews?.length || 0,
  };
}

function mapDestinationToDto(raw: RawDestination): DestinationCardDto {
  return {
    id: raw.id,
    name: raw.card?.header || raw.name || '',
    slug: raw.slug,
    description: raw.card?.body || raw.shortDescription || raw.excerpt || '',
    imageUrl: raw.card?.image?.medium || '',
    tags: raw.card?.tags || [],
  };
}

function mapExperienceToDto(raw: RawExperience): ExperienceCardDto {
  return {
    id: raw.id,
    title: raw.card?.header || raw.title || '',
    slug: raw.slug,
    description: raw.card?.body || raw.description || '',
    shortDescription: raw.shortSummary || raw.card?.body || '',
    imageUrl: raw.card?.image?.medium || '',
    duration: raw.duration || '',
    price: raw.price ?? 0,
    tags: raw.card?.tags || [],
  };
}

//
// 🔧 API Functions
//

// --- Tours ---
export async function getFeaturedTours(): Promise<TourCardDto[]> {
  const res = await fetch(`${API_BASE_URL}/api/tours/featured`);
  const data = await handleApiResponse<RawTour[]>(res);
  return data.map(mapTourToDto);
}

export async function getAllTours(): Promise<TourCardDto[]> {
  const res = await fetch(`${API_BASE_URL}/api/tours`);
  const data = await handleApiResponse<RawTour[]>(res);
  return data.map(mapTourToDto);
}

// --- Destinations ---
export async function getFeaturedDestinations(): Promise<DestinationCardDto[]> {
  const res = await fetch(`${API_BASE_URL}/api/destinations`);
  const data = await handleApiResponse<RawDestination[]>(res);
  return data.map(mapDestinationToDto);
}

export async function getAllDestinations(): Promise<DestinationCardDto[]> {
  const res = await fetch(`${API_BASE_URL}/api/destinations`);
  const data = await handleApiResponse<RawDestination[]>(res);
  return data.map(mapDestinationToDto);
}

export async function getDestinationBySlug(slug: string): Promise<DestinationCardDto> {
  const res = await fetch(`${API_BASE_URL}/api/destinations/slug/${slug}`);
  const data = await handleApiResponse<RawDestination>(res);
  return mapDestinationToDto(data);
}

// --- Experiences ---
export async function getFeaturedExperiences(): Promise<ExperienceCardDto[]> {
  const res = await fetch(`${API_BASE_URL}/api/experiences/featured`);
  const data = await handleApiResponse<RawExperience[]>(res);
  return data.map(mapExperienceToDto);
}

export async function getAllExperiences(): Promise<ExperienceCardDto[]> {
  const res = await fetch(`${API_BASE_URL}/api/experiences`);
  const data = await handleApiResponse<RawExperience[]>(res);
  return data.map(mapExperienceToDto);
}
