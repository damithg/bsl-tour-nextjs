
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, ChevronRight } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug;

  // Sample blog post data - in a real app, this would be fetched based on the slug
  const blogPost = {
    id: 1,
    title: "Fantastic Places to Go in the Beautiful East Coast",
    slug: "fantastic-places-to-go-in-the-beautiful-east-coast",
    content: `
      <p>Sri Lanka's east coast is a hidden gem waiting to be discovered. With pristine beaches, crystal-clear waters, and vibrant marine life, this region offers some of the most spectacular coastal experiences in the country.</p>
      
      <h3>Arugam Bay: Surfing Paradise</h3>
      <p>Known as one of the top surfing destinations in Asia, Arugam Bay attracts wave riders from around the world. The consistent waves and laid-back atmosphere make it perfect for both beginners and experienced surfers.</p>
      
      <h3>Batticaloa: Cultural Heritage</h3>
      <p>Explore the rich cultural heritage of Batticaloa, with its historic Dutch fort, singing fish phenomenon, and beautiful lagoons. The town offers a unique blend of Tamil, Muslim, and Sinhalese cultures.</p>
      
      <h3>Pasikudah: Pristine Beaches</h3>
      <p>With shallow, calm waters extending far into the ocean, Pasikudah is perfect for families and those seeking relaxation. The golden sand beaches are ideal for sunbathing and water sports.</p>
      
      <h3>Trincomalee: Historical Significance</h3>
      <p>Home to one of the world's finest natural harbors, Trincomalee offers a perfect combination of history, culture, and natural beauty. Visit the ancient Koneswaram Temple and enjoy whale watching opportunities.</p>
    `,
    excerpt: "Discover the pristine beaches, vibrant marine life, and cultural treasures that make Sri Lanka's east coast a must-visit destination.",
    featuredImage: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1744094008/activities/mirissa-beach.jpg",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "Travel writer and photographer specializing in South Asian destinations"
    },
    publishedAt: "2024-03-15",
    readTime: 8,
    category: "Destinations",
    tags: ["East Coast", "Beaches", "Travel Tips", "Surfing", "Culture"]
  };

  const relatedPosts = [
    {
      id: 2,
      title: "The Ultimate Guide to Sri Lankan Cuisine",
      slug: "ultimate-guide-sri-lankan-cuisine",
      featuredImage: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1747699564/resources/regional-food.jpg",
      category: "Culture",
      readTime: 12
    },
    {
      id: 3,
      title: "Hidden Waterfalls in Sri Lanka's Hill Country",
      slug: "hidden-waterfalls-hill-country",
      featuredImage: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1744007986/activities/ella-nine-arch-train.jpg",
      category: "Adventure",
      readTime: 10
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <nav className="pt-24 pb-8 bg-gray-50" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                <span className="text-sm font-medium text-gray-900 truncate">
                  {blogPost.title}
                </span>
              </div>
            </li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <article className="pb-16">
        <header className="relative h-[60vh] overflow-hidden">
          <img
            src={blogPost.featuredImage}
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#D4AF37] text-white">
                    {blogPost.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(blogPost.publishedAt)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPost.readTime} min read
                    </div>
                  </div>
                </div>
                
                <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {blogPost.title}
                </h1>
                
                <p className="text-xl opacity-90 max-w-3xl">
                  {blogPost.excerpt}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-8">
                {/* Author Info */}
                <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl mb-8">
                  <img
                    src={blogPost.author.avatar}
                    alt={blogPost.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{blogPost.author.name}</h3>
                    <p className="text-gray-600 text-sm">{blogPost.author.bio}</p>
                  </div>
                </div>

                {/* Article Body */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <Link 
                      href="/blog"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Blog
                    </Link>
                    
                    <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Share2 className="w-4 h-4" />
                      Share Article
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-24 space-y-8">
                  {/* Related Articles */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#0F4C81] mb-6">
                      Related Articles
                    </h3>
                    
                    <div className="space-y-6">
                      {relatedPosts.map((post) => (
                        <article key={post.id}>
                          <Link href={`/blog/${post.slug}`} className="group block">
                            <div className="flex gap-4">
                              <img
                                src={post.featuredImage}
                                alt={post.title}
                                className="w-20 h-20 object-cover rounded-lg group-hover:shadow-md transition-shadow"
                              />
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                                  {post.title}
                                </h4>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                                    {post.category}
                                  </span>
                                  <span>{post.readTime} min</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </article>
                      ))}
                    </div>
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
        </div>
      </article>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-4 text-[#0F4C81]">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Turn these travel stories into your own unforgettable experiences. Browse our curated tour packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tours"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#0F4C81] text-white rounded-lg hover:bg-[#0F4C81]/90 transition-colors font-medium"
            >
              Explore Tours
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#0F4C81] text-[#0F4C81] rounded-lg hover:bg-[#0F4C81]/10 transition-colors font-medium"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
