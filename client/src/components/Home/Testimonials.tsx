import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Testimonial } from "@shared/schema";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  const nextTestimonial = () => {
    if (!testimonials) return;
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    if (!testimonials) return;
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Community Says</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto">
              Hear from our students, parents, and alumni about their experiences at Tumaini Kiage Boys High School.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md animate-pulse">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gray-200"></div>
                <div className="w-full">
                  <div className="h-4 bg-gray-200 rounded mb-2 w-24"></div>
                  <div className="h-4 bg-gray-200 rounded mb-6 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Community Says</h2>
          <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto">
            Hear from our students, parents, and alumni about their experiences at Tumaini Kiage Boys High School.
          </p>
        </div>
        
        <div className="testimonial-slider relative max-w-4xl mx-auto">
          <div className="testimonial-wrapper">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={currentTestimonial.imageUrl || "https://via.placeholder.com/100x100"} 
                    alt={currentTestimonial.name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-[#FFD700]" 
                  />
                </div>
                <div>
                  <div className="text-yellow-500 mb-2 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={18}
                        className={i < currentTestimonial.rating ? "fill-yellow-500" : ""}
                      />
                    ))}
                  </div>
                  <p className="italic text-lg mb-4">"{currentTestimonial.content}"</p>
                  <div>
                    <h4 className="font-bold text-primary">{currentTestimonial.name}</h4>
                    <p className="text-sm text-gray-600">{currentTestimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {testimonials.length > 1 && (
            <>
              <button 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md focus:outline-none"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="text-primary" />
              </button>
              <button 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md focus:outline-none"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="text-primary" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
