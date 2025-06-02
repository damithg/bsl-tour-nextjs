import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Base URL for your backend API
export const API_BASE_URL = "https://bsl-tours-api-yqmyn.ondigitalocean.app";

// --- RAW API Type Definitions ---
// These types reflect your raw Strapi response structures

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
  description?: string;
  imageUrl?: string;
  bestTimeToVisit?: string;
  weatherInfo?: string;
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

// --- LOW LEVEL HELPER ---

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status}: ${text || res.statusText}`);
  }
}

// POST/PUT/DELETE request function (optional: useful for future admin features)
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

// --- GENERIC QUERY FUNCTION (Tanstack Query V5) ---

type UnauthorizedBehavior = "returnNull" | "throw";

export const getQueryFn = <TData>(options: {
  on401: UnauthorizedBehavior;
}): QueryFunction<TData> => {
  return async ({ queryKey }) => {
    const [basePath, ...params] = queryKey as string[];
    let path = basePath;

    if (params.length > 0) {
      path = `${basePath}/${params[0]}`;
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

// --- GLOBAL QUERY CLIENT INSTANCE ---

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
