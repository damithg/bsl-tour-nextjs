
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Clock, Search, BookOpen, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import MinimalHero from '@/components/MinimalHero';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  featured?: boolean;
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Fantastic Places to Go in the Beautiful East Coast",
      slug: "fantastic-places-to-go-in-the-beautiful-east-coast",
      excerpt: "Discover the pristine beaches, vibrant marine life, and cultural treasures that make Sri Lanka's east coast a must-visit destination.",
      content: "Full article content here...",
      featuredImage: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1744094008/activities/mirissa-beach.jpg",
      author: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      publishedAt: "2024-03-15",
      readTime: 8,
      category: "Destinations",
      tags: ["East Coast", "Beaches", "Travel Tips"],
      featured: true
    },
    {
      id: 2,
      title: "The Ultimate Guide to Sri Lankan Cuisine",
      slug: "ultimate-guide-sri-lankan-cuisine",
      excerpt: "From spicy curries to sweet treats, explore the rich culinary heritage of Sri Lanka and discover must-try dishes.",
      content: "Full article content here...",
      featuredImage: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1747699564/resources/regional-food.jpg",
      author: {
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      publishedAt: "2024-03-10",
      readTime: 12,
      category: "Culture",
      tags: ["Food", "Culture", "Local Experiences"]
    },
    {
      id: 3,
      title: "Hidden Waterfalls in Sri Lanka's Hill Country",
      slug: "hidden-waterfalls-hill-country",
      excerpt: "Venture off the beaten path to discover some of Sri Lanka's most spectacular and lesser-known waterfalls.",
      content: "Full article content here...",
      featuredImage: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1744007986/activities/ella-nine-arch-train.jpg",
      author: {
        name: "Emma Thompson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      publishedAt: "2024-03-05",
      readTime: 10,
      category: "Adventure",
      tags: ["Hill Country", "Waterfalls", "Nature"]
    },
    {
      id: 4,
      title: "Wildlife Safari: Best Time to Visit Yala National Park",
      slug: "wildlife-safari-best-time-yala",
      excerpt: "Plan your perfect wildlife safari with our guide to the best seasons, weather conditions, and animal sightings in Yala.",
      content: "Full article content here...",
      featuredImage: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1746207764/shutterstock_203858371_1_kxf0jo.jpg",
      author: {
        name: "David Wilson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      publishedAt: "2024-02-28",
      readTime: 7,
      category: "Wildlife",
      tags: ["Safari", "Wildlife", "Yala", "Planning"]
    }
  ];

  const categories = ['All', 'Destinations', 'Culture', 'Adventure', 'Wildlife', 'Travel Tips'];

  // Filter and search functionality
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Featured and regular posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main>
      <MinimalHero
        title="Travel Stories & Insights"
        description="Discover Sri Lanka through our collection of travel stories, cultural insights, and expert tips to enhance your journey."
        breadcrumbs={[
          { label: 'Blog' }
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              
              {/* Search and Filter */}
              <div className="mb-12">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent"
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {currentPosts.map((post) => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#D4AF37] text-white text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} min read
                        </div>
                      </div>
                      
                      <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#0F4C81] mb-3 hover:text-[#0F4C81]/80 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-sm text-gray-700 font-medium">
                            {post.author.name}
                          </span>
                        </div>
                        
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-[#0F4C81] hover:text-[#0F4C81]/80 transition-colors text-sm font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-2 rounded-lg ${
                        currentPage === i + 1
                          ? 'bg-[#0F4C81] text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                
                {/* Featured Posts */}
                <div className="bg-[#F8F5F0] rounded-xl p-6">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F4C81]">
                    Latest Stories
                  </h3>

                  {regularPosts.slice(0, 3).map((post) => (
                    <article key={post.id} className="group">
                      <Link href={`/blog/${post.slug}`} className="flex gap-4 items-start">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-20 h-20 object-cover rounded-lg group-hover:shadow-md transition-shadow"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-[#0F4C81] transition-colors line-clamp-2 mb-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.publishedAt)}
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
                  <div className="text-center">
                    <BookOpen className="w-12 h-12 text-[#0F4C81] mx-auto mb-4" />
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#0F4C81] mb-3">
                      Stay Updated
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Get the latest travel stories and Sri Lanka insights delivered to your inbox.
                    </p>
                    <Link
                      href="/newsletter"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F4C81] text-white rounded-lg hover:bg-[#0F4C81]/90 transition-colors font-medium"
                    >
                      Subscribe Now
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
