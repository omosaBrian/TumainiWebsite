import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const Academics = () => {
  return (
    <>
      <Helmet>
        <title>Academics | Tumaini Kiage Boys High School</title>
        <meta name="description" content="Explore our comprehensive curriculum, academic departments, and educational approach at Tumaini Kiage Boys High School." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80" 
          alt="Students in classroom" 
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
            <p className="text-lg max-w-xl mx-auto">
              Excellence in learning, preparing students for global opportunities
            </p>
          </div>
        </div>
      </div>
      
      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Curriculum</h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Tumaini Kiage Boys High School offers a comprehensive curriculum based on the 
                Kenya Certificate of Secondary Education (KCSE) syllabus, enhanced with 
                additional programs that foster critical thinking, creativity, and practical 
                skills development.
              </p>
              
              <p>
                Our academic program is designed to challenge students intellectually while 
                providing the support they need to excel. We emphasize both depth and breadth of 
                knowledge, preparing students not just for examinations but for lifelong learning 
                and success in a rapidly changing global environment.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Key Features of Our Curriculum</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Rigorous academic standards aligned with national and international benchmarks</li>
                <li>Integration of technology across all subject areas</li>
                <li>Project-based learning that connects theory with real-world applications</li>
                <li>Emphasis on developing research and analytical skills</li>
                <li>Regular assessment and feedback to support continuous improvement</li>
                <li>Specialized programs for gifted students and those needing additional support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Departments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Academic Departments</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto">
              Our academic departments are staffed by qualified and experienced teachers who are 
              dedicated to providing exceptional instruction and guidance to our students.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-md overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary text-left">Languages</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-4">
                    Our Languages Department focuses on developing strong communication skills in both English and Kiswahili. 
                    Students are taught to express themselves effectively through speaking, reading, and writing.
                  </p>
                  <p>Subjects offered include:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>English Language and Literature</li>
                    <li>Kiswahili Language and Literature</li>
                    <li>Foreign Languages (French as an optional subject)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-md overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary text-left">Mathematics</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-4">
                    The Mathematics Department strives to develop logical thinking, problem-solving skills, and 
                    mathematical reasoning in all students.
                  </p>
                  <p>Areas of focus include:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Algebra and Number Theory</li>
                    <li>Geometry and Trigonometry</li>
                    <li>Calculus (for advanced students)</li>
                    <li>Statistics and Probability</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-md overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary text-left">Sciences</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-4">
                    Our Science Department provides hands-on learning experiences in well-equipped laboratories, 
                    fostering scientific inquiry and critical thinking.
                  </p>
                  <p>Subjects offered include:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Biology</li>
                    <li>Chemistry</li>
                    <li>Physics</li>
                    <li>Computer Studies</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-md overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary text-left">Humanities</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-4">
                    The Humanities Department helps students develop an understanding of human societies, 
                    cultures, and the world around them.
                  </p>
                  <p>Subjects offered include:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>History and Government</li>
                    <li>Geography</li>
                    <li>Religious Education (CRE and IRE)</li>
                    <li>Business Studies</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-md overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary text-left">Technical and Creative Arts</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-4">
                    This department focuses on developing practical skills, creativity, and technical knowledge.
                  </p>
                  <p>Subjects offered include:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Agriculture</li>
                    <li>Art and Design</li>
                    <li>Music</li>
                    <li>Home Science</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Academic Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Academic Support</h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Library and Resource Center</h3>
                <p className="mb-4">
                  Our modern library houses a rich collection of books, periodicals, and digital resources. 
                  It serves as a quiet study space where students can conduct research, complete assignments, 
                  and develop a love for reading.
                </p>
                <p>
                  The library is staffed by trained librarians who assist students in finding information and 
                  developing research skills essential for academic success.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Computer Labs</h3>
                <p className="mb-4">
                  Our state-of-the-art computer labs provide students with access to technology for research, 
                  assignments, and skills development. All students receive training in computer applications, 
                  digital literacy, and responsible use of technology.
                </p>
                <p>
                  Internet access is available for educational purposes, enabling students to access online 
                  learning resources and expand their knowledge beyond textbooks.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Science Laboratories</h3>
                <p className="mb-4">
                  We have well-equipped laboratories for Biology, Chemistry, and Physics where students 
                  can perform experiments and gain practical experience that reinforces theoretical knowledge.
                </p>
                <p>
                  Our labs are managed by experienced laboratory technicians who work alongside teachers to 
                  ensure that all practical sessions are conducted safely and effectively.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Tutorial Support</h3>
                <p className="mb-4">
                  We offer additional tutorial sessions for students who need extra help in specific subjects. 
                  These sessions are conducted by teachers and sometimes by peer tutors under teacher supervision.
                </p>
                <p>
                  Our remedial program identifies students who are struggling academically and provides 
                  targeted interventions to help them improve their performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Academic Calendar</h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
            
            <p className="mb-8">
              Our academic year is divided into three terms, following the national education calendar. 
              Each term includes regular classes, assessments, co-curricular activities, and special events.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Term 1 (January - March)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-3 mt-0.5">JAN</span>
                    <div>
                      <p className="font-medium">School Opening</p>
                      <p className="text-sm text-gray-600">Student registration and orientation for new students</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-3 mt-0.5">FEB</span>
                    <div>
                      <p className="font-medium">Mid-term Assessments</p>
                      <p className="text-sm text-gray-600">Continuous assessment tests across all subjects</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-3 mt-0.5">MAR</span>
                    <div>
                      <p className="font-medium">End of Term Examinations</p>
                      <p className="text-sm text-gray-600">Comprehensive examinations followed by parent-teacher meetings</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Term 2 (May - August)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-3 mt-0.5">MAY</span>
                    <div>
                      <p className="font-medium">School Reopening</p>
                      <p className="text-sm text-gray-600">Resumption of classes and extracurricular activities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-3 mt-0.5">JUN</span>
                    <div>
                      <p className="font-medium">Sports and Cultural Week</p>
                      <p className="text-sm text-gray-600">Inter-house competitions and talent showcase</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-3 mt-0.5">JUL</span>
                    <div>
                      <p className="font-medium">Mid-term Assessments</p>
                      <p className="text-sm text-gray-600">Continuous assessment tests across all subjects</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-3 mt-0.5">AUG</span>
                    <div>
                      <p className="font-medium">End of Term Examinations</p>
                      <p className="text-sm text-gray-600">Comprehensive examinations followed by academic day celebrations</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Term 3 (September - November)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-3 mt-0.5">SEP</span>
                    <div>
                      <p className="font-medium">School Reopening</p>
                      <p className="text-sm text-gray-600">Final term begins with focus on exam preparation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-3 mt-0.5">OCT</span>
                    <div>
                      <p className="font-medium">Mock Examinations for Form 4</p>
                      <p className="text-sm text-gray-600">Preparation for national examinations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-3 mt-0.5">NOV</span>
                    <div>
                      <p className="font-medium">KCSE Examinations</p>
                      <p className="text-sm text-gray-600">National examinations for graduating students</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-3 mt-0.5">NOV</span>
                    <div>
                      <p className="font-medium">End of Year Examinations and Closing Ceremony</p>
                      <p className="text-sm text-gray-600">Final assessments and prize-giving day</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="mt-8 text-sm text-gray-600">
              Note: Specific dates are published at the beginning of each academic year and may be subject to change. 
              Please refer to the official school calendar for the most current information.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Our Academic Community?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Discover how Tumaini Kiage Boys High School can provide your son with an exceptional academic foundation for future success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions">
              <Button className="bg-[#FFD700] hover:bg-yellow-600 text-primary font-bold py-3 px-6 rounded-md transition-colors">
                Apply Now
              </Button>
            </Link>
            <Link href="/academics/examination">
              <Button variant="outline" className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white border-2 border-white font-bold py-3 px-6 rounded-md transition-colors">
                Examination Policy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Academics;
