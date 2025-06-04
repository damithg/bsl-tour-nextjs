
'use client';

import MinimalHero from '@/components/MinimalHero';

export default function TermsConditionsPage() {
  return (
    <main>
      <MinimalHero
        title="Terms & Conditions"
        description="Please read these terms and conditions carefully before using our services."
        breadcrumbs={[
          { label: 'Terms & Conditions' }
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0F4C81] mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to Best Sri Lanka Tours. These Terms and Conditions ("Terms") govern your use of our website and services. 
                By accessing our website or booking our services, you agree to comply with and be bound by these Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0F4C81] mt-8 mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>"Company," "we," "us," or "our"</strong> refers to Best Sri Lanka Tours</li>
                <li><strong>"Customer," "you," or "your"</strong> refers to the person booking or using our services</li>
                <li><strong>"Services"</strong> refers to all travel-related services we provide including tours, accommodations, and transportation</li>
                <li><strong>"Booking"</strong> refers to any reservation made through our services</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0F4C81] mt-8 mb-4">3. Booking and Payment</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Booking Process</h3>
              <p>All bookings are subject to availability and confirmation by Best Sri Lanka Tours. A booking is confirmed only when we send you a written confirmation.</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Payment Terms</h3>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>A deposit of 30% is required at the time of booking</li>
                <li>Full payment is due 30 days before your travel date</li>
                <li>Bookings made within 30 days of travel require full payment immediately</li>
                <li>We accept major credit cards, bank transfers, and other specified payment methods</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Prices</h3>
              <p>All prices are quoted in USD unless otherwise specified and are subject to change until booking confirmation. Prices include services as specified in your itinerary but exclude international flights unless specifically mentioned.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0F4C81] mt-8 mb-4">4. Cancellation and Refund Policy</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1 Cancellation by Customer</h3>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>More than 45 days before travel:</strong> 10% cancellation fee</li>
                <li><strong>31-45 days before travel:</strong> 25% cancellation fee</li>
                <li><strong>15-30 days before travel:</strong> 50% cancellation fee</li>
                <li><strong>Less than 15 days before travel:</strong> 100% cancellation fee (no refund)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2 Cancellation by Company</h3>
              <p>We reserve the right to cancel any booking due to circumstances beyond our control. In such cases, we will provide a full refund or alternative arrangements.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0F4C81] mt-8 mb-4">5. Travel Requirements</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.1 Documentation</h3>
              <p>Customers are responsible for ensuring they have valid passports, visas, and any required health documentation for travel to Sri Lanka.</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 Health and Safety</h3>
              <p>Customers should consult their healthcare provider regarding recommended vaccinations and health precautions for travel to Sri Lanka.</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.3 Travel Insurance</h3>
              <p>We strongly recommend that all customers purchase comprehensive travel insurance to cover trip cancellation, medical emergencies, and other unforeseen circumstances.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0F4C81] mt-8 mb-4">6. Liability and Responsibilities</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.1 Our Responsibilities</h3>
              <p>We are responsible for providing the services described in your confirmed itinerary with reasonable care and skill. We act as an agent for various service providers and cannot be held liable for their actions or omissions.</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.2 Limitation of Liability</h3>
              <p>Our liability for any claim is limited to the total cost of your booking. We are not liable for any indirect, consequential, or punitive damages.</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.3 Force Majeure</h3>
              <p>We are not liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, war, terrorism, or government actions.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0F4C81] mt-8 mb-4">7. Changes to Itinerary</h2>
              <p>We reserve the right to make changes to your itinerary due to local conditions, safety concerns, or circumstances beyond our control. We will make every effort to provide suitable alternatives and will not charge additional fees for such changes.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0F4C81] mt-8 mb-4">8. Customer Conduct</h2>
              <p>Customers are expected to conduct themselves in a manner that does not interfere with the enjoyment of other travelers or violate local laws and customs. We reserve the right to terminate services without refund if customer behavior is deemed inappropriate.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0F4C81] mt-8 mb-4">9. Complaints</h2>
              <p>Any complaints should be reported to us immediately during your travel. If you are not satisfied with our resolution, you may submit a written complaint within 30 days of your return.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0F4C81] mt-8 mb-4">10. Governing Law</h2>
              <p>These Terms are governed by the laws of Sri Lanka. Any disputes will be subject to the exclusive jurisdiction of the courts of Sri Lanka.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0F4C81] mt-8 mb-4">11. Changes to Terms</h2>
              <p>We may update these Terms from time to time. The updated version will be posted on our website with the effective date.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0F4C81] mt-8 mb-4">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> info@bestsrilankatours.com<br />
                <strong>Phone:</strong> +94 77 123 4567<br />
                <strong>Address:</strong> 123 Galle Road, Colombo 03, Sri Lanka
              </p>
            </div>

            <div className="text-sm text-gray-500 mt-12 pt-4 border-t border-gray-200">
              Last Updated: April 12, 2025
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
