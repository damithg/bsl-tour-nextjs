
'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DestinationShowcase = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Sample destination data - replace with actual API data later
  const destinations = [
    {
      id: 1,
      name: "Sigiriya",
      slug: "sigiriya",
      description: "Ancient rock fortress with stunning frescoes and panoramic views of the surrounding landscape.",
      image: "/images/sigiriya-destination.jpg",
      tags: ["Cultural Heritage", "Ancient"]
    },
    {
      id: 2,
      name: "Kandy",
      slug: "kandy",
      description: "Sacred city home to the Temple of the Tooth and rich Buddhist cultural heritage.",
      image: "/images/kandy-destination.jpg",
      tags: ["Religious Sites", "Culture"]
    },
    {
      id: 3,
      name: "Ella",
      slug: "ella",
      description: "Stunning hill country with tea plantations, scenic train rides, and breathtaking mountain views.",
      image: "/images/ella-destination.jpg",
      tags: ["Nature & Adventure", "Mountains"]
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

  return (
    <section id="destinations" className="py-10 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#0F4C81] mb-4">
            Stunning Destinations
          </h2>
          <p className="text-lg text-gray-600">
            Discover Sri Lanka's most breathtaking locations, where luxury and natural beauty combine for unforgettable experiences.
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
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start group relative overflow-hidden rounded-lg shadow-lg h-80 transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl"
              >
                <div className="w-full h-full transition duration-700 group-hover:scale-110">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Tags at the top of the card */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                  {destination.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="bg-[#D4AF37]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-95" 
                     style={{ 
                       background: `linear-gradient(to top, 
                         rgba(0,0,0,0.9) 0%, 
                         rgba(0,0,0,0.7) 20%, 
                         rgba(0,0,0,0.4) 40%, 
                         rgba(0,0,0,0.2) 65%, 
                         rgba(0,0,0,0.1) 80%, 
                         transparent 100%)`
                     }}>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-white font-bold mb-3 transition-colors duration-300 group-hover:text-[#D4AF37]">
                    {destination.name}
                  </h3>
                  <p className="text-white/95 mb-5 max-w-md line-clamp-2 group-hover:line-clamp-3 transition-all duration-300 text-base">
                    {destination.description}
                  </p>
                  <Link
                    href={`/destinations/${destination.slug}`}
                    className="inline-flex items-center bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-medium py-2.5 px-6 rounded-full transition group shadow-md"
                  >
                    Explore
                    <ChevronRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-flex items-center bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-medium py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            View All Destinations
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationShowcase;
