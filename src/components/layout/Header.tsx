'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CurrencySelector from '@/components/shared/CurrencySelector';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tours', href: '/tours' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className={`fixed w-full bg-white bg-opacity-95 shadow-md z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/bsl_logo.png" alt="Best Sri Lanka Tours Logo" width={150} height={50} priority />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex space-x-6">
            {navLinks.map(({ label, href }) => (
              <Link key={href} href={href} className={`font-raleway font-medium ${isActive(href) ? 'text-primary' : 'text-[#0F4C81]'} hover:text-primary transition`}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="border-l border-gray-200 pl-4">
            <CurrencySelector />
          </div>

          <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-md transition">
            Book Now
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#0F4C81] focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white pt-2 pb-4 px-4`}>
        {navLinks.map(({ label, href }) => (
          <Link key={href} href={href} className={`block py-2 font-medium ${isActive(href) ? 'text-primary' : 'text-[#0F4C81]'} hover:text-primary`} onClick={() => setIsMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <div className="py-3 border-t border-gray-100 mt-2">
          <span className="text-sm text-gray-500 mb-2 block">Select Currency</span>
          <CurrencySelector />
        </div>
        <Link href="/contact" className="block mt-4 bg-primary hover:bg-primary/90 text-white text-center font-medium py-2 px-4 rounded-md transition">
          Book Now
        </Link>
      </div>
    </header>
  );
}
