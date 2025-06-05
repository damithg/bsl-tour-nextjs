'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Currency {
  code: string;
  symbol: string;
  flag: string;
}

// Define your full currency list here
const supportedCurrencies: Currency[] = [
  { code: 'USD', symbol: '$', flag: '/images/flags/us.svg' },
  { code: 'AUD', symbol: 'A$', flag: '/images/flags/au.svg' },
  { code: 'GBP', symbol: '£', flag: '/images/flags/gb.svg' },
  { code: 'EUR', symbol: '€', flag: '/images/flags/eu.svg' },
];

// Default currency fallback
const defaultCurrency = supportedCurrencies[0];

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  currencies: Currency[];
}

// Create the context
const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

// Provider
export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>(defaultCurrency);

  // Optional: If you want to persist user's selected currency
  useEffect(() => {
    const storedCurrencyCode = localStorage.getItem('currencyCode');
    if (storedCurrencyCode) {
      const found = supportedCurrencies.find(c => c.code === storedCurrencyCode);
      if (found) {
        setCurrency(found);
      }
    }
  }, []);

  const handleSetCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    localStorage.setItem('currencyCode', newCurrency.code);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: handleSetCurrency, currencies: supportedCurrencies }}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Hook for accessing currency
export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used inside CurrencyProvider');
  }
  return context;
};

// Optional: helper for formatting
export const formatPrice = (amount: number, currency: Currency) => {
  return `${currency.symbol}${amount.toFixed(0)}`;
};
