import React, { useState } from 'react';
import { blogArticles, BlogPost } from '../data/blogsData';
import { BlogModal } from '../components/BlogModal';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

interface BlogSectionProps {
  onOpenWhatsApp: (service?: string) => void;
}

const articleImages: Record<string, string> = {
  'what-is-corporate-travel-management': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
  'corporate-travel-policy-guide': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800',
  'business-travel-checklist': 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
  'business-visa-guide': 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800',
  'trade-fair-travel-planning': 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800',
  'incentive-tours-guide': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800'
};

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenWhatsApp }) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // Featured 6 articles
  const featuredArticles = blogArticles.slice(0, 6);

  return (
    <section id="blog" className="py-20 bg-white text-[#111827] relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 bg-[#0A2D68]/10 text-[#0A2D68] rounded-full text-xs font-bold uppercase tracking-wider border border-[#0A2D68]/20">
            Corporate Travel Insights
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D]">
            Expert Travel Management Intelligence
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Strategic guidance on travel policies, cost reduction, business visas, and trade fair logistics for corporate leaders.
          </p>
        </div>

        {/* Featured Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => {
            const imageUrl = articleImages[article.slug] || articleImages['what-is-corporate-travel-management'];
            return (
              <div
                key={article.slug}
                className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#D5AF58] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Article Image Cover */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0A2D68]/90 text-white backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {article.category}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/60 text-white backdrop-blur-md rounded-md text-[10px] font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D5AF58]" />
                    <span>{article.readingTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading text-base font-bold text-[#071B3D] group-hover:text-[#0A2D68] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-[#4B5563] text-xs leading-relaxed line-clamp-2">
                      {article.summary}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[11px] text-[#4B5563] font-medium">
                      <User className="w-3 h-3 text-[#0A2D68]" />
                      <span>{article.author}</span>
                    </div>

                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="text-xs font-bold text-[#0A2D68] hover:text-[#071B3D] flex items-center gap-1 transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D5AF58]" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <BlogModal
          post={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onOpenWhatsApp={onOpenWhatsApp}
        />
      )}
    </section>
  );
};
