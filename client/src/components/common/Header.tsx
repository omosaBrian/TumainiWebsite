import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Phone, 
  Mail, 
  ChevronDown, 
  Menu, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setOpenMobileDropdown(null);
    }
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  const isActive = (path: string) => {
    return location === path ? "border-primary" : "border-transparent";
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-black-900)] shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-white">
        <div className="container py-2 flex flex-wrap justify-between items-center">
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+254700000000" className="text-sm hover:text-white/80 transition-colors flex items-center gap-1">
              <Phone size={16} /> +254 7XX XXX XXX
            </a>
            <a href="mailto:info@tumainikaige.ac.ke" className="text-sm hover:text-white/80 transition-colors flex items-center gap-1">
              <Mail size={16} /> info@tumainikaige.ac.ke
            </a>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 w-full justify-center md:w-auto md:justify-end text-center">
            <Link href="/about" className="text-xs sm:text-sm hover:text-white/80 transition-colors">
              About
            </Link>
            <Link href="/admissions" className="text-xs sm:text-sm hover:text-white/80 transition-colors">
              Admissions
            </Link>
            <Link href="/contact" className="text-xs sm:text-sm hover:text-white/80 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container py-3 flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              {/* Placeholder for School Logo */}
              <div className="h-14 w-24 sm:h-16 sm:w-28 bg-primary text-white flex items-center justify-center rounded shadow-sm">
                <span className="font-bold">KTBHS</span>
              </div>
              <div className="ml-3 md:ml-4 hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold text-primary">Kiage Tumaini</h1>
                <h2 className="text-xs md:text-sm font-medium text-foreground">Boys High School</h2>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden text-primary" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className={`font-semibold text-white hover:text-primary border-b-2 ${isActive("/")} hover:border-primary transition-colors py-2`}>
            Home
          </Link>
          
          <div className="relative group">
            <button className={`font-semibold text-white hover:text-primary border-b-2 ${location.startsWith("/about") ? "border-primary" : "border-transparent"} hover:border-primary transition-colors py-2 flex items-center`}>
              About <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 hidden group-hover:block">
              <Link href="/about" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Our History
              </Link>
              <Link href="/about/mission-vision" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Mission & Vision
              </Link>
              <Link href="/about/leadership" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Leadership
              </Link>
              <Link href="/about/facilities" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                School Facilities
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <button className={`font-semibold text-white hover:text-primary border-b-2 ${location.startsWith("/academics") ? "border-primary" : "border-transparent"} hover:border-primary transition-colors py-2 flex items-center`}>
              Academics <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 hidden group-hover:block">
              <Link href="/academics" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Curriculum
              </Link>
              <Link href="/academics/departments" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Departments
              </Link>
              <Link href="/academics/calendar" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Academic Calendar
              </Link>
              <Link href="/academics/examination" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Examination Policy
              </Link>
              <Link href="/academics/kcse-results" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                KCSE Yearly Results
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <button className={`font-semibold text-white hover:text-primary border-b-2 ${location.startsWith("/admissions") ? "border-primary" : "border-transparent"} hover:border-primary transition-colors py-2 flex items-center`}>
              Admissions <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 hidden group-hover:block">
              <Link href="/admissions" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Admission Process
              </Link>
              <Link href="/admissions/requirements" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Requirements
              </Link>
              <Link href="/admissions/apply" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Apply Now
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <button className={`font-semibold text-white hover:text-primary border-b-2 ${location.startsWith("/student-life") ? "border-primary" : "border-transparent"} hover:border-primary transition-colors py-2 flex items-center`}>
              Student Life <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 hidden group-hover:block">
              <Link href="/student-life/clubs" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Clubs & Societies
              </Link>
              <Link href="/student-life/sports" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Sports & Athletics
              </Link>
              <Link href="/student-life/arts" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Arts & Culture
              </Link>
              <Link href="/student-life/community" className="block px-4 py-2 hover:bg-[var(--color-olive-300)/10] hover:text-primary">
                Community Service
              </Link>
            </div>
          </div>
          
          <Link href="/news-events" className={`font-semibold text-white hover:text-primary border-b-2 ${isActive("/news-events")} hover:border-primary transition-colors py-2`}>
            News & Events
          </Link>
          
          <Link href="/contact" className={`font-semibold text-white hover:text-primary border-b-2 ${isActive("/contact")} hover:border-primary transition-colors py-2`}>
            Contact
          </Link>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[var(--color-black-900)] border-t border-gray-800 shadow-md">
          <div className="container py-3">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="font-semibold text-white hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="mobile-dropdown">
                <button 
                  className="w-full text-left font-semibold text-white hover:text-primary py-2 flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("about")}
                >
                  About 
                  <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === "about" ? "rotate-180" : ""}`} />
                </button>
                {openMobileDropdown === "about" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link 
                      href="/about" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Our History
                    </Link>
                    <Link 
                      href="/about/mission-vision" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Mission & Vision
                    </Link>
                    <Link 
                      href="/about/leadership" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Leadership
                    </Link>
                    <Link 
                      href="/about/facilities" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      School Facilities
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="mobile-dropdown">
                <button 
                  className="w-full text-left font-semibold text-white hover:text-primary py-2 flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("academics")}
                >
                  Academics 
                  <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === "academics" ? "rotate-180" : ""}`} />
                </button>
                {openMobileDropdown === "academics" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link 
                      href="/academics" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Curriculum
                    </Link>
                    <Link 
                      href="/academics/departments" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Departments
                    </Link>
                    <Link 
                      href="/academics/calendar" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Academic Calendar
                    </Link>
                    <Link 
                      href="/academics/examination" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Examination Policy
                    </Link>
                    <Link 
                      href="/academics/kcse-results" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      KCSE Yearly Results
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="mobile-dropdown">
                <button 
                  className="w-full text-left font-semibold text-white hover:text-primary py-2 flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("admissions")}
                >
                  Admissions 
                  <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === "admissions" ? "rotate-180" : ""}`} />
                </button>
                {openMobileDropdown === "admissions" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link 
                      href="/admissions" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Admission Process
                    </Link>
                    <Link 
                      href="/admissions/requirements" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Requirements
                    </Link>
                    <Link 
                      href="/admissions/apply" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Apply Now
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="mobile-dropdown">
                <button 
                  className="w-full text-left font-semibold text-white hover:text-primary py-2 flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("student-life")}
                >
                  Student Life 
                  <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === "student-life" ? "rotate-180" : ""}`} />
                </button>
                {openMobileDropdown === "student-life" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link 
                      href="/student-life/clubs" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Clubs & Societies
                    </Link>
                    <Link 
                      href="/student-life/sports" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sports & Athletics
                    </Link>
                    <Link 
                      href="/student-life/arts" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Arts & Culture
                    </Link>
                    <Link 
                      href="/student-life/community" 
                      className="block py-2 text-gray-300 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Community Service
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                href="/news-events"
                className="font-semibold text-white hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News & Events
              </Link>
              
              <Link
                href="/contact"
                className="font-semibold text-white hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
