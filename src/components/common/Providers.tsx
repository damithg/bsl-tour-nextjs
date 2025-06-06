'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/api/shared/queryClient';
import { CurrencyProvider } from '@/contexts/CurrencyContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
        {children}
      </CurrencyProvider>
    </QueryClientProvider>
  );
}
