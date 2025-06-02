
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Tours', href: '/tours' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    )}>
      <div className="container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl md:text-3xl font-bold text-primary">
              BSL Tours
            </div>
            <div className="hidden sm:block text-sm text-gray-600">
              Best Sri Lanka
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-gray-700'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4 text-primary" />
              <span>+94 77 123 4567</span>
            </div>
            <Link
              href="/contact"
              className="btn-primary text-sm px-4 py-2"
            >
              Plan Trip
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block py-2 text-base font-medium transition-colors',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+94 77 123 4567</span>
              </div>
              <Link
                href="/contact"
                className="btn-primary w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
