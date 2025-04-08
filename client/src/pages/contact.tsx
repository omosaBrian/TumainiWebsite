import { Helmet } from "@/components/ui/helmet";
import PageHeader from "@/components/common/PageHeader";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Tumaini Kiage Boys High School</title>
        <meta name="description" content="Get in touch with Tumaini Kiage Boys High School. Find our contact information, location, and send us a message." />
      </Helmet>
      
      <PageHeader 
        title="Contact Us"
        description="We're here to answer your questions and help you connect with our school"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80"
      />
      
      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">Find Us</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-8"></div>
            
            <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] shadow-md">
              {/* This would be replaced with an actual Google Maps embed, using a placeholder for now */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <div className="text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 font-medium">
                    Map Loading...
                  </p>
                  <p className="text-gray-500 mt-2">
                    Please note: An actual Google Maps embed would be placed here in production
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Directions</h3>
              <p className="max-w-2xl mx-auto text-gray-700">
                Tumaini Kiage Boys High School is located 2 kilometers from Kiage town center. 
                From Kiage town, take the Tumaini Road and follow the signs for the school. 
                Public transportation is available from Kiage town center to the school entrance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">Frequently Asked Questions</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-8"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-2">What are the school's operating hours?</h3>
                <p className="text-gray-700">
                  The school administrative offices are open from 8:00 AM to 4:30 PM, Monday through Friday, 
                  and from 8:00 AM to 12:00 PM on Saturdays. The school is closed on Sundays and public holidays.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-2">How can I schedule a visit to the school?</h3>
                <p className="text-gray-700">
                  You can schedule a visit by contacting our Admissions Office at +254 7XX XXX XXX or 
                  by sending an email to admissions@tumainikaige.ac.ke. We conduct school tours on 
                  weekdays by appointment and hold Open Days each term.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-2">How can I apply for admission?</h3>
                <p className="text-gray-700">
                  You can apply for admission by downloading the application form from our website or 
                  obtaining a physical copy from our Admissions Office. Completed forms should be submitted 
                  along with the required documents and application fee. Visit our Admissions page for more details.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-2">Who should I contact for specific inquiries?</h3>
                <p className="text-gray-700">
                  For academic inquiries, contact the Deputy Principal, Academics at academics@tumainikaige.ac.ke. 
                  For boarding matters, contact the Head of Boarding at boarding@tumainikaige.ac.ke. 
                  For general inquiries, contact our main office at info@tumainikaige.ac.ke.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emergency Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Contact</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            For urgent matters requiring immediate attention, please contact our emergency line.
          </p>
          <div className="text-2xl font-bold">+254 7XX XXX XXX</div>
          <p className="mt-2 text-sm">Available 24/7</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
