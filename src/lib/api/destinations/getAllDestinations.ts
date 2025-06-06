import { apiClient } from '@/lib/api/shared/apiClient';
import { getApiBaseUrl } from '@/lib/api/shared/getApiBaseUrl';
import type { RawDestinationCard, DestinationCardDto } from './types';
import { mapRawDestinationCardToDto } from './mapRawDestinationCardToDto';

export async function getAllDestinations(): Promise<DestinationCardDto[]> {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/destinations/all/card`;
  const raw = await apiClient<RawDestinationCard[]>(url);
  return raw.map(mapRawDestinationCardToDto);
}
