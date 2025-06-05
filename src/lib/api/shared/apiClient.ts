export class ApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export async function apiClient<T>(url: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(url, options);  // Native fetch everywhere
  if (!res.ok) {
    const message = await res.text();
    throw new ApiError(`${res.status} ${res.statusText} - ${message}`, res.status);
  }
  return res.json() as Promise<T>;
}
