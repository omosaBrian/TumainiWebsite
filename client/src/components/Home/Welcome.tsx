import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const Welcome = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Welcome to Tumaini Kiage Boys High School
            </h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-6"></div>
            <p className="text-lg mb-6">
              Tumaini Kiage Boys High School is a premier educational institution 
              committed to excellence in academics, character development, and holistic 
              student growth. Since our establishment, we have maintained a tradition 
              of nurturing young men who go on to make significant contributions to society.
            </p>
            <p className="mb-8">
              Our approach combines rigorous academic programs with comprehensive 
              extracurricular activities, ensuring that each student develops not only 
              intellectually but also socially, physically, and morally. We provide a 
              supportive environment where every student is encouraged to discover and 
              develop their unique talents and abilities.
            </p>
            <Link href="/about" className="inline-flex items-center text-primary font-semibold hover:text-[#800020] transition-colors">
              Learn more about our school <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="School campus" 
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg w-48">
                <p className="text-primary font-bold">50+ Years</p>
                <p className="text-sm">of Academic Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
