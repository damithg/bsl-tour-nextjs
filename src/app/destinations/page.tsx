
'use client';

import { useQuery } from '@tanstack/react-query';
import { getAllDestinations, DestinationCardDto } from '@/lib/api';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import MinimalHero from '@/components/MinimalHero';

export default function DestinationsPage() {
  const { data: destinations = [], isLoading, error } = useQuery<DestinationCardDto[]>({
    queryKey: ['destinations'],
    queryFn: getAllDestinations,
  });

  // State for lazy loading
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  // Get visible destinations
  const visibleDestinations = destinations.slice(0, visibleCount);
  const hasMore = destinations && visibleCount < destinations.length;

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    if (!loaderRef.current || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoadingMore) {
          setIsLoadingMore(true);

          // Simulate loading delay
          setTimeout(() => {
            setVisibleCount((prevCount) => prevCount + 6);
            setIsLoadingMore(false);
          }, 800);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, isLoadingMore, visibleCount, isLoading]);

  // Key experiences data
  const keyExperiences = [
    {
      title: "Cultural Heritage",
      description: "Explore UNESCO World Heritage sites, ancient temples, and colonial architecture with expert guides.",
      icon: "🏛️",
    },
    {
      title: "Wildlife Encounters", 
      description: "See leopards, elephants, and exotic birds in their natural habitats with luxury safari experiences.",
      icon: "🐾",
    },
    {
      title: "Beach Luxury",
      description: "Unwind at exclusive beach resorts with private villas, infinity pools, and personalized service.",
      icon: "🏖️",
    },
    {
      title: "Tea Plantation Tours",
      description: "Journey through emerald tea fields and learn about Ceylon tea production with private tastings.",
      icon: "🍃",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <MinimalHero 
        title="Explore the Wonder of Sri Lanka"
        description="Discover Sri Lanka through our carefully curated experiences that combine luxury, authenticity, and exclusivity."
        breadcrumbs={[
          { label: "Destinations" }
        ]}
      />

      {/* Key Experiences */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#0F4C81] mb-4">
              Luxury Experiences
            </h2>
            <p className="text-lg text-[#333333]/80">
              From ancient cities to pristine beaches, misty mountains to
              wildlife sanctuaries, discover the diverse landscapes and cultural
              treasures of this island paradise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyExperiences.map((experience, index) => (
              <div
                key={index}
                className="bg-[#F8F5F0] p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0F4C81]/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{experience.icon}</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">
                  {experience.title}
                </h3>
                <p className="text-[#333333]/70">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#0F4C81] mb-4">
              Stunning Destinations
            </h2>
            <p className="text-lg text-[#333333]/80">
              Explore Sri Lanka's most captivating locations, each offering
              unique experiences and luxury accommodations.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg h-96 animate-pulse"
                >
                  <div className="h-64 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">
                Failed to load destinations. Please try again later.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleDestinations.map((destination) => (
                  <div
                    key={destination.id}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group transition hover:shadow-xl"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={destination.imageUrl}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Display tags at the top left of image */}
                      {destination.tags && destination.tags.length > 0 && (
                        <div className="absolute top-4 left-4 z-10">
                          <div className="flex flex-wrap gap-1.5">
                            {destination.tags.slice(0, 2).map((tag: string, index: number) => (
                              <span key={index} className="bg-[#D4AF37]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">
                        {destination.name}
                      </h3>
                      <p className="text-gray-700/70 mb-6 line-clamp-2">
                        {destination.description}
                      </p>

                      <div className="flex justify-end">
                        <Link
                          href={`/destinations/${destination.slug}`}
                          className="inline-flex items-center bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-medium py-2.5 px-6 rounded-lg transition group"
                        >
                          Explore 
                          <ChevronRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More / End of Content */}
              <div className="mt-12 text-center" ref={loaderRef}>
                {isLoadingMore && (
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-10 h-10 border-4 border-[#0F4C81] border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-[#0F4C81] font-medium">
                      Loading more destinations...
                    </p>
                  </div>
                )}

                {!hasMore && destinations && destinations.length > 0 && (
                  <div className="text-center py-8">
                    <p className="text-[#0F4C81]/80 font-medium">
                      You've explored all our destinations!
                    </p>
                    <p className="text-[#333333]/60 mt-2">
                      Ready to plan your adventure?
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-block bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-medium py-2 px-6 rounded-full transition"
                    >
                      Contact Our Experts
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0F4C81] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-[#0F4C81] to-[#0F4C81]/80"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Discover Sri Lanka's Treasures?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let our experts craft a personalized journey through these
              stunning destinations, tailored to your preferences and travel
              style.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/tours"
                className="bg-white hover:bg-white/10 text-[#0F4C81] hover:text-white font-medium py-3 px-8 rounded-full transition"
              >
                View Luxury Packages
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full transition"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
