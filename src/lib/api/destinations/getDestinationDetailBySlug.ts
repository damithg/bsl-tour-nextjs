import { API_BASE_URL } from '@/lib/shared/queryClient';
import { DestinationDetailDto, RawDestination } from './types';
import { mapDestinationDetailDto } from './mapDestinationDetailDto';
import { apiClient } from '@/lib/api/shared/apiClient';

export async function getDestinationDetailBySlug(slug: string): Promise<DestinationDetailDto> {
  const url = `/api/destinations/${slug}`;
  const rawData = await apiClient<RawDestination>(url);
  return mapDestinationDetailDto(rawData);
}