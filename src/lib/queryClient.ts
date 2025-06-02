
import { QueryClient, QueryFunction } from "@tanstack/react-query";

// API base URL - can be updated to switch between local and production
export const API_BASE_URL = "https://bsl-tours-api-yqmyn.ondigitalocean.app";

// Type definitions for API responses
export interface TourPackage {
  id: number;
  title: string;
  slug: string | null;
  description: string;
  shortDescription: string | null;
  excerpt?: string | null;
  imageUrl: string;
  price: number;
  duration: number;
  inclusions: string | null;
  exclusions: string | null;
  itinerary: string | null;
  isFeatured: boolean;
  destinationId: number | null;
  activities: string | null;
  includes: string | null;
  excludes: string | null;
  destinations: string | null;
  galleryImages?: string[];
  gallery?: string | null;
  highlights?: string | null;
  tourHighlights?: string | null;
  highlightsSummary?: string | null;
  groupSize?: string | null;
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface Destination {
  id: number;
  name: string;
  slug: string;
  excerpt?: string;
  shortDescription?: string;
  featured: boolean;
  region?: string;
  address?: string;
  latitude?: string;
  longitude?: string;
  recommendedDuration?: string;
  
  // Legacy properties for backward compatibility
  description?: string;
  imageUrl?: string;
  bestTimeToVisit?: string;
  weatherInfo?: string;
  
  // Allow any additional properties returned by the API
  [key: string]: any;
}

export interface Testimonial {
  id: number;
  CustomerName?: string;
  Content?: string;
  TourPackage?: string;
  Rating?: number;
  CustomerAvatar?: string;
  name?: string;
  content?: string;
  packageName?: string;
  rating?: number;
  clientName?: string;
  clientLocation?: string;
  comment?: string;
  tourName?: string | null;
  imageUrl?: string | null;
  [key: string]: any;
}

// Helper function to handle response errors
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status}: ${text || res.statusText}`);
  }
}

// API request function for mutations (POST, PUT, DELETE)
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown,
): Promise<Response> {
  const fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url}`;
  
  const res = await fetch(fullUrl, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
  });

  await throwIfResNotOk(res);
  return res;
}

// Type for handling unauthorized behavior
type UnauthorizedBehavior = "returnNull" | "throw";

// Query function factory for TanStack Query v5
export const getQueryFn = <TData>(options: {
  on401: UnauthorizedBehavior;
}): QueryFunction<TData> => {
  return async ({ queryKey }) => {
    const [basePath, ...params] = queryKey as string[];
    let path = basePath;
    
    if (params.length > 0) {
      if (basePath.includes('/destinations')) {
        path = `${basePath}/${params[0]}`;
      } else {
        path = `${basePath}/${params[0]}`;
      }
    }
    
    const url = path.startsWith('http') ? path : `${API_BASE_URL}${path}`;
    const res = await fetch(url);

    if (options.on401 === "returnNull" && res.status === 401) {
      return null as unknown as TData;
    }

    await throwIfResNotOk(res);
    return await res.json() as TData;
  };
};

// Configure the query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: 0,
      gcTime: 0,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
