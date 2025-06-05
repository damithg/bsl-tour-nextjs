'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useCurrency, Currency } from '@/contexts/CurrencyContext';

export function CurrencySelector() {
  const { currency, setCurrency, currencies } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (selected: Currency) => {
    setCurrency(selected);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Defensive render: if currency not yet loaded
  if (!currency) {
    return <div>Loading currency...</div>;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="text-lg">{currency.flag}</span>
        <span className="font-semibold">{currency.code}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-2 bg-white border rounded shadow-md z-10">
          {currencies.map(c => (
            <li key={c.code}>
              <button
                onClick={() => handleSelect(c)}
                className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 ${currency.code === c.code ? 'font-bold text-blue-600' : ''}`}
              >
                <span>{c.flag}</span>
                <span>{c.code}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
