
import React from 'react';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

const blogs = [
  {
    title: "How to Boost Local Business Growth in Karachi",
    excerpt: "The authoritative framework for dominating neighborhood demand using localized AEO strategies.",
    date: "Mar 01, 2026"
  },
  {
    title: "Google Maps Marketing for Karachi Dominance",
    excerpt: "Technical steps to secure your position in the local 3-pack and drive automated customer calls.",
    date: "Feb 22, 2026"
  },
  {
    title: "Local SEO: Targeting Clifton & DHA specific queries",
    excerpt: "Beyond keyword stuffing: How to align your business with hyper-local search intent in Karachi.",
    date: "Feb 15, 2026"
  },
  {
    title: "Generative Engine Optimization (GEO) for 2026",
    excerpt: "How to prepare your business to be the primary answer in AI-driven search results.",
    date: "Feb 08, 2026"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="insights" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-adnexis-teal font-black uppercase tracking-[0.2em] text-xs">AEO Growth Intelligence</span>
            <h2 className="text-adnexis-primary text-5xl font-black mt-2 tracking-tight flex items-center gap-3">
              Growth Intelligence <BookOpen className="text-adnexis-accent" />
            </h2>
            <p className="text-adnexis-muted text-lg font-medium mt-4">Data-backed strategies to help you scale your business in the evolving Karachi market.</p>
          </div>
          <a href="https://wa.me/923430418776" className="text-adnexis-teal font-extrabold flex items-center gap-2 group">
            Access Full Library <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="flex flex-col h-full bg-adnexis-bg/40 p-10 rounded-[2.5rem] border border-transparent hover:border-adnexis-teal/20 hover:bg-white hover:shadow-xl transition-all group">
              <div className="flex items-center gap-2 text-adnexis-teal text-xs font-black uppercase tracking-widest mb-6">
                <Calendar className="w-4 h-4" /> {blog.date}
              </div>
              <h3 className="text-adnexis-dark text-xl font-black mb-4 leading-tight group-hover:text-adnexis-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-adnexis-muted text-sm leading-relaxed mb-8 flex-grow font-medium">
                {blog.excerpt}
              </p>
              <a href="https://wa.me/923430418776" className="text-adnexis-primary font-black text-sm inline-flex items-center gap-2">
                Analyze Insight <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
