import { motion } from "framer-motion";
import { Scroll, BookOpen, Users, Home, Lightbulb } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: "8-4-4 Curriculum",
    description: "We offer the Kenyan 8-4-4 curriculum, providing a broad, creative, and unique future-focused education."
  },
  {
    icon: <Scroll className="w-10 h-10 text-primary" />,
    title: "Top KCSE Results",
    description: "Our school consistently achieves excellent KCSE results, preparing students for higher education."
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Diverse Student Body",
    description: "A welcoming, multicultural school with students from across the region."
  },
  {
    icon: <Home className="w-10 h-10 text-primary" />,
    title: "Modern Boarding Facilities",
    description: "Premium boarding facilities that provide a comfortable and conducive environment for learning."
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    title: "Advanced Learning Methods",
    description: "Innovative teaching approaches and technology integration for enhanced learning experiences."
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggeredFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const FeatureHighlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our School</h2>
          <hr className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600">
            Tumaini Kiage Boys High School provides a character-focused, 
            values-driven education through a comprehensive educational program.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggeredFade}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-md shadow-sm border border-gray-100 hover:shadow-md transition-shadow bg-white"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHighlights;