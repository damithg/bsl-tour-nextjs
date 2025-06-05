'use client';

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CurrencyProvider } from '@/contexts/CurrencyContext';
import { Currency } from '@/lib/types';

interface ProvidersProps {
  children: ReactNode;
  initialCurrency: Currency;
}

export function Providers({ children, initialCurrency }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider initialCurrency={initialCurrency}>
        {children}
      </CurrencyProvider>
    </QueryClientProvider>
  );
}
