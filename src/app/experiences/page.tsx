
'use client';

import { useQuery } from '@tanstack/react-query';
import { getAllExperiences, ExperienceCardDto } from '@/lib/api';
import Link from 'next/link';
import { useCurrency } from '@/contexts/CurrencyContext';
import { ChevronRight, Clock, Star, Calendar, Users } from 'lucide-react';
import MinimalHero from '@/components/MinimalHero';

export default function ExperiencesPage() {
  const { currency } = useCurrency();

  const { data: experiences = [], isLoading, error } = useQuery<ExperienceCardDto[]>({
    queryKey: ['experiences'],
    queryFn: getAllExperiences,
  });

  

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<Star key={i} className="w-4 h-4 fill-[#D4AF37]/50 text-[#D4AF37]" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-[#D4AF37]" />);
      }
    }
    return stars;
  };

  return (
    <main>
      {/* ✅ Minimal Hero Section */}
      <MinimalHero 
        title="Sri Lankan Experiences"
        description="Handcrafted adventures that immerse you in authentic Sri Lankan culture and natural beauty"
        breadcrumbs={[
          { label: "Experiences" }
        ]}
      />

      

      {/* ✅ Experience Listing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#0F4C81] mb-4">
              Featured Experiences
            </h2>
            <p className="text-lg text-[#333333]/80">
              Discover our handpicked collection of extraordinary experiences designed to showcase the best of Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              [...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl h-96 animate-pulse shadow-lg">
                  <div className="h-64 bg-gray-300 rounded-t-2xl"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              ))
            ) : error ? (
              <div className="col-span-3 text-center text-red-500 py-16">
                Failed to load experiences. Please try again later.
              </div>
            ) : (
              experiences.map((experience: ExperienceCardDto) => (
                <div key={experience.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group transition hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={experience.imageUrl} 
                      alt={experience.title} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Duration tag */}
                    <div className="absolute top-4 right-4 bg-[#D4AF37]/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      <Clock className="inline w-3 h-3 mr-1" /> {experience.duration}
                    </div>

                    {/* Tags */}
                    {experience.tags && experience.tags.length > 0 && (
                      <div className="absolute top-4 left-4 z-10">
                        <div className="flex flex-wrap gap-1.5">
                          {experience.tags.slice(0, 2).map((tag: string, index: number) => (
                            <span key={index} className="bg-[#0F4C81]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">{experience.title}</h3>
                    
                    {/* Rating - show if available */}
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {renderStars(4.8)} {/* Default rating for now */}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">
                        4.8 (125 reviews)
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 line-clamp-2">{experience.description}</p>

                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">From</span>
                        <span className="text-xl font-semibold text-[#0F4C81]">{currency.symbol}{experience.price}</span>
                      </div>
                      <Link 
                        href={`/experiences/${experience.slug}`} 
                        className="px-5 py-2.5 bg-[#0F4C81] text-white rounded-lg transition hover:bg-[#0F4C81]/90 group"
                      >
                        <span className="flex items-center">
                          Explore <ChevronRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ✅ Custom Experience Section */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl relative border border-gray-100">
            {/* Subtle decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="flex flex-col md:flex-row">
              {/* Image Side */}
              <div className="md:w-2/5 relative min-h-[400px] md:min-h-[500px]">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ 
                  backgroundImage: "url('https://res.cloudinary.com/drsjp6bqz/image/upload/v1743775033/activities/arugam-bay-fishing.jpg')",
                }}>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-[#0F4C81] rounded-full mr-2"></div>
                      <span className="text-gray-600 text-sm font-medium">Client Review</span>
                    </div>
                    <h3 className="font-['Playfair_Display'] text-gray-800 text-lg font-semibold mb-3">Perfectly Tailored</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      "Every moment was crafted to our interests. From sunrise at Adam's Peak to private cooking classes in Kandy - pure magic."
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-[#0F4C81] fill-[#0F4C81]" />
                        ))}
                      </div>
                      <span className="text-gray-600 text-xs font-medium">– Emma & James</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="md:w-3/5 p-8 md:p-12 lg:p-16 relative">
                <div className="max-w-2xl">
                  <div className="mb-8">
                    <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                      Bespoke Travel Design
                    </div>
                    <h2 className="font-['Playfair_Display'] text-4xl font-bold text-gray-800 mb-4 leading-tight">
                      Create Your Perfect Sri Lankan Story
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      Our expert travel designers craft completely personalized journeys that reflect your unique interests, travel style, and dreams. Every detail is thoughtfully curated just for you.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 mb-10">
                    <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0F4C81]/10 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-6 h-6 text-[#0F4C81]" />
                        </div>
                        <div>
                          <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-2 text-gray-800">Perfectly Timed Moments</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Experience Sri Lanka at its most magical - sunrise at Sigiriya Rock, golden hour at Galle Fort, or tea estate visits during harvest season.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0F4C81]/10 flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-[#0F4C81]" />
                        </div>
                        <div>
                          <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-2 text-gray-800">Exclusively Yours</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Private expert guides, luxury vehicles, and VIP access to experiences unavailable to regular tourists. Your journey, your pace.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      Start Planning Your Journey
                      <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link href="/tours" className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-4 px-8 rounded-full border border-gray-200 transition-all duration-300">
                      Explore Our Tours
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
