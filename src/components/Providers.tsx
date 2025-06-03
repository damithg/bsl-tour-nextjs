'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CurrencyProvider } from '../contexts/CurrencyContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
        {children}
      </CurrencyProvider>
    </QueryClientProvider>
  );
}