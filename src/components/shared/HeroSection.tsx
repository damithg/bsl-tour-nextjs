
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const COLORS = {
  primary: '#0F4C81',
  secondary: '#D4AF37',
  accent: '#8B4513'
};

const heroImages = [
  'https://res.cloudinary.com/drsjp6bqz/image/upload/v1746208326/shutterstock_1068884744_1_fza0zi.jpg',
  'https://res.cloudinary.com/drsjp6bqz/image/upload/v1744007986/activities/ella-nine-arch-train.jpg',
  'https://res.cloudinary.com/drsjp6bqz/image/upload/v1744094008/activities/mirissa-beach.jpg'
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Sri Lanka landscape ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Discover the Magic of{' '}
          <span style={{ color: COLORS.secondary }}>Sri Lanka</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Experience luxury tours, cultural wonders, and breathtaking landscapes in the Pearl of the Indian Ocean
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/tours"
            className="px-8 py-4 bg-white text-[#0F4C81] hover:bg-gray-100 rounded-lg transition-colors duration-300 font-semibold text-lg"
          >
            Explore Tours
          </Link>
          <Link
            href="/destinations"
            className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors duration-300 font-semibold text-lg"
          >
            View Destinations
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1" style={{ color: COLORS.secondary }}>15+</div>
            <div className="text-sm text-white/80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1" style={{ color: COLORS.secondary }}>500+</div>
            <div className="text-sm text-white/80">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1" style={{ color: COLORS.secondary }}>20+</div>
            <div className="text-sm text-white/80">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1" style={{ color: COLORS.secondary }}>24/7</div>
            <div className="text-sm text-white/80">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
