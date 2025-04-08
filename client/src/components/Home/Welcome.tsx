import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mission highlights to cycle through
const missionHighlights = [
  "To provide a holistic education that nurtures academic excellence",
  "To develop character and leadership skills in young men",
  "To prepare students to be responsible citizens",
  "To foster critical thinking and innovation",
  "To instill values of integrity, respect, and service to others"
];

const Welcome = () => {
  const [currentHighlight, setCurrentHighlight] = useState(0);
  
  useEffect(() => {
    // Cycle through mission highlights
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % missionHighlights.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Welcome to Kiage Tumaini Boys High School
            </motion.h2>
            <motion.div 
              className="h-1 w-24 bg-[#FFD700] mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.p 
              className="text-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Kiage Tumaini Boys High School is a premier educational institution 
              located in Kitutu Chache South Sub County within Kisii County, in the Nyanza 
              region of Kenya. Since our establishment, we have maintained a tradition 
              of academic excellence, character development, and holistic student growth,
              nurturing young men who go on to make significant contributions to society.
            </motion.p>
            
            {/* Mission highlights animation */}
            <motion.div 
              className="bg-primary/10 p-5 rounded-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-3">Our Mission Highlights:</h3>
              <div className="h-[60px]">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentHighlight}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-medium text-gray-800"
                  >
                    {missionHighlights[currentHighlight]}
                  </motion.p>
                </AnimatePresence>
              </div>
              
              {/* Progress indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {missionHighlights.map((_, index) => (
                  <motion.div 
                    key={index}
                    className={`h-2 rounded-full ${index === currentHighlight ? 'bg-primary' : 'bg-gray-300'}`}
                    initial={{ width: index === currentHighlight ? 12 : 12 }}
                    animate={{ 
                      width: index === currentHighlight ? 24 : 12,
                      backgroundColor: index === currentHighlight ? 'var(--color-olive-500)' : '#e5e7eb'
                    }}
                    transition={{ duration: 0.4 }}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.p 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Our approach combines rigorous academic programs with comprehensive 
              extracurricular activities, ensuring that each student develops not only 
              intellectually but also socially, physically, and morally. We provide a 
              supportive environment where every student is encouraged to discover and 
              develop their unique talents and abilities.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <Link href="/about" className="inline-flex items-center text-primary font-semibold hover:text-[#800020] transition-colors">
                Learn more about our school <ArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="School campus" 
                className="w-full rounded-lg shadow-lg"
                initial={{ filter: "blur(8px)", opacity: 0.8 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg w-48"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <p className="text-primary font-bold">50+ Years</p>
                <p className="text-sm">of Academic Excellence</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
