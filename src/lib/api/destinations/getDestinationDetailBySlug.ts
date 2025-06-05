import { API_BASE_URL } from '@/lib/shared/queryClient';
import { DestinationDetailDto, RawDestination } from './types';
import { mapDestinationDetailDto } from './mapDestinationDetailDto';
import { apiClient } from '@/lib/api/apiClient';

export async function getDestinationDetailBySlug(slug: string): Promise<DestinationDetailDto> {
  const data = await apiClient<RawDestination>(`${API_BASE_URL}/api/destinations/${slug}`);
  return mapDestinationDetailDto(data);
}
