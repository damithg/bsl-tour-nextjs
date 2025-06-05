import useSWR, { SWRConfiguration } from 'swr';
import { apiClient } from './api/shared/apiClient';

export const fetcher = <T>(url: string) => apiClient<T>(url);

export const swrConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  errorRetryCount: 1,
  dedupingInterval: 1000 * 60, // 1 min
};

export function useApi<T>(url: string, config: SWRConfiguration = {}) {
  return useSWR<T>(url, fetcher, { ...swrConfig, ...config });
}
