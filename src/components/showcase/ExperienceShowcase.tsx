
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getFeaturedExperiences, ExperienceCardDto } from '@/lib/api';

const COLORS = {
  primary: '#0F4C81',
  secondary: '#D4AF37',
  accent: '#8B4513'
};

export default function ExperienceShowcase() {
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null);

  const { data: experiences = [], isLoading, error } = useQuery<ExperienceCardDto[]>({
    queryKey: ['featuredExperiences'],
    queryFn: getFeaturedExperiences,
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Unique Experiences
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-[#F8F5F0] rounded-lg overflow-hidden shadow-lg animate-pulse">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
                  <div className="h-10 bg-gray-300 rounded w-24"></div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Unique Experiences
            </h2>
            <p className="text-lg text-gray-700/80">Unable to load experiences at the moment. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
            Unique Experiences
          </h2>
          <p className="text-lg text-gray-700/80 max-w-2xl mx-auto">
            Immerse yourself in authentic Sri Lankan culture through carefully curated experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="group bg-[#F8F5F0] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredExperience(experience.id)}
              onMouseLeave={() => setHoveredExperience(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={experience.imageUrl}
                  alt={experience.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 px-2 py-1 rounded-full text-xs font-semibold text-[#0F4C81]">
                    ${experience.price}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Playfair_Display']">
                  {experience.title}
                </h3>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{experience.duration}</span>
                </div>
                
                <p className="text-gray-700/80 mb-4 line-clamp-3">
                  {experience.shortDescription}
                </p>
                
                {experience.tags && experience.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ backgroundColor: `${COLORS.secondary}20`, color: COLORS.accent }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <Link
                  href={`/experiences/${experience.slug || experience.id}`}
                  className={`inline-flex items-center font-medium transition-colors ${
                    hoveredExperience === experience.id
                      ? 'text-[#D4AF37]'
                      : 'text-[#0F4C81]'
                  } hover:text-[#D4AF37]`}
                >
                  Book Experience
                  <ArrowRight
                    className={`ml-2 w-4 h-4 transition-transform ${
                      hoveredExperience === experience.id ? 'translate-x-1' : ''
                    }`}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/experiences"
            className="inline-flex items-center px-8 py-3 bg-[#0F4C81] text-white hover:bg-[#0F4C81]/90 rounded-lg transition-colors font-medium"
          >
            View All Experiences
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
