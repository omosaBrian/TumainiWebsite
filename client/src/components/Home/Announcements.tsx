import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Announcement } from "@shared/schema";

const Announcements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const { data: announcements, isLoading } = useQuery<Announcement[]>({
    queryKey: ['/api/announcements'],
  });

  useEffect(() => {
    if (!announcements || announcements.length === 0 || !containerRef.current) return;
    
    const container = containerRef.current;
    const firstChild = container.firstElementChild as HTMLElement;
    if (!firstChild) return;
    
    const animationFrame = { id: 0 };
    const speed = 0.5;
    
    const moveAnnouncements = () => {
      if (!isPaused) {
        setPosition((prev) => {
          const newPosition = prev - speed;
          
          // Reset position when first announcement is out of view
          if (firstChild && -newPosition > firstChild.offsetWidth) {
            // Move first child to the end
            container.appendChild(firstChild);
            return 0;
          }
          
          return newPosition;
        });
      }
      
      animationFrame.id = requestAnimationFrame(moveAnnouncements);
    };
    
    animationFrame.id = requestAnimationFrame(moveAnnouncements);
    
    return () => {
      cancelAnimationFrame(animationFrame.id);
    };
  }, [announcements, isPaused]);

  if (isLoading) {
    return (
      <section className="bg-primary text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="bg-[#FFD700] text-primary font-bold py-1 px-4 mr-4">
              ANNOUNCEMENTS
            </div>
            <div className="flex-1">
              <div className="h-6 w-2/3 bg-white/20 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!announcements || announcements.length === 0) {
    return (
      <section className="bg-primary text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="bg-[#FFD700] text-primary font-bold py-1 px-4 mr-4">
              ANNOUNCEMENTS
            </div>
            <div className="flex-1">
              <p>No announcements at this time.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="bg-primary text-white py-3"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="bg-[#FFD700] text-primary font-bold py-1 px-4 mr-4">
            ANNOUNCEMENTS
          </div>
          <div className="announcement-slider overflow-hidden flex-1">
            <div 
              ref={containerRef}
              className="flex"
              style={{ transform: `translateX(${position}px)` }}
            >
              {announcements.map((announcement, index) => (
                <div key={index} className="announcement-item whitespace-nowrap pr-8">
                  <span>➤ {announcement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
