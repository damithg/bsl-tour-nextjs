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
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Clock, Search, BookOpen, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
}

// Extended blog data - 15 posts for demonstration
const generateBlogPosts = (): BlogPost[] => [
  {
    id: 1,
    title: "Fantastic Places to Go in the Beautiful East Coast",
    slug: "fantastic-places-to-go-in-the-beautiful-east-coast",
    excerpt: "Discover the pristine beaches, vibrant marine life, and cultural treasures that make Sri Lanka's east coast a must-visit destination.",
    featuredImage: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1744094008/activities/mirissa-beach.jpg",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    publishedAt: "2024-03-15",
    readTime: 8,
    category: "Destinations",
    tags: ["East Coast", "Beaches", "Travel Tips"]
  },
  {
    id: 2,
    title: "The Ultimate Guide to Sri Lankan Cuisine",
    slug: "ultimate-guide-sri-lankan-cuisine",
    excerpt: "From spicy curries to sweet treats, explore the rich flavors and culinary traditions that make Sri Lankan food exceptional.",
    featuredImage: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1747699564/resources/regional-food.jpg",
    author: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    publishedAt: "2024-03-12",
    readTime: 12,
    category: "Culture",
    tags: ["Food", "Culture", "Local Experience"]
  },
  // Add more posts as needed...
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const sampleBlogPosts = generateBlogPosts();
  const categories = ['All', 'Destinations', 'Culture', 'Photography', 'Travel Tips', 'Adventure', 'Luxury', 'Wellness', 'Food'];

  const filteredPosts = sampleBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex text-gray-600 mb-8 pt-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-blue-600 transition-colors">
                  <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  <span className="text-sm font-medium text-gray-900">
                    Travel Journal
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="text-center mb-12">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6 text-[#0F4C81]">
              Travel Journal
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stories, guides, and insights from Sri Lanka's most beautiful destinations
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#0F4C81] text-white shadow-md'
                    : 'text-gray-600 bg-white border border-gray-200 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article & Sidebar Layout */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {featuredPost && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              {/* Featured Article */}
              <article className="lg:col-span-8">
                <Link href={`/blog/${featuredPost.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl h-[30rem]">
                    <img
                      src={featuredPost.featuredImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#D4AF37]">
                          {featuredPost.category}
                        </span>
                        <span className="text-sm opacity-90">{formatDate(featuredPost.publishedAt)}</span>
                      </div>
                      <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-3">
                        {featuredPost.title}
                      </h2>
                      <p className="text-lg opacity-90 mb-4 line-clamp-2">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-medium">{featuredPost.author.name}</p>
                            <p className="text-sm opacity-75">{featuredPost.readTime} min read</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="space-y-6">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F4C81]">
                    Latest Stories
                  </h3>
                  
                  {regularPosts.slice(0, 3).map((post) => (
                    <article key={post.id} className="group">
                      <Link href={`/blog/${post.slug}`} className="flex gap-4 items-start">
                        <div className="flex-shrink-0">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-32 h-28 object-cover rounded-lg group-hover:shadow-lg transition-shadow"
                          />
                        </div>
                        <div className="flex-1 min-h-[7rem] flex flex-col">
                          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-3 flex-1">{post.excerpt}</p>
                          <div className="flex items-center gap-2 mt-auto">
                            <span className="px-2 py-1 rounded text-xs font-medium text-white bg-[#0F4C81]">
                              {post.category}
                            </span>
                            <span className="text-xs text-gray-500">{post.readTime} min read</span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4 text-[#0F4C81]">
            Ready for Your Sri Lankan Adventure?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Turn these travel stories into your own unforgettable experiences. Browse our curated tour packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tours"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium text-lg hover:shadow-lg transition-all bg-[#0F4C81]"
            >
              Explore Tours
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/newsletter"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#0F4C81] rounded-full font-medium text-lg hover:shadow-lg transition-all text-[#0F4C81]"
            >
              Subscribe to Updates
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
