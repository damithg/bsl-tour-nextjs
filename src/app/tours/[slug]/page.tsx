'use client';

import { useEffect, useState, useCallback, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useCurrency, formatPrice } from "@/contexts/CurrencyContext";
//import { ScrollToTop } from "@/components/ScrollToTop";
import { Skeleton } from "@/components/ui/skeleton";
//import { StarRating } from "@/components/StarRating";
import DetailHero from "@/components/common/DetailHero";
//import ContactForm from "@/components/ContactForm";
//import EnhancedItineraryItem from "@/components/EnhancedItineraryItem";
//import AsymmetricalGallery from "@/components/AsymmetricalGallery";
//import AnimatedRouteMap from "@/components/AnimatedRouteMap";
import { Button } from "@/components/ui/button";
import { Info, Map, Camera, List, Check, X, Calendar, Clock, Compass, Users, PiggyBank, ChevronDown, Phone, Mail } from "lucide-react";

interface TourImage {
  publicId?: string;
  alt?: string;
  caption?: string;
  orientation?: string;
  baseUrl?: string;
  small?: string;
  medium?: string;
  large?: string;
}

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  image?: TourImage;
}

interface MapPoint {
  id: number | string;
  name: string;
  x: number;
  y: number;
  day?: number;
}

interface TourData {
  id: number;
  slug: string;
  name: string;
  duration: string;
  startingFrom: number;
  currency: string;
  summary: string;
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  heroImage?: TourImage;
  galleryImages?: TourImage[];
  itinerary?: ItineraryDay[];
  mapImage?: string;
  mapPoints?: MapPoint[];
}

interface Props {
  params: { slug: string };
}

export default function TourDetailPage({ params }: Props) {
  const slug = params.slug;
  const { currency } = useCurrency();

  const [activeDay, setActiveDay] = useState(1);
  const [activeSection, setActiveSection] = useState('overview');

  const overviewRef = useRef<HTMLDivElement>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const inclusionsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { data: tourData, isLoading, error } = useQuery<TourData>({
    queryKey: ['tour', slug],
    queryFn: async () => {
      const res = await fetch(`/api/tours/${slug}`);
      if (!res.ok) {
        throw new Error("Failed to fetch tour");
      }
      return res.json();
    },
    enabled: !!slug
  });

  useEffect(() => {
    if (tourData?.itinerary && tourData.itinerary.length > 0) {
      setActiveDay(tourData.itinerary[0].day);
    }
  }, [tourData]);

  // Gallery preparation
  const galleryImages = tourData?.galleryImages?.map(img => ({
    ...img,
    url: img.large || img.medium || img.small || img.baseUrl,
  })) || [];

  if (tourData?.heroImage && !galleryImages.some(img => img.publicId === tourData.heroImage?.publicId)) {
    galleryImages.unshift({
      ...tourData.heroImage,
      url: tourData.heroImage.large || tourData.heroImage.medium || tourData.heroImage.small || tourData.heroImage.baseUrl
    });
  }

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
  if (error || !tourData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Tour Not Found</h1>
        <Button variant="default" onClick={() => window.location.href = "/tours"}>
          Back to Tours
        </Button>
      </div>
    );
  }

  return (
    <div className="pb-20 bg-gray-50">
      {/*<ScrollToTop />*/}

      {/* Hero */}
      <DetailHero
        imageUrl={tourData.heroImage?.large || tourData.heroImage?.baseUrl}
        imageAlt={tourData.heroImage?.alt || tourData.name}
        title={tourData.name}
        subtitle={tourData.heroImage?.caption}
        breadcrumbItems={[
          { label: "Tours", href: "/tours" },
          { label: tourData.name, isCurrentPage: true }
        ]}
        rating={5}
        reviewCount={50}
        duration={tourData.duration}
        overlayOpacity={0}
        aspectRatio="wide"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-8/12">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">Overview</h2>
              <p className="text-lg text-gray-600">{tourData.summary}</p>

              {/* Highlights */}
              {tourData.highlights && tourData.highlights.length > 0 ? (
                tourData.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-[#0F4C81]/80 mr-2 mt-1" />
                    <span>{highlight}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No highlights specified.</li>
              )}

            </section>

            {/* Itinerary 
            {tourData.itinerary?.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">Itinerary</h2>
                <div className="space-y-6">
                  {tourData.itinerary.map(day => (
                    <EnhancedItineraryItem key={day.day} day={day} />
                  ))}
                </div>
              </section>
            )}
            */}
            {/* Gallery */}
            {galleryImages.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">Gallery</h2>
                {/*<AsymmetricalGallery images={galleryImages} />*/}
              </section>
            )}

            {/* Inclusions / Exclusions */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">Tour Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inclusions */}
                <div>
                  <h3 className="font-semibold flex items-center mb-4">
                    <Check className="w-5 h-5 mr-2 text-green-600" /> Inclusions
                  </h3>
                  <ul className="space-y-2">
                    {tourData.inclusions && tourData.inclusions.length > 0 ? (
                      tourData.inclusions.map((item, idx) => (
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
                    {tourData.exclusions && tourData.exclusions.length > 0 ? (
                      tourData.exclusions.map((item, idx) => (
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
              <h2 className="text-3xl font-semibold mb-6 text-[#0F4C81]">Request a Quote</h2>
              {/*<ContactForm tourName={tourData.name} /> */}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-4/12">
            <div className="sticky top-24 bg-white p-6 rounded-lg shadow">
              <div className="mb-4">
                <div className="text-sm text-gray-500">Starting From</div>
                <div className="text-3xl font-bold text-[#0F4C81]">
                  {formatPrice(tourData.startingFrom, currency)}
                </div>
                <div className="text-sm text-gray-500">per person</div>
              </div>

              <Button className="w-full mt-4" onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
