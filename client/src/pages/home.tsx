import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// New components for immersive layout inspired by Brookhouse
import HeroSlider from "@/components/Home/HeroSlider";
import CampusLocations from "@/components/Home/CampusLocations";
import FeatureHighlights from "@/components/Home/FeatureHighlights";
import VirtualReality from "@/components/Home/VirtualReality";
import AcademicStages from "@/components/Home/AcademicStages";
import AcademicResults from "@/components/Home/AcademicResults";
import SchoolAssociations from "@/components/Home/SchoolAssociations";
import Accreditations from "@/components/Home/Accreditations";
import ContactCTA from "@/components/Home/ContactCTA";
import Announcements from "@/components/Home/Announcements";
import NewsEvents from "@/components/Home/NewsEvents";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 12,
      duration: 0.6 
    }
  }
};

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading time and set loaded state
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tumaini Kiage Boys High School | Premier Education in Kisii County, Kenya</title>
        <meta name="description" content="Tumaini Kiage Boys High School offers exceptional education emphasizing academic excellence, character development, and holistic growth in Kisii County, Kenya." />
        <meta name="keywords" content="Tumaini Kiage, Boys High School, Kisii County, Kenya Education, KCSE, Secondary School, Boarding School" />
        <meta property="og:title" content="Tumaini Kiage Boys High School | Excellence in Education" />
        <meta property="og:description" content="A premier educational institution in Kisii County offering quality education with a focus on academic excellence and character development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tumainikiage.ac.ke" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tumaini Kiage Boys High School" />
        <meta name="twitter:description" content="Excellence in education in Kisii County, Kenya" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80" />
        <link rel="canonical" href="https://www.tumainikiage.ac.ke" />
      </Helmet>
      
      {/* Page Transition Animation */}
      <AnimatePresence>
        {!isLoaded ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-primary z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-4xl font-bold"
            >
              Tumaini Kiage
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      
      {/* Main Hero Banner */}
      <HeroSlider />
      
      {/* Announcements Banner - Brookhouse style */}
      <Announcements />
      
      {/* Welcome Section - Enhanced Brookhouse style */}
      <section id="main-content" className="py-16 relative overflow-hidden">
        {/* Background decoration */}
        <motion.div 
          className="absolute -right-40 top-20 w-96 h-96 rounded-full bg-primary/5 -z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              {/* Main image with floating effect */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Tumaini Kiage Boys High School students in classroom" 
                  className="w-full rounded-md shadow-xl z-10 relative"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-5 -left-5 w-24 h-24 bg-primary rounded-lg z-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.8, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
              <motion.div 
                className="absolute -top-5 -right-5 w-20 h-20 border-4 border-primary/40 rounded-lg z-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                variants={slideIn}
              >
                Welcome to Tumaini Kiage Boys High School
              </motion.h2>
              
              <motion.hr 
                className="w-24 h-1 bg-primary mb-6"
                variants={slideIn}
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              
              <motion.p 
                className="mb-6 text-gray-700 leading-relaxed"
                variants={fadeIn}
              >
                Established in 1970, Tumaini Kiage Boys High School is a premier educational institution 
                located in Kitutu Chache South Sub County, Kisii County, in the Nyanza region of Kenya. 
                Our school provides exceptional modern education with a comprehensive curriculum.
              </motion.p>
              
              <motion.p 
                className="mb-8 text-gray-700 leading-relaxed"
                variants={fadeIn}
              >
                Every student is inherently unique. Therefore, at our school, our experienced educators 
                apply a personalized teaching approach to meet the needs of each individual. The effectiveness 
                of our student-centered methodology is outstanding. Our students achieve excellent KCSE results
                and embody a strong value system that unlocks their full potential, preparing them for lifelong success.
              </motion.p>
              
              <motion.div variants={fadeIn}>
                <Link href="/about">
                  <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all">
                    Learn More <ArrowRight size={16} />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Quick Highlights Stats Bar */}
      <motion.section 
        className="bg-primary py-10 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-4xl font-bold mb-2">98%</span>
              <span className="text-sm uppercase tracking-wider">KCSE Pass Rate</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-4xl font-bold mb-2">53</span>
              <span className="text-sm uppercase tracking-wider">Years of Excellence</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-4xl font-bold mb-2">45+</span>
              <span className="text-sm uppercase tracking-wider">Expert Teachers</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-4xl font-bold mb-2">1200+</span>
              <span className="text-sm uppercase tracking-wider">Students</span>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Latest News & Events Section */}
      <NewsEvents />
      
      {/* Our Campuses Section */}
      <CampusLocations />
      
      {/* Why Choose Us Section */}
      <FeatureHighlights />
      
      {/* Virtual Reality Section */}
      <VirtualReality />
      
      {/* Academic Stages */}
      <AcademicStages />
      
      {/* Academic Results */}
      <AcademicResults />
      
      {/* School Associations */}
      <SchoolAssociations />
      
      {/* Accreditations */}
      <Accreditations />
      
      {/* Contact Us CTA */}
      <ContactCTA />
    </>
  );
};

export default Home;
