'use client';

import { useState, useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { DestinationCardDto } from '@/lib/api/destinations/types';
import { getFeaturedDestinations } from '@/lib/api/destinations/getFeaturedDestinations';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface DestinationShowcaseProps {
  initialData: DestinationCardDto[];
}

const COLORS = {
  primary: '#0F4C81',
  secondary: '#D4AF37',
  accent: '#8B4513'
};

export default function DestinationShowcase({ initialData }: DestinationShowcaseProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { data: destinations = [] } = useQuery<DestinationCardDto[]>({
    queryKey: ['featuredDestinations'],
    queryFn: getFeaturedDestinations,
    initialData,
  });

  const checkScrollable = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollable();
  }, [destinations]);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
      setTimeout(checkScrollable, 300);
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
      setTimeout(checkScrollable, 300);
    }
  };

  return (
    <section className="py-20 bg-[#F8F5F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
            Iconic Destinations
          </h2>
          <p className="text-lg text-gray-700/80">
            Discover Sri Lanka's most breathtaking and cultural destinations.
          </p>
        </div>

        <div className="relative">
          <button onClick={scrollLeft} style={{ color: COLORS.primary }}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -ml-4 transition ${!canScrollLeft ? "opacity-0 cursor-default" : "opacity-100 cursor-pointer"}`}
            disabled={!canScrollLeft} aria-label="Scroll left">
            <ChevronLeft size={24} />
          </button>

          <button onClick={scrollRight} style={{ color: COLORS.primary }}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -mr-4 transition ${!canScrollRight ? "opacity-0 cursor-default" : "opacity-100 cursor-pointer"}`}
            disabled={!canScrollRight} aria-label="Scroll right">
            <ChevronRight size={24} />
          </button>

          <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide" onScroll={checkScrollable}>
            {destinations.map((destination: DestinationCardDto) => (
              <div key={destination.id} className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.imageUrl}
                      alt={destination.name}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 font-['Playfair_Display']">
                        {destination.name}
                      </h3>
                    </div>
                    <p className="text-gray-700/70 mb-4 line-clamp-3">
                      {destination.description}
                    </p>
                    <div className="flex items-center justify-between">                     
                      <Link href={`/destinations/${destination.slug}`}
                        className="px-6 py-2.5 bg-[#0F4C81] text-white hover:bg-[#0F4C81]/90 rounded-lg transition-colors font-medium text-sm">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
