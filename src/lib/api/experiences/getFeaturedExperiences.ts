import { apiClient } from '@/lib/api/shared/apiClient';
import { getApiBaseUrl } from '@/lib/api/shared/getApiBaseUrl';
import type { ExperienceCardDto } from './types';

export async function getFeaturedExperiences(): Promise<ExperienceCardDto[]> {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/experiences/featured`;
  return apiClient(url);
}
