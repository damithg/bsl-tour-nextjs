'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getFeaturedExperiences, ExperienceCardDto } from '@/lib/api';

const COLORS = {
  primary: '#0F4C81',
  secondary: '#D4AF37',
  accent: '#8B4513'
};

export default function ExperienceShowcase() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { data: experiences = [], isLoading, error } = useQuery<ExperienceCardDto[]>({
    queryKey: ['featuredExperiences'],
    queryFn: getFeaturedExperiences,
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
  }, [experiences]);

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
      <section id="experiences" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Curated Experiences
            </h2>
            <p className="text-lg text-gray-700/80">
              Unique luxury experiences designed for discerning travelers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {[...Array(3)].map((_, index) => (
                <div key={`skeleton-${index}`} className="bg-[#F8F5F0] rounded-lg overflow-hidden shadow-lg animate-pulse h-[400px]"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="experiences" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Curated Experiences
            </h2>
            <p className="text-lg text-gray-700/80">Unable to load experiences at the moment. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experiences" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
            Curated Experiences
          </h2>
          <p className="text-lg text-gray-700/80">
            Unique luxury experiences designed for discerning travelers.
          </p>
        </div>

        <div className="relative">
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
            {experiences.map((experience: ExperienceCardDto) => (
              <div key={experience.id} className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 h-[500px] flex flex-col">
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img
                      src={experience.imageUrl}
                      alt={experience.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-[#D4AF37]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        <Clock className="inline w-3 h-3 mr-1" /> {experience.duration}
                      </span>
                    </div>

                    {/* ✅ NEW: tags display */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                      {experience.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-[#D4AF37]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 font-['Playfair_Display']">
                        {experience.title}
                      </h3>
                    </div>
                    <p className="text-gray-700/70 mb-4 line-clamp-2 flex-1">
                      {experience.description}
                    </p>
                    <div className="flex justify-between mt-auto items-center">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Starting from</span>
                        <span className="text-2xl font-bold text-[#0F4C81]">${experience.price}</span>
                        <span className="text-xs text-gray-500">per person</span>
                      </div>
                      <Link
                        href={`/experiences/${experience.slug}`}
                        className="px-6 py-2.5 bg-[#0F4C81] text-white hover:bg-[#0F4C81]/90 rounded-lg transition-colors font-medium text-sm"
                      >
                        Explore
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
