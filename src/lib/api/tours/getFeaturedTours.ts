import { apiClient } from '@/lib/api/shared/apiClient';
import { getApiBaseUrl } from '@/lib/api/shared/getApiBaseUrl';
import type { RawTourCard, TourCardDto } from './types';
import { mapRawTourCardToDto } from './mapRawTourCardToDto';

export async function getFeaturedTours(): Promise<TourCardDto[]> {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/tours/card/featured`;
  const raw = await apiClient<RawTourCard[]>(url);
  return raw.map(mapRawTourCardToDto);
}