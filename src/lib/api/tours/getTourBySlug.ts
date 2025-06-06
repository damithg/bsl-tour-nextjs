import { apiClient } from '@/lib/api/shared/apiClient';
import { getApiBaseUrl } from '@/lib/api/shared/getApiBaseUrl';

export async function getTourBySlug(slug: string): Promise<any> {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/tours/${slug}`;
  return apiClient(url);
}
