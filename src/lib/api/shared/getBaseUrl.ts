import { headers } from 'next/headers';

export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // Client-side — browser
    return process.env.NEXT_PUBLIC_API_BASE_URL || '';
  }

  // Server-side — SSR
  const headersList = headers();
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const host = headersList.get('host') || 'localhost:3000';
  return `${protocol}://${host}`;
}
