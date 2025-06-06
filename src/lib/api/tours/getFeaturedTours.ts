import { apiClient } from '@/lib/api/shared/apiClient';
import { getApiBaseUrl } from '@/lib/api/shared/getApiBaseUrl';
import { mapTourToDto } from './mapTourToDto';
import type { TourCardDto } from './types';

export async function getFeaturedTours(): Promise<TourCardDto[]> {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/tours/featured`;

  const rawTours = await apiClient<any[]>(url);
  return rawTours.map(mapTourToDto);
}
