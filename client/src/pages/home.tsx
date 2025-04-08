import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// New components for Brookhouse-style layout
import HeroSlider from "@/components/Home/HeroSlider";
import CampusLocations from "@/components/Home/CampusLocations";
import FeatureHighlights from "@/components/Home/FeatureHighlights";
import VirtualReality from "@/components/Home/VirtualReality";
import AcademicStages from "@/components/Home/AcademicStages";
import AcademicResults from "@/components/Home/AcademicResults";
import SchoolAssociations from "@/components/Home/SchoolAssociations";
import Accreditations from "@/components/Home/Accreditations";
import ContactCTA from "@/components/Home/ContactCTA";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Private International School in Kisii, Kenya | Tumaini Kiage Boys High School</title>
        <meta name="description" content="Tumaini Kiage Boys High School is a premier educational institution in Kisii County, Kenya, offering excellence in academics, character development, and holistic student growth." />
      </Helmet>
      
      {/* Main Hero Banner */}
      <HeroSlider />
      
      {/* Welcome Section - Similar to Brookhouse */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="School students" 
                className="w-full rounded-md shadow-md"
              />
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Tumaini Kiage Boys High School</h2>
              <hr className="w-24 h-1 bg-primary mb-6" />
              
              <p className="mb-6 text-gray-700">
                Established in 1970, Tumaini Kiage Boys High School is a premier educational institution 
                located in Kitutu Chache South Sub County, Kisii County, in the Nyanza region of Kenya. 
                Our school provides exceptional modern education with a comprehensive curriculum.
              </p>
              
              <p className="mb-8 text-gray-700">
                Every student is inherently unique. Therefore, at our school, our experienced educators 
                apply a personalized teaching approach to meet the needs of each individual. The effectiveness 
                of our student-centered methodology is outstanding. Our students achieve excellent KCSE results
                and embody a strong value system that unlocks their full potential, preparing them for lifelong success.
              </p>
              
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
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
