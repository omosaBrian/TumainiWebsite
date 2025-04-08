import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Tumaini Kiage Boys High School</title>
        <meta name="description" content="Learn about the history, mission, vision, and leadership of Tumaini Kiage Boys High School." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1613896640137-bb5b31496515?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80" 
          alt="School building exterior" 
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg max-w-xl mx-auto">
              Discover our school's rich history, mission, and community
            </p>
          </div>
        </div>
      </div>
      
      {/* Our History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Our History</h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Tumaini Kiage Boys High School was established in 1970 with a mission to provide quality education to young men in the Kiage region. What began as a small school with just three classrooms and 45 students has grown into one of the most respected educational institutions in the country.
              </p>
              
              <p>
                The school was founded by a group of local community leaders who recognized the need for a quality boys' high school in the area. With support from local and international donors, the first building was constructed, and the school officially opened its doors in January 1970.
              </p>
              
              <p>
                Over the years, the school has expanded its facilities, enhanced its curriculum, and strengthened its commitment to academic excellence. Today, Tumaini Kiage Boys High School stands as a testament to the vision of its founders and the dedication of all those who have contributed to its growth and development.
              </p>
              
              <p>
                Throughout its history, the school has remained true to its core values of integrity, excellence, and service, producing graduates who have gone on to make significant contributions in various fields both nationally and internationally.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
                <p className="mb-4">
                  To provide a holistic education that nurtures academic excellence, character development, and leadership skills in young men, preparing them to be responsible citizens and agents of positive change in society.
                </p>
                <p>
                  We are committed to creating a supportive learning environment that challenges students to reach their full potential, fosters critical thinking, and instills values of integrity, respect, and service to others.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
                <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
                <p className="mb-4">
                  To be a leading educational institution that is recognized nationally and internationally for excellence in academics, character formation, and the development of well-rounded individuals.
                </p>
                <p>
                  We aspire to be a center of innovation and excellence that produces graduates who are equipped with the knowledge, skills, and values needed to succeed in a rapidly changing global society and who are committed to making a positive difference in their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto">
              These fundamental principles guide everything we do at Tumaini Kiage Boys High School
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Excellence</h3>
              <p>We strive for the highest standards in all that we do, challenging ourselves to continuous improvement and outstanding achievement.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Integrity</h3>
              <p>We uphold honesty, transparency, and ethical behavior in all our actions and relationships, fostering trust and mutual respect.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Service</h3>
              <p>We are dedicated to serving others and making a positive difference in our community, cultivating a spirit of compassion and social responsibility.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">School Leadership</h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">Board of Governors</h3>
              <p className="mb-6">
                Our Board of Governors provides strategic direction and oversight to ensure that the school continues to fulfill its mission and achieve its vision. The board is composed of distinguished professionals from various fields who are committed to the advancement of education and the welfare of our students.
              </p>
              
              <Link href="/about/leadership" className="inline-flex items-center text-primary font-semibold hover:text-[#800020] transition-colors">
                Meet our Board of Governors <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">School Administration</h3>
              <p className="mb-6">
                Led by our Principal, the administration team is responsible for the day-to-day operations of the school, implementing policies and programs that support academic excellence and student well-being. Our administrators are experienced educators who are dedicated to creating a positive and enriching learning environment.
              </p>
              
              <Link href="/faculty" className="inline-flex items-center text-primary font-semibold hover:text-[#800020] transition-colors">
                Meet our Administration Team <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Discover how Tumaini Kiage Boys High School can provide your son with an exceptional educational experience that will prepare him for future success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions">
              <button className="bg-[#FFD700] hover:bg-yellow-600 text-primary font-bold py-3 px-6 rounded-md transition-colors">
                Apply Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white border-2 border-white font-bold py-3 px-6 rounded-md transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
