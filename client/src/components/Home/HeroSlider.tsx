import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  overlayColor?: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1613896640137-bb5b31496515?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=900&q=80",
    title: "Tumaini Kiage Boys High School",
    subtitle: "Private Boys High School in Kisii, Kenya",
    buttonText: "Book A Tour",
    buttonLink: "/contact",
    overlayColor: "rgba(153, 27, 27, 0.5)" // Changed from black to rich red
  },
  {
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=900&q=80",
    title: "Excellence in Education",
    subtitle: "Shaping Future Leaders in Kisii County",
    buttonText: "Our Academics",
    buttonLink: "/academics",
    overlayColor: "rgba(153, 27, 27, 0.45)" // Changed from black to rich red
  },
  {
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=900&q=80",
    title: "Building Character",
    subtitle: "Nurturing Values, Discipline, and Leadership",
    buttonText: "About Us",
    buttonLink: "/about",
    overlayColor: "rgba(153, 27, 27, 0.4)" // Changed from black to rich red
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [loadedImages, setLoadedImages] = useState<number[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Handle image preloading
  const handleImageLoaded = (index: number) => {
    setLoadedImages(prev => [...prev, index]);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setIsAutoplay(false); // Pause autoplay when manually changing slides
    setCurrentSlide(index);
    
    // Resume autoplay after 10 seconds of inactivity
    const timer = setTimeout(() => {
      setIsAutoplay(true);
    }, 10000);
    
    return () => clearTimeout(timer);
  };

  // Scroll to content section
  const scrollToContent = () => {
    const contentSection = document.getElementById('main-content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      if (document.hasFocus()) {
        nextSlide();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide, isAutoplay]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide]);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sliderRef.current) return;
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        const translateY = scrollY * 0.5; // Parallax factor
        sliderRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Preload images */}
      <div className="hidden">
        {slides.map((slide, index) => (
          <img 
            key={`preload-${index}`}
            src={slide.image} 
            alt="" 
            onLoad={() => handleImageLoaded(index)}
          />
        ))}
      </div>
      
      <div ref={sliderRef} className="hero-slider w-full overflow-hidden h-full relative">
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 w-full h-full ${
                currentSlide === index ? "z-10" : "z-0"
              }`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.1
              }}
              transition={{ 
                opacity: { duration: 1 },
                scale: { duration: 7 }
              }}
            >
              <div className="absolute inset-0 w-full h-full">
                <motion.img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ 
                    scale: currentSlide === index ? 1 : 1.2,
                    filter: currentSlide === index ? "blur(0px)" : "blur(4px)"
                  }}
                  transition={{ duration: 1.5 }}
                  style={{ opacity: loadedImages.includes(index) ? 1 : 0 }}
                />
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-red-900/30 to-red-900/70"
                  style={{ backgroundColor: slide.overlayColor }}
                />
              </div>
              
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6">
                  <AnimatePresence mode="wait">
                    {currentSlide === index && (
                      <motion.div
                        key={`content-${index}`}
                        className="max-w-5xl mx-auto text-center md:text-left text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.div 
                          className="overflow-hidden inline-block mb-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <motion.p
                            className="text-sm md:text-lg font-medium uppercase tracking-wide mb-2 text-primary bg-white/10 inline-block px-4 py-1 rounded-sm"
                            initial={{ y: 40 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          >
                            Welcome to
                          </motion.p>
                        </motion.div>
                        
                        <motion.div className="overflow-hidden">
                          <motion.h1 
                            className="text-4xl md:text-7xl font-bold mb-3 leading-tight"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ 
                              duration: 0.7, 
                              delay: 0.4,
                              type: "spring",
                              damping: 12
                            }}
                          >
                            {slide.title}
                          </motion.h1>
                        </motion.div>
                        
                        <motion.div className="overflow-hidden">
                          <motion.h2 
                            className="text-lg md:text-2xl font-medium mb-8"
                            initial={{ y: 60 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                          >
                            {slide.subtitle}
                          </motion.h2>
                        </motion.div>
                        
                        <motion.div
                          className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                        >
                          <Link href={slide.buttonLink}>
                            <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-10 rounded-md text-base shadow-lg hover:shadow-xl transition-all">
                              {slide.buttonText}
                            </Button>
                          </Link>
                          
                          <Link href="/admissions">
                            <Button variant="outline" className="border-white text-white hover:bg-white/20 py-3 px-8 rounded-md text-base transition-all">
                              Apply Now
                            </Button>
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={scrollToContent}
      >
        <motion.span 
          className="text-white text-xs font-medium tracking-wider uppercase mb-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          Scroll Down
        </motion.span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <ArrowDown className="text-white w-5 h-5" />
        </motion.div>
      </motion.div>
      
      {/* Slider Controls */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-primary"
                : "bg-white hover:bg-primary/50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
      
      <motion.button
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full w-12 h-12 flex items-center justify-center z-20"
        onClick={prevSlide}
        aria-label="Previous slide"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </motion.button>
      <motion.button
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full w-12 h-12 flex items-center justify-center z-20"
        onClick={nextSlide}
        aria-label="Next slide"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="text-white w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default HeroSlider;
