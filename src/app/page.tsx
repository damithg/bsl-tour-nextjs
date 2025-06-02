import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, MapPin, Calendar, Users, Phone, Mail } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">BSL Tours</span>
              <span className="ml-2 text-sm text-muted-foreground">Best Sri Lanka</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-primary">Home</Link>
              <Link href="/tours" className="text-gray-600 hover:text-primary">Tours</Link>
              <Link href="/destinations" className="text-gray-600 hover:text-primary">Destinations</Link>
              <Link href="/blog" className="text-gray-600 hover:text-primary">Blog</Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm text-gray-600">+94 77 123 4567</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Beautiful Sri Lankan landscape with ancient temple"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover
            <span className="block text-secondary">Sri Lanka</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Experience authentic Ceylon through our carefully curated tour packages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tours" 
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Tours
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose BSL Tours?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your gateway to experiencing the authentic beauty and culture of Sri Lanka
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premium Experiences</h3>
              <p className="text-gray-600">Handcrafted tours that showcase Sri Lanka's hidden gems and iconic landmarks</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Local Guides</h3>
              <p className="text-gray-600">Professional guides with deep knowledge of Sri Lankan culture and history</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Authentic Destinations</h3>
              <p className="text-gray-600">Visit both famous attractions and off-the-beaten-path locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Journey</h2>
            <p className="text-xl text-gray-600">Explore our most popular destinations and experiences</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/tours" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Tour Packages
                  </h3>
                  <p className="text-gray-600 text-sm">Discover our carefully planned itineraries</p>
                </div>
              </div>
            </Link>
            
            <Link href="/destinations" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Destinations
                  </h3>
                  <p className="text-gray-600 text-sm">Explore Sri Lanka's diverse regions</p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Star className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Travel Blog
                  </h3>
                  <p className="text-gray-600 text-sm">Stories and insights from Sri Lanka</p>
                </div>
              </div>
            </Link>
            
            <Link href="/contact" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Contact Us
                  </h3>
                  <p className="text-gray-600 text-sm">Plan your perfect Sri Lankan adventure</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BSL Tours</h3>
              <p className="text-gray-400 mb-4">Your trusted partner for authentic Sri Lankan travel experiences.</p>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@bsltours.com</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tours" className="hover:text-white">Tours</Link></li>
                <li><Link href="/destinations" className="hover:text-white">Destinations</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Popular Tours</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tours/cultural-triangle" className="hover:text-white">Cultural Triangle</Link></li>
                <li><Link href="/tours/beach-escape" className="hover:text-white">Beach Escape</Link></li>
                <li><Link href="/tours/wildlife-safari" className="hover:text-white">Wildlife Safari</Link></li>
                <li><Link href="/tours/hill-country" className="hover:text-white">Hill Country</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+94 77 123 4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@bsltours.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BSL Tours. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}