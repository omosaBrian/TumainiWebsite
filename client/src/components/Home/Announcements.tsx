import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Megaphone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

// Define announcement interface
interface Announcement {
  id: number;
  title: string;
  content: string;
  link: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

const Announcements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  // Fetch active announcements
  const { data: announcements = [] } = useQuery<Announcement[]>({
    queryKey: ['/api/announcements/active'],
    refetchOnWindowFocus: false
  });
  
  // Mock data if no announcements available yet
  const demoAnnouncements: Announcement[] = [
    {
      id: 1,
      title: "School Reopening",
      content: "School reopens for Term 2 on May 5th, 2025. All students are expected to report by 8:00 AM.",
      link: "/news-events"
    },
    {
      id: 2,
      title: "Sports Day",
      content: "Annual Sports Day will be held on May 15th. Parents are cordially invited to attend.",
      link: "/news-events"
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      content: "Parent-Teacher conference scheduled for May 20th. Appointment details will be sent via email.",
      link: "/news-events"
    }
  ];
  
  // Use real data if available, otherwise use demo data
  const displayAnnouncements: Announcement[] = announcements.length > 0 ? announcements : demoAnnouncements;
  
  // Auto rotate announcements
  useEffect(() => {
    if (!isVisible || displayAnnouncements.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayAnnouncements.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [displayAnnouncements, isVisible]);
  
  // Don't render if no announcements
  if (displayAnnouncements.length === 0) return null;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="bg-primary/10 border-b border-primary/20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <Megaphone className="h-5 w-5 text-primary mr-3" />
                <div className="relative overflow-hidden h-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute"
                    >
                      <Link href={displayAnnouncements[currentIndex].link}>
                        <span className="font-medium text-primary mr-2">
                          {displayAnnouncements[currentIndex].title}:
                        </span>
                        <span className="text-gray-700">
                          {displayAnnouncements[currentIndex].content}
                        </span>
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                {displayAnnouncements.length > 1 && (
                  <div className="flex items-center gap-1.5">
                    {displayAnnouncements.map((_: Announcement, idx: number) => (
                      <button
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentIndex ? "bg-primary" : "bg-gray-300"
                        }`}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Announcement ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
                
                <Link href="/news-events">
                  <button className="text-sm text-primary hover:text-primary/80 flex items-center mr-4 transition-colors" aria-label="View all announcements">
                    View All <ChevronRight className="h-4 w-4" />
                  </button>
                </Link>
                
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close announcements"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Announcements;