import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="bg-[#800020] rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Campus entrance" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-50"></div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey With Us</h2>
                <p className="text-lg mb-8">
                  Join our community of learners and future leaders. Applications for the next academic year are now open.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/admissions/apply">
                    <Button className="bg-[#FFD700] hover:bg-yellow-600 text-primary font-bold py-3 px-6 rounded-md transition-colors">
                      Apply Now
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white border-2 border-white font-bold py-3 px-6 rounded-md transition-colors">
                      Schedule a Visit
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
