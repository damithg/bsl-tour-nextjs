'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import DetailHero from '@/components/common/DetailHero';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Camera, Users, Star, Check } from 'lucide-react';

interface ExperienceImage {
  publicId?: string;
  alt?: string;
  caption?: string;
  baseUrl?: string;
  small?: string;
  medium?: string;
  large?: string;
}

interface ExperienceData {
  id: number;
  slug: string;
  name: string;
  description: string;
  duration?: string;
  highlights?: string[];
  heroImage?: ExperienceImage;
  galleryImages?: ExperienceImage[];
  location?: string;
  tags?: string[];
}

interface Props {
  params: { slug: string };
}

export default function ExperienceDetailPage({ params }: Props) {
  const slug = params.slug;

  const { data: experienceData, isLoading, error } = useQuery<ExperienceData>({
    queryKey: ['experience', slug],
    queryFn: async () => {
      const res = await fetch(`/api/experiences/${slug}`);
      if (!res.ok) {
        throw new Error("Failed to fetch experience");
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
  if (error || !experienceData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Experience Not Found</h1>
        <Button variant="default" onClick={() => window.location.href = "/experiences"}>
          Back to Experiences
        </Button>
      </div>
    );
  }

  return (
    <div className="pb-20 bg-gray-50">
      {/* Hero */}
      <DetailHero
        imageUrl={experienceData.heroImage?.large || experienceData.heroImage?.baseUrl}
        imageAlt={experienceData.heroImage?.alt || experienceData.name}
        title={experienceData.name}
        subtitle={experienceData.heroImage?.caption}
        breadcrumbItems={[
          { label: "Experiences", href: "/experiences" },
          { label: experienceData.name, isCurrentPage: true }
        ]}
        rating={5}
        reviewCount={25}
        duration={experienceData.duration}
        overlayOpacity={0}
        aspectRatio="wide"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-8/12">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">About This Experience</h2>
              <p className="text-lg text-gray-600 mb-6">{experienceData.description}</p>

              {/* Duration and Location Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {experienceData.duration && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-[#0F4C81] mr-2" />
                      <span className="font-medium">Duration: </span>
                      <span className="ml-1">{experienceData.duration}</span>
                    </div>
                  </div>
                )}
                {experienceData.location && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-[#0F4C81] mr-2" />
                      <span className="font-medium">Location: </span>
                      <span className="ml-1">{experienceData.location}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tags */}
              {experienceData.tags && experienceData.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#0F4C81]">Experience Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {experienceData.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-[#0F4C81]/10 text-[#0F4C81] rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {experienceData.highlights && experienceData.highlights.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#0F4C81]">What's Included</h3>
                  <ul className="space-y-2">
                    {experienceData.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-[#0F4C81] mr-2 mt-1" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery */}
              {experienceData.galleryImages && experienceData.galleryImages.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {experienceData.galleryImages.map((image, index) => (
                      <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src={image.large || image.medium || image.small || image.baseUrl} 
                          alt={image.alt || `${experienceData.name} ${index + 1}`}
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
              <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">Book This Experience</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">
                  Ready to embark on this amazing experience? Contact us to book or get more information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1">
                    Book Now
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
                {experienceData.duration && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{experienceData.duration}</span>
                  </div>
                )}
                {experienceData.location && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{experienceData.location}</span>
                  </div>
                )}
                {experienceData.tags && experienceData.tags.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Features:</span>
                    <span className="font-medium">{experienceData.tags.length} highlights</span>
                  </div>
                )}
              </div>

              <Button className="w-full mt-6">
                Book This Experience
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}