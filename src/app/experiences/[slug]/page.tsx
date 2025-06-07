
'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import DetailHero from '@/components/common/DetailHero';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, MapPin, Star, Check, X } from 'lucide-react';

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
  duration: string;
  summary: string;
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  heroImage?: ExperienceImage;
  location?: string;
  difficulty?: string;
  minGroupSize?: number;
  maxGroupSize?: number;
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
              <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">Overview</h2>
              <p className="text-lg text-gray-600 mb-6">{experienceData.summary}</p>

              {/* Experience Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <Clock className="w-5 h-5 text-[#0F4C81] mb-2" />
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-semibold">{experienceData.duration}</div>
                </div>
                
                {experienceData.location && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <MapPin className="w-5 h-5 text-[#0F4C81] mb-2" />
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-semibold">{experienceData.location}</div>
                  </div>
                )}

                {experienceData.difficulty && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Star className="w-5 h-5 text-[#0F4C81] mb-2" />
                    <div className="text-sm text-gray-500">Difficulty</div>
                    <div className="font-semibold">{experienceData.difficulty}</div>
                  </div>
                )}

                {(experienceData.minGroupSize || experienceData.maxGroupSize) && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Users className="w-5 h-5 text-[#0F4C81] mb-2" />
                    <div className="text-sm text-gray-500">Group Size</div>
                    <div className="font-semibold">
                      {experienceData.minGroupSize && experienceData.maxGroupSize 
                        ? `${experienceData.minGroupSize}-${experienceData.maxGroupSize} people`
                        : experienceData.minGroupSize 
                          ? `Min ${experienceData.minGroupSize} people`
                          : `Max ${experienceData.maxGroupSize} people`
                      }
                    </div>
                  </div>
                )}
              </div>

              {/* Highlights */}
              {experienceData.highlights && experienceData.highlights.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#0F4C81]">Highlights</h3>
                  <ul className="space-y-2">
                    {experienceData.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-[#0F4C81]/80 mr-2 mt-1" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Inclusions / Exclusions */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">What's Included</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inclusions */}
                <div>
                  <h3 className="font-semibold flex items-center mb-4">
                    <Check className="w-5 h-5 mr-2 text-green-600" /> Inclusions
                  </h3>
                  <ul className="space-y-2">
                    {experienceData.inclusions && experienceData.inclusions.length > 0 ? (
                      experienceData.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 mt-1" />
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500">No inclusions specified.</li>
                    )}
                  </ul>
                </div>

                {/* Exclusions */}
                <div>
                  <h3 className="font-semibold flex items-center mb-4">
                    <X className="w-5 h-5 mr-2 text-red-600" /> Exclusions
                  </h3>
                  <ul className="space-y-2">
                    {experienceData.exclusions && experienceData.exclusions.length > 0 ? (
                      experienceData.exclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <X className="w-4 h-4 text-red-500 mr-2 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500">No exclusions specified.</li>
                    )}
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">Book This Experience</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">
                  Ready to experience this unique adventure? Contact us to check availability and make your booking.
                </p>
                <Button className="w-full">
                  Contact Us to Book
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-4/12">
            <div className="sticky top-24 bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4 text-[#0F4C81]">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{experienceData.duration}</span>
                </div>
                {experienceData.location && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{experienceData.location}</span>
                  </div>
                )}
                {experienceData.difficulty && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">{experienceData.difficulty}</span>
                  </div>
                )}
              </div>
              
              <Button className="w-full mt-6">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
