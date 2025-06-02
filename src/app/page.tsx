import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Star, MapPin, Calendar, Users, Phone, Mail, Award, Globe, Heart, Check } from 'lucide-react'
import Navigation from '@/components/Navigation'


const HomePage = () => {
  const featuredTours = [
    {
      id: 1,
      title: 'Cultural Triangle Tour',
      description: 'Explore ancient kingdoms and UNESCO World Heritage sites',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '7 Days',
      price: '$899',
      highlights: ['Sigiriya Rock Fortress', 'Polonnaruwa', 'Kandy Temple']
    },
    {
      id: 2,
      title: 'Hill Country Explorer',
      description: 'Journey through tea plantations and misty mountains',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '5 Days',
      price: '$599',
      highlights: ['Ella Nine Arch Bridge', 'Tea Factory Visit', 'Little Adams Peak']
    },
    {
      id: 3,
      title: 'Wildlife Safari Adventure',
      description: 'Encounter elephants, leopards, and exotic wildlife',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Days',
      price: '$749',
      highlights: ['Yala National Park', 'Udawalawe Safari', 'Elephant Orphanage']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'Australia',
      review: 'BSL Tours made our Sri Lankan adventure unforgettable. Professional service and authentic experiences!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Michael Chen',
      country: 'Canada',
      review: 'Incredible attention to detail and local knowledge. The cultural tours were absolutely amazing.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Emma Williams',
      country: 'UK',
      review: 'Perfect blend of adventure and relaxation. BSL Tours knows how to create magical experiences.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Sri Lanka landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover the Magic of
            <span className="block text-orange-400">Sri Lanka</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Experience authentic adventures, rich culture, and breathtaking landscapes with BSL Tours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" className="btn-primary">
              <Link href="/tours">Explore Tours</Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary">
              <Link href="/contact">Plan Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Why Choose BSL Tours?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of experience in Sri Lankan tourism, BSL Tours offers 
                authentic, personalized experiences that showcase the true beauty and culture of Ceylon.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Expertise</h3>
                    <p className="text-gray-600">Born and raised guides with intimate knowledge of Sri Lanka</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Authentic Experiences</h3>
                    <p className="text-gray-600">Genuine cultural immersion beyond typical tourist spots</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Service</h3>
                    <p className="text-gray-600">Tailored itineraries to match your interests and pace</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sri Lankan culture"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular experiences designed to showcase the best of Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <div className="relative h-48">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                    {tour.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <ul className="text-sm text-gray-500 mb-4 space-y-1">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{tour.price}</span>
                    <Button className="btn-primary">
                      <Link href="/tours">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real travelers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 card-hover">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Start Your Sri Lankan Adventure?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Let us create a personalized journey that matches your dreams and interests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/tours">Browse All Tours</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* What Makes Sri Lanka Special */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Discover Sri Lanka's Magic
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From ancient civilizations to diverse wildlife, stunning beaches to misty mountains - Sri Lanka offers incredible diversity in a compact island paradise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                <Calendar className="w-12 h-12 text-white z-10" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h3 className="font-semibold text-lg mb-2">2,500 Years of History</h3>
              <p className="text-gray-600 text-sm">Ancient kingdoms and archaeological wonders</p>
            </div>
            
            <div className="text-center group">
              <div className="aspect-square bg-gradient-to-br from-green-500 to-green-600 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                <MapPin className="w-12 h-12 text-white z-10" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h3 className="font-semibold text-lg mb-2">8 UNESCO Sites</h3>
              <p className="text-gray-600 text-sm">World Heritage cultural and natural treasures</p>
            </div>
            
            <div className="text-center group">
              <div className="aspect-square bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                <Star className="w-12 h-12 text-white z-10" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h3 className="font-semibold text-lg mb-2">1,600km Coastline</h3>
              <p className="text-gray-600 text-sm">Pristine beaches and tropical waters</p>
            </div>
            
            <div className="text-center group">
              <div className="aspect-square bg-gradient-to-br from-secondary to-accent rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                <Users className="w-12 h-12 text-white z-10" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h3 className="font-semibold text-lg mb-2">26 National Parks</h3>
              <p className="text-gray-600 text-sm">Incredible wildlife and biodiversity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your dream Sri Lankan vacation. Our travel experts will create a personalized itinerary just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/tours">
                Browse Tours
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-secondary" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-secondary" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-secondary" />
              <span>Best price guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Best Sri Lanka Tours</h3>
              <p className="text-gray-400 mb-6">Your trusted partner for authentic Sri Lankan travel experiences since 2010. Creating memories that last a lifetime.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span>info@bestsrilankatours.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>+94 77 123 4567</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/tours" className="hover:text-secondary transition-colors">Tours</Link></li>
                <li><Link href="/destinations" className="hover:text-secondary transition-colors">Destinations</Link></li>
                <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Popular Tours</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/tours/cultural-triangle" className="hover:text-secondary transition-colors">Cultural Triangle</Link></li>
                <li><Link href="/tours/hill-country" className="hover:text-secondary transition-colors">Hill Country</Link></li>
                <li><Link href="/tours/beaches-whales" className="hover:text-secondary transition-colors">Beaches & Whales</Link></li>
                <li><Link href="/tours/wildlife-safari" className="hover:text-secondary transition-colors">Wildlife Safari</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span>No. 123, Galle Road,<br />Colombo 03, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>+94 77 123 4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span>info@bestsrilankatours.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Best Sri Lanka Tours. All rights reserved. | Proudly Sri Lankan 🇱🇰</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default HomePage