
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
    tags: ["East Coast", "Beaches", "Travel Tips"],
    featured: true
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
  {
    id: 3,
    title: "Wildlife Photography in Yala National Park",
    slug: "wildlife-photography-yala-national-park",
    excerpt: "Professional tips for capturing stunning wildlife photos in one of Sri Lanka's premier national parks.",
    featuredImage: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1744094008/activities/yala-leopard.jpg",
    author: {
      name: "Emma Williams",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    publishedAt: "2024-03-10",
    readTime: 6,
    category: "Photography",
    tags: ["Wildlife", "Photography", "Yala", "Safari"]
  },
  {
    id: 4,
    title: "Ancient Temples and Sacred Sites of Sri Lanka",
    slug: "ancient-temples-sacred-sites-sri-lanka",
    excerpt: "Journey through centuries of spiritual heritage as we explore the most significant temples and sacred sites.",
    featuredImage: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1743256026/dambulla-cave-temples_xpkz40.jpg",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    publishedAt: "2024-03-08",
    readTime: 10,
    category: "Culture",
    tags: ["Temples", "History", "Buddhism", "Heritage"]
  },
  {
    id: 5,
    title: "Tea Country Adventures in Nuwara Eliya",
    slug: "tea-country-adventures-nuwara-eliya",
    excerpt: "Experience the misty mountains and rolling tea plantations that make Sri Lanka's hill country a paradise.",
    featuredImage: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1744007986/activities/ella-nine-arch-train.jpg",
    author: {
      name: "Lisa Park",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    publishedAt: "2024-03-05",
    readTime: 9,
    category: "Adventure",
    tags: ["Tea Plantations", "Hill Country", "Nature"]
  }
];

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    setBlogPosts(generateBlogPosts());
  }, []);

  const categories = ['All', 'Destinations', 'Culture', 'Adventure', 'Photography'];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

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
        description="Discover the beauty, culture, and adventures that await you in Sri Lanka through our travel stories and expert insights."
        breadcrumbs={[
          { label: 'Blog' }
        ]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-12">
                  <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F4C81] mb-6">Featured Story</h2>
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="relative h-80">
                      <img 
                        src={featuredPost.featuredImage} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium">
                          {featuredPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F4C81] mb-3">
                        <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[#0F4C81]/80 transition-colors">
                          {featuredPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img 
                            src={featuredPost.author.avatar} 
                            alt={featuredPost.author.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{featuredPost.author.name}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              {formatDate(featuredPost.publishedAt)}
                              <Clock className="w-4 h-4 ml-2" />
                              {featuredPost.readTime} min read
                            </div>
                          </div>
                        </div>
                        <Link 
                          href={`/blog/${featuredPost.slug}`}
                          className="inline-flex items-center gap-2 text-[#0F4C81] hover:text-[#0F4C81]/80 font-medium"
                        >
                          Read More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              )}

              {/* Search and Filter */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent"
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {currentPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block bg-[#D4AF37] text-white px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#0F4C81] mb-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-[#0F4C81]/80 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime} min
                        </div>
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
                    className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === page 
                          ? 'bg-[#0F4C81] text-white' 
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="space-y-8">
                {/* Latest Stories */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F4C81]">
                    Latest Stories
                  </h3>

                  {regularPosts.slice(0, 3).map((post) => (
                    <article key={post.id} className="group">
                      <Link href={`/blog/${post.slug}`} className="flex gap-4 items-start">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg group-hover:shadow-md transition-shadow"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-[#0F4C81] transition-colors line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
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
                    <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#0F4C81] mb-2">
                      Stay Updated
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Get the latest travel stories and Sri Lanka insights delivered to your inbox.
                    </p>
                    <Link 
                      href="/newsletter"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F4C81] text-white rounded-lg hover:bg-[#0F4C81]/90 transition-colors text-sm"
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
