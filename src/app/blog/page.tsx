import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sri Lanka Travel Blog | BSL Tours - Travel Stories & Guides',
  description: 'Discover Sri Lanka through our travel blog. Expert guides, cultural insights, and travel tips for your perfect Sri Lankan adventure.',
  keywords: 'Sri Lanka travel blog, Ceylon travel guide, Sri Lanka destinations, travel tips, cultural experiences',
}

// This will connect to your actual blog API
async function getBlogPosts() {
  // Replace with your actual API endpoint
  try {
    const response = await fetch('http://localhost:5000/api/blog', { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Blog API not available:', error);
    return null;
  }
}

export default async function BlogPage() {
  const blogData = await getBlogPosts();
  
  if (!blogData) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary">BSL Tours</span>
                <span className="ml-2 text-sm text-muted-foreground">Best Sri Lanka</span>
              </Link>
              
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
                <Link href="/tours" className="text-gray-600 hover:text-primary">Tours</Link>
                <Link href="/destinations" className="text-gray-600 hover:text-primary">Destinations</Link>
                <Link href="/blog" className="text-gray-900 hover:text-primary">Blog</Link>
                <Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900">Blog</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Travel Stories & Guides
            </h1>
            <div className="bg-white rounded-lg p-12 max-w-2xl mx-auto shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog Content Ready</h2>
              <p className="text-gray-600 mb-6">
                This page will display your authentic blog content once connected to your blog API. 
                The server-side rendering will ensure your travel stories are properly indexed by search engines.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                <ArrowRight className="w-4 h-4" />
                Explore Tours Instead
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // When blog data is available, render the full blog
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation and content would be rendered here with real data */}
    </div>
  );
}