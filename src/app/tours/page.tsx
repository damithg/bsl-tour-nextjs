'use client';

import { useQuery } from '@tanstack/react-query';
import { getAllTours, TourCardDto } from '@/lib/api';
import Link from 'next/link';
import { ChevronRight, Clock, Star, Home } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function ToursPage() {
  const { currency } = useCurrency();

  const { data: tours = [], isLoading, error } = useQuery<TourCardDto[]>({
    queryKey: ['tours'],
    queryFn: getAllTours,
  });

  return (
    <main className="min-h-screen">
      {/* ✅ Hero Section */}
      <section className="relative pt-28 pb-20 bg-[#0F4C81]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743763343/features/hikkaduwa-marine-park.jpg" 
            alt="Sri Lanka Tea Plantations" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* ✅ Breadcrumb Navigation */}
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
                  <span className="text-sm font-medium text-white/80">Tour Packages</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6">
              Luxury Sri Lanka Tour Packages
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover our handcrafted luxury experiences designed to showcase the best of Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Tour Listing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              [...Array(6)].map((_, i) => (
                <div key={i} className="bg-[#F8F5F0] rounded-lg h-80 animate-pulse"></div>
              ))
            ) : error ? (
              <div className="col-span-3 text-center text-red-500">Failed to load tours.</div>
            ) : (
              tours.map((tour: TourCardDto) => (
                <div key={tour.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group transition hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <img src={tour.imageUrl} alt={tour.title} className="object-cover w-full h-full transition group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-[#D4AF37]/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      <Clock className="inline w-3 h-3 mr-1" /> {tour.duration} Days
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">{tour.title}</h3>
                    <p className="text-gray-700 mb-4 line-clamp-2">{tour.description}</p>

                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">From</span>
                        <span className="text-xl font-semibold text-[#0F4C81]">{currency.symbol}{tour.price}</span>
                      </div>
                      <Link href={`/tours/${tour.slug}`} className="px-5 py-2.5 bg-[#0F4C81] text-white rounded-lg transition hover:bg-[#0F4C81]/90">
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
