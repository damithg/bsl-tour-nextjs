
'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCurrency } from '@/contexts/CurrencyContext';
import { 
  Calendar, 
  Clock, 
  Map, 
  Users, 
  DollarSign, 
  Award, 
  Check, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Heart, 
  Home, 
  MapPin, 
  Star 
} from 'lucide-react';

// Tour data interface
interface TourData {
  id: number;
  documentId?: string;
  name: string;
  title?: string;
  slug: string;
  summary: string;
  description?: string;
  duration: string;
  startingFrom: number;
  currency: string;
  inclusions: string[];
  exclusions: string[];
  accommodationInfo?: string;
  operatedBy?: string;
  category?: string;
  tags?: string[];
  minGroupSize?: number;
  maxGroupSize?: number;
  heroImage?: {
    publicId?: string;
    alt?: string;
    medium?: string;
    small?: string;
    large?: string;
    baseUrl?: string;
  };
  cardImage?: {
    publicId?: string;
    alt?: string;
    medium?: string;
    small?: string;
    large?: string;
    baseUrl?: string;
  };
  galleryImages?: Array<{
    publicId?: string;
    alt?: string;
    medium?: string;
    small?: string;
    large?: string;
    baseUrl?: string;
  }>;
  itineraryDays?: Array<{
    day: number;
    title: string;
    description: string;
    accommodation?: string;
    imageUrl?: string;
  }>;
  tourHighlights?: string[];
  reviews?: Array<{
    id: number;
    reviewer: string;
    country: string;
    comment: string;
    rating: number;
  }>;
}

