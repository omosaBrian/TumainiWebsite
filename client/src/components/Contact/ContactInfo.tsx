import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-4" />
          <div>
            <h4 className="font-semibold text-lg mb-1">Our Location</h4>
            <p className="text-gray-700">
              Tumaini Kiage Boys High School<br />
              P.O. Box 123-45678<br />
              Kiage, Kenya
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-4" />
          <div>
            <h4 className="font-semibold text-lg mb-1">Phone Numbers</h4>
            <p className="text-gray-700">
              Main Office: +254 7XX XXX XXX<br />
              Admissions: +254 7XX XXX XXX<br />
              Emergency: +254 7XX XXX XXX
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-4" />
          <div>
            <h4 className="font-semibold text-lg mb-1">Email Addresses</h4>
            <p className="text-gray-700">
              General Inquiries: <a href="mailto:info@tumainikaige.ac.ke" className="hover:text-primary">info@tumainikaige.ac.ke</a><br />
              Admissions: <a href="mailto:admissions@tumainikaige.ac.ke" className="hover:text-primary">admissions@tumainikaige.ac.ke</a><br />
              Principal's Office: <a href="mailto:principal@tumainikaige.ac.ke" className="hover:text-primary">principal@tumainikaige.ac.ke</a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-4" />
          <div>
            <h4 className="font-semibold text-lg mb-1">Office Hours</h4>
            <div className="text-gray-700">
              <div className="flex justify-between mb-1">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 4:30 PM</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Saturday:</span>
                <span>8:00 AM - 12:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday & Holidays:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-semibold text-lg mb-3">Connect With Us</h4>
        <div className="flex space-x-4">
          <a 
            href="#" 
            className="bg-gray-100 hover:bg-primary hover:text-white transition-colors h-10 w-10 rounded-full flex items-center justify-center"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a 
            href="#" 
            className="bg-gray-100 hover:bg-primary hover:text-white transition-colors h-10 w-10 rounded-full flex items-center justify-center"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a 
            href="#" 
            className="bg-gray-100 hover:bg-primary hover:text-white transition-colors h-10 w-10 rounded-full flex items-center justify-center"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a 
            href="#" 
            className="bg-gray-100 hover:bg-primary hover:text-white transition-colors h-10 w-10 rounded-full flex items-center justify-center"
            aria-label="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
