
'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedPackages = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Sample tour data - replace with actual API data later
  const tours = [
    {
      id: 1,
      name: "Cultural Triangle Luxury Tour",
      slug: "cultural-triangle-luxury-tour",
      duration: "7 Days",
      startingFrom: 1200,
      currency: "USD",
      summary: "Explore ancient kingdoms, magnificent temples, and royal palaces in comfort and style.",
      image: "/images/sigiriya-destination.jpg",
      tags: ["Cultural", "Heritage"]
    },
    {
      id: 2,
      name: "Southern Coast Beach Paradise",
      slug: "southern-coast-beach-paradise",
      duration: "5 Days",
      startingFrom: 850,
      currency: "USD",
      summary: "Relax on pristine beaches and discover coastal gems along Sri Lanka's stunning south coast.",
      image: "/images/ella-destination.jpg",
      tags: ["Beach", "Relaxation"]
    },
    {
      id: 3,
      name: "Hill Country Adventure",
      slug: "hill-country-adventure",
      duration: "6 Days",
      startingFrom: 950,
      currency: "USD",
      summary: "Journey through tea plantations, misty mountains, and charming hill stations.",
      image: "/images/kandy-destination.jpg",
      tags: ["Adventure", "Nature"]
    }
  ];

  const checkScrollable = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
    }
  };

  const formatRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex text-[#D4AF37]">
        {Array(fullStars).fill(null).map((_, i) => (
          <svg key={`full-${i}`} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half-star">
                <stop offset="50%" stopColor="#D4AF37"/>
                <stop offset="50%" stopColor="#E5E7EB"/>
              </linearGradient>
            </defs>
            <path fill="url(#half-star)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        )}
        {Array(emptyStars).fill(null).map((_, i) => (
          <svg key={`empty-${i}`} className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4 text-[#0F4C81]">
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
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#0F4C81] rounded-full p-2 shadow-md -ml-4 transition ${
              !canScrollLeft ? "opacity-0 cursor-default" : "opacity-100 cursor-pointer"
            }`}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#0F4C81] rounded-full p-2 shadow-md -mr-4 transition ${
              !canScrollRight ? "opacity-0 cursor-default" : "opacity-100 cursor-pointer"
            }`}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Scroll container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
            onScroll={checkScrollable}
          >
            {tours.map((tour) => (
              <div 
                key={tour.id} 
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start bg-[#F8F5F0] rounded-lg overflow-hidden shadow-lg transition transform hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="relative h-64 flex items-center justify-center overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.name} 
                    className="w-full h-full object-cover object-center" 
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#0F4C81]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tour.duration}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {tour.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="bg-[#D4AF37]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">
                    {tour.name}
                  </h3>
                  <div className="flex items-center mb-4">
                    {formatRating(4.8)}
                    <span className="text-sm text-gray-500 ml-2">
                      4.8 (24 reviews)
                    </span>
                  </div>
                  <p className="text-gray-700/70 mb-4">
                    {tour.summary}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Starting from</span>
                      <div className="flex items-baseline">
                        <span className="text-xl font-semibold text-[#0F4C81]">
                          ${tour.startingFrom}
                        </span>
                        <span className="text-gray-500 text-sm ml-1.5">/ per person</span>
                      </div>
                    </div>
                    <Link 
                      href={`/tours/${tour.slug}`} 
                      className="inline-flex items-center bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-medium py-2 px-5 rounded-full transition group shadow-md"
                    >
                      Explore 
                      <ChevronRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/tours" 
            className="inline-flex items-center bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-medium py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            View All Tours
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
