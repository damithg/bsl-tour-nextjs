
'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Calendar, MapPin, Users, Star, Home, ChevronRight } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

// Tour interface matching the API structure
interface Tour {
  id: number;
  documentId?: string;
  name: string;
  slug: string;
  summary: string;
  duration: string;
  startingFrom: number;
  currency: string;
  tags?: string[];
  minGroupSize?: number;
  maxGroupSize?: number;
  // Image handling - prioritize new card structure
  card?: {
    image?: {
      publicId?: string;
      alt?: string;
      medium?: string;
      small?: string;
      large?: string;
      baseUrl?: string;
    };
    heading?: string;
    header?: string;
    body?: string;
    tags?: string[];
  };
  // Legacy image structures
  cardImage?: {
    publicId?: string;
    alt?: string;
    medium?: string;
    small?: string;
    large?: string;
    baseUrl?: string;
  };
  heroImage?: {
    publicId?: string;
    alt?: string;
    medium?: string;
    small?: string;
    large?: string;
    baseUrl?: string;
  };
  reviews?: Array<{
    id: number;
    reviewer: string;
    country: string;
    comment: string;
    rating: number;
  }>;
}

export default function ToursPage() {
  const { formatPrice } = useCurrency();
  
  // Fetch tours from API
  const { data: tours = [], isLoading, error } = useQuery<Tour[]>({
    queryKey: ['tours'],
    queryFn: async () => {
      const response = await fetch('https://bsl-dg-adf2awanb4etgsap.uksouth-01.azurewebsites.net/api/tours');
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      return response.json();
    },
  });

  // Helper function to get image URL with priority: medium -> small -> large -> baseUrl -> fallback
  const getImageUrl = (tour: Tour): string => {
    // First try the new card structure
    if (tour.card?.image) {
      if (tour.card.image.medium) return tour.card.image.medium;
      if (tour.card.image.small) return tour.card.image.small;
      if (tour.card.image.large) return tour.card.image.large;
      if (tour.card.image.baseUrl) return tour.card.image.baseUrl;
      if (tour.card.image.publicId) {
        return `https://res.cloudinary.com/best-sri-lanka-tours/image/upload/w_800,h_600,c_fill/${tour.card.image.publicId}`;
      }
    }
    
    // Try legacy cardImage structure
    if (tour.cardImage) {
      if (tour.cardImage.medium) return tour.cardImage.medium;
      if (tour.cardImage.small) return tour.cardImage.small;
      if (tour.cardImage.large) return tour.cardImage.large;
      if (tour.cardImage.baseUrl) return tour.cardImage.baseUrl;
      if (tour.cardImage.publicId) {
        return `https://res.cloudinary.com/best-sri-lanka-tours/image/upload/w_800,h_600,c_fill/${tour.cardImage.publicId}`;
      }
    }
    
    // Try heroImage as last fallback
    if (tour.heroImage) {
      if (tour.heroImage.medium) return tour.heroImage.medium;
      if (tour.heroImage.small) return tour.heroImage.small;
      if (tour.heroImage.large) return tour.heroImage.large;
      if (tour.heroImage.baseUrl) return tour.heroImage.baseUrl;
      if (tour.heroImage.publicId) {
        return `https://res.cloudinary.com/best-sri-lanka-tours/image/upload/w_800,h_600,c_fill/${tour.heroImage.publicId}`;
      }
    }
    
    // Default fallback
    return "https://images.unsplash.com/photo-1571983823232-07c155b4b685?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
  };

  // Format rating to display as stars
  const formatRating = (rating: number | null) => {
    if (rating === null || rating === undefined) {
      return (
        <div className="text-gray-400 flex items-center">
          <span className="text-sm">No ratings yet</span>
        </div>
      );
    }
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="text-[#F6E27F] flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 fill-current" />
        ))}
        {hasHalfStar && <Star className="w-4 h-4 fill-current opacity-50" />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4" />
        ))}
        <span className="text-sm text-gray-500 ml-2">
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  // Calculate average rating from reviews
  const getAverageRating = (reviews?: Tour['reviews']): number | null => {
    if (!reviews || reviews.length === 0) return null;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / reviews.length;
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-[#0F4C81]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743763343/features/hikkaduwa-marine-park.jpg" 
            alt="Sri Lanka Tea Plantations" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex text-white/90 mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-white">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-white/60 mx-1" />
                  <span className="text-sm font-medium text-white/80">
                    Tour Packages
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6">
              Luxury Sri Lanka Tour Packages
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover our handcrafted luxury experiences designed to showcase the best of Sri Lanka's natural beauty and cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F4C81] mb-4">Explore Our Packages</h2>
            <p className="text-lg text-gray-700/80">Each journey is tailor-made to reflect your preferences, with private guides, luxury accommodations, and unforgettable experiences.</p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-[#F8F5F0] rounded-lg overflow-hidden shadow-lg animate-pulse">
                  <div className="h-64 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="flex items-center mb-4">
                      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                    </div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-300 rounded w-12"></div>
                        <div className="h-5 bg-gray-300 rounded w-20"></div>
                      </div>
                      <div className="h-8 bg-gray-300 rounded w-28"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">Failed to load tours. Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => {
                const imageUrl = getImageUrl(tour);
                const averageRating = getAverageRating(tour.reviews);
                const reviewCount = tour.reviews?.length || 0;
                
                return (
                  <div key={tour.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition transform hover:scale-[1.02] hover:shadow-xl border border-gray-100">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={imageUrl} 
                        alt={tour.card?.image?.alt || tour.name} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#0F4C81]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {tour.duration}
                        </span>
                      </div>
                      {/* Tags */}
                      {((tour.card?.tags && tour.card.tags.length > 0) || (tour.tags && tour.tags.length > 0)) && (
                        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                          {(tour.card?.tags || tour.tags || []).slice(0, 2).map((tag, i) => (
                            <span key={i} className="bg-[#D4AF37]/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">
                        {tour.card?.heading || tour.card?.header || tour.name}
                      </h3>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          {formatRating(averageRating)}
                          <span className="text-sm text-gray-500">
                            ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700/70 mb-4 line-clamp-3">
                        {tour.card?.body || tour.summary}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">Starting from</span>
                          <div className="flex items-baseline">
                            <span className="text-[#0F4C81] text-xl font-semibold">
                              {formatPrice(tour.startingFrom, { currency: tour.currency })}
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
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F4C81] mb-6">Customize Your Journey</h2>
            <p className="text-lg text-gray-700/80 mb-8">Don't see exactly what you're looking for? Our travel experts can create a completely customized itinerary tailored to your preferences.</p>
            <Link href="/contact" className="inline-flex items-center bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-medium py-3 px-8 rounded-full transition shadow-md hover:shadow-lg">
              Contact Us to Customize 
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
