import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewsList from "@/components/NewsEvents/NewsList";
import EventsList from "@/components/NewsEvents/EventsList";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');
  
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Latest News & Events</h2>
          <motion.div 
            className="mx-auto h-1 w-24 bg-primary mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="max-w-3xl mx-auto text-gray-600">
            Stay informed about our school's activities, achievements, and upcoming events.
          </p>
        </motion.div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 p-1 rounded-lg">
            <motion.button
              className={`py-2 px-6 rounded-md text-sm font-medium transition-all ${
                activeTab === 'news' 
                  ? 'bg-white text-primary shadow-sm' 
                  : 'text-gray-600 hover:text-primary'
              }`}
              onClick={() => setActiveTab('news')}
              whileHover={{ scale: activeTab === 'news' ? 1 : 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Latest News
            </motion.button>
            <motion.button
              className={`py-2 px-6 rounded-md text-sm font-medium transition-all ${
                activeTab === 'events' 
                  ? 'bg-white text-primary shadow-sm' 
                  : 'text-gray-600 hover:text-primary'
              }`}
              onClick={() => setActiveTab('events')}
              whileHover={{ scale: activeTab === 'events' ? 1 : 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Upcoming Events
            </motion.button>
          </div>
        </div>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={activeTab}
          className="relative"
        >
          {activeTab === 'news' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <NewsList limit={3} showViewAllButton={false} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <EventsList limit={3} showViewAllButton={false} />
            </div>
          )}
        </motion.div>
        
        <motion.div 
          className="text-center mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Link href="/news-events">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 px-6 py-3 rounded-md mx-auto">
                View All {activeTab === 'news' ? 'News' : 'Events'} <ArrowRight size={16} />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsEvents;