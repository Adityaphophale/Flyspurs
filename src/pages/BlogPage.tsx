import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogArticles, BlogPost } from '../data/blogsData';
import { SEOHead } from '../components/SEOHead';
import { Search, Clock, Calendar, User, ArrowRight, BookOpen, Tag } from 'lucide-react';

interface BlogPageProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenWhatsApp }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Corporate Travel Strategy', 'Policy & Governance', 'Visas & Immigration', 'Exhibition Travel', 'Incentive Travel', 'Cost Optimization'];

  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Corporate Travel Insights & Guides | Flyspurs SEO Knowledge Hub"
        description="Explore authoritative corporate travel management articles, visa guides, travel policy templates, exhibition planning checklists, and cost optimization strategies."
      />

      <div className="pt-28 pb-20 bg-[#F7F8FA] min-h-screen text-[#071B3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#0A2D68] text-[#D5AF58] rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              Corporate Travel Knowledge Hub
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#071B3D]">
              B2B Travel Insights & Guides
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              In-depth articles written by Flyspurs senior travel consultants on policy design, business visas, MICE incentives, and corporate cost optimization.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md mb-12 space-y-4">
            
            <div className="relative max-w-xl mx-auto">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search articles by topic, visa, policy, or cost optimization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0A2D68] bg-[#F7F8FA]"
              />
            </div>

            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#0A2D68] text-[#D5AF58] shadow-xs'
                      : 'bg-[#F7F8FA] text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#D5AF58] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-7 space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-[#0A2D68]/10 text-[#0A2D68] text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D5AF58]" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl font-bold text-[#071B3D] group-hover:text-[#0A2D68] transition-colors leading-snug">
                    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-gray-500 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-[#0A2D68]" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      {article.publishDate}
                    </span>
                  </div>

                </div>

                {/* Card CTA */}
                <div className="p-7 pt-0">
                  <Link
                    to={`/blog/${article.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#F7F8FA] hover:bg-[#0A2D68] text-[#0A2D68] hover:text-white font-bold text-xs rounded-xl border border-gray-200 transition-all group-hover:border-[#0A2D68]"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </article>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="bg-white text-[#111827] p-8 sm:p-10 rounded-2xl border border-[#E5E7EB] text-center space-y-4 shadow-md">
            <h3 className="font-heading text-2xl font-bold text-[#071B3D]">Need Customized Travel Policy Advice?</h3>
            <p className="text-xs sm:text-sm text-[#4B5563] max-w-xl mx-auto">
              Our travel specialists assist companies with travel spend audits, corporate rate negotiations, and visa compliance frameworks.
            </p>
            <button
              onClick={() => onOpenWhatsApp('Blog Page Advisory Request')}
              className="px-6 py-3 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
            >
              Request Corporate Travel Advisory
            </button>
          </div>

        </div>
      </div>
    </>
  );
};
