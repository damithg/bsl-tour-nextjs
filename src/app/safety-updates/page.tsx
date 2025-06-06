
'use client';

import { AlertTriangle, Shield, Phone, Info, Calendar, MapPin } from 'lucide-react';
import MinimalHero from '@/components/common/MinimalHero';

export default function SafetyUpdatesPage() {
  const safetyUpdates = [
    {
      id: 1,
      title: 'Weather Advisory: Monsoon Season Safety',
      date: 'April 20, 2025',
      category: 'Weather',
      severity: 'moderate',
      content: 'The southwest monsoon season is approaching. Travelers should be aware of potential heavy rainfall in the western and southern regions from May to September. We recommend flexible itineraries and waterproof gear.',
      affectedAreas: ['Colombo', 'Galle', 'Kandy', 'Nuwara Eliya'],
      recommendations: [
        'Pack waterproof clothing and gear',
        'Allow extra time for transportation',
        'Consider covered activities during peak rainfall',
        'Stay informed about local weather conditions'
      ]
    },
    {
      id: 2,
      title: 'Road Construction Update: Kandy-Nuwara Eliya Route',
      date: 'April 15, 2025',
      category: 'Transportation',
      severity: 'low',
      content: 'Ongoing road improvements on the A5 highway between Kandy and Nuwara Eliya may cause delays. Alternative scenic routes are available and often provide better views.',
      affectedAreas: ['Kandy', 'Nuwara Eliya', 'Peradeniya'],
      recommendations: [
        'Allow additional 30-45 minutes for travel',
        'Consider the scenic alternative via Gampola',
        'Plan stops at tea estates along the way',
        'Travel during early morning for less traffic'
      ]
    },
    {
      id: 3,
      title: 'Wildlife Park Guidelines Updated',
      date: 'April 10, 2025',
      category: 'Wildlife',
      severity: 'low',
      content: 'New guidelines for wildlife parks emphasize responsible tourism and animal welfare. Enhanced safety protocols are now in place for all safari activities.',
      affectedAreas: ['Yala National Park', 'Udawalawe', 'Minneriya'],
      recommendations: [
        'Maintain safe distances from wildlife',
        'Follow guide instructions at all times',
        'No feeding of animals',
        'Stay inside vehicles unless specifically permitted'
      ]
    },
    {
      id: 4,
      title: 'Temple Visiting Guidelines',
      date: 'April 5, 2025',
      category: 'Cultural',
      severity: 'info',
      content: 'Updated dress codes and visiting hours for major temples and cultural sites. Respectful behavior and appropriate attire are essential for temple visits.',
      affectedAreas: ['Temple of the Tooth', 'Dambulla Cave Temple', 'Polonnaruwa'],
      recommendations: [
        'Wear modest clothing covering shoulders and knees',
        'Remove shoes and hats before entering',
        'Photography restrictions may apply',
        'Maintain quiet and respectful behavior'
      ]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      case 'moderate': return <Shield className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  return (
    <main>
      <MinimalHero
        title="Safety Updates"
        description="Stay informed with the latest travel advisories and safety information for your Sri Lankan journey."
        breadcrumbs={[
          { label: 'Safety Updates' }
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Emergency Contact Section */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-red-900 mb-2">24/7 Emergency Support</h3>
                  <p className="text-red-800 mb-4">
                    For immediate assistance during your travels, contact our emergency hotline:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-red-900">Emergency Hotline:</p>
                      <p className="text-red-800">+94 77 123 4567</p>
                    </div>
                    <div>
                      <p className="font-semibold text-red-900">WhatsApp Support:</p>
                      <p className="text-red-800">+94 77 123 4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Updates */}
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F4C81] mb-4">
                  Current Safety Updates
                </h2>
                <p className="text-lg text-gray-600">
                  Stay informed about current conditions and recommendations for travel in Sri Lanka
                </p>
              </div>

              {safetyUpdates.map((update) => (
                <div key={update.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(update.severity)}`}>
                          {getSeverityIcon(update.severity)}
                          {update.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {update.date}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0F4C81] mb-3">
                      {update.title}
                    </h3>

                    <p className="text-gray-700 mb-4">
                      {update.content}
                    </p>

                    {/* Affected Areas */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Affected Areas:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {update.affectedAreas.map((area, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Recommendations:</h4>
                      <ul className="space-y-2">
                        {update.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-[#0F4C81] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* General Safety Information */}
            <div className="mt-16 bg-[#F8F5F0] rounded-xl p-8">
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F4C81] mb-6">
                General Safety Guidelines
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Health & Medical</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Carry a basic first aid kit</li>
                    <li>• Stay hydrated in tropical climate</li>
                    <li>• Use sunscreen and insect repellent</li>
                    <li>• Drink bottled or boiled water</li>
                    <li>• Keep emergency contacts handy</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Transportation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Always wear seatbelts</li>
                    <li>• Use reputable transportation providers</li>
                    <li>• Keep valuables secure during transit</li>
                    <li>• Follow traffic rules and local customs</li>
                    <li>• Plan for longer travel times</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Cultural Respect</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Dress modestly at religious sites</li>
                    <li>• Remove shoes before entering temples</li>
                    <li>• Respect local customs and traditions</li>
                    <li>• Ask permission before photographing people</li>
                    <li>• Learn basic Sinhala or Tamil phrases</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Environmental</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Respect wildlife and natural habitats</li>
                    <li>• Follow Leave No Trace principles</li>
                    <li>• Stay on designated paths</li>
                    <li>• Dispose of waste responsibly</li>
                    <li>• Support eco-friendly practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
