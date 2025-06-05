
'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { 
  ChevronRight, MapPin, Calendar, Clock, Bookmark, Users, Compass, 
  Sun, Droplets, Star, Menu, ArrowRight, ChevronDown, MessageCircle, 
  Heart, Share2, Camera, MapIcon, Coffee, Phone, Mail
} from 'lucide-react';
import Link from 'next/link';
import { getAllDestinations, DestinationCardDto } from '@/lib/api';

export default function DestinationDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [activeTab, setActiveTab] = useState<'overview' | 'activities' | 'gallery' | 'map'>('overview');
  const overviewRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  
  const isNumeric = /^\d+$/.test(slug || '');
  const destinationId = isNumeric ? parseInt(slug, 10) : 0;
  const destinationSlug = !isNumeric ? slug : '';
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      if (overviewRef.current && activitiesRef.current && galleryRef.current && mapRef.current) {
        const overviewTop = overviewRef.current.offsetTop;
        const activitiesTop = activitiesRef.current.offsetTop;
        const galleryTop = galleryRef.current.offsetTop;
        const mapTop = mapRef.current.offsetTop;
        
        if (scrollPosition >= mapTop) {
          setActiveTab('map');
        } else if (scrollPosition >= galleryTop) {
          setActiveTab('gallery');
        } else if (scrollPosition >= activitiesTop) {
          setActiveTab('activities');
        } else {
          setActiveTab('overview');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const { data: destinations = [], error, isLoading } = useQuery<DestinationCardDto[]>({
    queryKey: ['destinations'],
    queryFn: getAllDestinations,
    enabled: !!slug,
  });
  
  const destination = destinations.find(dest => 
    (isNumeric && dest.id === destinationId) || 
    (!isNumeric && dest.slug === destinationSlug)
  );
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-16 h-16 border-4 border-[#0F4C81] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="font-['Playfair_Display'] text-3xl text-[#0F4C81] mb-4">Error Loading Destination</h2>
        <p className="mb-8">We encountered an error while loading the destination information. Please try again later.</p>
        <Link href="/destinations" className="inline-block bg-[#0F4C81] text-white font-medium py-3 px-8 rounded-md">
          Return to Destinations
        </Link>
      </div>
    );
  }
  
  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="font-['Playfair_Display'] text-3xl text-[#0F4C81] mb-4">Destination Not Found</h2>
        <p className="mb-8">Sorry, we couldn't locate the destination you're looking for.</p>
        <Link href="/destinations" className="inline-block bg-[#0F4C81] text-white font-medium py-3 px-8 rounded-md">
          Return to Destinations
        </Link>
      </div>
    );
  }

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={destination.imageUrl || 'https://res.cloudinary.com/drsjp6bqz/image/upload/v1746208326/shutterstock_1068884744_1_fza0zi.jpg'}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <nav className="flex items-center space-x-2 text-white/80 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/destinations" className="hover:text-white">Destinations</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">{destination.name}</span>
              </nav>
              
              <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white mb-6">
                {destination.name}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-xl">
                {destination.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection(overviewRef)}
                  className="px-8 py-3 bg-[#0F4C81] text-white hover:bg-[#0F4C81]/90 rounded-lg transition-colors font-medium"
                >
                  Explore Details
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 py-4">
            {[
              { id: 'overview', label: 'Overview', ref: overviewRef },
              { id: 'activities', label: 'Activities', ref: activitiesRef },
              { id: 'gallery', label: 'Gallery', ref: galleryRef },
              { id: 'map', label: 'Map', ref: mapRef }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref)}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === item.id
                    ? 'text-[#0F4C81] border-b-2 border-[#0F4C81]'
                    : 'text-gray-600 hover:text-[#0F4C81]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Overview Section */}
      <section ref={overviewRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F4C81] mb-6">
                About {destination.name}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {destination.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Discover the magic of {destination.name}, where ancient traditions meet modern luxury. 
                  This remarkable destination offers visitors a unique blend of cultural heritage, natural beauty, 
                  and unforgettable experiences that will create memories to last a lifetime.
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-12">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F4C81] mb-6">
                  Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Camera, title: "Photography Spots", desc: "Stunning viewpoints and scenic locations" },
                    { icon: Compass, title: "Cultural Sites", desc: "Ancient temples and historical landmarks" },
                    { icon: Coffee, title: "Local Experiences", desc: "Authentic cuisine and traditional crafts" },
                    { icon: MapPin, title: "Natural Wonders", desc: "Breathtaking landscapes and wildlife" }
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-[#F8F5F0] rounded-lg">
                      <highlight.icon className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
                        <p className="text-gray-600 text-sm">{highlight.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#F8F5F0] rounded-xl p-6 sticky top-32">
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#0F4C81] mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-gray-700">Sri Lanka</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-gray-700">Best visited year-round</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-gray-700">Suitable for all ages</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Plan Your Visit</h4>
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center px-4 py-3 bg-[#0F4C81] text-white hover:bg-[#0F4C81]/90 rounded-lg transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Us
                    </Link>
                    <Link
                      href="/tours"
                      className="w-full flex items-center justify-center px-4 py-3 bg-transparent border-2 border-[#0F4C81] text-[#0F4C81] hover:bg-[#0F4C81]/10 rounded-lg transition-colors"
                    >
                      View Tours
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section ref={activitiesRef} className="py-20 bg-[#F8F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F4C81] mb-12 text-center">
            Things to Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Tours",
                description: "Explore ancient temples and historical sites",
                image: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1746208326/shutterstock_1068884744_1_fza0zi.jpg"
              },
              {
                title: "Nature Walks", 
                description: "Discover local flora and fauna",
                image: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1744007986/activities/ella-nine-arch-train.jpg"
              },
              {
                title: "Local Cuisine",
                description: "Taste authentic Sri Lankan flavors",
                image: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1744094008/activities/mirissa-beach.jpg"
              }
            ].map((activity, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#0F4C81] mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F4C81] mb-12 text-center">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={destination.imageUrl || 'https://res.cloudinary.com/drsjp6bqz/image/upload/v1746208326/shutterstock_1068884744_1_fza0zi.jpg'}
                  alt={`${destination.name} ${index}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="py-20 bg-[#F8F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F4C81] mb-12 text-center">
            Location & Map
          </h2>
          <div className="bg-white rounded-xl p-8">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Interactive map will be loaded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0F4C81]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-6">
            Ready to Visit {destination.name}?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our experts create a customized itinerary that includes {destination.name} and other amazing destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tours" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#0F4C81] hover:bg-gray-100 rounded-lg transition-colors duration-300 font-medium"
            >
              View Tour Packages
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors duration-300 font-medium"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
