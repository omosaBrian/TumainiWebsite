import { motion } from "framer-motion";
import { Link } from "wouter";

interface CardProps {
  image: string;
  title: string;
}

const cards: CardProps[] = [
  {
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    title: "Technology In Education"
  },
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    title: "University Counselling"
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    title: "Access To Top Universities"
  },
  {
    image: "https://images.unsplash.com/photo-1577896852418-3555d69dc4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    title: "Cultural & Academic Exchanges"
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    title: "International Programs"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
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

const SchoolAssociations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Leading School</h2>
          <hr className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-gray-600 mb-8">
            As a member of the Kenya Secondary Schools Association, Tumaini Kiage Boys High School
            is committed to providing a modern, forward-looking education while remaining anchored
            in the culture and traditions of Kenya and actively participating in the local community.
          </p>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our students benefit from the following:
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggeredFade}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              className="group relative rounded-md overflow-hidden shadow-md h-52"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center px-4">{card.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <Link href="/programs">
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-sm transition-colors">
              Learn More About Our Programs
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolAssociations;