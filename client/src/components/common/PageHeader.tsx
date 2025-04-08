interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const PageHeader = ({ title, description, backgroundImage }: PageHeaderProps) => {
  return (
    <div className="relative">
      <img 
        src={backgroundImage} 
        alt={title} 
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center px-4">
        <div className="text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">{title}</h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
