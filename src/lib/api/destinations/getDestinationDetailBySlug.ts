import { apiClient } from '@/lib/api/shared/apiClient';
import { DestinationDetailDto, RawDestination } from './types';
import { mapDestinationDetailDto } from './mapDestinationDetailDto';

export async function getDestinationDetailBySlug(slug: string): Promise<DestinationDetailDto> {
  const url = `/api/destinations/${slug}`;
  const rawData = await apiClient<RawDestination>(url);
  return mapDestinationDetailDto(rawData);
}

