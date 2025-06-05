
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { CurrencySelector } from '@/components/shared/CurrencySelector';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/bsl_logo.png" alt="Best Sri Lanka Tours" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link href="/tours" className={`font-['Raleway'] font-medium ${pathname === '/tours' ? 'text-[#D4AF37] font-semibold' : 'text-[#0F4C81]'} hover:text-[#D4AF37] transition`}>
                Tours
              </Link>
              <Link href="/destinations" className={`font-['Raleway'] font-medium ${pathname === '/destinations' ? 'text-[#D4AF37] font-semibold' : 'text-[#0F4C81]'} hover:text-[#D4AF37] transition`}>
                Destinations
              </Link>
              <Link href="/experiences" className={`font-['Raleway'] font-medium ${pathname === '/experiences' ? 'text-[#D4AF37] font-semibold' : 'text-[#0F4C81]'} hover:text-[#D4AF37] transition`}>
                Experiences
              </Link>
              <Link href="/about" className={`font-['Raleway'] font-medium ${pathname === '/about' ? 'text-[#D4AF37] font-semibold' : 'text-[#0F4C81]'} hover:text-[#D4AF37] transition`}>
                About
              </Link>
              <Link href="/contact" className={`font-['Raleway'] font-medium ${pathname === '/contact' ? 'text-[#D4AF37] font-semibold' : 'text-[#0F4C81]'} hover:text-[#D4AF37] transition`}>
                Contact
              </Link>
            </nav>
            
            <div className="border-l border-gray-200 pl-4">
              <CurrencySelector />
            </div>
            
            <Link href="/contact" className="bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-medium py-2 px-6 rounded-md transition">
              Book Now
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-[#0F4C81] focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/tours" className="text-[#0F4C81] hover:text-[#D4AF37] transition" onClick={handleNavClick}>
                Tours
              </Link>
              <Link href="/destinations" className="text-[#0F4C81] hover:text-[#D4AF37] transition" onClick={handleNavClick}>
                Destinations
              </Link>
              <Link href="/experiences" className="text-[#0F4C81] hover:text-[#D4AF37] transition" onClick={handleNavClick}>
                Experiences
              </Link>
              <Link href="/about" className="text-[#0F4C81] hover:text-[#D4AF37] transition" onClick={handleNavClick}>
                About
              </Link>
              <Link href="/contact" className="text-[#0F4C81] hover:text-[#D4AF37] transition" onClick={handleNavClick}>
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-100">
                <CurrencySelector />
              </div>
              <Link href="/contact" className="bg-[#0F4C81] text-white py-2 px-4 rounded-md text-center" onClick={handleNavClick}>
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
