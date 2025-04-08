import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface QuickLink {
  title: string;
  description: string;
  image: string;
  link: string;
}

const quickLinks: QuickLink[] = [
  {
    title: "Admission Process",
    description: "Learn about our admission requirements, application process, and important dates for the upcoming academic year.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    link: "/admissions"
  },
  {
    title: "Academic Programs",
    description: "Discover our comprehensive curriculum designed to prepare students for success in both national examinations and future endeavors.",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    link: "/academics"
  },
  {
    title: "Student Life",
    description: "Experience the vibrant community life at TKBHS through various clubs, sports activities, and cultural events that shape well-rounded individuals.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    link: "/student-life"
  }
];

const QuickLinks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 bg-primary relative overflow-hidden">
                <img 
                  src={link.image} 
                  alt={link.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary bg-opacity-60 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{link.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">{link.description}</p>
                <Link 
                  href={link.link} 
                  className="inline-flex items-center text-primary font-semibold hover:text-[#800020] transition-colors"
                >
                  Learn more <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
