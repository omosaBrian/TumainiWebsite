import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";
import { News } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

const NewsEvents = () => {
  const { data: news, isLoading } = useQuery<News[]>({
    queryKey: ['/api/news'],
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Latest News & Events</h2>
          <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming events at Tumaini Kiage Boys High School.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden shadow animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2 w-1/3"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news && news.slice(0, 3).map((item) => (
              <div 
                key={item.id} 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <div className="flex items-center mb-2 text-sm text-gray-600">
                    <Calendar size={16} className="mr-2" /> 
                    {format(new Date(item.date), "MMMM d, yyyy")}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="mb-4">{item.summary}</p>
                  <Link 
                    href={`/news-events/${item.id}`} 
                    className="inline-flex items-center text-primary font-semibold hover:text-[#800020] transition-colors"
                  >
                    Read more <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-8">
          <Link href="/news-events">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-md transition-colors">
              View All News & Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
