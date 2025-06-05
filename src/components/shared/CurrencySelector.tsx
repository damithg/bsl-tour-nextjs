
'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function CurrencySelector() {
  const { currentCurrency, setCurrency, currencies } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCurrencyChange = (currencyCode: string) => {
    setCurrency(currencyCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-[#0F4C81] hover:text-[#D4AF37] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F4C81] focus:ring-opacity-20 rounded-md"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg">{currentCurrency.flag}</span>
        <span>{currentCurrency.code}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 z-50">
          <div className="py-1">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => handleCurrencyChange(currency.code)}
                className={`flex items-center space-x-3 w-full px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                  currentCurrency.code === currency.code ? 'bg-blue-50 text-[#0F4C81]' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{currency.flag}</span>
                <span className="font-medium">{currency.code}</span>
                <span className="text-gray-500">{currency.symbol}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
