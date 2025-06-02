
import Navigation from '@/components/Navigation'
import { Calendar, MapPin, Users, Star } from 'lucide-react'

export default function ToursPage() {
  const tours = [
    {
      id: 1,
      title: "Cultural Triangle Explorer",
      description: "Discover ancient kingdoms and UNESCO World Heritage sites",
      duration: "7 days",
      groupSize: "2-12 people",
      rating: 4.9,
      price: "$899",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Beach Paradise Getaway",
      description: "Relax on pristine beaches and enjoy water activities",
      duration: "5 days",
      groupSize: "2-8 people",
      rating: 4.8,
      price: "$699",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Hill Country Adventure",
      description: "Tea plantations, waterfalls, and mountain vistas",
      duration: "6 days",
      groupSize: "2-10 people",
      rating: 4.9,
      price: "$799",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      <Navigation />
      
      <div className="container-padding section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Tour Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully crafted experiences that showcase the best of Sri Lanka
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="card group cursor-pointer">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{tour.rating}</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">{tour.price}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
