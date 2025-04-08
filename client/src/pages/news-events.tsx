import { useState } from "react";
import { useLocation } from "wouter";
import { Helmet } from "@/components/ui/helmet";
import PageHeader from "@/components/common/PageHeader";
import NewsList from "@/components/NewsEvents/NewsList";
import EventsList from "@/components/NewsEvents/EventsList";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const NewsEvents = () => {
  const [location] = useLocation();
  // Check if we need to show the events tab by default (from URL params)
  const searchParams = new URLSearchParams(location.split('?')[1] || '');
  const defaultTab = searchParams.get('tab') === 'events' ? 'events' : 'news';
  
  return (
    <>
      <Helmet>
        <title>News & Events | Tumaini Kiage Boys High School</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and upcoming events at Tumaini Kiage Boys High School." />
      </Helmet>
      
      <PageHeader 
        title="News & Events"
        description="Stay updated with the latest happenings at our school"
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue={defaultTab} className="w-full">
              <div className="mb-10">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                  <TabsTrigger value="news">News & Announcements</TabsTrigger>
                  <TabsTrigger value="events">Events Calendar</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="news">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-primary mb-4">Latest News</h2>
                  <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
                  <p className="max-w-3xl">
                    Stay informed about the achievements, activities, and important announcements from Tumaini Kiage Boys High School.
                  </p>
                </div>
                
                <NewsList />
              </TabsContent>
              
              <TabsContent value="events">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-primary mb-4">Upcoming Events</h2>
                  <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
                  <p className="max-w-3xl">
                    Mark your calendar for these important events and activities at Tumaini Kiage Boys High School.
                  </p>
                </div>
                
                <EventsList />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Newsletter Subscription Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Stay Connected</h2>
            <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="mb-8">
              Subscribe to our newsletter to receive the latest news and event notifications directly in your inbox.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary flex-grow"
              />
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Past Year Archives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Archives</h2>
            <div className="h-1 w-24 bg-[#FFD700] mb-8"></div>
            <p className="max-w-3xl mb-8">
              Browse through our past news and events to see the journey of Tumaini Kiage Boys High School over the years.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[2023, 2022, 2021, 2020].map(year => (
                <div key={year} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-2">{year}</h3>
                  <p className="text-sm text-gray-600 mb-4">Academic Year</p>
                  <button className="text-primary hover:text-primary/80 font-medium">
                    View Archives
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsEvents;
