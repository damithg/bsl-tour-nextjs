
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, MapPin, Calendar, Users, Phone, Mail, Award, Globe, Heart } from 'lucide-react'
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
            alt="Beautiful Sri Lankan landscape with ancient temple"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Discover the
              <span className="block text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Pearl of the Indian Ocean
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Experience authentic Sri Lanka through our carefully curated tour packages. From ancient temples to pristine beaches, create memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/tours">
                  Explore Tours
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Plan Your Journey
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

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose BSL Tours?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Your gateway to experiencing the authentic beauty, rich culture, and warm hospitality of Sri Lanka
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Experiences</h3>
              <p className="text-gray-600">Handcrafted tours that showcase Sri Lanka's hidden gems, iconic landmarks, and authentic local experiences.</p>
            </div>
            
            <div className="card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary-200 transition-colors">
                <Users className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Local Guides</h3>
              <p className="text-gray-600">Professional guides with deep knowledge of Sri Lankan culture, history, and the best-kept secrets of each destination.</p>
            </div>
            
            <div className="card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-200 transition-colors">
                <MapPin className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Authentic Destinations</h3>
              <p className="text-gray-600">Visit both famous attractions and off-the-beaten-path locations for a truly comprehensive Sri Lankan experience.</p>
            </div>

            <div className="card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Award-Winning Service</h3>
              <p className="text-gray-600">Recognized for excellence in hospitality and customer satisfaction by leading travel organizations.</p>
            </div>

            <div className="card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainable Tourism</h3>
              <p className="text-gray-600">Committed to responsible travel practices that benefit local communities and preserve Sri Lanka's natural beauty.</p>
            </div>

            <div className="card p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Care</h3>
              <p className="text-gray-600">Every itinerary is tailored to your interests, ensuring a unique and memorable journey through Sri Lanka.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations Preview */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Explore Sri Lanka's Wonders
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From ancient kingdoms to pristine beaches, discover the diverse beauty of Sri Lanka
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/tours" className="group">
              <div className="card hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                  <Calendar className="w-12 h-12 text-white z-10" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Cultural Triangle
                  </h3>
                  <p className="text-gray-600 text-sm">Ancient kingdoms and UNESCO World Heritage sites</p>
                </div>
              </div>
            </Link>
            
            <Link href="/destinations" className="group">
              <div className="card hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center relative overflow-hidden">
                  <MapPin className="w-12 h-12 text-white z-10" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Hill Country
                  </h3>
                  <p className="text-gray-600 text-sm">Tea plantations and misty mountain landscapes</p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog" className="group">
              <div className="card hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                  <Star className="w-12 h-12 text-white z-10" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Beach Paradise
                  </h3>
                  <p className="text-gray-600 text-sm">Golden beaches and crystal-clear waters</p>
                </div>
              </div>
            </Link>
            
            <Link href="/contact" className="group">
              <div className="card hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-secondary to-accent flex items-center justify-center relative overflow-hidden">
                  <Users className="w-12 h-12 text-white z-10" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Wildlife Safari
                  </h3>
                  <p className="text-gray-600 text-sm">National parks and incredible wildlife encounters</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready for Your Sri Lankan Adventure?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let us create a personalized itinerary that captures the essence of Sri Lanka just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">
                Start Planning
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/tours">
                View All Tours
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">BSL Tours</h3>
              <p className="text-gray-400 mb-6">Your trusted partner for authentic Sri Lankan travel experiences. Creating memories that last a lifetime.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span>info@bsltours.com</span>
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
                <li><Link href="/tours/beach-escape" className="hover:text-secondary transition-colors">Beach Escape</Link></li>
                <li><Link href="/tours/wildlife-safari" className="hover:text-secondary transition-colors">Wildlife Safari</Link></li>
                <li><Link href="/tours/hill-country" className="hover:text-secondary transition-colors">Hill Country</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span>123 Galle Road,<br />Colombo 03, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>+94 77 123 4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span>info@bsltours.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BSL Tours. All rights reserved. | Designed with ❤️ for Sri Lanka</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
