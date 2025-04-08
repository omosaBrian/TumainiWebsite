import { motion } from "framer-motion";
import { Link } from "wouter";

interface StageProps {
  image: string;
  title: string;
  age: string;
  link: string;
}

const stages: StageProps[] = [
  {
    image: "https://images.unsplash.com/photo-1629872430082-93d8912bece9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380&q=80",
    title: "Junior High School",
    age: "Ages 12 - 14 Years Old",
    link: "/academics/junior"
  },
  {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380&q=80",
    title: "Senior High School",
    age: "Ages 15 - 18 Years Old",
    link: "/academics/senior"
  },
  {
    image: "https://images.unsplash.com/photo-1604761773777-95d3a2dd2348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380&q=80",
    title: "Boarding Facilities",
    age: "Ages 13 - 18 Years Old",
    link: "/boarding"
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

const AcademicStages = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Stages</h2>
          <hr className="w-24 h-1 bg-primary mx-auto mb-6" />
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggeredFade}
        >
          {stages.map((stage, index) => (
            <motion.div 
              key={index}
              className="group"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Link href={stage.link} className="block">
                <div className="relative overflow-hidden rounded-md shadow-md">
                  <img 
                    src={stage.image} 
                    alt={stage.title}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white">{stage.title}</h3>
                      <p className="text-white text-sm mt-1 mb-3">{stage.age}</p>
                      <span className="inline-block bg-primary text-white text-sm font-medium py-1 px-3 rounded-sm">
                        Learn More
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicStages;