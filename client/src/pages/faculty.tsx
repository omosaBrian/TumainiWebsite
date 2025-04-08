import { Helmet } from "@/components/ui/helmet";
import PageHeader from "@/components/common/PageHeader";
import FacultyGrid from "@/components/Faculty/FacultyGrid";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Faculty = () => {
  return (
    <>
      <Helmet>
        <title>Faculty & Staff | Tumaini Kiage Boys High School</title>
        <meta name="description" content="Meet our dedicated faculty and staff members at Tumaini Kiage Boys High School who are committed to providing quality education and guidance to our students." />
      </Helmet>
      
      <PageHeader 
        title="Our Faculty & Staff"
        description="Meet the dedicated educators shaping the future of our students"
        backgroundImage="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80"
      />
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Leadership & Excellence in Education</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-8"></div>
            <p className="text-lg mb-6">
              At Tumaini Kiage Boys High School, our faculty and staff are the cornerstone of our educational excellence. 
              Our team consists of dedicated professionals who are committed to nurturing the intellectual, social, and 
              personal development of each student.
            </p>
            <p className="mb-8">
              Our educators bring a wealth of knowledge, experience, and passion to the classroom, creating an 
              environment where students are inspired to learn, grow, and achieve their full potential.
            </p>
          </div>
        </div>
      </section>
      
      {/* Faculty Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">Meet Our Team</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-8"></div>
          </div>
          
          <FacultyGrid />
        </div>
      </section>
      
      {/* Join Our Team Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
              <p className="text-lg">
                We are always looking for talented and passionate educators to join our team. If you are committed to 
                academic excellence and making a difference in the lives of young men, we invite you to explore career 
                opportunities at Tumaini Kiage Boys High School.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Link href="/careers">
                <Button className="bg-[#FFD700] hover:bg-yellow-600 text-primary font-bold py-3 px-6 rounded-md transition-colors">
                  View Career Opportunities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Professional Development */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Professional Development</h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
            
            <p className="mb-8">
              We are committed to the continuous growth and development of our faculty and staff. Through ongoing 
              professional development programs, our educators stay current with the latest teaching methodologies, 
              educational technologies, and subject matter expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Workshops & Seminars</h3>
                <p className="text-gray-700">
                  Regular workshops and seminars on innovative teaching strategies, classroom management, and subject-specific content.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Collaboration</h3>
                <p className="text-gray-700">
                  Collaborative learning communities where teachers share best practices, resources, and innovative teaching ideas.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Advanced Degrees</h3>
                <p className="text-gray-700">
                  Support for teachers pursuing advanced degrees and specialized certifications in their fields of expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculty;
