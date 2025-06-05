export class ApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export async function apiClient<T>(url: string, options: RequestInit = {}): Promise<T> {
  const fullUrl = url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_SITE_URL}${url}`;
  const res = await fetch(fullUrl, options);

  if (!res.ok) {
    const message = await res.text();
    throw new ApiError(`${res.status} ${res.statusText} - ${message}`, res.status);
  }
  return res.json() as Promise<T>;
}
