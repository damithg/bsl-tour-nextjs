let ssrFetch: typeof fetch;

// Dynamically polyfill fetch for SSR if needed
if (typeof window === 'undefined') {
  // We're on server (SSR)
  // Use native fetch if supported (Next.js 14+ uses undici internally)
  if (global.fetch) {
    ssrFetch = global.fetch;
  } else {
    // Fallback for older Node versions (Optional safety)
    // You can add: npm install node-fetch if desired for older Node versions
    ssrFetch = require('node-fetch');
  }
} else {
  // Browser fetch
  ssrFetch = fetch;
}

// API Error wrapper
export class ApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export async function apiClient<T>(url: string, options: RequestInit = {}): Promise<T> {
  const res = await ssrFetch(url, options);
  if (!res.ok) {
    const message = await res.text();
    throw new ApiError(`${res.status} ${res.statusText} - ${message}`, res.status);
  }
  return res.json() as Promise<T>;
}
