import { 
  users, 
  announcements, 
  news, 
  events, 
  testimonials, 
  gallery, 
  contact,
  type User, 
  type InsertUser,
  type Announcement,
  type InsertAnnouncement,
  type News,
  type InsertNews,
  type Event,
  type InsertEvent,
  type Testimonial,
  type InsertTestimonial,
  type GalleryItem,
  type InsertGalleryItem,
  type Contact,
  type InsertContact
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Announcements
  getAnnouncements(): Promise<Announcement[]>;
  getActiveAnnouncements(): Promise<Announcement[]>;
  getAnnouncement(id: number): Promise<Announcement | undefined>;
  createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement>;
  updateAnnouncement(id: number, announcement: Partial<InsertAnnouncement>): Promise<Announcement | undefined>;
  deleteAnnouncement(id: number): Promise<boolean>;
  
  // News
  getNews(): Promise<News[]>;
  getActiveNews(): Promise<News[]>;
  getNewsItem(id: number): Promise<News | undefined>;
  createNews(newsItem: InsertNews): Promise<News>;
  updateNews(id: number, newsItem: Partial<InsertNews>): Promise<News | undefined>;
  deleteNews(id: number): Promise<boolean>;
  
  // Events
  getEvents(): Promise<Event[]>;
  getActiveEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: number, event: Partial<InsertEvent>): Promise<Event | undefined>;
  deleteEvent(id: number): Promise<boolean>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getActiveTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial | undefined>;
  deleteTestimonial(id: number): Promise<boolean>;
  
  // Gallery
  getGalleryItems(): Promise<GalleryItem[]>;
  getActiveGalleryItems(): Promise<GalleryItem[]>;
  getGalleryItem(id: number): Promise<GalleryItem | undefined>;
  createGalleryItem(galleryItem: InsertGalleryItem): Promise<GalleryItem>;
  updateGalleryItem(id: number, galleryItem: Partial<InsertGalleryItem>): Promise<GalleryItem | undefined>;
  deleteGalleryItem(id: number): Promise<boolean>;
  
  // Contact
  getContacts(): Promise<Contact[]>;
  getContact(id: number): Promise<Contact | undefined>;
  createContact(contactItem: InsertContact): Promise<Contact>;
  markContactAsRead(id: number): Promise<Contact | undefined>;
  deleteContact(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private announcements: Map<number, Announcement>;
  private newsItems: Map<number, News>;
  private eventsItems: Map<number, Event>;
  private testimonialsItems: Map<number, Testimonial>;
  private galleryItems: Map<number, GalleryItem>;
  private contactItems: Map<number, Contact>;
  
  private currentUserId: number;
  private currentAnnouncementId: number;
  private currentNewsId: number;
  private currentEventId: number;
  private currentTestimonialId: number;
  private currentGalleryId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.announcements = new Map();
    this.newsItems = new Map();
    this.eventsItems = new Map();
    this.testimonialsItems = new Map();
    this.galleryItems = new Map();
    this.contactItems = new Map();
    
    this.currentUserId = 1;
    this.currentAnnouncementId = 1;
    this.currentNewsId = 1;
    this.currentEventId = 1;
    this.currentTestimonialId = 1;
    this.currentGalleryId = 1;
    this.currentContactId = 1;
    
    // Add mock data
    this.initializeData();
  }

  // Initialize mock data
  private initializeData() {
    // Add sample announcements
    this.createAnnouncement({ text: "Term 2 Registration begins on August 20, 2023", active: true });
    this.createAnnouncement({ text: "National Science Competition - Our students won 3 medals", active: true });
    this.createAnnouncement({ text: "Parent-Teacher Meeting scheduled for September 2nd, 2023", active: true });
    
    // Add sample news
    this.createNews({
      title: "National Science Competition Success",
      summary: "Our students won three medals at the National Science Competition, showcasing their innovation and critical thinking skills.",
      content: "Detailed content about the science competition achievements.",
      imageUrl: "https://images.unsplash.com/photo-1566447528403-f0b7a9a5f958",
      date: new Date("2023-08-15"),
      active: true
    });
    
    this.createNews({
      title: "Annual Sports Day Highlights",
      summary: "This year's sports day was a grand success with record participation and outstanding performances in track and field events.",
      content: "Detailed content about the sports day events and achievements.",
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
      date: new Date("2023-07-28"),
      active: true
    });
    
    this.createNews({
      title: "Successful Career Day Event",
      summary: "Our annual Career Day brought together alumni and industry professionals to inspire and guide our students on various career paths.",
      content: "Detailed content about the career day event and its impact on students.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      date: new Date("2023-07-15"),
      active: true
    });
    
    // Add sample testimonials
    this.createTestimonial({
      name: "John Kamau",
      position: "Alumni, Class of 2010 - Software Engineer",
      content: "The education and values I received at Tumaini Kiage Boys High School have been instrumental in my career success. The teachers' dedication and the school's emphasis on both academics and character development truly set me up for life.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      active: true
    });
    
    // Add gallery items
    this.createGalleryItem({
      title: "Science Laboratory",
      category: "Facilities",
      imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      active: true
    });
    
    this.createGalleryItem({
      title: "Computer Lab",
      category: "Facilities",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      active: true
    });
    
    this.createGalleryItem({
      title: "School Library",
      category: "Facilities",
      imageUrl: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
      active: true
    });
    
    this.createGalleryItem({
      title: "Sports Activities",
      category: "Sports",
      imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5",
      active: true
    });
    
    this.createGalleryItem({
      title: "School Assembly",
      category: "Events",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      active: true
    });
    
    this.createGalleryItem({
      title: "Graduation Ceremony",
      category: "Events",
      imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      active: true
    });
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Announcements
  async getAnnouncements(): Promise<Announcement[]> {
    return Array.from(this.announcements.values());
  }
  
  async getActiveAnnouncements(): Promise<Announcement[]> {
    return Array.from(this.announcements.values()).filter(a => a.active);
  }
  
  async getAnnouncement(id: number): Promise<Announcement | undefined> {
    return this.announcements.get(id);
  }
  
  async createAnnouncement(announcementData: InsertAnnouncement): Promise<Announcement> {
    const id = this.currentAnnouncementId++;
    const announcement: Announcement = { 
      ...announcementData, 
      id, 
      createdAt: new Date() 
    };
    this.announcements.set(id, announcement);
    return announcement;
  }
  
  async updateAnnouncement(id: number, announcementData: Partial<InsertAnnouncement>): Promise<Announcement | undefined> {
    const existingAnnouncement = this.announcements.get(id);
    if (!existingAnnouncement) return undefined;
    
    const updatedAnnouncement: Announcement = {
      ...existingAnnouncement,
      ...announcementData
    };
    
    this.announcements.set(id, updatedAnnouncement);
    return updatedAnnouncement;
  }
  
  async deleteAnnouncement(id: number): Promise<boolean> {
    return this.announcements.delete(id);
  }
  
  // News
  async getNews(): Promise<News[]> {
    return Array.from(this.newsItems.values());
  }
  
  async getActiveNews(): Promise<News[]> {
    return Array.from(this.newsItems.values())
      .filter(n => n.active)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }
  
  async getNewsItem(id: number): Promise<News | undefined> {
    return this.newsItems.get(id);
  }
  
  async createNews(newsData: InsertNews): Promise<News> {
    const id = this.currentNewsId++;
    const newsItem: News = { 
      ...newsData, 
      id 
    };
    this.newsItems.set(id, newsItem);
    return newsItem;
  }
  
  async updateNews(id: number, newsData: Partial<InsertNews>): Promise<News | undefined> {
    const existingNews = this.newsItems.get(id);
    if (!existingNews) return undefined;
    
    const updatedNews: News = {
      ...existingNews,
      ...newsData
    };
    
    this.newsItems.set(id, updatedNews);
    return updatedNews;
  }
  
  async deleteNews(id: number): Promise<boolean> {
    return this.newsItems.delete(id);
  }
  
  // Events
  async getEvents(): Promise<Event[]> {
    return Array.from(this.eventsItems.values());
  }
  
  async getActiveEvents(): Promise<Event[]> {
    return Array.from(this.eventsItems.values())
      .filter(e => e.active)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }
  
  async getEvent(id: number): Promise<Event | undefined> {
    return this.eventsItems.get(id);
  }
  
  async createEvent(eventData: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = { 
      ...eventData, 
      id 
    };
    this.eventsItems.set(id, event);
    return event;
  }
  
  async updateEvent(id: number, eventData: Partial<InsertEvent>): Promise<Event | undefined> {
    const existingEvent = this.eventsItems.get(id);
    if (!existingEvent) return undefined;
    
    const updatedEvent: Event = {
      ...existingEvent,
      ...eventData
    };
    
    this.eventsItems.set(id, updatedEvent);
    return updatedEvent;
  }
  
  async deleteEvent(id: number): Promise<boolean> {
    return this.eventsItems.delete(id);
  }
  
  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonialsItems.values());
  }
  
  async getActiveTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonialsItems.values()).filter(t => t.active);
  }
  
  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonialsItems.get(id);
  }
  
  async createTestimonial(testimonialData: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { 
      ...testimonialData, 
      id 
    };
    this.testimonialsItems.set(id, testimonial);
    return testimonial;
  }
  
  async updateTestimonial(id: number, testimonialData: Partial<InsertTestimonial>): Promise<Testimonial | undefined> {
    const existingTestimonial = this.testimonialsItems.get(id);
    if (!existingTestimonial) return undefined;
    
    const updatedTestimonial: Testimonial = {
      ...existingTestimonial,
      ...testimonialData
    };
    
    this.testimonialsItems.set(id, updatedTestimonial);
    return updatedTestimonial;
  }
  
  async deleteTestimonial(id: number): Promise<boolean> {
    return this.testimonialsItems.delete(id);
  }
  
  // Gallery
  async getGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values());
  }
  
  async getActiveGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values()).filter(g => g.active);
  }
  
  async getGalleryItem(id: number): Promise<GalleryItem | undefined> {
    return this.galleryItems.get(id);
  }
  
  async createGalleryItem(galleryData: InsertGalleryItem): Promise<GalleryItem> {
    const id = this.currentGalleryId++;
    const galleryItem: GalleryItem = { 
      ...galleryData, 
      id 
    };
    this.galleryItems.set(id, galleryItem);
    return galleryItem;
  }
  
  async updateGalleryItem(id: number, galleryData: Partial<InsertGalleryItem>): Promise<GalleryItem | undefined> {
    const existingGalleryItem = this.galleryItems.get(id);
    if (!existingGalleryItem) return undefined;
    
    const updatedGalleryItem: GalleryItem = {
      ...existingGalleryItem,
      ...galleryData
    };
    
    this.galleryItems.set(id, updatedGalleryItem);
    return updatedGalleryItem;
  }
  
  async deleteGalleryItem(id: number): Promise<boolean> {
    return this.galleryItems.delete(id);
  }
  
  // Contact
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contactItems.values());
  }
  
  async getContact(id: number): Promise<Contact | undefined> {
    return this.contactItems.get(id);
  }
  
  async createContact(contactData: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...contactData, 
      id,
      read: false,
      createdAt: new Date() 
    };
    this.contactItems.set(id, contact);
    return contact;
  }
  
  async markContactAsRead(id: number): Promise<Contact | undefined> {
    const existingContact = this.contactItems.get(id);
    if (!existingContact) return undefined;
    
    const updatedContact: Contact = {
      ...existingContact,
      read: true
    };
    
    this.contactItems.set(id, updatedContact);
    return updatedContact;
  }
  
  async deleteContact(id: number): Promise<boolean> {
    return this.contactItems.delete(id);
  }
}

export const storage = new MemStorage();
