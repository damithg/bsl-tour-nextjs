export function getApiBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }

  const { headers } = require('next/headers');
  const headersList = headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  return `${protocol}://${host}`;
}
