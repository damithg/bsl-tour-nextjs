import { apiClient } from '@/lib/api/shared/apiClient';
import { getApiBaseUrl } from '@/lib/api/shared/getApiBaseUrl';

export async function getDestinationDetailBySlug(slug: string): Promise<any> {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/destinations/${slug}`;
  return apiClient(url);
}
