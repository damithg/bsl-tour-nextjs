
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, MapPin, Calendar, Users, Phone, Mail, Award, Globe, Heart, Check } from 'lucide-react'
import Navigation from '@/components/Navigation'
import { Button } from '@/components/ui/Button'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Sri Lanka temple and landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Discover Sri Lanka
              <span className="block text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                The Pearl of the Indian Ocean
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Experience the authentic beauty of Sri Lanka with our expertly crafted tour packages. From ancient temples to pristine beaches, wildlife safaris to cultural wonders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/tours">
                  Explore Our Tours
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why Choose BSL Tours */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Best Sri Lanka Tours?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for authentic Sri Lankan experiences since 2010. We create unforgettable journeys that showcase the real beauty of our island paradise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Local Guides</h3>
              <p className="text-gray-600">Our certified guides are passionate locals with deep knowledge of Sri Lankan culture, history, and hidden gems that only insiders know.</p>
            </div>
            
            <div className="card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary-200 transition-colors">
                <Award className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Award-Winning Service</h3>
              <p className="text-gray-600">Recognized by TripAdvisor as a Certificate of Excellence winner for 5 consecutive years for outstanding customer service.</p>
            </div>
            
            <div className="card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-200 transition-colors">
                <Users className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Small Group Tours</h3>
              <p className="text-gray-600">Maximum 12 passengers per tour ensures personalized attention and authentic experiences away from crowded tourist traps.</p>
            </div>

            <div className="card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainable Tourism</h3>
              <p className="text-gray-600">We're committed to responsible travel that benefits local communities and preserves Sri Lanka's natural and cultural heritage.</p>
            </div>

            <div className="card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Check className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Best Price Guarantee</h3>
              <p className="text-gray-600">Find the same tour cheaper elsewhere? We'll match the price and give you an additional 5% discount. No hidden fees ever.</p>
            </div>

            <div className="card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance during your trip. Our team is always available via WhatsApp, phone, or email whenever you need us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Most Popular Tours
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully designed itineraries that showcase the best of Sri Lanka's diverse landscapes, rich culture, and incredible wildlife
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Cultural Triangle - Sigiriya Rock"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-secondary text-black px-3 py-1 rounded-full text-sm font-semibold">
                  7 Days
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  Cultural Triangle Explorer
                </h3>
                <p className="text-gray-600 text-sm mb-4">Discover ancient kingdoms, UNESCO World Heritage sites, and magnificent temples in Sri Lanka's cultural heartland.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">4.9 (127 reviews)</span>
                  </div>
                  <div className="text-primary font-bold">From $899</div>
                </div>
              </div>
            </div>

            <div className="card group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-green-600 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Hill Country tea plantations"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-secondary text-black px-3 py-1 rounded-full text-sm font-semibold">
                  6 Days
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  Hill Country & Tea Trails
                </h3>
                <p className="text-gray-600 text-sm mb-4">Journey through misty mountains, emerald tea plantations, and charming colonial hill stations.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">4.8 (89 reviews)</span>
                  </div>
                  <div className="text-primary font-bold">From $799</div>
                </div>
              </div>
            </div>

            <div className="card group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-purple-600 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Mirissa Beach whale watching"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-secondary text-black px-3 py-1 rounded-full text-sm font-semibold">
                  5 Days
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  Beaches & Whale Watching
                </h3>
                <p className="text-gray-600 text-sm mb-4">Relax on pristine beaches and witness majestic blue whales in their natural habitat off the southern coast.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">4.9 (156 reviews)</span>
                  </div>
                  <div className="text-primary font-bold">From $699</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/tours">
                View All Tours
                <ArrowRight className="w-5 h-5" />
              </Link>
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
