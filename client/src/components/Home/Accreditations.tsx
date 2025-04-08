import { motion } from "framer-motion";

interface AccreditationProps {
  image: string;
  alt: string;
  link: string;
}

const accreditations: AccreditationProps[] = [
  {
    image: "https://via.placeholder.com/200x100?text=KNEC",
    alt: "Kenya National Examination Council",
    link: "https://www.knec.ac.ke/"
  },
  {
    image: "https://via.placeholder.com/200x100?text=KSSSHA",
    alt: "Kenya Secondary Schools Heads Association",
    link: "https://www.kessha.co.ke/"
  },
  {
    image: "https://via.placeholder.com/200x100?text=TSC",
    alt: "Teachers Service Commission",
    link: "https://www.tsc.go.ke/"
  },
  {
    image: "https://via.placeholder.com/200x100?text=KICD",
    alt: "Kenya Institute of Curriculum Development",
    link: "https://kicd.ac.ke/"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggeredFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Accreditations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Accreditations</h2>
          <hr className="w-24 h-1 bg-primary mx-auto mb-6" />
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggeredFade}
        >
          {accreditations.map((item, index) => (
            <motion.a 
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition-all duration-300"
              variants={fadeIn}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img src={item.image} alt={item.alt} className="h-16 md:h-20" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Accreditations;