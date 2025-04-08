import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { News } from "@shared/schema";
import { Calendar, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

interface NewsListProps {
  limit?: number;
  showViewAllButton?: boolean;
}

const NewsList = ({ limit, showViewAllButton = false }: NewsListProps) => {
  const { data: news, isLoading, isError } = useQuery<News[]>({
    queryKey: ['/api/news'],
  });

  // Limit the number of news items if specified
  const displayedNews = limit && news ? news.slice(0, limit) : news;

  return (
    <div className="w-full">
      {isLoading ? (
        // Loading state
        <div className="space-y-8">
          {[...Array(limit || 3)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 bg-gray-200"></div>
                <div className="md:w-2/3 p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : isError ? (
        // Error state
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Failed to load news. Please try again later.</p>
        </div>
      ) : (
        <>
          {/* News List */}
          <div className="space-y-8">
            {displayedNews?.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-2 text-sm text-gray-600">
                      <Calendar size={16} className="mr-2" /> 
                      {format(new Date(item.date), "MMMM d, yyyy")}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-700 mb-4">{item.summary}</p>
                    <Link 
                      href={`/news-events/${item.id}`} 
                      className="inline-flex items-center text-primary font-semibold hover:text-[#800020] transition-colors"
                    >
                      Read more <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {(!displayedNews || displayedNews.length === 0) && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No news articles available at the moment.</p>
            </div>
          )}

          {/* View All Button */}
          {showViewAllButton && displayedNews && displayedNews.length > 0 && (
            <div className="text-center mt-8">
              <Link href="/news-events">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold">
                  View All News
                </Button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewsList;
