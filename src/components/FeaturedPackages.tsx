'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  location: string;
}

export default function FeaturedPackages() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { data: tours = [], isLoading, error } = useQuery({
    queryKey: ['featured-tours'],
    queryFn: async () => {
      const response = await fetch('https://bsl-tours-api-yqmyn.ondigitalocean.app/api/tours/featured');
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      return response.json();
    },
  });

  const checkScrollable = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Tour Packages</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="flex gap-6 justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-80 h-96 bg-muted animate-pulse rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Tour Packages</h2>
            <p className="text-muted-foreground">Unable to load tours at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Tour Packages</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            onScroll={checkScrollable}
          >
            {tours.map((tour: Tour) => (
              <div key={tour.id} className="flex-none w-80">
                <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {tour.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-card-foreground line-clamp-2">
                        {tour.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {tour.location}
                    </p>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {tour.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        ${tour.price}
                      </span>
                      <Link
                        href={`/tours/${tour.id}`}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                      >
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