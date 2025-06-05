
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.bsltours.com';

export const queryConfig = {
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
};
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.bsltours.com';

export const queryClient = {
  // Query client configuration can be added here if needed
};
