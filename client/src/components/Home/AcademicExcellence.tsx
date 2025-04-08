const stats = [
  { value: "95%", label: "University Admission Rate" },
  { value: "A-", label: "Average KCSE Grade" },
  { value: "12:1", label: "Student-Teacher Ratio" },
  { value: "15+", label: "Subjects Offered" }
];

const AcademicExcellence = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Excellence</h2>
          <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Our commitment to academic excellence has consistently placed us among 
            the top-performing schools in national examinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 rounded-lg p-6 text-center hover:bg-opacity-20 transition-all"
            >
              <div className="text-5xl font-bold text-[#FFD700] mb-2">{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellence;
