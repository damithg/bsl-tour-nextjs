
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />

      {/* Popular Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the most breathtaking locations that Sri Lanka has to offer, 
              from ancient cultural sites to pristine beaches and lush highlands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sigiriya */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/sigiriya-destination.jpg" 
                alt="Sigiriya Rock Fortress" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sigiriya Rock Fortress</h3>
                <p className="text-gray-600 mb-4">Ancient rock fortress with stunning frescoes and panoramic views</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Cultural Heritage</span>
              </div>
            </div>

            {/* Kandy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/kandy-destination.jpg" 
                alt="Kandy Temple" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kandy</h3>
                <p className="text-gray-600 mb-4">Sacred city home to the Temple of the Tooth and rich cultural heritage</p>
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Religious Sites</span>
              </div>
            </div>

            {/* Ella */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/ella-destination.jpg" 
                alt="Ella Rock" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ella</h3>
                <p className="text-gray-600 mb-4">Stunning hill country with tea plantations and scenic train rides</p>
                <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Nature & Adventure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
