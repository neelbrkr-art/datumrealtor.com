import { Calendar, User, ArrowRight, TrendingUp, Home, DollarSign } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Mumbai Real Estate Market Trends for 2026",
      excerpt: "Discover the latest trends shaping Mumbai's real estate landscape, from pricing dynamics to emerging neighborhoods.",
      image: "https://images.unsplash.com/photo-1756435292384-1bf32eff7baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
      category: "Market Trends",
      author: "Rajesh Kumar",
      date: "May 1, 2026",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "10 Tips for First-Time Home Buyers in India",
      excerpt: "Essential advice to help you navigate the home buying process and make informed decisions for your first property purchase.",
      image: "https://images.unsplash.com/photo-1639405091806-01e8ab3cd13a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
      category: "Buying Guide",
      author: "Priya Sharma",
      date: "April 28, 2026",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Investment Opportunities in Commercial Real Estate",
      excerpt: "Explore the lucrative opportunities in commercial real estate and learn how to maximize your investment returns.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
      category: "Investment",
      author: "Amit Patel",
      date: "April 25, 2026",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Rise of Smart Homes in Urban India",
      excerpt: "How technology is transforming residential properties and what it means for modern homeowners and investors.",
      image: "https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
      category: "Technology",
      author: "Sneha Desai",
      date: "April 22, 2026",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "Understanding RERA and Its Impact on Property Buyers",
      excerpt: "A comprehensive guide to Real Estate Regulatory Authority and how it protects your interests as a buyer.",
      image: "https://images.unsplash.com/photo-1639751787355-bbc3ed1fd639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
      category: "Legal",
      author: "Rajesh Kumar",
      date: "April 18, 2026",
      readTime: "8 min read",
    },
    {
      id: 6,
      title: "Sustainable Living: Green Buildings in Mumbai",
      excerpt: "The growing trend of eco-friendly properties and why sustainable real estate is the future of urban living.",
      image: "https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
      category: "Sustainability",
      author: "Priya Sharma",
      date: "April 15, 2026",
      readTime: "6 min read",
    },
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div>
      <section className="bg-gradient-to-r from-[var(--navy)] to-[var(--navy-light)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-6">Real Estate Insights</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Expert analysis, market trends, and valuable tips for property buyers and investors
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl mb-8 text-[var(--navy)]">Featured Article</h2>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="h-96">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block bg-[var(--gold)] text-white px-3 py-1 rounded-full text-sm mb-4 self-start">
                  {featuredPost.category}
                </div>
                <h3 className="text-3xl mb-4 text-[var(--navy)]">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="flex items-center space-x-2 bg-[var(--navy)] text-white px-6 py-3 rounded-lg hover:bg-[var(--navy-light)] transition-colors self-start">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl mb-8 text-[var(--navy)]">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-[var(--gold)]/10 text-[var(--gold)] px-3 py-1 rounded-full text-sm mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-xl mb-3 text-[var(--navy)]">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <button className="text-[var(--navy)] hover:text-[var(--gold)] transition-colors flex items-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[var(--navy)]">Popular Topics</h2>
            <p className="text-gray-600">Explore articles by category</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="bg-[var(--gold)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[var(--gold)]" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--navy)]">Market Trends</h3>
              <p className="text-gray-600 text-sm mb-4">Latest insights on real estate market dynamics</p>
              <div className="text-[var(--gold)]">12 Articles</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="bg-[var(--gold)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-[var(--gold)]" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--navy)]">Buying Guides</h3>
              <p className="text-gray-600 text-sm mb-4">Essential tips for property buyers</p>
              <div className="text-[var(--gold)]">18 Articles</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="bg-[var(--gold)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-[var(--gold)]" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--navy)]">Investment</h3>
              <p className="text-gray-600 text-sm mb-4">Strategies for smart property investment</p>
              <div className="text-[var(--gold)]">15 Articles</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6 text-[var(--navy)]">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest real estate insights and market updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            />
            <button
              type="submit"
              className="bg-[var(--navy)] text-white px-8 py-3 rounded-lg hover:bg-[var(--navy-light)] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
