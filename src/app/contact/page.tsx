
import Navigation from '@/components/Navigation'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navigation />
      
      <div className="container-padding section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your Sri Lankan adventure? Get in touch and let's plan your perfect trip.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+94 77 123 4567</p>
                  <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@bsltours.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-gray-600">123 Galle Road<br />Colombo 03, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tour Interest
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>Select a tour type</option>
                  <option>Cultural Triangle</option>
                  <option>Beach Paradise</option>
                  <option>Hill Country</option>
                  <option>Wildlife Safari</option>
                  <option>Custom Tour</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your dream Sri Lankan adventure..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center py-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
