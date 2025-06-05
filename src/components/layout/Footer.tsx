
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const COLORS = {
  primary: '#0F4C81',
  secondary: '#D4AF37',
  accent: '#8B4513'
};

export default function Footer() {
  return (
    <footer className="bg-[#0F4C81] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/images/bsl_logo.png" alt="Best Sri Lanka Tours" className="h-10 w-auto filter brightness-0 invert" />
            <p className="text-blue-100">
              Discover the enchanting beauty of Sri Lanka with our expertly crafted tours and personalized experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/tours" className="text-blue-100 hover:text-white transition">Tours</Link></li>
              <li><Link href="/destinations" className="text-blue-100 hover:text-white transition">Destinations</Link></li>
              <li><Link href="/experiences" className="text-blue-100 hover:text-white transition">Experiences</Link></li>
              <li><Link href="/about" className="text-blue-100 hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="text-blue-100 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Travel Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Travel Info</h3>
            <ul className="space-y-2">
              <li><Link href="/pre-departure-info" className="text-blue-100 hover:text-white transition">Pre-Departure Info</Link></li>
              <li><Link href="/safety-updates" className="text-blue-100 hover:text-white transition">Safety Updates</Link></li>
              <li><Link href="/blog" className="text-blue-100 hover:text-white transition">Travel Blog</Link></li>
              <li><Link href="/careers" className="text-blue-100 hover:text-white transition">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-blue-200" />
                <span className="text-blue-100">123 Colombo Street, Colombo 07, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">+94 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">info@bestsrilanka.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-sm">
              © 2024 Best Sri Lanka Tours. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-blue-100 hover:text-white text-sm transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-blue-100 hover:text-white text-sm transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
