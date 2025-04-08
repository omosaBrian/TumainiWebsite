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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+254700000000" className="text-sm hover:text-secondary transition-colors flex items-center gap-1">
              <Phone size={16} /> +254 7XX XXX XXX
            </a>
            <a href="mailto:info@tumainikaige.ac.ke" className="text-sm hover:text-secondary transition-colors flex items-center gap-1">
              <Mail size={16} /> info@tumainikaige.ac.ke
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/alumni" className="text-sm hover:text-secondary transition-colors">
              Alumni
            </Link>
            <Link href="/careers" className="text-sm hover:text-secondary transition-colors">
              Careers
            </Link>
            <Link href="/portal" className="text-sm hover:text-secondary transition-colors">
              Portal Login
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              {/* Placeholder for School Logo */}
              <div className="h-16 w-28 bg-primary text-white flex items-center justify-center rounded">
                TKBHS
              </div>
              <div className="ml-4 hidden lg:block">
                <h1 className="text-xl font-bold text-primary">Tumaini Kiage</h1>
                <h2 className="text-sm font-medium text-foreground">Boys High School</h2>
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
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className={`font-semibold hover:text-primary border-b-2 ${isActive("/")} hover:border-primary transition-colors py-2`}>
            Home
          </Link>
          
          <div className="relative group">
            <button className={`font-semibold hover:text-primary border-b-2 ${location.startsWith("/about") ? "border-primary" : "border-transparent"} hover:border-primary transition-colors py-2 flex items-center`}>
              About <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 hidden group-hover:block">
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Our History
              </Link>
              <Link href="/about/mission-vision" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Mission & Vision
              </Link>
              <Link href="/about/leadership" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Leadership
              </Link>
              <Link href="/about/facilities" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                School Facilities
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <button className={`font-semibold hover:text-primary border-b-2 ${location.startsWith("/academics") ? "border-primary" : "border-transparent"} hover:border-primary transition-colors py-2 flex items-center`}>
              Academics <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 hidden group-hover:block">
              <Link href="/academics" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Curriculum
              </Link>
              <Link href="/academics/departments" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Departments
              </Link>
              <Link href="/academics/calendar" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Academic Calendar
              </Link>
              <Link href="/academics/examination" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Examination Policy
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <button className={`font-semibold hover:text-primary border-b-2 ${location.startsWith("/admissions") ? "border-primary" : "border-transparent"} hover:border-primary transition-colors py-2 flex items-center`}>
              Admissions <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 hidden group-hover:block">
              <Link href="/admissions" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Admission Process
              </Link>
              <Link href="/admissions/requirements" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Requirements
              </Link>
              <Link href="/admissions/fees" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Fees Structure
              </Link>
              <Link href="/admissions/scholarships" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Scholarships
              </Link>
              <Link href="/admissions/apply" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Apply Now
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <button className={`font-semibold hover:text-primary border-b-2 ${location.startsWith("/student-life") ? "border-primary" : "border-transparent"} hover:border-primary transition-colors py-2 flex items-center`}>
              Student Life <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 hidden group-hover:block">
              <Link href="/student-life/clubs" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Clubs & Societies
              </Link>
              <Link href="/student-life/sports" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Sports & Athletics
              </Link>
              <Link href="/student-life/arts" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Arts & Culture
              </Link>
              <Link href="/student-life/community" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">
                Community Service
              </Link>
            </div>
          </div>
          
          <Link href="/news-events" className={`font-semibold hover:text-primary border-b-2 ${isActive("/news-events")} hover:border-primary transition-colors py-2`}>
            News & Events
          </Link>
          
          <Link href="/contact" className={`font-semibold hover:text-primary border-b-2 ${isActive("/contact")} hover:border-primary transition-colors py-2`}>
            Contact
          </Link>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-semibold hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="mobile-dropdown">
                <button 
                  className="w-full text-left font-semibold hover:text-primary py-2 flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("about")}
                >
                  About 
                  <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === "about" ? "rotate-180" : ""}`} />
                </button>
                {openMobileDropdown === "about" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link 
                      href="/about" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Our History
                    </Link>
                    <Link 
                      href="/about/mission-vision" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Mission & Vision
                    </Link>
                    <Link 
                      href="/about/leadership" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Leadership
                    </Link>
                    <Link 
                      href="/about/facilities" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      School Facilities
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="mobile-dropdown">
                <button 
                  className="w-full text-left font-semibold hover:text-primary py-2 flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("academics")}
                >
                  Academics 
                  <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === "academics" ? "rotate-180" : ""}`} />
                </button>
                {openMobileDropdown === "academics" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link 
                      href="/academics" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Curriculum
                    </Link>
                    <Link 
                      href="/academics/departments" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Departments
                    </Link>
                    <Link 
                      href="/academics/calendar" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Academic Calendar
                    </Link>
                    <Link 
                      href="/academics/examination" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Examination Policy
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="mobile-dropdown">
                <button 
                  className="w-full text-left font-semibold hover:text-primary py-2 flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("admissions")}
                >
                  Admissions 
                  <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === "admissions" ? "rotate-180" : ""}`} />
                </button>
                {openMobileDropdown === "admissions" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link 
                      href="/admissions" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Admission Process
                    </Link>
                    <Link 
                      href="/admissions/requirements" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Requirements
                    </Link>
                    <Link 
                      href="/admissions/fees" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Fees Structure
                    </Link>
                    <Link 
                      href="/admissions/scholarships" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Scholarships
                    </Link>
                    <Link 
                      href="/admissions/apply" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Apply Now
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="mobile-dropdown">
                <button 
                  className="w-full text-left font-semibold hover:text-primary py-2 flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("student-life")}
                >
                  Student Life 
                  <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === "student-life" ? "rotate-180" : ""}`} />
                </button>
                {openMobileDropdown === "student-life" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link 
                      href="/student-life/clubs" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Clubs & Societies
                    </Link>
                    <Link 
                      href="/student-life/sports" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sports & Athletics
                    </Link>
                    <Link 
                      href="/student-life/arts" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Arts & Culture
                    </Link>
                    <Link 
                      href="/student-life/community" 
                      className="block py-2 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Community Service
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                href="/news-events"
                className="font-semibold hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News & Events
              </Link>
              
              <Link
                href="/contact"
                className="font-semibold hover:text-primary py-2"
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
