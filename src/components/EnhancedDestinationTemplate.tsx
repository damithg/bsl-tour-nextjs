// src/components/EnhancedDestinationTemplate.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar, MapPin, Users, Clock } from 'lucide-react';
import { useEmblaCarousel } from 'embla-carousel-react';
import { useCurrency } from '@/contexts/CurrencyContext';
import { DestinationDetailDto } from '@/lib/types';

interface Props {
  destination: DestinationDetailDto;
}

export function EnhancedDestinationTemplate({ destination }: Props) {
  const { formatPrice } = useCurrency();
  const [emblaRef] = useEmblaCarousel({ loop: true });

  const heroImageUrl = destination.heroImage?.large || destination.heroImage?.baseUrl || '/images/default-hero.jpg';

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-[#0F4C81]">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src={heroImageUrl} alt={destination.name} fill className="object-cover" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <nav className="flex text-white/90 mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="flex items-center text-sm font-medium hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="mx-1 w-5 h-5 text-white/60" />
                <span className="text-sm font-medium">{destination.name}</span>
              </li>
            </ol>
          </nav>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6">{destination.name}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{destination.summary}</p>
        </div>
      </section>

      {/* Gallery */}
      {destination.gallery?.length > 0 && (
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {destination.gallery.map((img, idx) => (
                  <div key={idx} className="flex-[0_0_80%] mr-4 relative h-[400px] rounded-lg overflow-hidden">
                    <Image src={img.large} alt={img.alt || 'Gallery image'} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Playfair_Display'] text-3xl mb-4 text-[#0F4C81]">Overview</h2>
          <p className="text-lg text-gray-700/80">{destination.description}</p>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <Calendar className="text-[#0F4C81] w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500">Best Time</p>
              <p className="font-medium">{destination.bestTime || 'Year Round'}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Users className="text-[#0F4C81] w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500">Group Size</p>
              <p className="font-medium">{destination.groupSize || 'Private / Custom'}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-[#0F4C81] w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500">Region</p>
              <p className="font-medium">{destination.region || 'Sri Lanka'}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="text-[#0F4C81] w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="font-medium">{destination.duration || 'Flexible'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h3 className="font-['Playfair_Display'] text-3xl mb-6 text-[#0F4C81]">Ready to Explore {destination.name}?</h3>
          <Link href="/contact" className="bg-[#0F4C81] text-white px-10 py-4 rounded-full font-medium hover:bg-opacity-90 transition">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
