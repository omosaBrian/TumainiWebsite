import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7 }
  }
};

const ContactCTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us Today</h2>
          <hr className="w-24 h-1 bg-white mx-auto mb-6" />
          <p className="text-lg md:text-xl mb-8">
            Find out how we can develop your child's skills and expand their horizons for a life of success.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-primary hover:bg-white/90 font-medium py-3 px-8 rounded-sm text-lg">
              Enquire Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;