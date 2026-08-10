import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogArticles, BlogPost } from '../data/blogsData';
import { SEOHead } from '../components/SEOHead';
import { ArrowLeft, Clock, Calendar, User, Share2, HelpCircle, ArrowRight, MessageSquare, BookOpen, CheckCircle } from 'lucide-react';

interface BlogPostPageProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onOpenWhatsApp }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const article = blogArticles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center max-w-xl mx-auto space-y-4 px-4">
        <h1 className="font-heading text-3xl font-bold text-[#071B3D]">Article Not Found</h1>
        <p className="text-gray-600 text-sm">The requested corporate travel guide could not be located.</p>
        <Link to="/blog" className="inline-block px-5 py-2.5 bg-[#0A2D68] text-white font-bold text-xs rounded-xl">
          Return to Blog Knowledge Hub
        </Link>
      </div>
    );
  }

  const relatedArticles = blogArticles.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  return (
    <>
      <SEOHead
        title={article.seoTitle}
        description={article.metaDescription}
        canonicalUrl={`https://www.flyspurs.com/blog/${article.slug}`}
        ogType="article"
        articleData={{
          publishDate: article.publishDate,
          updatedDate: article.updatedDate,
          author: article.author,
          title: article.title,
        }}
      />

      <div className="pt-28 pb-20 bg-[#F7F8FA] text-[#071B3D] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 overflow-x-auto no-scrollbar">
            <Link to="/" className="hover:text-[#0A2D68]">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-[#0A2D68]">Blog</Link>
            <span>/</span>
            <span className="text-[#071B3D] font-semibold truncate max-w-xs">{article.title}</span>
          </nav>

          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0A2D68] hover:text-[#071B3D] mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Knowledge Hub</span>
          </Link>

          {/* Article Container */}
          <article className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-xl space-y-8">
            
            {/* Header Meta */}
            <div className="space-y-4 pb-6 border-b border-gray-200">
              <span className="inline-block px-3 py-1 bg-[#0A2D68] text-[#D5AF58] text-xs font-bold rounded-full uppercase tracking-wider">
                {article.category}
              </span>

              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D] leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#0A2D68]" />
                  {article.author} ({article.authorRole})
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  Published: {article.publishDate}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D5AF58]" />
                  {article.readingTime}
                </span>
              </div>
            </div>

            {/* Summary Box */}
            <div className="p-5 bg-[#F7F8FA] border-l-4 border-[#0A2D68] rounded-r-xl text-sm text-gray-700 italic">
              <p className="font-semibold text-[#071B3D] not-italic mb-1 text-xs uppercase tracking-wider">Executive Summary:</p>
              {article.summary}
            </div>

            {/* Markdown Body */}
            <div className="prose prose-slate max-w-none text-gray-800 leading-relaxed space-y-4">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            {/* Article FAQ */}
            {article.faq && article.faq.length > 0 && (
              <div className="pt-8 border-t border-gray-200 space-y-4">
                <h3 className="font-heading text-xl font-bold text-[#071B3D] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#D5AF58]" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-3">
                  {article.faq.map((f, idx) => (
                    <div key={idx} className="p-4 bg-[#F7F8FA] rounded-xl border border-gray-200 space-y-1">
                      <p className="text-xs font-bold text-[#0A2D68]">{f.question}</p>
                      <p className="text-xs text-gray-600">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Consultation CTA Inside Article */}
            <div className="bg-[#EEF5FF] text-[#111827] p-6 sm:p-8 rounded-2xl border border-[#0A2D68]/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-heading text-lg font-bold text-[#071B3D]">Have Questions Regarding This Topic?</h4>
                <p className="text-xs text-[#4B5563]">Discuss custom travel policy implementation or visa processing with Flyspurs.</p>
              </div>

              <button
                onClick={() => onOpenWhatsApp(`Inquiry from article: ${article.title}`)}
                className="shrink-0 flex items-center gap-2 py-3 px-5 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#D5AF58]" />
                <span>Consult Travel Specialist</span>
              </button>
            </div>

          </article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 space-y-6">
              <h3 className="font-heading text-2xl font-bold text-[#071B3D]">Related Corporate Travel Guides</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <div key={rel.slug} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#D5AF58] shadow-sm space-y-3">
                    <span className="text-[10px] font-bold text-[#0A2D68] uppercase">{rel.category}</span>
                    <h4 className="font-heading font-bold text-base text-[#071B3D] leading-snug">
                      <Link to={`/blog/${rel.slug}`} className="hover:underline">{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2">{rel.summary}</p>
                    <Link
                      to={`/blog/${rel.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2D68] hover:underline pt-2"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};
