'use client';

import React, { createContext, useContext, useState } from 'react';

export type Currency = {
  code: string;
  symbol: string;
  flag: string;
};

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  currencies: Currency[];
  formatPrice: (amount: number) => string;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ initialCurrency, children }: { initialCurrency?: Currency; children: React.ReactNode }) {
  const defaultCurrency: Currency = { code: 'USD', symbol: '$', flag: '/images/flags/us.svg' };

  const [currency, setCurrency] = useState<Currency>(initialCurrency || defaultCurrency);

  const currencies: Currency[] = [
    { code: 'USD', symbol: '$', flag: '/images/flags/us.svg' },
    { code: 'AUD', symbol: 'A$', flag: '/images/flags/au.svg' },
    { code: 'GBP', symbol: '£', flag: '/images/flags/gb.svg' },
    { code: 'EUR', symbol: '€', flag: '/images/flags/eu.svg' },
  ];

  const formatPrice = (amount: number): string => {
    return `${currency.symbol}${amount.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, currencies, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
