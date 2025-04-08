import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7 }
  }
};

const VirtualReality = () => {
  return (
    <section className="py-20 bg-gray-50">
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
              src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" 
              alt="Student with VR headset" 
              className="w-full rounded-md shadow-md object-cover h-[400px]"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expanding the Bounds of Learning with Technology</h2>
            <hr className="w-24 h-1 bg-primary mb-6" />
            
            <p className="mb-6 text-gray-700">
              Our classrooms are no longer static entities confined by four walls. At Tumaini Kiage Boys 
              High School, through the integration of modern technology, we're creating dynamic, interactive 
              ecosystems where subjects come alive, inviting students to explore, question, and understand 
              in ways previously unimaginable.
            </p>
            
            <p className="text-gray-700">
              Technology-based learning sessions redefine the boundaries of education, making it an 
              experiential journey rather than a passive acquisition of information. Our students develop 
              critical thinking skills and prepare for the digital future while still maintaining our 
              traditional values and educational excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VirtualReality;