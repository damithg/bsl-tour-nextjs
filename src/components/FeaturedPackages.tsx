
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin, Clock, Star } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getFeaturedTours, TourCardDto } from '@/lib/api';

const COLORS = {
  primary: '#0F4C81',
  secondary: '#D4AF37',
  accent: '#8B4513'
};

export default function FeaturedPackages() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { data: tours = [], isLoading, error } = useQuery<TourCardDto[]>({
    queryKey: ['featuredTours'],
    queryFn: getFeaturedTours,
  });

  const checkScrollable = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  useEffect(() => {
    checkScrollable();
  }, [tours]);

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

  if (isLoading) {
    return (
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Luxury Sri Lanka Tours
            </h2>
            <p className="text-lg text-gray-700/80">
              Each journey is tailor-made to reflect your preferences, with private guides, luxury accommodations, and unforgettable experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-[#F8F5F0] rounded-lg overflow-hidden shadow-lg animate-pulse">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="flex items-center mb-4">
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  </div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-300 rounded w-12"></div>
                      <div className="h-6 bg-gray-300 rounded w-16"></div>
                    </div>
                    <div className="h-10 bg-gray-300 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Luxury Sri Lanka Tours
            </h2>
            <p className="text-lg text-gray-700/80">Unable to load tours at the moment. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
            Luxury Sri Lanka Tours
          </h2>
          <p className="text-lg text-gray-700/80">
            Each journey is tailor-made to reflect your preferences, with private guides, luxury accommodations, and unforgettable experiences.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={scrollLeft}
            style={{ color: COLORS.primary }}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -ml-4 transition ${
              !canScrollLeft ? "opacity-0 cursor-default" : "opacity-100 cursor-pointer"
            }`}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={scrollRight}
            style={{ color: COLORS.primary }}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -mr-4 transition ${
              !canScrollRight ? "opacity-0 cursor-default" : "opacity-100 cursor-pointer"
            }`}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
            onScroll={checkScrollable}
          >
            {tours.map((tour: TourCardDto) => (
              <div key={tour.id} className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.imageUrl}
                      alt={tour.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div 
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold text-white backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(212, 175, 55, 0.9)' }}
                    >
                      <Clock className="inline w-3 h-3 mr-1" />
                      {tour.duration} Days
                    </div>
                    {tour.rating && (
                      <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-gray-700">{tour.rating}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 font-['Playfair_Display']">
                        {tour.title}
                      </h3>
                      {tour.destinations && (
                        <div className="flex items-center text-gray-600 text-sm mb-3">
                          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="line-clamp-1">{tour.destinations}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {tour.shortDescription || tour.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Starting from</p>
                        <span className="text-2xl font-bold text-[#0F4C81]">
                          ${tour.price}
                        </span>
                        <p className="text-xs text-gray-500">per person</p>
                      </div>
                      <Link
                        href={`/tours/${tour.slug || tour.id}`}
                        className="px-6 py-2.5 bg-[#0F4C81] text-white hover:bg-[#0F4C81]/90 rounded-lg transition-colors font-medium text-sm"
                      >
                        View Tour
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
