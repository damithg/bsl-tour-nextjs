
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Check, ArrowRight, MapPin, Users, Globe, Calendar } from 'lucide-react';
import MinimalHero from '@/components/common/MinimalHero';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) return;
    
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <MinimalHero
        title="Sri Lanka Travel Insights"
        description="Discover the island's most captivating destinations and experiences through our curated travel insights"
        breadcrumbs={[
          { label: 'Newsletter' }
        ]}
      />

      {/* Main Content Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0F4C81]">
                  Journey with Sri Lanka's Travel Experts
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  Each month, we share carefully curated insights about Sri Lanka's hidden treasures, 
                  seasonal highlights, and exclusive experiences that transform ordinary trips into extraordinary adventures.
                </p>
              </div>

              {/* What You'll Receive */}
              <div className="space-y-6">
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0F4C81]">
                  What You'll Discover
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 bg-[#D4AF37]/40">
                      <MapPin className="w-4 h-4 text-[#0F4C81]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Hidden Destinations</h4>
                      <p className="text-gray-600 text-sm">Off-the-beaten-path locations and local secrets</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 bg-[#D4AF37]/40">
                      <Calendar className="w-4 h-4 text-[#0F4C81]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Seasonal Insights</h4>
                      <p className="text-gray-600 text-sm">Perfect timing for different regions and activities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 bg-[#D4AF37]/40">
                      <Users className="w-4 h-4 text-[#0F4C81]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Cultural Experiences</h4>
                      <p className="text-gray-600 text-sm">Authentic encounters with local traditions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 bg-[#D4AF37]/40">
                      <Globe className="w-4 h-4 text-[#0F4C81]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Exclusive Offers</h4>
                      <p className="text-gray-600 text-sm">Special pricing and early access to new tours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-[#D4AF37]">
                <p className="text-gray-700 italic mb-4">
                  "The monthly insights helped us discover places in Sri Lanka we never would have found on our own. 
                  Each newsletter feels like getting advice from a knowledgeable local friend."
                </p>
                <div className="pt-3">
                  <p className="font-semibold text-gray-800">Sarah Thompson</p>
                  <p className="text-sm text-gray-600">Travel Photographer, London</p>
                </div>
              </div>
            </div>

            {/* Right Column - Subscription Form */}
            <div className="lg:pl-8">
              {submitted ? (
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-[#0F4C81]/20">
                    <Check className="w-8 h-8 text-[#0F4C81]" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4 text-[#0F4C81]">
                    Welcome to Our Community!
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Thank you for joining our travel community. Your first newsletter will arrive within 48 hours with exclusive Sri Lankan travel insights.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <p>✓ Check your email for a welcome message</p>
                    <p>✓ Follow us on social media for daily inspiration</p>
                  </div>
                  <Link 
                    href="/tours"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-all hover:scale-105 bg-[#0F4C81]"
                  >
                    Explore Our Tours <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#D4AF37]/40">
                      <Mail className="w-8 h-8 text-[#0F4C81]" />
                    </div>
                    <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-2 text-[#0F4C81]">
                      Start Your Journey
                    </h3>
                    <p className="text-gray-600">
                      Join thousands of travelers discovering Sri Lanka's magic
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent transition-all"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-white font-medium text-lg transition-all hover:scale-105 bg-[#0F4C81]"
                    >
                      <Mail className="w-5 h-5" />
                      Subscribe to Insights
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. Unsubscribe anytime. No spam, ever.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-20 bg-[#0F4C81]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Sri Lanka?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our travel experts design your perfect Sri Lankan adventure with personalized recommendations and insider access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white rounded-full font-medium transition-all hover:scale-105 text-[#0F4C81]"
            >
              Plan Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/tours"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-medium transition-all hover:bg-white/10"
            >
              Browse Tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
