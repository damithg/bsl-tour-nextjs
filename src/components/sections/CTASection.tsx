'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-[#0F4C81]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for Your Sri Lankan Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-['Raleway']">
            Let us craft a personalized journey that matches your dreams. From ancient temples to pristine beaches, your perfect Sri Lankan experience awaits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white text-lg font-medium py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              Plan Your Journey
            </Link>
            <Link 
              href="/tours" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg font-medium py-4 px-8 rounded-lg transition transform hover:scale-105"
            >
              Browse Tours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;