
'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExperienceShowcase = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Sample experience data - replace with actual API data later
  const experiences = [
    {
      id: 1,
      title: "Private Elephant Safari",
      slug: "private-elephant-safari",
      description: "Witness majestic elephants in their natural habitat with an expert naturalist guide.",
      image: "/images/ella-destination.jpg",
      duration: "3-4 hours",
      rating: 4.8,
      reviewCount: 24,
      price: 150,
      currency: "USD",
      tags: ["Wildlife", "Safari"]
    },
    {
      id: 2,
      title: "Tea Plantation Experience",
      slug: "tea-plantation-experience",
      description: "Learn about Ceylon tea production and enjoy tastings at a historic plantation.",
      image: "/images/kandy-destination.jpg",
      duration: "2-3 hours",
      rating: 4.9,
      reviewCount: 18,
      price: 85,
      currency: "USD",
      tags: ["Culture", "Experience"]
    },
    {
      id: 3,
      title: "Temple Blessing Ceremony",
      slug: "temple-blessing-ceremony",
      description: "Participate in an authentic Buddhist blessing ceremony at a sacred temple.",
      image: "/images/sigiriya-destination.jpg",
      duration: "1-2 hours",
      rating: 4.7,
      reviewCount: 32,
      price: 65,
      currency: "USD",
      tags: ["Spiritual", "Culture"]
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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-5 text-[#0F4C81]">
            Curated Luxury Experiences
          </h2>
          <p className="text-lg text-gray-700/80">
            Each journey is crafted with meticulous attention to detail, offering you exclusive access to Sri Lanka's hidden treasures and authentic cultural encounters.
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
            {experiences.map((experience) => (
              <div 
                key={experience.id} 
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start bg-[#F8F5F0] rounded-lg overflow-hidden shadow-lg transition transform hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="relative h-64 flex items-center justify-center overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title} 
                    className="w-full h-full object-cover object-center" 
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#0F4C81]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {experience.duration}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {experience.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="bg-[#D4AF37]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2 line-clamp-2">
                    {experience.title}
                  </h3>
                  <div className="flex items-center mb-4">
                    {formatRating(experience.rating)}
                    <span className="text-sm text-gray-500 ml-2">
                      {experience.rating.toFixed(1)} 
                      ({experience.reviewCount} {experience.reviewCount === 1 ? 'review' : 'reviews'})
                    </span>
                  </div>
                  <p className="text-gray-700/70 mb-4 line-clamp-2">
                    {experience.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">From</span>
                      <div className="flex items-baseline">
                        <span className="text-xl font-semibold text-[#0F4C81]">
                          ${experience.price}
                        </span>
                        <span className="text-gray-500 text-sm ml-1.5">/ per person</span>
                      </div>
                    </div>
                    <Link 
                      href={`/experiences/${experience.slug}`} 
                      className="inline-flex items-center bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-medium py-2 px-5 rounded-full transition group shadow-md"
                    >
                      Explore <ChevronRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/experiences" 
            className="inline-flex items-center bg-transparent border-2 border-[#0F4C81] text-[#0F4C81] hover:bg-[#0F4C81]/5 font-medium py-3 px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            View All Experiences
            <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceShowcase;
