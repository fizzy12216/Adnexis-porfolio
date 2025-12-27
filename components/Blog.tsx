
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: "How to Boost Local Business Growth in Karachi",
    excerpt: "Learn the core strategies that are driving real traffic to physical shops across the city...",
    date: "Feb 15, 2024"
  },
  {
    title: "Top Google Maps Marketing Tips for Karachi Businesses",
    excerpt: "Visibility in the map pack is the key to local dominance. Here is how you get it...",
    date: "Feb 10, 2024"
  },
  {
    title: "Local SEO Strategies That Actually Work in Karachi",
    excerpt: "Stop wasting time on generic SEO. Focus on what local customers are actually searching for...",
    date: "Feb 05, 2024"
  },
  {
    title: "Lead Generation Funnel Best Practices for Small Businesses",
    excerpt: "Turn your social media followers into high-paying customers with optimized funnels...",
    date: "Jan 28, 2024"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block bg-adnexis-teal/10 text-adnexis-teal px-4 py-1 rounded-full text-sm font-bold mb-4">
              Resources
            </div>
            <h2 className="text-adnexis-dark-blue text-4xl lg:text-5xl font-bold mb-4">Latest Insights & Tips</h2>
            <p className="text-adnexis-gray-blue text-lg">
              Actionable advice to help you scale your business in the Karachi market.
            </p>
          </div>
          <a 
            href="https://wa.me/923430418776"
            target="_blank"
            rel="noopener noreferrer"
            className="text-adnexis-teal font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Consult Our Experts <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="flex flex-col h-full bg-adnexis-bg/30 p-8 rounded-3xl border border-adnexis-bg hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="flex items-center gap-2 text-adnexis-teal text-xs font-bold uppercase tracking-widest mb-6">
                <Calendar className="w-4 h-4" />
                {blog.date}
              </div>
              <h3 className="text-adnexis-dark-blue text-xl font-bold mb-4 leading-tight group-hover:text-adnexis-teal transition-colors">
                {blog.title}
              </h3>
              <p className="text-adnexis-gray-blue text-sm leading-relaxed mb-6 flex-grow">
                {blog.excerpt}
              </p>
              <div className="pt-6 border-t border-adnexis-bg/50 mt-auto">
                <a 
                  href="https://wa.me/923430418776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-adnexis-dark-blue font-bold text-sm inline-flex items-center gap-2"
                >
                  Read More <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
