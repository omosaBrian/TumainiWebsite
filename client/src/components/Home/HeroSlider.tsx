import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  image: string;
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1613896640137-bb5b31496515?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80",
    title: "Excellence in Education",
    description: "Nurturing young men of integrity, knowledge, and purpose since 1970.",
    primaryButtonText: "Apply Now",
    primaryButtonLink: "/admissions/apply",
    secondaryButtonText: "Learn More",
    secondaryButtonLink: "/about"
  },
  {
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80",
    title: "World-Class Academic Programs",
    description: "Comprehensive curriculum preparing students for global opportunities.",
    primaryButtonText: "Explore Programs",
    primaryButtonLink: "/academics",
    secondaryButtonText: "Virtual Tour",
    secondaryButtonLink: "/virtual-tour"
  },
  {
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80",
    title: "Building Champions",
    description: "Developing discipline, teamwork, and excellence through our robust sports program.",
    primaryButtonText: "Sports Programs",
    primaryButtonLink: "/student-life/sports",
    secondaryButtonText: "Student Life",
    secondaryButtonLink: "/student-life"
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.hasFocus()) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative">
      <div className="hero-slider overflow-hidden">
        <div className="relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{ height: "600px" }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-60 flex items-center">
                <div className="container mx-auto px-6">
                  <div className="max-w-lg text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-lg mb-6">{slide.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <Link href={slide.primaryButtonLink}>
                        <Button className="bg-[#FFD700] hover:bg-yellow-600 text-primary font-bold py-3 px-6 rounded-md transition-colors">
                          {slide.primaryButtonText}
                        </Button>
                      </Link>
                      <Link href={slide.secondaryButtonLink}>
                        <Button variant="outline" className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white border-2 border-white font-bold py-3 px-6 rounded-md transition-colors">
                          {slide.secondaryButtonText}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Slider Controls */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-white"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center z-20"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-primary" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center z-20"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="text-primary" />
      </button>
    </section>
  );
};

export default HeroSlider;
