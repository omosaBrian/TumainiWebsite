import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AcademicResults = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"]
  });
  
  const counterProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  // Statistics data
  const mainCampusStats = [
    { label: "Achieved A", value: "24%", id: "a-grade" },
    { label: "Achieved A - B", value: "58%", id: "ab-grade" },
    { label: "Achieved A - C", value: "82%", id: "abc-grade" },
  ];
  
  const annexCampusStats = [
    { label: "Achieved A", value: "20%", id: "a-grade-annex" },
    { label: "Achieved A - B", value: "52%", id: "ab-grade-annex" },
    { label: "Achieved A - C", value: "78%", id: "abc-grade-annex" },
  ];

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">2023 Academic Results</h2>
          <hr className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600">
            Congratulations to our students on their excellent results!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Main Campus */}
          <motion.div
            className="bg-white rounded-md shadow-md p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Main Campus</h3>
            <div className="space-y-6">
              {mainCampusStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-medium text-gray-600 mb-2">{stat.label}</h4>
                  <motion.div 
                    className="relative h-4 bg-gray-200 rounded-full overflow-hidden"
                  >
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ 
                        width: stat.value, 
                        transition: { 
                          duration: 1.5, 
                          delay: index * 0.2 
                        } 
                      }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                  <motion.p 
                    className="text-3xl font-bold mt-2 text-primary"
                    initial={{ opacity: 0 }}
                    whileInView={{ 
                      opacity: 1,
                      transition: { 
                        duration: 0.5, 
                        delay: 0.7 + index * 0.2 
                      } 
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Annex Campus */}
          <motion.div
            className="bg-white rounded-md shadow-md p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Annex Campus</h3>
            <div className="space-y-6">
              {annexCampusStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-medium text-gray-600 mb-2">{stat.label}</h4>
                  <motion.div 
                    className="relative h-4 bg-gray-200 rounded-full overflow-hidden"
                  >
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ 
                        width: stat.value, 
                        transition: { 
                          duration: 1.5, 
                          delay: index * 0.2 
                        } 
                      }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                  <motion.p 
                    className="text-3xl font-bold mt-2 text-primary"
                    initial={{ opacity: 0 }}
                    whileInView={{ 
                      opacity: 1,
                      transition: { 
                        duration: 0.5, 
                        delay: 0.7 + index * 0.2 
                      } 
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AcademicResults;