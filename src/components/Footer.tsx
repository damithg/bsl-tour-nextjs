
'use client';

import { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset any previous messages
    setMessage('');
    setMessageType(null);
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    try {
      setIsSubmitting(true);
      
      // For now, just simulate success - you can add actual newsletter signup logic later
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage("You're on the list! Get ready for Sri Lankan paradise in your inbox.");
      setMessageType('success');
      setEmail('');
    } catch (error) {
      setMessage("Failed to subscribe to newsletter");
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer style={{ backgroundColor: '#004E64' }} className="text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-8">
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 order-1">
            <h3 style={{ color: '#D4AF37' }} className="font-['Playfair_Display'] text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.8)' }} className="font-['Raleway'] text-base hover:text-secondary transition">Contact Us</Link></li>
              <li><Link href="/pre-departure-info" style={{ color: 'rgba(255,255,255,0.8)' }} className="font-['Raleway'] text-base hover:text-secondary transition">Pre-Departure Info</Link></li>
              <li><Link href="/safety-updates" style={{ color: 'rgba(255,255,255,0.8)' }} className="font-['Raleway'] text-base hover:text-secondary transition">Safety Updates</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 order-2">
            <h3 style={{ color: '#D4AF37' }} className="font-['Playfair_Display'] text-xl font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="/newsletter" style={{ color: 'rgba(255,255,255,0.8)' }} className="font-['Raleway'] text-base hover:text-secondary transition">Newsletter</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 order-3">
            <h3 style={{ color: '#D4AF37' }} className="font-['Playfair_Display'] text-xl font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><Link href="/destination/sigiriya-rock-fortress" style={{ color: 'rgba(255,255,255,0.8)' }} className="font-['Raleway'] text-base hover:text-secondary transition">Sigiriya</Link></li>
              <li><Link href="/destination/galle" style={{ color: 'rgba(255,255,255,0.8)' }} className="font-['Raleway'] text-base hover:text-secondary transition">Galle</Link></li>
              <li><Link href="/destination/kandy" style={{ color: 'rgba(255,255,255,0.8)' }} className="font-['Raleway'] text-base hover:text-secondary transition">Kandy</Link></li>
              <li><Link href="/destination/ella" style={{ color: 'rgba(255,255,255,0.8)' }} className="font-['Raleway'] text-base hover:text-secondary transition">Ella</Link></li>
              <li><Link href="/destination/yala" style={{ color: 'rgba(255,255,255,0.8)' }} className="font-['Raleway'] text-base hover:text-secondary transition">Yala</Link></li>
              <li><Link href="/destination/bentota" style={{ color: 'rgba(255,255,255,0.8)' }} className="font-['Raleway'] text-base hover:text-secondary transition">Bentota</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 order-4">
            <h3 style={{ color: '#D4AF37' }} className="font-['Playfair_Display'] text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.8)' }} className="font-['Raleway'] text-base hover:text-secondary transition">About Us</Link></li>
              <li><Link href="/careers" style={{ color: 'rgba(255,255,255,0.8)' }} className="font-['Raleway'] text-base hover:text-secondary transition">Careers</Link></li>
            </ul>
          </div>
          
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-4 mt-6 sm:mt-0 order-5">
            <h3 style={{ color: '#D4AF37' }} className="font-['Playfair_Display'] text-xl font-bold mb-4">Our Social</h3>
            <div className="flex space-x-3 mb-5">
              <a href="https://www.facebook.com/thebestsrilankatours" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#0f766e50' }} className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primary transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" style={{ backgroundColor: '#0f766e50' }} className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primary transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            
            <h4 className="font-['Playfair_Display'] text-xl font-bold mb-3 text-white">Sign Up for Updates</h4>
            <p style={{ color: 'rgba(255,255,255,0.8)' }} className="font-['Raleway'] text-base mb-3">Subscribe to our newsletter for exclusive offers, travel tips, and the latest Sri Lanka travel inspiration.</p>
            <form className="mb-3" onSubmit={handleSubscribe}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="font-['Raleway'] flex-grow bg-white/10 text-white placeholder-white/60 py-3 px-4 rounded-l-md focus:outline-none focus:bg-white/15 transition text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  style={{ backgroundColor: '#0f766e' }}
                  className="font-['Raleway'] hover:bg-primary/90 text-white py-3 px-5 rounded-r-md transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    <i className="fas fa-arrow-right"></i>
                  )}
                </button>
              </div>
            </form>
            {message && (
              <div 
                className={`font-['Raleway'] text-base mt-2 mb-3 ${
                  messageType === 'success' 
                    ? 'text-green-300' 
                    : 'text-red-300'
                }`}
              >
                {message}
              </div>
            )}
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="font-['Raleway'] text-sm">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="font-['Raleway'] text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Best Sri Lanka Tours. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-7">
            <Link href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.6)' }} className="font-['Raleway'] hover:text-white text-sm transition">Privacy Policy</Link>
            <Link href="/terms-conditions" style={{ color: 'rgba(255,255,255,0.6)' }} className="font-['Raleway'] hover:text-white text-sm transition">Terms & Conditions</Link>
            <Link href="/cookie-policy" style={{ color: 'rgba(255,255,255,0.6)' }} className="font-['Raleway'] hover:text-white text-sm transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F4C81] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-['Playfair_Display'] text-xl font-bold mb-4">Best Sri Lanka Tours</h3>
            <p className="text-white/80 mb-4">
              Experience the magic of Sri Lanka with our carefully curated luxury tours and authentic experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/tours" className="hover:text-white transition-colors">Tours</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact Info</h4>
            <div className="text-white/80 space-y-2">
              <p>Email: info@bestsrilankatours.com</p>
              <p>Phone: +94 77 123 4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Best Sri Lanka Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
