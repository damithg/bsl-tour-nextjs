
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
          <div className="bg-gradient-to-br from-[#0F4C81] via-[#1B5A94] to-[#0F4C81] rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>

            <div className="relative flex flex-col lg:flex-row min-h-[600px]">
              {/* Content Side */}
              <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 flex items-center">
                <div className="max-w-2xl">
                  <div className="mb-8">
                    <div className="inline-flex items-center bg-[#D4AF37]/20 backdrop-blur-sm text-[#D4AF37] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-[#D4AF37]/30">
                      <Star className="w-4 h-4 mr-2" />
                      Bespoke Experience Design
                    </div>
                    
                    <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                      Craft Your Perfect 
                      <span className="text-[#D4AF37] block">Sri Lankan Adventure</span>
                    </h2>
                    
                    <p className="text-white/90 text-lg leading-relaxed mb-10">
                      Our expert travel designers create completely personalized experiences that reflect your unique interests, travel style, and dreams. Every detail is thoughtfully curated to create memories that last a lifetime.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 mb-12">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/30">
                          <Calendar className="w-7 h-7 text-[#D4AF37]" />
                        </div>
                        <div>
                          <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3 text-white">Perfectly Timed Moments</h3>
                          <p className="text-white/80 leading-relaxed">
                            Experience Sri Lanka at its most magical - sunrise at Sigiriya Rock, golden hour at Galle Fort, or tea estate visits during harvest season.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/30">
                          <Users className="w-7 h-7 text-[#D4AF37]" />
                        </div>
                        <div>
                          <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3 text-white">Exclusively Yours</h3>
                          <p className="text-white/80 leading-relaxed">
                            Private expert guides, luxury vehicles, and VIP access to experiences unavailable to regular tourists. Your journey, your pace.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#C4A137] text-[#0F4C81] font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                      Start Planning Your Journey
                      <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link 
                      href="/tours" 
                      className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white/50 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                      Explore Our Tours
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Image Side with Testimonial */}
              <div className="lg:w-2/5 relative min-h-[400px] lg:min-h-[600px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"></div>
                </div>
                
                <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                  <div className="bg-white/95 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 max-w-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-[#D4AF37] rounded-full mr-3"></div>
                      <span className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Client Review</span>
                    </div>
                    
                    <h3 className="font-['Playfair_Display'] text-gray-800 text-xl font-bold mb-4">Absolutely Magical Experience</h3>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      "Every moment was crafted to perfection. From sunrise at Adam's Peak to private cooking classes in Kandy - this was beyond our wildest dreams."
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                        ))}
                      </div>
                      <div className="text-right">
                        <p className="text-gray-800 font-semibold text-sm">Emma & James</p>
                        <p className="text-gray-500 text-xs">London, UK</p>
                      </div>
                    </div>
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
