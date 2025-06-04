'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Calendar,
  Clock,
  User,
  Share2,
  ArrowLeft,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ChevronRight,
  ArrowRight,
  Check,
  Eye,
  Heart,
} from 'lucide-react';

// Blog post interface
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
    bio: string;
  };
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  views?: number;
}

// Sample blog post data with enhanced content matching the reference
const sampleBlogPost: BlogPost = {
  id: 1,
  title: "Fantastic Places to Go in the Beautiful East Coast",
  slug: "fantastic-places-to-go-in-the-beautiful-east-coast",
  excerpt:
    "Discover the pristine beaches, vibrant marine life, and cultural treasures that make Sri Lanka's east coast a must-visit destination for travelers seeking authentic experiences.",
  content: `
    <p>Sri Lanka's east coast is a hidden gem that offers some of the most breathtaking coastal experiences in the Indian Ocean. From pristine beaches to vibrant marine ecosystems, this region provides an authentic glimpse into the island's natural beauty and cultural heritage that remains largely untouched by mass tourism.</p>

    <div class="my-8">
      <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743666036/destinations/arugam-bay-vibes.jpg" class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" alt="Golden sunrise over Arugam Bay" />
      <p class="text-sm text-gray-600 text-center mt-3 italic">Golden sunrise over Arugam Bay's pristine coastline</p>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Arugam Bay: The Surfer's Paradise</h2>
    <p class="mb-6">Arugam Bay stands as one of the world's premier surfing destinations, consistently ranked among the top surf spots globally. The bay's crescent-shaped coastline creates optimal wave conditions from April to October, making it a year-round haven for surf enthusiasts of all skill levels.</p>

    <p class="mb-6">The consistent swells and perfect waves make it ideal for both beginners taking their first steps on a surfboard and experienced surfers seeking challenging breaks. The main break at Arugam Bay offers both left and right-hand waves, providing variety for surfers looking to test their skills.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743665999/destinations/arugam-bay-surfing.jpg" alt="Surfing at Arugam Bay" class="w-full h-48 object-cover rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 text-center mt-2">World-class surfing waves</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1744094008/activities/arugam-bay-beach.jpg" alt="Arugam Bay Beach" class="w-full h-48 object-cover rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 text-center mt-2">Crystal clear waters and golden sand</p>
      </div>
    </div>

    <p class="mb-4">Beyond surfing, Arugam Bay offers a wealth of experiences:</p>
    <ul class="mb-6 space-y-2">
      <li class="flex items-start"><span class="text-[#0F4C81] mr-2">•</span>Stunning sunset views from the main beach that paint the sky in brilliant oranges and purples</li>
      <li class="flex items-start"><span class="text-[#0F4C81] mr-2">•</span>Fresh seafood at beachfront restaurants serving the day's catch</li>
      <li class="flex items-start"><span class="text-[#0F4C81] mr-2">•</span>Wildlife watching at nearby Kumana National Park, home to diverse bird species</li>
      <li class="flex items-start"><span class="text-[#0F4C81] mr-2">•</span>Cultural visits to ancient temples that showcase centuries of Buddhist heritage</li>
    </ul>

    <div class="my-8">
      <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743644784/destinations/arugam-bay-hero.jpg" alt="Sunset at Arugam Bay" class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
      <p class="text-sm text-gray-600 text-center mt-3 italic">Spectacular sunset views that make Arugam Bay unforgettable</p>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Trincomalee: Ancient Harbor City</h2>
    <p class="mb-6">Trincomalee boasts one of the world's finest natural harbors and a rich history spanning over 2,000 years. This ancient port city seamlessly combines colonial architecture, sacred Hindu temples, and pristine beaches, offering visitors a unique blend of culture and natural beauty.</p>

    <p class="mb-6">The city's strategic location has made it significant throughout history, from ancient Tamil kingdoms to Portuguese, Dutch, and British colonial periods. Today, visitors can explore this layered history while enjoying some of the most beautiful beaches on the island.</p>

    <div class="my-8">
      <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743638597/activities/trincomalee-temple.jpg" alt="Koneswaram Temple" class="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg" />
      <p class="text-sm text-gray-600 text-center mt-3 italic">The ancient Koneswaram Temple perched dramatically on Swami Rock</p>
    </div>

    <p class="mb-4">Must-visit attractions include:</p>
    <ul class="mb-6 space-y-2">
      <li class="flex items-start"><span class="text-[#0F4C81] mr-2">•</span>Koneswaram Temple perched dramatically on Swami Rock, offering breathtaking ocean views</li>
      <li class="flex items-start"><span class="text-[#0F4C81] mr-2">•</span>Nilaveli Beach with its crystal-clear waters perfect for swimming and snorkeling</li>
      <li class="flex items-start"><span class="text-[#0F4C81] mr-2">•</span>Whale watching excursions (seasonal) to spot blue whales and sperm whales</li>
      <li class="flex items-start"><span class="text-[#0F4C81] mr-2">•</span>Marble Beach for world-class snorkeling among vibrant coral reefs</li>
    </ul>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743727734/destinations/nilaveli-snorkeling.jpg" alt="Nilaveli Beach" class="w-full h-40 object-cover rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 text-center mt-2">Nilaveli's turquoise waters</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743727955/features/nilaveli-whale-watching.jpg" alt="Whale watching" class="w-full h-40 object-cover rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 text-center mt-2">Blue whale encounters</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743773362/destinations/nilaveli-overview.jpg" alt="Marble Beach" class="w-full h-40 object-cover rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 text-center mt-2">Marble Beach snorkeling</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Batticaloa: The Land of Singing Fish</h2>
    <p class="mb-6">Batticaloa offers a unique cultural experience with its intricate network of lagoons, historic bridges, and the mysterious phenomenon of "singing fish" that can be heard on quiet nights near the historic Kallady Bridge. This eastern city provides insight into Sri Lanka's Tamil culture and colonial heritage.</p>

    <div class="my-8">
      <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743664436/destinations/kalpitiya-lagoon.jpg" alt="Batticaloa Lagoon" class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
      <p class="text-sm text-gray-600 text-center mt-3 italic">The serene lagoons of Batticaloa at twilight</p>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Best Time to Visit the East Coast</h2>
    <p class="mb-6">The east coast enjoys a different monsoon pattern than the west and south coasts, making it an excellent alternative when other parts of the island experience heavy rains. The ideal time to visit is from April to September when the weather is dry, sunny, and perfect for all beach activities.</p>

    <div class="bg-blue-50 border-l-4 border-[#0F4C81] p-6 rounded-lg my-8">
      <h3 class="font-bold text-lg mb-3 text-[#0F4C81]">Pro Tip: Weather Patterns</h3>
      <p class="text-gray-700">Unlike the west coast, the east coast is at its best during the southwest monsoon period. Plan your visit between April and September for calm seas, sunny skies, and perfect conditions for water sports and beach activities.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743984780/tours/sandy-beach.jpg" alt="Perfect weather on east coast" class="w-full h-48 object-cover rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 text-center mt-2">Perfect beach weather from April to September</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743786028/tour/beach-holiday-srilanka.jpg" alt="Beach activities" class="w-full h-48 object-cover rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 text-center mt-2">Ideal conditions for water sports and beach activities</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Planning Your East Coast Adventure</h2>
    <p class="mb-6">To make the most of your east coast adventure, consider staying 5-7 days to fully explore multiple destinations. Many visitors combine their east coast trip with visits to ancient cities like Polonnaruwa or wildlife parks like Yala National Park for a comprehensive Sri Lankan experience.</p>

    <div class="my-8">
      <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1744094008/activities/east-coast-itinerary.jpg" alt="East coast travel map" class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
      <p class="text-sm text-gray-600 text-center mt-3 italic">A suggested route for exploring Sri Lanka's magnificent east coast</p>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl my-8">
      <h3 class="font-bold text-lg mb-3 text-[#0F4C81]">Suggested 7-Day East Coast Itinerary</h3>
      <ul class="text-gray-700 space-y-2">
        <li><strong>Days 1-3:</strong> Trincomalee - Explore temples, pristine beaches, and whale watching opportunities</li>
        <li><strong>Days 4-5:</strong> Arugam Bay - Surfing lessons, sunset vibes, and beach relaxation</li>
        <li><strong>Days 6-7:</strong> Batticaloa - Cultural immersion and peaceful lagoon exploration</li>
      </ul>
    </div>
  `,
  featuredImage:
    "https://res.cloudinary.com/drsjp6bqz/image/upload/v1744002024/activities/unawatuna-bay.jpg",
  author: {
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    bio: "Travel writer and Sri Lanka specialist with over 8 years of experience exploring the island's hidden gems and authentic experiences.",
  },
  publishedAt: "2024-03-15",
  readTime: 8,
  category: "Destinations",
  tags: ["East Coast", "Beaches", "Travel Tips", "Arugam Bay", "Trincomalee", "Surfing"],
  views: 2847
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = sampleBlogPost.title;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setShareMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <section className="bg-[#F8F5F0] pt-20 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-gray-600 mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-[#0F4C81] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                  <Link href="/blog" className="text-sm font-medium hover:text-[#0F4C81] transition-colors">
                    Blog
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                  <span className="text-sm font-medium text-gray-900">
                    {sampleBlogPost.category}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-[#F8F5F0] pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full text-sm font-medium text-white bg-[#0F4C81]">
                {sampleBlogPost.category}
              </span>
              <span className="text-gray-500">
                {formatDate(sampleBlogPost.publishedAt)}
              </span>
            </div>

            <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {sampleBlogPost.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {sampleBlogPost.excerpt}
            </p>

            {/* Author & Meta Info */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-4">
                <img 
                  src={sampleBlogPost.author.avatar} 
                  alt={sampleBlogPost.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    By {sampleBlogPost.author.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{sampleBlogPost.readTime} min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{sampleBlogPost.views?.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
                    liked 
                      ? 'border-red-300 bg-red-50 text-red-600' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                  {liked ? 'Liked' : 'Like'}
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShareMenuOpen(!shareMenuOpen)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>

                  {shareMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <div className="py-2">
                        <a
                          href={shareLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                          <Facebook className="w-4 h-4 text-blue-600" />
                          Facebook
                        </a>
                        <a
                          href={shareLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                          <Twitter className="w-4 h-4 text-blue-400" />
                          Twitter
                        </a>
                        <a
                          href={shareLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                          <Linkedin className="w-4 h-4 text-blue-700" />
                          LinkedIn
                        </a>
                        <button
                          onClick={copyToClipboard}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left"
                        >
                          <Copy className="w-4 h-4 text-gray-600" />
                          Copy Link
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative">
              <img
                src={sampleBlogPost.featuredImage}
                alt={sampleBlogPost.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </header>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8 max-w-none">
              <div
                className="prose prose-lg max-w-none 
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-p:mb-6 prose-p:leading-relaxed prose-p:text-gray-700
                  prose-ul:mb-6 prose-li:mb-2 prose-li:text-gray-700
                  prose-img:rounded-xl prose-img:shadow-md
                  prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: sampleBlogPost.content }}
              />

              {/* Tour Promotion */}
              <div className="my-12 p-8 bg-gradient-to-r from-[#F8F5F0] to-blue-50 border border-gray-200 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4 text-[#0F4C81]">
                      Experience the East Coast with BSL Tours
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Ready to explore these incredible destinations? Our expert-crafted East Coast Discovery tour takes you to all the places mentioned in this article, with luxury accommodations and local guides.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[#0F4C81]" />
                        <span className="text-gray-700">Private chauffeur and luxury vehicle</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[#0F4C81]" />
                        <span className="text-gray-700">Hand-picked boutique accommodations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[#0F4C81]" />
                        <span className="text-gray-700">Expert local guides and authentic experiences</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/tours"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all bg-[#0F4C81] hover:bg-[#0F4C81]/90"
                      >
                        View East Coast Tours
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0F4C81] rounded-lg font-medium hover:shadow-md transition-all text-[#0F4C81] hover:bg-[#0F4C81]/10"
                      >
                        Get Custom Quote
                      </Link>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.mrandmrssmith.com/images/698x522/3802504-amanwella-hotel-tangalle-sri-lanka.jpg"
                      alt="BSL Tours luxury experience"
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md">
                      <p className="text-sm font-semibold text-[#0F4C81]">From $899</p>
                      <p className="text-xs text-gray-600">7-day package</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {sampleBlogPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-[#F8F5F0] rounded-xl">
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-4">
                  About the Author
                </h3>
                <div className="flex items-start gap-4">
                  <img 
                    src={sampleBlogPost.author.avatar} 
                    alt={sampleBlogPost.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {sampleBlogPost.author.name}
                    </h4>
                    <p className="text-gray-600">{sampleBlogPost.author.bio}</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Related Tours */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold mb-4 text-[#0F4C81]">
                    Related Tours
                  </h3>

                  <div className="space-y-4">
                    <div className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <img
                        src="https://blog.bestsrilankatours.com/wp-content/uploads/2020/08/Beach-Holidays.jpg"
                        alt="East Coast Discovery Tour"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          East Coast Discovery
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          7 days exploring Trincomalee, Arugam Bay & Batticaloa
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#0F4C81]">From $899</span>
                          <Link
                            href="/tours"
                            className="text-sm font-medium hover:underline text-[#0F4C81]"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <img
                        src="https://blog.bestsrilankatours.com/wp-content/uploads/2018/04/highlights-1.jpg"
                        alt="Cultural & Coast Combo"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Cultural & Coast Combo
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Ancient cities + pristine east coast beaches
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#0F4C81]">From $1,299</span>
                          <Link
                            href="/tours"
                            className="text-sm font-medium hover:underline text-[#0F4C81]"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/tours"
                    className="inline-flex items-center gap-2 px-4 py-3 mt-4 w-full justify-center rounded-lg text-white font-medium hover:shadow-lg transition-all bg-[#0F4C81] hover:bg-[#0F4C81]/90"
                  >
                    View All Tours
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold mb-3 text-[#0F4C81]">
                    Weekly Travel Insights
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Join 15,000+ travelers getting exclusive tips, hidden gems, and special offers.
                  </p>
                  <Link
                    href="/newsletter"
                    className="inline-flex items-center gap-2 px-4 py-3 w-full justify-center rounded-lg font-medium hover:shadow-md transition-all border-2 border-[#0F4C81] text-[#0F4C81] hover:bg-[#0F4C81]/10"
                  >
                    Subscribe Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-12 bg-[#F8F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:shadow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>
    </main>
  );
}