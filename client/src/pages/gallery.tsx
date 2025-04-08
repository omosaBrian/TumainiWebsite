import { Helmet } from "@/components/ui/helmet";
import PageHeader from "@/components/common/PageHeader";
import GalleryGrid from "@/components/Gallery/GalleryGrid";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Tumaini Kiage Boys High School</title>
        <meta name="description" content="Browse through our gallery of photos showcasing school life, facilities, events, sports, and other activities at Tumaini Kiage Boys High School." />
      </Helmet>
      
      <PageHeader 
        title="School Gallery"
        description="Visual glimpses of life and learning at Tumaini Kiage Boys High School"
        backgroundImage="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80"
      />
      
      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Our School in Pictures</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="text-lg mb-4">
              Explore our collection of photos that capture the essence of Tumaini Kiage Boys High School - 
              from our modern facilities and vibrant student activities to our academic achievements and 
              community engagements.
            </p>
            <p>
              These images tell the story of our school community and the rich educational experience we provide.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <GalleryGrid />
        </div>
      </section>
      
      {/* Submit Photos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Share Your Photos</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="mb-8">
              Are you a student, parent, or alumni with great photos of school events or activities? 
              We'd love to feature them in our gallery. Submit your high-quality photos for consideration.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm max-w-xl mx-auto">
              <div className="text-left mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Photo Submission Guidelines:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Photos must be high resolution (minimum 1920x1080 pixels)</li>
                  <li>Must feature school events, activities, or campus</li>
                  <li>Include date, event name, and brief description</li>
                  <li>Obtain permission from all individuals prominently featured</li>
                </ul>
              </div>
              
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-md transition-colors">
                Submit Photos
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Gallery Teaser */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Video Gallery</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="text-lg mb-8">
              Explore our video collection showcasing school events, student performances, 
              and interviews with our community members.
            </p>
            
            <div className="relative bg-black bg-opacity-30 rounded-lg overflow-hidden h-60 md:h-80 flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="h-16 w-16 bg-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <p className="text-white text-center font-medium">School Highlights Reel</p>
            </div>
            
            <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white border-2 border-white font-bold py-3 px-6 rounded-md transition-colors">
              Visit Video Gallery
            </button>
          </div>
        </div>
      </section>
      
      {/* Yearbooks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">School Yearbooks</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-8"></div>
            <p className="text-center mb-12">
              Browse through our collection of school yearbooks that capture the memories and 
              achievements of each academic year at Tumaini Kiage Boys High School.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[2023, 2022, 2021, 2020].map(year => (
                <div key={year} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <div className="text-2xl font-bold text-gray-400">{year}</div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-primary">{year} Yearbook</h3>
                    <button className="mt-2 text-sm text-primary hover:text-primary/80 font-medium">
                      View Yearbook
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
