import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  CheckCircle2, 
  Calendar, 
  GraduationCap, 
  FileText, 
  CreditCard,
  Award
} from "lucide-react";

const Admissions = () => {
  return (
    <>
      <Helmet>
        <title>Admissions | Tumaini Kiage Boys High School</title>
        <meta name="description" content="Learn about the admission process, requirements, fees, and scholarships at Tumaini Kiage Boys High School." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80" 
          alt="School entrance" 
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-lg max-w-xl mx-auto">
              Join our community of future leaders and begin your journey of excellence
            </p>
          </div>
        </div>
      </div>
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Welcome to Our Admissions</h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Thank you for your interest in Tumaini Kiage Boys High School. We are committed to 
                providing a nurturing environment where every student can achieve academic excellence 
                and personal growth. Our admissions process is designed to identify young men who will 
                thrive in our rigorous educational program and contribute positively to our school community.
              </p>
              
              <p>
                We welcome applications from students who demonstrate academic potential, good character, 
                and a willingness to participate actively in school life. Our goal is to form a diverse 
                student body that reflects different backgrounds, talents, and perspectives.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Key Admissions Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Applications for Form One are accepted from September to December each year.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Limited spots are available for transfers to Forms Two and Three, subject to availability.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>We offer both day and boarding options for students.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Scholarships and financial aid are available for qualifying students.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>All applicants must take an entrance examination and attend an interview.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Admissions Process Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Admissions Process</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto">
              Our admissions process consists of several steps designed to assess each applicant's academic 
              readiness, character, and fit with our school community.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="form1" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="form1">Form 1 Admission</TabsTrigger>
                <TabsTrigger value="transfer">Transfer Students</TabsTrigger>
                <TabsTrigger value="international">International Students</TabsTrigger>
              </TabsList>
              
              <TabsContent value="form1" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Form 1 Admission Process</CardTitle>
                    <CardDescription>
                      For students entering secondary school after completing primary education
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4">
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">1</div>
                        <div>
                          <h4 className="font-semibold text-lg">Application Submission</h4>
                          <p className="text-gray-600">
                            Complete and submit the application form along with required documents, including KCPE results 
                            (or predicted grades), primary school transcripts, and a recommendation letter from your current school.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">2</div>
                        <div>
                          <h4 className="font-semibold text-lg">Entrance Examination</h4>
                          <p className="text-gray-600">
                            All applicants must take an entrance examination that assesses knowledge in Mathematics, English, 
                            Science, and Social Studies. The exam helps us determine each student's academic readiness.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">3</div>
                        <div>
                          <h4 className="font-semibold text-lg">Interview</h4>
                          <p className="text-gray-600">
                            Shortlisted candidates and their parents/guardians will be invited for an interview with members 
                            of our admissions committee. The interview helps us get to know the student better and assess their fit with our school.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">4</div>
                        <div>
                          <h4 className="font-semibold text-lg">Admission Decision</h4>
                          <p className="text-gray-600">
                            Based on the application materials, examination results, and interview, the admissions committee 
                            makes a decision. Successful candidates receive an offer letter with details on fees and reporting dates.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">5</div>
                        <div>
                          <h4 className="font-semibold text-lg">Acceptance and Registration</h4>
                          <p className="text-gray-600">
                            To secure a place, parents/guardians must confirm acceptance by paying the required fees and 
                            submitting any additional documentation by the specified deadline.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-600">
                      <Calendar className="inline mr-2" size={16} />
                      Application Timeline: September to December for the following academic year
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="transfer" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Transfer Students Process</CardTitle>
                    <CardDescription>
                      For students transferring from other secondary schools to Forms 2 or 3
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4">
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">1</div>
                        <div>
                          <h4 className="font-semibold text-lg">Application and Documentation</h4>
                          <p className="text-gray-600">
                            Submit the transfer application form along with academic records from your current school, 
                            a transfer letter, and a letter of recommendation from your current school principal.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">2</div>
                        <div>
                          <h4 className="font-semibold text-lg">Academic Assessment</h4>
                          <p className="text-gray-600">
                            Transfer students must take assessment tests in core subjects to determine their academic standing 
                            and ensure they can integrate into our curriculum.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">3</div>
                        <div>
                          <h4 className="font-semibold text-lg">Interview</h4>
                          <p className="text-gray-600">
                            Students and parents/guardians will be interviewed to understand the reason for transfer and to assess 
                            whether the student will adapt well to our school environment.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">4</div>
                        <div>
                          <h4 className="font-semibold text-lg">Decision and Enrollment</h4>
                          <p className="text-gray-600">
                            If accepted, the student will receive a transfer acceptance letter. Parents/guardians must complete the 
                            enrollment process by paying fees and submitting required documents.
                          </p>
                        </div>
                      </li>
                    </ol>
                    
                    <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-amber-800 font-medium">Important Note:</p>
                      <p className="text-amber-700 text-sm">
                        Transfer admissions are subject to space availability and are typically considered at the beginning of each 
                        term. We do not accept transfers into Form 4.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="international" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>International Students Process</CardTitle>
                    <CardDescription>
                      For students coming from outside Kenya
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4">
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">1</div>
                        <div>
                          <h4 className="font-semibold text-lg">Application Submission</h4>
                          <p className="text-gray-600">
                            Complete the international student application form and submit it along with academic records from 
                            your current school, translated into English if necessary.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">2</div>
                        <div>
                          <h4 className="font-semibold text-lg">Documentation</h4>
                          <p className="text-gray-600">
                            Provide a copy of the student's passport, birth certificate, and any required visa documentation. 
                            Include immunization records and health insurance information.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">3</div>
                        <div>
                          <h4 className="font-semibold text-lg">English Proficiency</h4>
                          <p className="text-gray-600">
                            Non-native English speakers must provide evidence of English language proficiency or take an English 
                            assessment test.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">4</div>
                        <div>
                          <h4 className="font-semibold text-lg">Virtual Interview</h4>
                          <p className="text-gray-600">
                            A virtual interview will be conducted with the student and parents/guardians to assess readiness for 
                            study in Kenya and fit with our school.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">5</div>
                        <div>
                          <h4 className="font-semibold text-lg">Acceptance and Enrollment</h4>
                          <p className="text-gray-600">
                            Upon acceptance, the school will issue a letter of acceptance that can be used for visa applications. 
                            Fees must be paid according to the international student fee schedule.
                          </p>
                        </div>
                      </li>
                    </ol>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-blue-800 font-medium">Additional Support:</p>
                      <p className="text-blue-700 text-sm">
                        Our international student coordinator will assist with orientation, cultural adaptation, and ongoing support 
                        throughout the student's time at Tumaini Kiage Boys High School.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Admission Requirements</h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary">Academic Requirements</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Minimum KCPE score of 350 marks for Form 1 applicants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Satisfactory performance in entrance examination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Consistent academic record from previous school(s)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>For transfer students: Good grades in core subjects</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary">Required Documents</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Completed application form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>KCPE result slip or certificate (Form 1)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>School reports/transcripts for the last two years</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Recommendation letter from current school</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Copy of birth certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Two passport-sized photographs</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-primary">Personal Qualities We Look For</h3>
              </div>
              <p className="mb-4">
                Beyond academic achievements, we value students who demonstrate:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Strong moral character and integrity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Leadership potential</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Motivation and self-discipline</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Respect for diversity and others</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Willingness to participate in school activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Commitment to community service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fees and Financial Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Fees and Financial Information</h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
            
            <div className="mb-8">
              <p>
                Tumaini Kiage Boys High School strives to provide quality education at reasonable rates. 
                Our fee structure covers tuition, boarding (for boarders), meals, basic medical care, 
                and most co-curricular activities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <CreditCard className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary">Fee Structure (2023-2024)</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Boarders:</h4>
                    <p className="text-gray-700">KSh 65,000 per term</p>
                    <ul className="text-sm text-gray-600 mt-1 pl-5 list-disc">
                      <li>Includes accommodation, meals, tuition</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Day Scholars:</h4>
                    <p className="text-gray-700">KSh 40,000 per term</p>
                    <ul className="text-sm text-gray-600 mt-1 pl-5 list-disc">
                      <li>Includes lunch, tuition</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Other Fees (One-time):</h4>
                    <ul className="text-sm text-gray-600 mt-1 pl-5 list-disc">
                      <li>Admission Fee: KSh 10,000</li>
                      <li>Caution Money (refundable): KSh 5,000</li>
                      <li>Development Fund: KSh 10,000</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <p>Note: Fees are subject to review annually. Please contact our finance office for the most current information.</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary">Scholarships & Financial Aid</h3>
                </div>
                <p className="mb-4">
                  We are committed to making our education accessible to deserving students from diverse backgrounds. 
                  Several scholarship and financial aid options are available:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Academic Excellence Scholarships:</span>
                      <p className="text-sm text-gray-600">For students with outstanding KCPE results (400+ marks)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Sports Talent Scholarships:</span>
                      <p className="text-sm text-gray-600">For exceptional athletes who can represent the school</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Need-based Financial Aid:</span>
                      <p className="text-sm text-gray-600">For families demonstrating financial need</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Alumni Sponsored Scholarships:</span>
                      <p className="text-sm text-gray-600">Funded by our generous alumni network</p>
                    </div>
                  </li>
                </ul>
                
                <Link href="/admissions/scholarships" className="inline-block mt-4 text-primary font-medium hover:underline">
                  Learn more about our scholarship programs →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Payment Methods</h3>
              <p className="mb-4">
                We offer several convenient ways to pay school fees:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Bank Deposit/Transfer:</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Account Name: Tumaini Kiage Boys High School<br />
                    Bank: Kenya Commercial Bank<br />
                    Branch: Kiage<br />
                    Account Number: 1234567890<br />
                    Swift Code: KCBLKENX
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Mobile Money Payment:</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    M-Pesa Paybill: 123456<br />
                    Account Number: Student Admission Number
                  </p>
                  
                  <h4 className="font-medium mt-4">Banker's Cheque:</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Payable to: Tumaini Kiage Boys High School
                  </p>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                <p>Important: Always include your son's full name and admission number as the reference for all payments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA - Apply Now */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Begin Your Journey With Us Today</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Applications for the next academic year are now open. Take the first step towards providing your son with an 
            exceptional education that will prepare him for a successful future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions/apply">
              <Button className="bg-[#FFD700] hover:bg-yellow-600 text-primary font-bold py-3 px-6 rounded-md transition-colors">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white border-2 border-white font-bold py-3 px-6 rounded-md transition-colors">
                Contact Admissions Office
              </Button>
            </Link>
          </div>
          <p className="text-white mt-6">
            Have questions? Call us at +254 7XX XXX XXX or email <a href="mailto:admissions@tumainikaige.ac.ke" className="underline">admissions@tumainikaige.ac.ke</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Admissions;
