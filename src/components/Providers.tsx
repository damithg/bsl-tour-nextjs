'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { Hydrate } from '@tanstack/react-query-next-experimental';
import { queryClient } from '@/lib/queryClient';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={undefined}>
        {children}
      </Hydrate>
    </QueryClientProvider>
  );
}
