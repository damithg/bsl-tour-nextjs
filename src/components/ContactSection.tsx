
'use client';

import { useState } from 'react';
import Link from 'next/link';

// Simple contact form component for Next.js
const SimpleContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus({
        type: 'success',
        message: "Thank you for your inquiry. We'll get back to you within 24 hours."
      });
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-base font-medium font-['Raleway'] text-gray-700 mb-2">First Name *</label>
            <input 
              type="text" 
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-[#0F4C81] focus:border-[#0F4C81] bg-gray-50"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-base font-medium font-['Raleway'] text-gray-700 mb-2">Last Name *</label>
            <input 
              type="text" 
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-[#0F4C81] focus:border-[#0F4C81] bg-gray-50"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-base font-medium font-['Raleway'] text-gray-700 mb-2">Email Address *</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-[#0F4C81] focus:border-[#0F4C81] bg-gray-50"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-base font-medium font-['Raleway'] text-gray-700 mb-2">Phone Number</label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-[#0F4C81] focus:border-[#0F4C81] bg-gray-50"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-base font-medium font-['Raleway'] text-gray-700 mb-2">Your Requirements *</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-[#0F4C81] focus:border-[#0F4C81] bg-gray-50"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-[#0F4C81] hover:bg-opacity-90 text-white text-lg font-medium py-3 px-4 rounded-md transition flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Inquiry'
          )}
        </button>
        
        {submitStatus.type && (
          <div className={`mt-6 p-4 rounded-lg transition-opacity duration-300 ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            <p className={`text-base ${
              submitStatus.type === 'success' ? 'text-green-700' : 'text-red-700'
            }`}>
              {submitStatus.message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text and Contact Info */}
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#0F4C81] mb-6">
              Talk to our travel experts
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about pricing, destinations, or Sri Lankan tours? Fill out the form and our travel experts will be in touch directly.
            </p>
            
            {/* Contact Methods */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="space-y-6">
                {/* Chat */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81]">
                      <i className="fas fa-comments"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Chat</h3>
                    <p className="text-gray-600">Monday - Saturday: 10:00 - 18:00</p>
                  </div>
                </div>
                
                {/* WhatsApp Chat */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81]">
                      <i className="fab fa-whatsapp"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp Chat</h3>
                    <a href="https://wa.me/447418364367" className="text-[#0F4C81] hover:text-[#0F4C81]/80 transition">
                      +44 7418 364367
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81]">
                      <i className="fas fa-envelope"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@bestsrilankatours.com" className="text-[#0F4C81] hover:text-[#0F4C81]/80 transition">
                      info@bestsrilankatours.com
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/thebestsrilankatours" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white transition-all">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white transition-all">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white transition-all">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div>
            <div className="p-1">
              <SimpleContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
