
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
    <p class="text-gray-700 leading-relaxed mb-6">Sri Lanka's east coast is a hidden gem that offers some of the most breathtaking coastal experiences in the Indian Ocean. From pristine beaches to vibrant marine ecosystems, this region provides an authentic glimpse into the island's natural beauty and cultural heritage that remains largely untouched by mass tourism.</p>

    <div class="my-8">
      <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743666036/destinations/arugam-bay-vibes.jpg" class="w-full h-64 md:h-80 object-cover rounded-lg" alt="Golden sunrise over Arugam Bay" />
      <p class="text-sm text-gray-500 text-center mt-3 italic">Golden sunrise over Arugam Bay's pristine coastline</p>
    </div>

    <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Arugam Bay: The Surfer's Paradise</h2>
    <p class="text-gray-700 leading-relaxed mb-6">Arugam Bay stands as one of the world's premier surfing destinations, consistently ranked among the top surf spots globally. The bay's crescent-shaped coastline creates optimal wave conditions from April to October, making it a year-round haven for surf enthusiasts of all skill levels.</p>

    <p class="text-gray-700 leading-relaxed mb-6">The consistent swells and perfect waves make it ideal for both beginners taking their first steps on a surfboard and experienced surfers seeking challenging breaks. The main break at Arugam Bay offers both left and right-hand waves, providing variety for surfers looking to test their skills.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743665999/destinations/arugam-bay-surfing.jpg" alt="Surfing at Arugam Bay" class="w-full h-48 object-cover rounded-lg" />
        <p class="text-sm text-gray-500 text-center mt-2">World-class surfing waves</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1744094008/activities/arugam-bay-beach.jpg" alt="Arugam Bay Beach" class="w-full h-48 object-cover rounded-lg" />
        <p class="text-sm text-gray-500 text-center mt-2">Crystal clear waters and golden sand</p>
      </div>
    </div>

    <p class="text-gray-700 leading-relaxed mb-4">Beyond surfing, Arugam Bay offers a wealth of experiences:</p>
    <ul class="mb-6 space-y-2 pl-4">
      <li class="text-gray-700">• Stunning sunset views from the main beach that paint the sky in brilliant oranges and purples</li>
      <li class="text-gray-700">• Fresh seafood at beachfront restaurants serving the day's catch</li>
      <li class="text-gray-700">• Wildlife watching at nearby Kumana National Park, home to diverse bird species</li>
      <li class="text-gray-700">• Cultural visits to ancient temples that showcase centuries of Buddhist heritage</li>
    </ul>

    <div class="my-8">
      <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743644784/destinations/arugam-bay-hero.jpg" alt="Sunset at Arugam Bay" class="w-full h-64 md:h-80 object-cover rounded-lg" />
      <p class="text-sm text-gray-500 text-center mt-3 italic">Spectacular sunset views that make Arugam Bay unforgettable</p>
    </div>

    <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Trincomalee: Ancient Harbor City</h2>
    <p class="text-gray-700 leading-relaxed mb-6">Trincomalee boasts one of the world's finest natural harbors and a rich history spanning over 2,000 years. This ancient port city seamlessly combines colonial architecture, sacred Hindu temples, and pristine beaches, offering visitors a unique blend of culture and natural beauty.</p>

    <p class="text-gray-700 leading-relaxed mb-6">The city's strategic location has made it significant throughout history, from ancient Tamil kingdoms to Portuguese, Dutch, and British colonial periods. Today, visitors can explore this layered history while enjoying some of the most beautiful beaches on the island.</p>

    <div class="my-8">
      <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743638597/activities/trincomalee-temple.jpg" alt="Koneswaram Temple" class="w-full h-64 md:h-96 object-cover rounded-lg" />
      <p class="text-sm text-gray-500 text-center mt-3 italic">The ancient Koneswaram Temple perched dramatically on Swami Rock</p>
    </div>

    <p class="text-gray-700 leading-relaxed mb-4">Must-visit attractions include:</p>
    <ul class="mb-6 space-y-2 pl-4">
      <li class="text-gray-700">• Koneswaram Temple perched dramatically on Swami Rock, offering breathtaking ocean views</li>
      <li class="text-gray-700">• Nilaveli Beach with its crystal-clear waters perfect for swimming and snorkeling</li>
      <li class="text-gray-700">• Whale watching excursions (seasonal) to spot blue whales and sperm whales</li>
      <li class="text-gray-700">• Marble Beach for world-class snorkeling among vibrant coral reefs</li>
    </ul>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743727734/destinations/nilaveli-snorkeling.jpg" alt="Nilaveli Beach" class="w-full h-40 object-cover rounded-lg" />
        <p class="text-sm text-gray-500 text-center mt-2">Nilaveli's turquoise waters</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743727955/features/nilaveli-whale-watching.jpg" alt="Whale watching" class="w-full h-40 object-cover rounded-lg" />
        <p class="text-sm text-gray-500 text-center mt-2">Blue whale encounters</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743773362/destinations/nilaveli-overview.jpg" alt="Marble Beach" class="w-full h-40 object-cover rounded-lg" />
        <p class="text-sm text-gray-500 text-center mt-2">Marble Beach snorkeling</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Batticaloa: The Land of Singing Fish</h2>
    <p class="text-gray-700 leading-relaxed mb-6">Batticaloa offers a unique cultural experience with its intricate network of lagoons, historic bridges, and the mysterious phenomenon of "singing fish" that can be heard on quiet nights near the historic Kallady Bridge. This eastern city provides insight into Sri Lanka's Tamil culture and colonial heritage.</p>

    <div class="my-8">
      <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743664436/destinations/kalpitiya-lagoon.jpg" alt="Batticaloa Lagoon" class="w-full h-64 md:h-80 object-cover rounded-lg" />
      <p class="text-sm text-gray-500 text-center mt-3 italic">The serene lagoons of Batticaloa at twilight</p>
    </div>

    <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Best Time to Visit the East Coast</h2>
    <p class="text-gray-700 leading-relaxed mb-6">The east coast enjoys a different monsoon pattern than the west and south coasts, making it an excellent alternative when other parts of the island experience heavy rains. The ideal time to visit is from April to September when the weather is dry, sunny, and perfect for all beach activities.</p>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8">
      <h3 class="font-semibold text-lg mb-3 text-blue-900">Pro Tip: Weather Patterns</h3>
      <p class="text-blue-800">Unlike the west coast, the east coast is at its best during the southwest monsoon period. Plan your visit between April and September for calm seas, sunny skies, and perfect conditions for water sports and beach activities.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743984780/tours/sandy-beach.jpg" alt="Perfect weather on east coast" class="w-full h-48 object-cover rounded-lg" />
        <p class="text-sm text-gray-500 text-center mt-2">Perfect beach weather from April to September</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743786028/tour/beach-holiday-srilanka.jpg" alt="Beach activities" class="w-full h-48 object-cover rounded-lg" />
        <p class="text-sm text-gray-500 text-center mt-2">Ideal conditions for water sports and beach activities</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Planning Your East Coast Adventure</h2>
    <p class="text-gray-700 leading-relaxed mb-6">To make the most of your east coast adventure, consider staying 5-7 days to fully explore multiple destinations. Many visitors combine their east coast trip with visits to ancient cities like Polonnaruwa or wildlife parks like Yala National Park for a comprehensive Sri Lankan experience.</p>

    <div class="my-8">
      <img src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1744094008/activities/east-coast-itinerary.jpg" alt="East coast travel map" class="w-full h-64 md:h-80 object-cover rounded-lg" />
      <p class="text-sm text-gray-500 text-center mt-3 italic">A suggested route for exploring Sri Lanka's magnificent east coast</p>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg my-8">
      <h3 class="font-semibold text-lg mb-3 text-blue-900">Suggested 7-Day East Coast Itinerary</h3>
      <ul class="text-blue-800 space-y-2">
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
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-[#0F4C81] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                  <Link href="/blog" className="hover:text-[#0F4C81] transition-colors">
                    Blog
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                  <span className="text-gray-900">
                    {sampleBlogPost.category}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Article Content - Single Column Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article>
          
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#0F4C81] text-white text-sm font-medium rounded">
                {sampleBlogPost.category}
              </span>
              <span className="text-sm text-gray-500">
                {formatDate(sampleBlogPost.publishedAt)}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {sampleBlogPost.title}
            </h1>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {sampleBlogPost.excerpt}
            </p>

            {/* Author & Meta Info */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img 
                  src={sampleBlogPost.author.avatar} 
                  alt={sampleBlogPost.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">
                    {sampleBlogPost.author.name}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>{sampleBlogPost.readTime} min read</span>
                    <span>•</span>
                    <span>{sampleBlogPost.views?.toLocaleString()} views</span>
                  </div>
                </div>
              </div>

              {/* Share and Like Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-2 px-3 py-2 border rounded-lg transition-colors text-sm ${
                    liked 
                      ? 'bg-red-50 border-red-200 text-red-600' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                  {liked ? 'Liked' : 'Like'}
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShareMenuOpen(!shareMenuOpen)}
                    className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
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
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-sm"
                        >
                          <Facebook className="w-4 h-4 text-blue-600" />
                          Facebook
                        </a>
                        <a
                          href={shareLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-sm"
                        >
                          <Twitter className="w-4 h-4 text-blue-400" />
                          Twitter
                        </a>
                        <a
                          href={shareLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-sm"
                        >
                          <Linkedin className="w-4 h-4 text-blue-700" />
                          LinkedIn
                        </a>
                        <button
                          onClick={copyToClipboard}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left text-sm"
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
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={sampleBlogPost.featuredImage}
              alt={sampleBlogPost.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: sampleBlogPost.content }}
          />

          {/* Tour Promotion Box */}
          <div className="my-12 p-6 bg-gradient-to-r from-[#0F4C81] to-[#1a5aa0] rounded-lg text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Explore the East Coast with BSL Tours
                </h3>
                <p className="mb-4 text-blue-100">
                  Ready to experience these incredible destinations? Our East Coast Discovery tour covers all the highlights mentioned in this article.
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Private vehicle with chauffeur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Handpicked accommodations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Expert local guides</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/tours"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0F4C81] rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    View Tours
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/drsjp6bqz/image/upload/v1743666036/destinations/arugam-bay-vibes.jpg"
                  alt="East Coast Tour"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold text-[#0F4C81]">From $899</p>
                  <p className="text-xs text-gray-600">7-day package</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {sampleBlogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">About the Author</h3>
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

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Ultimate Guide to Sri Lankan Cuisine",
                  date: "March 12, 2024",
                  image: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1747699564/resources/regional-food.jpg",
                  excerpt: "Discover the flavors of Sri Lanka from street food to fine dining."
                },
                {
                  title: "Wildlife Photography in Yala",
                  date: "March 10, 2024", 
                  image: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1744094008/activities/yala-leopard.jpg",
                  excerpt: "Tips for capturing stunning wildlife photos in Sri Lanka's premier national park."
                },
                {
                  title: "Tea Country Adventures",
                  date: "March 5, 2024",
                  image: "https://res.cloudinary.com/drsjp6bqz/image/upload/v1744007986/activities/ella-nine-arch-train.jpg",
                  excerpt: "Journey through the misty hills and emerald tea plantations of central Sri Lanka."
                }
              ].map((post, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <Link href="/blog" className="text-sm text-[#0F4C81] hover:underline">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* Back to Blog */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:shadow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
