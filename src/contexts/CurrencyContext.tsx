'use client';

import React, { createContext, useContext, useState } from 'react';
import { Currency } from '@/lib/types';

interface CurrencyContextProps {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  currencies: Currency[];
}

const CurrencyContext = createContext<CurrencyContextProps | undefined>(undefined);

export function CurrencyProvider({
  initialCurrency,
  children,
}: {
  initialCurrency: Currency;
  children: React.ReactNode;
}) {
  const [currency, setCurrency] = useState(initialCurrency);

  const currencies: Currency[] = [
    { code: 'USD', symbol: '$', flag: '/images/flags/us.svg' },
    { code: 'AUD', symbol: 'A$', flag: '/images/flags/au.svg' },
    { code: 'GBP', symbol: '£', flag: '/images/flags/gb.svg' },
    { code: 'EUR', symbol: '€', flag: '/images/flags/eu.svg' },
  ];

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, currencies }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
}
