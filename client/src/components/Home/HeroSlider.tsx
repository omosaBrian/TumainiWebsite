import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1613896640137-bb5b31496515?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80",
    title: "Private Boys High School in Kisii, Kenya",
    subtitle: "Tumaini Kiage Boys High School",
    buttonText: "Book A Tour",
    buttonLink: "/visit-us"
  },
  {
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80",
    title: "Excellence in Education in Kisii County",
    subtitle: "Tumaini Kiage Boys High School",
    buttonText: "Book A Tour",
    buttonLink: "/visit-us"
  },
  {
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80",
    title: "Building Future Leaders in Kenya",
    subtitle: "Tumaini Kiage Boys High School",
    buttonText: "Book A Tour",
    buttonLink: "/visit-us"
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
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative">
      <div className="hero-slider w-full overflow-hidden">
        <div className="relative w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{ height: "85vh", minHeight: "600px" }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
                <div className="container mx-auto px-6 mt-16">
                  <div className="max-w-4xl mx-auto text-center text-white">
                    <AnimatePresence mode="wait">
                      {currentSlide === index && (
                        <motion.div
                          key={`text-${index}`}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -50 }}
                          transition={{ duration: 0.8 }}
                          className="flex flex-col items-center"
                        >
                          <motion.h1 
                            className="text-4xl md:text-6xl font-bold mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {slide.title}
                          </motion.h1>
                          <motion.h2 
                            className="text-xl md:text-3xl font-medium mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            {slide.subtitle}
                          </motion.h2>
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                          >
                            <Link href={slide.buttonLink}>
                              <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-sm text-lg transition-colors">
                                {slide.buttonText}
                              </Button>
                            </Link>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Slider Controls */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-primary"
                : "bg-white hover:bg-primary/50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <button
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full w-12 h-12 flex items-center justify-center z-20"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>
      <button
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full w-12 h-12 flex items-center justify-center z-20"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSlider;
