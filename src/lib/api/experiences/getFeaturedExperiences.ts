import { apiClient } from '@/lib/api/shared/apiClient';
import { getApiBaseUrl } from '@/lib/api/shared/getApiBaseUrl';
import type { RawExperienceCard, ExperienceCardDto } from './types';
import { mapRawExperienceCardToDto } from './mapRawExperienceCardToDto';

export async function getFeaturedExperiences(): Promise<ExperienceCardDto[]> {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/experiences/card/featured`;
  const raw = await apiClient<RawExperienceCard[]>(url);
  return raw.map(mapRawExperienceCardToDto);
}