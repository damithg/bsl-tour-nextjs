
'use client';

import { useQuery } from '@tanstack/react-query';
import DetailHero from '@/components/common/DetailHero';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Camera, Users, Star, Check } from 'lucide-react';

interface DestinationImage {
  publicId?: string;
  alt?: string;
  caption?: string;
  baseUrl?: string;
  small?: string;
  medium?: string;
  large?: string;
}

interface DestinationData {
  id: number;
  slug: string;
  name: string;
  description: string;
  highlights?: string[];
  heroImage?: DestinationImage;
  galleryImages?: DestinationImage[];
  location?: string;
  tags?: string[];
}

interface Props {
  params: { slug: string };
}

export default function DestinationDetailPage({ params }: Props) {
  const slug = params.slug;

  const { data: destinationData, isLoading, error } = useQuery<DestinationData>({
    queryKey: ['destination', slug],
    queryFn: async () => {
      const res = await fetch(`/api/destinations/${slug}`);
      if (!res.ok) {
        throw new Error("Failed to fetch destination");
      }
      return res.json();
    },
    enabled: !!slug
  });

  // Loading State
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <Skeleton className="h-[300px] w-full mb-10" />
        <Skeleton className="h-10 w-1/3 mb-4" />
        <Skeleton className="h-5 w-2/3 mb-3" />
      </div>
    );
  }

  // Error State
  if (error || !destinationData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Destination Not Found</h1>
        <Button variant="default" onClick={() => window.location.href = "/destinations"}>
          Back to Destinations
        </Button>
      </div>
    );
  }

  return (
    <div className="pb-20 bg-gray-50">
      {/* Hero */}
      <DetailHero
        imageUrl={destinationData.heroImage?.large || destinationData.heroImage?.baseUrl}
        imageAlt={destinationData.heroImage?.alt || destinationData.name}
        title={destinationData.name}
        subtitle={destinationData.heroImage?.caption}
        breadcrumbItems={[
          { label: "Destinations", href: "/destinations" },
          { label: destinationData.name, isCurrentPage: true }
        ]}
        rating={5}
        reviewCount={100}
        overlayOpacity={0}
        aspectRatio="wide"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-8/12">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">About {destinationData.name}</h2>
              <p className="text-lg text-gray-600 mb-6">{destinationData.description}</p>

              {/* Tags */}
              {destinationData.tags && destinationData.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#0F4C81]">Destination Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {destinationData.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-[#0F4C81]/10 text-[#0F4C81] rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {destinationData.highlights && destinationData.highlights.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#0F4C81]">What to See & Do</h3>
                  <ul className="space-y-2">
                    {destinationData.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-[#0F4C81] mr-2 mt-1" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery */}
              {destinationData.galleryImages && destinationData.galleryImages.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {destinationData.galleryImages.map((image, index) => (
                      <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src={image.large || image.medium || image.small || image.baseUrl} 
                          alt={image.alt || `${destinationData.name} ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </section>

            {/* Call to Action */}
            <section>
              <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">Plan Your Visit</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">
                  Ready to explore {destinationData.name}? Contact us to plan your perfect visit or browse our curated tours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1">
                    View Tours
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Contact Us
                  </Button>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-4/12">
            <div className="sticky top-24 bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4 text-[#0F4C81]">Quick Facts</h3>
              <div className="space-y-4">
                {destinationData.location && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{destinationData.location}</span>
                  </div>
                )}
                {destinationData.tags && destinationData.tags.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Features:</span>
                    <span className="font-medium">{destinationData.tags.length} highlights</span>
                  </div>
                )}
                {destinationData.highlights && destinationData.highlights.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Attractions:</span>
                    <span className="font-medium">{destinationData.highlights.length} things to do</span>
                  </div>
                )}
              </div>

              <Button className="w-full mt-6">
                Plan Your Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
