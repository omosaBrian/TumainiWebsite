import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Event } from "@shared/schema";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

interface EventsListProps {
  limit?: number;
  showViewAllButton?: boolean;
}

const EventsList = ({ limit, showViewAllButton = false }: EventsListProps) => {
  const { data: events, isLoading, isError } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  // Limit the number of events if specified
  const displayedEvents = limit && events ? events.slice(0, limit) : events;

  // Calculate if the event is upcoming or past
  const getEventStatus = (eventDate: Date) => {
    const now = new Date();
    return eventDate > now ? "Upcoming" : "Past";
  };

  return (
    <div className="w-full">
      {isLoading ? (
        // Loading state
        <div className="grid grid-cols-1 gap-6">
          {[...Array(limit || 3)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
              <div className="flex mb-4">
                <div className="h-16 w-16 bg-gray-200 rounded-lg mr-4"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      ) : isError ? (
        // Error state
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Failed to load events. Please try again later.</p>
        </div>
      ) : (
        <>
          {/* Events List */}
          <div className="grid grid-cols-1 gap-6">
            {displayedEvents?.map((event) => {
              const eventDate = new Date(event.date);
              const status = getEventStatus(eventDate);
              
              return (
                <div 
                  key={event.id} 
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                    status === "Past" ? "border-l-4 border-gray-300" : "border-l-4 border-green-500"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center mb-4">
                      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <div className="bg-gray-100 rounded-lg p-3 text-center w-20">
                          <span className="block text-xl font-bold text-primary">
                            {format(eventDate, "dd")}
                          </span>
                          <span className="block text-sm text-gray-600">
                            {format(eventDate, "MMM")}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full mr-2 ${
                            status === "Upcoming" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {status}
                          </span>
                          <span className="text-sm text-gray-600">
                            {format(eventDate, "h:mm a")}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-primary">{event.title}</h3>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <MapPin size={16} className="mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    {event.imageUrl && (
                      <img 
                        src={event.imageUrl} 
                        alt={event.title} 
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                    )}
                    {status === "Upcoming" && (
                      <div className="flex justify-end">
                        <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                          Add to Calendar
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty state */}
          {(!displayedEvents || displayedEvents.length === 0) && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No events scheduled at the moment.</p>
            </div>
          )}

          {/* View All Button */}
          {showViewAllButton && displayedEvents && displayedEvents.length > 0 && (
            <div className="text-center mt-8">
              <Link href="/news-events?tab=events">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold">
                  View All Events
                </Button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EventsList;
