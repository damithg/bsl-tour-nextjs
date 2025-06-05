// src/app/destinations/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { getDestinationBySlug, DestinationCardDto } from '@/lib/api';
import { Home, ChevronRight, MapPin } from 'lucide-react';
import Link from 'next/link';

// ✅ Server-side rendering: always fresh
export default async function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  let destination: DestinationCardDto | null = null;

  try {
    destination = await getDestinationBySlug(slug);
  } catch (error) {
    console.error('Destination not found', error);
    return notFound();
  }

  if (!destination) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ✅ HERO */}
      <section className="relative pt-28 pb-20 bg-[#0F4C81]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* ✅ Breadcrumb */}
          <nav className="flex text-white/90 mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-white">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li className="inline-flex items-center">
                <ChevronRight className="w-5 h-5 text-white/60 mx-1" />
                <Link href="/destinations" className="text-sm font-medium text-white/80 hover:text-white">
                  Destinations
                </Link>
              </li>
              <li aria-current="page">
                <ChevronRight className="w-5 h-5 text-white/60 mx-1" />
                <span className="text-sm font-medium text-white/80">{destination.name}</span>
              </li>
            </ol>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6">
              {destination.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {destination.description}
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F4C81] mb-6">
              Explore {destination.name}
            </h2>
            <p className="text-lg text-gray-700 mb-8">{destination.description}</p>

            {/* ✅ Tags */}
            {destination.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-10">
                {destination.tags.map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className="bg-[#D4AF37]/90 text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* ✅ Call to Action */}
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Start Planning Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
