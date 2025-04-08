import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GalleryItem } from "@shared/schema";

const Gallery = () => {
  const { data: galleryItems, isLoading } = useQuery<GalleryItem[]>({
    queryKey: ['/api/gallery'],
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">School Gallery</h2>
          <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto">
            Glimpses of life at Tumaini Kiage Boys High School - academics, sports, cultural activities, and more.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className={`animate-pulse bg-gray-200 rounded-lg ${
                  i > 4 ? "md:col-span-2" : ""
                }`}
                style={{ height: "200px" }}
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems && galleryItems.slice(0, 6).map((item, index) => (
              <div 
                key={item.id} 
                className={`gallery-item overflow-hidden rounded-lg shadow-md group cursor-pointer ${
                  index > 3 ? "md:col-span-2" : ""
                }`}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-8">
          <Link href="/gallery">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-md transition-colors">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
