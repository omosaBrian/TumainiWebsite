import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { GalleryItem } from "@shared/schema";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

// Define categories for filtering
const categories = ["All", "Facilities", "Events", "Sports", "Academic", "Arts", "Students"];

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openImage, setOpenImage] = useState<GalleryItem | null>(null);
  
  const { data: galleryItems, isLoading, isError } = useQuery<GalleryItem[]>({
    queryKey: ['/api/gallery'],
  });

  // Filter gallery items based on selected category
  const filteredItems = galleryItems && (
    selectedCategory === "All" 
      ? galleryItems 
      : galleryItems.filter(item => item.category === selectedCategory)
  );

  const handleOpenImage = (item: GalleryItem) => {
    setOpenImage(item);
  };

  const handleCloseImage = () => {
    setOpenImage(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Category filters */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 min-w-max pb-4">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        // Loading state
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(12)].map((_, index) => (
            <div 
              key={index} 
              className="bg-gray-200 animate-pulse rounded-lg h-64"
            ></div>
          ))}
        </div>
      ) : isError ? (
        // Error state
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Failed to load gallery images. Please try again later.</p>
        </div>
      ) : (
        <>
          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems?.map((item) => (
              <div 
                key={item.id} 
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => handleOpenImage(item)}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredItems?.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No images found in this category.</p>
            </div>
          )}

          {/* Image dialog/modal */}
          <Dialog open={openImage !== null} onOpenChange={handleCloseImage}>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{openImage?.title}</DialogTitle>
                <DialogDescription>{openImage?.category}</DialogDescription>
              </DialogHeader>
              <div className="overflow-hidden rounded-lg">
                {openImage && (
                  <img 
                    src={openImage.imageUrl} 
                    alt={openImage.title} 
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default GalleryGrid;
