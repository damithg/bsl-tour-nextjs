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

function mapTourToDto(raw: RawTour): TourCardDto {
  return {
    id: raw.id,
    title: raw.card?.header || raw.name || '',
    slug: raw.slug,
    description: raw.card?.body || raw.summary || '',
    shortDescription: raw.card?.body || raw.summary || '',
    imageUrl: raw.card?.image?.medium || '',
    price: raw.startingFrom ?? 0,
    duration: parseInt(raw.duration || '0'),
    isFeatured: raw.featured ?? false,
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
