import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface CampusProps {
  image: string;
  title: string;
  link: string;
}

const campuses: CampusProps[] = [
  {
    image: "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Main Campus",
    link: "/main-campus"
  },
  {
    image: "https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Annex Campus",
    link: "/annex-campus"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
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
      staggerChildren: 0.3
    }
  }
};

const CampusLocations = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our School Campuses</h2>
          <hr className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600">
            Tumaini Kiage Boys High School educates our bright, young learners at our two 
            expansive sites within Kisii County, Kenya.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggeredFade}
        >
          {campuses.map((campus, index) => (
            <motion.div 
              key={index}
              className="relative overflow-hidden rounded-md shadow-md group cursor-pointer"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <img 
                src={campus.image} 
                alt={campus.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">{campus.title}</h3>
                  <Link href={campus.link} className="flex items-center text-white font-medium">
                    <span>Learn More</span> 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CampusLocations;