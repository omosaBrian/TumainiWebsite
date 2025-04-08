import { Link } from "wouter";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          <div>
            {/* School Logo */}
            <div className="h-14 w-28 sm:h-16 sm:w-32 bg-primary text-white flex items-center justify-center rounded shadow-sm mb-4">
              <span className="font-bold">TKBHS</span>
            </div>
            <p className="mb-4 text-sm sm:text-base">Nurturing young men of integrity, knowledge, and purpose since 1970.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[var(--color-olive-300)] transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-[var(--color-olive-300)] transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-[var(--color-olive-300)] transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-[var(--color-olive-300)] transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[var(--color-olive-300)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[var(--color-olive-300)] transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[var(--color-olive-300)] transition-colors">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="hover:text-[var(--color-olive-300)] transition-colors">
                  Student Life
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-[var(--color-olive-300)] transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[var(--color-olive-300)] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-olive-300)] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-[var(--color-olive-300)]" size={20} />
                <span>
                  Tumaini Kiage Boys High School<br />
                  P.O. Box 123-45678<br />
                  Kiage, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-[var(--color-olive-300)]" size={20} />
                <span>+254 7XX XXX XXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-[var(--color-olive-300)]" size={20} />
                <span>info@tumainikaige.ac.ke</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">School Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="mr-3 text-[var(--color-olive-300)]" size={20} />
                <div>
                  <span className="block font-semibold">Monday - Friday</span>
                  <span className="block">8:00 AM - 4:30 PM</span>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 text-[var(--color-olive-300)]" size={20} />
                <div>
                  <span className="block font-semibold">Saturday</span>
                  <span className="block">8:00 AM - 12:00 PM</span>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 text-[var(--color-olive-300)]" size={20} />
                <div>
                  <span className="block font-semibold">Sunday</span>
                  <span className="block">Closed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Tumaini Kiage Boys High School. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center">
            <Link href="/privacy-policy" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors mx-2 my-1">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors mx-2 my-1">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors mx-2 my-1">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
