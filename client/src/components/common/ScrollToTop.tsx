import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Button
      variant="default"
      size="icon"
      className={`fixed bottom-5 sm:bottom-8 right-4 sm:right-8 z-50 h-10 w-10 sm:h-12 sm:w-12 bg-primary hover:bg-primary/80 text-white rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-90" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} className="sm:w-5 sm:h-5" />
    </Button>
  );
};

export default ScrollToTop;