export default function TourDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { formatPrice } = useCurrency();
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Fetch tour data
  const { data: tourData, isLoading, error } = useQuery<TourData>({
    queryKey: ['tour', slug],
    queryFn: async () => {
      const response = await fetch(`https://bsl-dg-adf2awanb4etgsap.uksouth-01.azurewebsites.net/api/tours/${slug}`);
      if (!response.ok) {
        throw new Error('Tour not found');
      }
      return response.json();
    },
    enabled: !!slug,
  });

  // Get hero image URL
  const heroImageUrl = useMemo(() => {
    if (!tourData) return '';
    
    if (tourData.heroImage) {
      return tourData.heroImage.large || 
        tourData.heroImage.medium || 
        tourData.heroImage.small || 
        tourData.heroImage.baseUrl || 
        (tourData.heroImage.publicId ? `https://res.cloudinary.com/drsjp6bqz/image/upload/${tourData.heroImage.publicId}.jpg` : '');
    } else if (tourData.cardImage) {
      return tourData.cardImage.large || 
        tourData.cardImage.medium || 
        tourData.cardImage.small || 
        tourData.cardImage.baseUrl || 
        (tourData.cardImage.publicId ? `https://res.cloudinary.com/drsjp6bqz/image/upload/${tourData.cardImage.publicId}.jpg` : '');
    }
    
    return '';
  }, [tourData]);

  // Process gallery images
  const galleryImages = useMemo(() => {
    if (!tourData) return [];
    
    const images: string[] = [];
    
    if (tourData.galleryImages && Array.isArray(tourData.galleryImages)) {
      tourData.galleryImages.forEach(img => {
        const imgUrl = img.large || img.medium || img.small || img.baseUrl || 
          (img.publicId ? `https://res.cloudinary.com/drsjp6bqz/image/upload/${img.publicId}.jpg` : '');
        if (imgUrl) images.push(imgUrl);
      });
    }
    
    if (images.length === 0 && heroImageUrl) {
      images.push(heroImageUrl);
    }
    
    return images;
  }, [tourData, heroImageUrl]);

  // Handle image navigation
  const handleImageNav = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  // Handle wishlist toggle
  const handleAddToWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  // Format rating
  const formatRating = (rating: number | null) => {
    if (rating === null) return null;
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="text-amber-400 flex">
        {Array.from({length: fullStars}, (_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 fill-current" />
        ))}
        {hasHalfStar && <Star className="w-4 h-4 fill-current opacity-50" />}
        {Array.from({length: emptyStars}, (_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4" />
        ))}
      </div>
    );
  };

  // Default highlights
  const defaultHighlights = [
    "Visit UNESCO World Heritage sites",
    "Private transportation and guide",
    "Luxury accommodations",
    "Authentic cultural experiences",
    "24/7 support during your journey"
  ];

  // Default inclusions
  const defaultInclusions = [
    "Luxury accommodations throughout the journey",
    "Private transportation in an air-conditioned vehicle",
    "English-speaking chauffeur guide",
    "Daily breakfast and selected meals",
    "All entrance fees to sites mentioned in the itinerary",
    "Welcome and farewell dinners",
    "24/7 concierge support",
    "All government taxes"
  ];

  // Default exclusions
  const defaultExclusions = [
    "International airfare",
    "Personal expenses",
    "Meals not mentioned in the itinerary",
    "Travel insurance",
    "Visa fees",
    "Optional activities"
  ];

  // Loading state
  if (isLoading) {
    return (
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            <div className="w-full h-96 bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="flex flex-col gap-4">
              <div className="h-10 bg-gray-200 animate-pulse rounded w-1/2"></div>
              <div className="h-6 bg-gray-200 animate-pulse rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Error state
  if (error || !tourData) {
    return (
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F4C81] mb-4">Tour Not Found</h1>
            <p className="text-lg text-gray-600 mb-6">We couldn't find the tour you're looking for.</p>
            <Link href="/tours" className="inline-flex items-center bg-[#0F4C81] text-white px-6 py-3 rounded-lg hover:bg-[#0F4C81]/90 transition-colors">
              View All Sri Lanka Tours
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[380px]">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImageUrl || '/images/tours/scenic-sri-lanka-hero.jpg'})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28">
          {/* Breadcrumb */}
          <nav className="flex text-white/90 mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-white">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-white/60" />
                  <Link href="/tours" className="ml-1 text-sm font-medium hover:text-white">
                    Sri Lanka Tours
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-white/60" />
                  <span className="ml-1 text-sm font-medium text-white/80">
                    {tourData.title || tourData.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          
          {/* Tour Title and Info */}
          <div className="text-white">
            <h1 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              {tourData.title || tourData.name}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-white/80">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{tourData.duration} Days</span>
              </div>
              <div className="flex items-center text-white/80">
                <Users className="w-4 h-4 mr-2" />
                <span className="text-sm">Private Tour</span>
              </div>
              <div className="flex items-center text-white/80">
                <Star className="w-4 h-4 mr-2 text-amber-400" />
                <span className="text-sm">5.0 (23 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:w-2/3">
            {/* Gallery */}
            <div className="relative mb-8 overflow-hidden rounded-lg">
              {galleryImages.length > 0 ? (
                <>
                  <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
                    <img 
                      src={galleryImages[activeImageIndex]}
                      alt={`${tourData.title || tourData.name} - Gallery image ${activeImageIndex + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {galleryImages.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                      <button 
                        onClick={() => handleImageNav('prev')}
                        className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button 
                        onClick={() => handleImageNav('next')}
                        className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                    {activeImageIndex + 1} / {galleryImages.length}
                  </div>
                </>
              ) : (
                <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">No gallery images available</p>
                </div>
              )}
            </div>
            
            {/* Tour Overview */}
            <div className="mb-8">
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F4C81] mb-4">Tour Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>{tourData.description || tourData.summary}</p>
              </div>
            </div>
            
            {/* Tour Highlights */}
            <div className="mb-8 bg-[#0F4C81]/5 p-6 rounded-lg">
              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#0F4C81] mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Tour Highlights
              </h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {(tourData.tourHighlights || defaultHighlights).map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-[#0F4C81]/80 mr-2 mt-1" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Inclusions/Exclusions */}
            <div className="mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Inclusions */}
                <div>
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#0F4C81] mb-4 flex items-center">
                    <Check className="w-5 h-5 mr-2 text-green-600" />
                    Package Includes
                  </h3>
                  <ul className="space-y-2">
                    {(tourData.inclusions?.length > 0 ? tourData.inclusions : defaultInclusions).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Exclusions */}
                <div>
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#0F4C81] mb-4 flex items-center">
                    <X className="w-5 h-5 mr-2 text-red-500" />
                    Package Excludes
                  </h3>
                  <ul className="space-y-2">
                    {(tourData.exclusions?.length > 0 ? tourData.exclusions : defaultExclusions).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X className="w-4 h-4 text-red-500 mr-2 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - Right Column */}
          <div className="lg:w-1/3">
            {/* Booking Card */}
            <div className="border border-gray-200 rounded-lg p-6 mb-8 sticky top-24">
              {/* Price */}
              <div className="mb-4">
                <div className="text-sm text-gray-500">Starting from</div>
                <div className="text-3xl font-bold text-[#0F4C81]">
                  {formatPrice(tourData.startingFrom || 0)}
                </div>
                <div className="text-sm text-gray-500">per person</div>
              </div>
              
              {/* Quick Info */}
              <div className="border-t border-b border-gray-200 py-4 mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[#0F4C81]/70" />
                    <span className="text-sm">{tourData.duration} Days</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-[#0F4C81]/70" />
                    <span className="text-sm">Private Tour</span>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="space-y-3">
                <Link href="/contact" className="w-full bg-[#0F4C81] text-white px-6 py-3 rounded-lg hover:bg-[#0F4C81]/90 transition-colors flex items-center justify-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Request Quote
                </Link>
                <button 
                  onClick={handleAddToWishlist}
                  className="w-full border border-[#0F4C81] text-[#0F4C81] px-6 py-3 rounded-lg hover:bg-[#0F4C81]/5 transition-colors flex items-center justify-center"
                >
                  <Heart className={`w-4 h-4 mr-2 ${isInWishlist ? 'fill-current' : ''}`} />
                  {isInWishlist ? 'Saved to Wishlist' : 'Add to Wishlist'}
                </button>
              </div>
              
              {/* Operated By */}
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Operated by <strong>{tourData.operatedBy || "Best Sri Lanka Tours"}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
