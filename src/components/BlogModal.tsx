import React from 'react';
import { BlogPost } from '../data/blogsData';
import { X, Calendar, Clock, User, Share2, MessageSquare, ArrowRight } from 'lucide-react';

interface BlogModalProps {
  post: BlogPost;
  onClose: () => void;
  onOpenWhatsApp: (service?: string) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  post,
  onClose,
  onOpenWhatsApp,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E5E7EB] shadow-2xl relative my-8">
        
        {/* Sticky Close Header */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2D68] bg-[#EEF5FF] px-3 py-1 rounded-full">
            {post.category}
          </span>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-6">
          
          <div className="space-y-3">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#071B3D] leading-tight">
              {post.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#4B5563]">
              <span className="flex items-center gap-1 font-medium">
                <User className="w-3.5 h-3.5 text-[#0A2D68]" />
                {post.author} ({post.authorRole})
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#0A2D68]" />
                {post.publishDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0A2D68]" />
                {post.readingTime}
              </span>
            </div>
          </div>

          <div className="p-4 bg-[#F8FAFC] border-l-4 border-[#0A2D68] rounded-r-xl text-xs sm:text-sm text-[#111827] italic font-medium leading-relaxed">
            "{post.summary}"
          </div>

          <div className="prose prose-sm sm:prose max-w-none text-[#111827] leading-relaxed whitespace-pre-line border-t border-b border-[#E5E7EB] py-6">
            {post.content}
          </div>

          {/* FAQ Accordion Section if exists */}
          {post.faq && post.faq.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="font-heading text-lg font-bold text-[#071B3D]">Frequently Asked Questions</h3>
              <div className="space-y-2">
                {post.faq.map((item, idx) => (
                  <div key={idx} className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] space-y-1">
                    <p className="font-bold text-xs text-[#071B3D]">Q: {item.question}</p>
                    <p className="text-xs text-[#4B5563]">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action Bar */}
          <div className="bg-[#EEF5FF] p-6 rounded-2xl border border-[#0A2D68]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading text-base font-bold text-[#071B3D]">Ready to optimize your travel strategy?</h4>
              <p className="text-xs text-[#4B5563]">Schedule a B2B travel consultation with Flyspurs specialists.</p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenWhatsApp(`Inquiry from Article: ${post.title}`);
              }}
              className="px-5 py-2.5 bg-[#0A2D68] hover:bg-[#071B3D] text-[#D5AF58] font-bold text-xs rounded-xl shadow-md transition-all shrink-0 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect Travel Desk</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
