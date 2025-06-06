
'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useCurrency } from '@/contexts/CurrencyContext';
import { ChevronRight, Clock, Star, MapPin } from 'lucide-react';
import MinimalHero from '@/components/common/MinimalHero';

import { getAllTours } from '@/lib/api/tours/getAllTours';
import type { TourCardDto } from '@/lib/api/tours/types';


export default function ToursPage() {
  const { currency } = useCurrency();

  const { data: tours = [], isLoading, error } = useQuery<TourCardDto[]>({
    queryKey: ['tours'],
    queryFn: getAllTours,
  });

  return (
    <main>
      {/* ✅ Minimal Hero Section */}
      <MinimalHero 
        title="Discover Sri Lanka Tours"
        description="Explore our handpicked collection of authentic Sri Lankan experiences"
        breadcrumbs={[
          { label: "Tours" }
        ]}
      />

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

      {/* ✅ Customize Your Journey Section */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F4C81] mb-6">Customize Your Journey</h2>
            <p className="text-lg text-[#333333]/80 mb-8">Don't see exactly what you're looking for? Our travel experts can create a completely customized itinerary tailored to your preferences.</p>
            <Link href="/contact" className="inline-flex items-center bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-medium py-3 px-8 rounded-full transition shadow-md hover:shadow-lg">
              Contact Us to Customize 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
