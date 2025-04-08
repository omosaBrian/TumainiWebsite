import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

const StudentLife = () => {
  return (
    <>
      <Helmet>
        <title>Student Life | Tumaini Kiage Boys High School</title>
        <meta name="description" content="Explore the vibrant student life at Tumaini Kiage Boys High School, including clubs, sports, arts, and community service activities." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80" 
          alt="Students participating in sports activities" 
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Life</h1>
            <p className="text-lg max-w-xl mx-auto">
              Developing well-rounded individuals through diverse extracurricular activities
            </p>
          </div>
        </div>
      </div>
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Life Beyond the Classroom</h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                At Tumaini Kiage Boys High School, we believe that education extends far beyond the classroom. 
                Our vibrant student life program is designed to nurture well-rounded individuals by providing 
                opportunities for students to discover and develop their talents, build character, form meaningful 
                friendships, and learn essential life skills.
              </p>
              
              <p>
                Through participation in clubs, sports, arts, leadership activities, and community service, 
                our students learn teamwork, discipline, creativity, and social responsibility. These experiences 
                complement their academic studies and prepare them for success in all aspects of life.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">Our Philosophy</h3>
                  <p className="text-gray-700">
                    We believe in nurturing the whole person - mind, body, and spirit. Our student life program 
                    is guided by the principles of balance, inclusion, and excellence, ensuring that every student 
                    finds activities that resonate with their interests and help them grow.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">Student Support</h3>
                  <p className="text-gray-700">
                    Our dedicated team of teachers, coaches, and counselors provide guidance and support throughout 
                    the student journey. We create a safe and nurturing environment where students can take risks, 
                    learn from failures, and celebrate successes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Activities Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Student Activities</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto">
              Explore the wide range of activities available to our students that help them discover their 
              passions and develop their talents.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="clubs" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="clubs">Clubs & Societies</TabsTrigger>
                <TabsTrigger value="sports">Sports & Athletics</TabsTrigger>
                <TabsTrigger value="arts">Arts & Culture</TabsTrigger>
                <TabsTrigger value="service">Community Service</TabsTrigger>
              </TabsList>
              
              <TabsContent value="clubs" className="mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Clubs & Societies</h3>
                  
                  <p className="mb-6">
                    Our clubs and societies cater to a wide range of interests, from academic pursuits to practical skills. 
                    They meet regularly under the guidance of teacher patrons and provide opportunities for leadership, 
                    friendly competition, and the development of specific skills.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-primary mb-3">Academic Clubs</h4>
                      <ul className="space-y-2">
                        <li>Science Club</li>
                        <li>Debate Club</li>
                        <li>Mathematics Club</li>
                        <li>Literature Club</li>
                        <li>Geography Club</li>
                        <li>Computer Club</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-primary mb-3">Skills-based Clubs</h4>
                      <ul className="space-y-2">
                        <li>Entrepreneurship Club</li>
                        <li>Environmental Club</li>
                        <li>Agriculture Club</li>
                        <li>Photography Club</li>
                        <li>Chess Club</li>
                        <li>First Aid Club</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-primary mb-3">Personal Development</h4>
                      <ul className="space-y-2">
                        <li>Leadership Club</li>
                        <li>Public Speaking Club</li>
                        <li>Scouts</li>
                        <li>Student Christian Union</li>
                        <li>Muslim Students Association</li>
                        <li>Peace Club</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-primary mb-3">Club Activities & Achievements</h4>
                    
                    <div className="space-y-4">
                      <div className="p-4 border-l-4 border-primary bg-gray-50">
                        <h5 className="font-medium">Debate Club</h5>
                        <p className="text-gray-700">
                          Our debate team regularly participates in regional and national competitions. In 2022, 
                          they reached the finals of the National Schools Debate Championship and had two members 
                          selected for the Kenya National Debate Team.
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-primary bg-gray-50">
                        <h5 className="font-medium">Science Club</h5>
                        <p className="text-gray-700">
                          The Science Club organizes the annual Science Fair, where students showcase innovative projects. 
                          Several of our students have gone on to represent the school at the National Science Congress, 
                          winning awards for their research and innovations.
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-primary bg-gray-50">
                        <h5 className="font-medium">Entrepreneurship Club</h5>
                        <p className="text-gray-700">
                          This club runs small business ventures within the school and participates in entrepreneurship competitions. 
                          Members learn practical business skills and have the opportunity to interact with successful entrepreneurs 
                          who are invited as guest speakers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="sports" className="mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Sports & Athletics</h3>
                  
                  <p className="mb-6">
                    Our sports program emphasizes participation, skill development, sportsmanship, and healthy competition. 
                    We offer a wide range of team and individual sports, with opportunities for both recreational and competitive participation. 
                    Regular training sessions are conducted by qualified coaches, and students compete in various local, regional, and national tournaments.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                        alt="Students playing soccer" 
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <h4 className="text-lg font-semibold text-primary mb-2">Team Sports</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        <li>Football (Soccer)</li>
                        <li>Basketball</li>
                        <li>Rugby</li>
                        <li>Volleyball</li>
                        <li>Hockey</li>
                        <li>Cricket</li>
                        <li>Handball</li>
                      </ul>
                    </div>
                    
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                        alt="Athletics track" 
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <h4 className="text-lg font-semibold text-primary mb-2">Individual Sports & Athletics</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        <li>Track events</li>
                        <li>Field events</li>
                        <li>Swimming</li>
                        <li>Tennis</li>
                        <li>Table Tennis</li>
                        <li>Badminton</li>
                        <li>Chess</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h4 className="text-lg font-semibold text-primary mb-3">Sports Facilities</h4>
                    <p className="mb-4">
                      Our campus features excellent sports facilities that support our comprehensive program:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li>Football pitch</li>
                      <li>400m athletics track</li>
                      <li>Basketball courts</li>
                      <li>Volleyball courts</li>
                      <li>Tennis courts</li>
                      <li>Rugby field</li>
                      <li>Indoor sports hall</li>
                      <li>Fitness center</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Recent Sports Achievements</h4>
                    
                    <div className="space-y-4">
                      <div className="p-4 border-l-4 border-primary bg-gray-50">
                        <h5 className="font-medium">Football Team</h5>
                        <p className="text-gray-700">
                          County Champions (2022) and Regional Finalists (2023)
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-primary bg-gray-50">
                        <h5 className="font-medium">Athletics</h5>
                        <p className="text-gray-700">
                          Four students qualified for the National Athletics Championships in 2023, with one winning a silver medal in the 800m race.
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-primary bg-gray-50">
                        <h5 className="font-medium">Rugby Team</h5>
                        <p className="text-gray-700">
                          Regional Champions (2022) and two players selected for the Kenya U18 Development Squad.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="arts" className="mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Arts & Culture</h3>
                  
                  <p className="mb-6">
                    Our arts and cultural program nurtures creativity, self-expression, and appreciation for diverse 
                    cultural traditions. Students have opportunities to explore various art forms, showcase their talents, 
                    and appreciate cultural diversity through performances and exhibitions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-primary mb-3">Music</h4>
                      <ul className="space-y-2">
                        <li>School Choir</li>
                        <li>Music Festival participation</li>
                        <li>Instrumental ensembles</li>
                        <li>Modern music groups</li>
                        <li>Music theory and practice lessons</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-primary mb-3">Drama & Theatre</h4>
                      <ul className="space-y-2">
                        <li>Drama Club</li>
                        <li>Annual school play</li>
                        <li>Drama Festivals participation</li>
                        <li>Public speaking competitions</li>
                        <li>Improvisation workshops</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-primary mb-3">Visual Arts</h4>
                      <ul className="space-y-2">
                        <li>Art Club</li>
                        <li>Annual art exhibition</li>
                        <li>Painting and drawing</li>
                        <li>Sculpture and craft</li>
                        <li>Digital art and design</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-primary mb-4">Cultural Activities</h4>
                    
                    <div className="relative h-64 mb-6">
                      <img 
                        src="https://images.unsplash.com/photo-1545062960-589e3194bfb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=300&q=80" 
                        alt="Cultural performance" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-primary bg-opacity-30 rounded-lg flex items-center justify-center">
                        <h5 className="text-2xl font-bold text-white">Celebrating Cultural Diversity</h5>
                      </div>
                    </div>
                    
                    <p className="mb-4">
                      We celebrate the rich cultural diversity of our student body through various activities:
                    </p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <li className="flex items-start">
                        <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-sm">1</span>
                        </div>
                        <div>
                          <span className="font-medium">Cultural Day:</span>
                          <p className="text-sm text-gray-700">
                            An annual event featuring performances, exhibitions, and cultural cuisine representing 
                            different communities in Kenya and beyond.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-sm">2</span>
                        </div>
                        <div>
                          <span className="font-medium">Traditional Dance:</span>
                          <p className="text-sm text-gray-700">
                            Students learn and perform traditional dances from various Kenyan communities and participate 
                            in dance competitions.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-sm">3</span>
                        </div>
                        <div>
                          <span className="font-medium">Language and Heritage Clubs:</span>
                          <p className="text-sm text-gray-700">
                            These clubs promote appreciation of different languages, customs, and traditions.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-sm">4</span>
                        </div>
                        <div>
                          <span className="font-medium">Cultural Exchange Programs:</span>
                          <p className="text-sm text-gray-700">
                            Opportunities for students to learn about other cultures through exchanges with partner schools.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Recent Arts Achievements</h4>
                    
                    <div className="space-y-4">
                      <div className="p-4 border-l-4 border-primary bg-gray-50">
                        <h5 className="font-medium">Music</h5>
                        <p className="text-gray-700">
                          Our school choir received a Gold Medal at the 2023 County Music Festival and was selected to perform at the National Music Festival.
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-primary bg-gray-50">
                        <h5 className="font-medium">Drama</h5>
                        <p className="text-gray-700">
                          The Drama Club's production of "The River Between" won Best Play at the Regional Drama Festival and two students received best actor nominations.
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-primary bg-gray-50">
                        <h5 className="font-medium">Visual Arts</h5>
                        <p className="text-gray-700">
                          Three students had their artwork selected for the National Youth Art Exhibition, with one receiving the Young Artist of the Year award.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="service" className="mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Community Service</h3>
                  
                  <p className="mb-6">
                    Community service is an integral part of student life at Tumaini Kiage Boys High School. 
                    We believe in nurturing socially responsible citizens who are committed to making a positive 
                    difference in their communities. Through various service activities, our students develop 
                    empathy, leadership, and a sense of civic responsibility.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                        alt="Students engaged in community service" 
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      
                      <h4 className="text-lg font-semibold text-primary mb-3">Service Programs</h4>
                      <ul className="space-y-2">
                        <li>
                          <span className="font-medium">Environmental Conservation:</span>
                          <p className="text-sm text-gray-700">Tree planting, clean-up campaigns, and environmental awareness programs.</p>
                        </li>
                        <li>
                          <span className="font-medium">Educational Support:</span>
                          <p className="text-sm text-gray-700">Peer tutoring programs and partnering with primary schools in the community.</p>
                        </li>
                        <li>
                          <span className="font-medium">Health Initiatives:</span>
                          <p className="text-sm text-gray-700">Health awareness campaigns, blood donation drives, and first aid training.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1553575297-0a61211c924e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                        alt="Community outreach" 
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      
                      <h4 className="text-lg font-semibold text-primary mb-3">Charity and Outreach</h4>
                      <ul className="space-y-2">
                        <li>
                          <span className="font-medium">Visits to Care Facilities:</span>
                          <p className="text-sm text-gray-700">Regular visits to children's homes, homes for the elderly, and hospitals.</p>
                        </li>
                        <li>
                          <span className="font-medium">Fundraising Activities:</span>
                          <p className="text-sm text-gray-700">Charity walks, concerts, and other events to raise funds for worthy causes.</p>
                        </li>
                        <li>
                          <span className="font-medium">Community Development Projects:</span>
                          <p className="text-sm text-gray-700">Participation in local development initiatives, such as water projects and community libraries.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h4 className="text-lg font-semibold text-primary mb-3">Service Learning</h4>
                    <p>
                      Our service-learning program integrates community service with classroom instruction, allowing students to:
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span>Apply academic knowledge to address real community needs</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span>Reflect on their service experiences and their impact</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span>Develop critical thinking and problem-solving skills</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span>Understand social issues from multiple perspectives</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Recent Community Service Initiatives</h4>
                    
                    <div className="space-y-4">
                      <div className="p-4 border-l-4 border-primary bg-gray-50">
                        <h5 className="font-medium">"Green Tumaini" Environmental Project</h5>
                        <p className="text-gray-700">
                          Students planted over 1,000 trees in the local area and conducted environmental education 
                          workshops in neighboring primary schools.
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-primary bg-gray-50">
                        <h5 className="font-medium">Digital Literacy Program</h5>
                        <p className="text-gray-700">
                          Our Computer Club provided basic computer training to senior citizens in the community, 
                          helping bridge the digital divide.
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-primary bg-gray-50">
                        <h5 className="font-medium">COVID-19 Relief Initiative</h5>
                        <p className="text-gray-700">
                          Students raised funds and collected essential items for families affected by the pandemic, 
                          distributing care packages to vulnerable households.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Student Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Student Leadership</h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
            
            <p className="mb-8">
              We believe in developing leadership skills in all our students. Our student leadership 
              program provides opportunities for students to take on responsibilities, contribute to 
              school governance, and learn valuable leadership skills that will serve them throughout life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Student Council</h3>
                <p className="mb-4">
                  The Student Council is the primary student leadership body, representing student 
                  interests and organizing various student activities. Members are elected by their 
                  peers and work closely with the school administration.
                </p>
                <p className="mb-4">
                  The Council consists of:
                </p>
                <ul className="space-y-1 mb-4">
                  <li>School Captain</li>
                  <li>Deputy School Captain</li>
                  <li>House Captains</li>
                  <li>Departmental Prefects (Academic, Boarding, Dining, Sports, etc.)</li>
                  <li>Class Representatives</li>
                </ul>
                <Link href="/student-life/leadership" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                  Learn more about our Student Council <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Leadership Development</h3>
                <p className="mb-4">
                  Beyond formal leadership positions, we offer various leadership development opportunities:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>
                      <span className="font-medium">Leadership Training Workshops:</span>
                      <p className="text-sm text-gray-700">Regular workshops on leadership skills, communication, conflict resolution, and teamwork.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>
                      <span className="font-medium">Club and Team Leadership:</span>
                      <p className="text-sm text-gray-700">Opportunities to lead clubs, sports teams, and other student groups.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>
                      <span className="font-medium">Mentorship Programs:</span>
                      <p className="text-sm text-gray-700">Senior students mentoring juniors, fostering responsibility and guidance skills.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>
                      <span className="font-medium">Leadership Conferences:</span>
                      <p className="text-sm text-gray-700">Participation in external leadership conferences and competitions.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Boarding Life (for boarding schools) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Boarding Life</h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                For our boarding students, Tumaini Kiage Boys High School becomes a second home. 
                Our boarding facilities provide a safe, supportive, and structured environment where 
                students learn independence, responsibility, and the art of communal living.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Dormitory building" 
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-3">Boarding Facilities</h3>
                  <ul className="space-y-2">
                    <li>Modern dormitories organized into houses</li>
                    <li>Common rooms for relaxation and socialization</li>
                    <li>Study areas with appropriate lighting</li>
                    <li>Dining hall serving nutritious meals</li>
                    <li>Laundry facilities</li>
                    <li>24-hour security</li>
                  </ul>
                </div>
                
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Students studying in common area" 
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-3">Boarding Life Structure</h3>
                  <ul className="space-y-2">
                    <li>Supervised morning and evening prep times</li>
                    <li>Regular house meetings</li>
                    <li>Weekend recreational activities</li>
                    <li>Inter-house competitions</li>
                    <li>Balanced daily schedule</li>
                    <li>Personal development programs</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">House System</h3>
                <p className="mb-4">
                  Our boarding facilities are organized into Houses, each with a distinct identity and tradition. 
                  The House system fosters a sense of belonging, healthy competition, and opportunities for leadership. 
                  Each House is led by a House Captain and prefects, with guidance from a House Master or Mistress.
                </p>
                <p>
                  Houses compete in various inter-house competitions, including academics, sports, music, 
                  drama, and cleanliness. These competitions cultivate house spirit, teamwork, and a healthy 
                  competitive atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Student Life at Tumaini Kiage</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join our vibrant community where students grow not just academically, but in all aspects of life. 
            Discover your passions, develop your talents, and build lifelong friendships.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions">
              <Button className="bg-[#FFD700] hover:bg-yellow-600 text-primary font-bold py-3 px-6 rounded-md transition-colors">
                Apply Now
              </Button>
            </Link>
            <Link href="/gallery">
              <Button variant="outline" className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white border-2 border-white font-bold py-3 px-6 rounded-md transition-colors">
                View School Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentLife;
